import type { Candle } from '../config/types.js';
import { runBacktest, type BacktestInput, type BacktestReport, type BacktestTrade } from './backtesting.js';

export function parseCandleCsv(csv: string): Candle[] {
  const rows = csv.trim().split(/\r?\n/).filter(Boolean);
  if (rows.length < 2) return [];
  const headers = rows[0].split(',').map((header) => header.trim().toLowerCase());
  return rows.slice(1).map((row) => {
    const values = row.split(',').map((value) => value.trim());
    const record = Object.fromEntries(headers.map((header, index) => [header, values[index]]));
    const close = Number(record.close);
    const high = Number(record.high);
    const low = Number(record.low);
    if (![close, high, low].every(Number.isFinite)) throw new Error('invalid candle CSV row');
    return { timestamp: record.timestamp ? Number(record.timestamp) : undefined, close, high, low };
  });
}

export function parseBacktestTradeCsv(csv: string): BacktestTrade[] {
  const rows = csv.trim().split(/\r?\n/).filter(Boolean);
  if (rows.length < 2) return [];
  const headers = rows[0].split(',').map((header) => header.trim().toLowerCase());
  return rows.slice(1).map((row) => {
    const values = row.split(',').map((value) => value.trim());
    const record = Object.fromEntries(headers.map((header, index) => [header, values[index]]));
    if (record.side !== 'long' && record.side !== 'short') throw new Error('invalid backtest side');
    if (record.outcome !== 'win' && record.outcome !== 'loss') throw new Error('invalid backtest outcome');
    const entry = Number(record.entry);
    const stop = Number(record.stop);
    const takeProfit = Number(record.takeprofit ?? record.take_profit);
    if (![entry, stop, takeProfit].every(Number.isFinite)) throw new Error('invalid backtest trade CSV row');
    return { entry, stop, takeProfit, side: record.side, outcome: record.outcome };
  });
}

export function runBacktestFromCsv(csv: string, input: Omit<BacktestInput, 'trades'>): BacktestReport {
  return runBacktest({ ...input, trades: parseBacktestTradeCsv(csv) });
}
