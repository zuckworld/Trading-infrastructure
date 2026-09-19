import { describe, expect, it } from 'vitest';
import { mkdtempSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { request } from 'node:http';
import { createDerivTransportClient } from '../src/brokers/deriv-client.js';
import { createMockDerivTransport } from '../src/brokers/mock-deriv-transport.js';
import { createTradeDatabase } from '../src/storage/trade-database.js';
import { createAlert, type Alert } from '../src/strategy/alerts.js';
import { createAlertRouter, createMemoryAlertChannel } from '../src/alerts/alert-router.js';
import { parseBacktestTradeCsv, parseCandleCsv, runBacktestFromCsv } from '../src/strategy/backtest-ingestion.js';
import { loadRuntimeConfig } from '../src/config/runtime.js';
import { createDashboardServer } from '../src/dashboard/server.js';
import { createStructuredLogger } from '../src/ops/logger.js';
import { collectRuntimeMetrics } from '../src/ops/runtime-health.js';
import { createTradingEngine, type TradingEngineConfig } from '../src/strategy/trading-engine.js';
import { createPersistentStateStore } from '../src/strategy/persistence.js';

it('runs a complete mock Deriv authorization, quote, order, and status lifecycle', async () => {
  const client = createDerivTransportClient({
    appId: '1001',
    token: 'mock-token',
    environment: 'demo',
    transport: createMockDerivTransport({ balance: 12500, quote: 1.105 }),
  });

  await expect(client.connect()).resolves.toMatchObject({ connected: true, accountId: 'MOCK-ACCOUNT' });
  await expect(client.getAccount()).resolves.toMatchObject({ balance: 12500, currency: 'USD' });
  await expect(client.getQuote('EURUSD')).resolves.toBe(1.105);

  const order = await client.placeOrder({ symbol: 'EURUSD', side: 'buy', volume: 1000, stopLoss: 1.1, takeProfit: 1.115 });
  expect(order.accepted).toBe(true);
  await expect(client.getOrderStatus(order.orderId)).resolves.toMatchObject({ status: 'filled', fillPrice: 1.105 });

  await client.disconnect();
});

describe('mock broker safety', () => {
  it('rejects requests after disconnect', async () => {
    const transport = createMockDerivTransport();
    await transport.connect();
    await transport.close();
    await expect(transport.request({ balance: 1 })).rejects.toThrow('disconnected');
  });
});

it('persists trades and events in a fresh JSONL database instance', () => {
  const directory = mkdtempSync(join(tmpdir(), 'trading-db-'));
  const path = join(directory, 'trades.jsonl');
  try {
    const first = createTradeDatabase(path);
    first.recordTrade({ id: 'trade-1', symbol: 'EURUSD', side: 'long', entry: 1.1, quantity: 1000, status: 'open', timestamp: 1 });
    first.recordEvent({ type: 'order-submitted', payload: { orderId: 'order-1' }, timestamp: 2 });

    const second = createTradeDatabase(path);
    expect(second.listTrades()).toHaveLength(1);
    expect(second.listTrades()[0].id).toBe('trade-1');
    expect(second.listEvents()[0].type).toBe('order-submitted');
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

it('routes alerts across successful and failed channels without losing delivery results', async () => {
  const memory = createMemoryAlertChannel();
  const failed = { name: 'failed', send: async (_alert: Alert) => { throw new Error('offline'); } };
  const result = await createAlertRouter([memory, failed]).publish(createAlert({ type: 'risk-blocked', severity: 'warning', message: 'blocked' }));

  expect(result.delivered).toContain('memory');
  expect(result.failed[0]).toMatchObject({ channel: 'failed', reason: 'offline' });
  expect(memory.alerts).toHaveLength(1);
});

it('ingests candle and trade CSV data and runs a backtest from CSV', () => {
  const candles = parseCandleCsv('timestamp,high,low,close\n1,1.11,1.09,1.10');
  const trades = parseBacktestTradeCsv('entry,stop,takeProfit,side,outcome\n1.10,1.09,1.12,long,win');
  const report = runBacktestFromCsv('entry,stop,takeProfit,side,outcome\n1.10,1.09,1.12,long,win', { initialBalance: 10000, riskPercent: 0.25 });

  expect(candles[0].close).toBe(1.1);
  expect(trades[0].side).toBe('long');
  expect(report.totalTrades).toBe(1);
  expect(report.winningTrades).toBe(1);
});

it('validates runtime configuration before production startup', () => {
  expect(() => loadRuntimeConfig({ TRADING_ENV: 'production', PAPER_TRADING: 'false' })).toThrow('DERIV_TOKEN');
  expect(loadRuntimeConfig({ TRADING_ENV: 'demo', PAPER_TRADING: 'true' })).toMatchObject({ environment: 'demo', paperTrading: true });
});

it('serves the dashboard page, snapshot endpoint, and health endpoint', async () => {
  const dashboard = createDashboardServer({ port: 0 });
  const { port } = await dashboard.start();
  const get = (path: string) => new Promise<{ statusCode?: number; body: string }>((resolve, reject) => {
    request({ host: '127.0.0.1', port, path }, (response) => {
      let body = '';
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => resolve({ statusCode: response.statusCode, body }));
    }).on('error', reject).end();
  });

  try {
    await expect(get('/')).resolves.toMatchObject({ statusCode: 200 });
    await expect(get('/api/snapshot')).resolves.toMatchObject({ statusCode: 200 });
    await expect(get('/api/health')).resolves.toMatchObject({ statusCode: 200 });
  } finally {
    await dashboard.stop();
  }
});

it('emits structured logs and collects runtime metrics', () => {
  const lines: string[] = [];
  createStructuredLogger('info', (line) => lines.push(line)).info('startup', { mode: 'paper' });
  const log = JSON.parse(lines[0]) as Record<string, unknown>;
  const metrics = collectRuntimeMetrics();

  expect(log).toMatchObject({ level: 'info', message: 'startup', mode: 'paper' });
  expect(metrics.cpuCount).toBeGreaterThan(0);
  expect(metrics.rssBytes).toBeGreaterThan(0);
});

it('runs the complete qualification, risk, execution, persistence, and monitoring flow', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'trading-engine-'));
  const statePath = join(directory, 'state.json');
  const transport = createMockDerivTransport({ balance: 10000, quote: 1.1 });
  const client = createDerivTransportClient({ appId: '1001', token: 'mock-token', environment: 'demo', transport });
  await client.connect();
  const config: TradingEngineConfig = {
    riskPercent: 0.25,
    riskLimitPercent: 0.25,
    mode: 'DAY',
    dayMaxTrades: 4,
    dayMaxDrawdown: 2,
    swingMaxDrawdown: 3,
    positionMaxDrawdown: 4,
    tickSize: 0.0001,
    tickValue: 1,
    contractSize: 100000,
    propFirmOk: true,
    newsOk: true,
    brokerOk: true,
    maxDrawdownPercent: 2,
    trailingEnabled: true,
    activationR: 1,
    protectedR: 1.2,
  };

  try {
    const engine = createTradingEngine(client, config, { stateStore: createPersistentStateStore(statePath) });
    const result = await engine.evaluateAndExecute({
      symbol: 'EURUSD', side: 'buy', entry: 1.1, stopLoss: 1.095, takeProfit: 1.11,
      h4Valid: true, h4Breakout: true, h4FibZone: true, h4Retracement: true,
      m5Valid: true, m5Breakout: true, m5FibZone: true, m5Retracement: true,
      supplyDemand: true, ichimoku: true, rsi: 10, m5Confirmation: true,
      setupValid: true, marketAvailable: true, currentDrawdownPercent: 0,
      dayTradeCount: 0, duplicateSetup: false, accountEquity: 10000,
    });
    expect(result.allowed).toBe(true);
    expect(result.stage).toBe('executed');
    expect(result.position?.side).toBe('long');

    const monitored = engine.monitorPosition(result.position!, 1.106, 10000, 10000, 0.0002);
    expect(monitored.trailingActivated).toBe(true);
    expect(engine.restoreState()?.openPositions).toHaveLength(1);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
