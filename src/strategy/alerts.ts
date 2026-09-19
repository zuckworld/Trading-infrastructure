export type AlertSeverity = 'info' | 'warning' | 'critical';
export type DashboardMode = 'DAY' | 'SWING' | 'POSITION';

export interface AlertInput {
  type: string;
  severity: AlertSeverity;
  message: string;
  symbol?: string;
  market?: string;
  timestamp?: number;
}

export interface Alert extends AlertInput {
  symbol: string;
  market: string;
  timestamp: number;
}

export interface DashboardSnapshotInput {
  balance: number;
  equity: number;
  floatingPnL: number;
  dailyPnL: number;
  currentDrawdown: number;
  mode: DashboardMode;
  openPositions: number;
  scannerStatus: string;
  activeSetups: number;
  h4Status: string;
  m5Status: string;
  alerts: Alert[];
}

export interface DashboardSnapshot extends DashboardSnapshotInput {
  summary: string;
}

export function createAlert(input: AlertInput): Alert {
  return {
    type: input.type,
    severity: input.severity,
    message: input.message,
    symbol: input.symbol ?? '',
    market: input.market ?? 'unknown',
    timestamp: input.timestamp ?? Date.now(),
  };
}

export function createDashboardSnapshot(input: DashboardSnapshotInput): DashboardSnapshot {
  const summary = [
    input.scannerStatus,
    input.h4Status,
    input.m5Status,
  ].filter(Boolean).join(' | ');

  return {
    balance: input.balance,
    equity: input.equity,
    floatingPnL: input.floatingPnL,
    dailyPnL: input.dailyPnL,
    currentDrawdown: input.currentDrawdown,
    mode: input.mode,
    openPositions: input.openPositions,
    scannerStatus: input.scannerStatus,
    activeSetups: input.activeSetups,
    h4Status: input.h4Status,
    m5Status: input.m5Status,
    alerts: input.alerts,
    summary,
  };
}
