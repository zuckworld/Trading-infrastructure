import type { Alert } from './alerts.js';

export interface SystemHealthInput {
  brokerConnected: boolean;
  marketDataFresh: boolean;
  riskEngineOnline: boolean;
  executionReady: boolean;
  diskPercentUsed: number;
  memoryPercentUsed: number;
  latencyMs: number;
  tradingBlocked: boolean;
  accountVerified: boolean;
}

export interface SystemHealthResult {
  allowed: boolean;
  status: 'healthy' | 'warning' | 'critical';
  checks: Record<string, boolean>;
  reason: string;
}

export interface MonitoringSnapshotInput {
  health: SystemHealthResult;
  status: 'trading' | 'blocked' | 'maintenance';
  alerts: Alert[];
}

export interface MonitoringSnapshot extends MonitoringSnapshotInput {
  summary: string;
}

export function evaluateSystemHealth(input: SystemHealthInput): SystemHealthResult {
  const checks = {
    brokerConnected: input.brokerConnected,
    marketDataFresh: input.marketDataFresh,
    riskEngineOnline: input.riskEngineOnline,
    executionReady: input.executionReady,
    diskHealth: input.diskPercentUsed < 85,
    memoryHealth: input.memoryPercentUsed < 85,
    latencyHealth: input.latencyMs < 500,
    tradingBlocked: !input.tradingBlocked,
    accountVerified: input.accountVerified,
  };

  const allowed = Object.values(checks).every(Boolean);

  const status: 'healthy' | 'warning' | 'critical' = allowed
    ? 'healthy'
    : Object.values(checks).filter((value) => value === false).length <= 2
      ? 'warning'
      : 'critical';

  return {
    allowed,
    status,
    checks,
    reason: allowed ? 'system healthy' : Object.entries(checks).find(([, value]) => !value)?.[0] ?? 'system unhealthy',
  };
}

export function createMonitoringSnapshot(input: MonitoringSnapshotInput): MonitoringSnapshot {
  return {
    health: input.health,
    status: input.status,
    alerts: input.alerts,
    summary: `${input.status} | ${input.health.status}`,
  };
}
