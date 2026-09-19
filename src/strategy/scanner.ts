export type SetupState =
  | 'SCANNING'
  | 'QUALIFIED'
  | 'WAITING_FOR_BREAKOUT'
  | 'BREAKOUT_CONFIRMED'
  | 'WAITING_FOR_RETRACEMENT'
  | 'RETRACEMENT_REACHED'
  | 'WAITING_FOR_M5'
  | 'READY'
  | 'EXECUTING'
  | 'OPEN'
  | 'MANAGED'
  | 'CLOSED'
  | 'INVALIDATED'
  | 'EXPIRED'
  | 'BLOCKED';

export interface MarketScanInput {
  instrument: string;
  marketType: string;
  h4Ready: boolean;
  m5Ready: boolean;
  riskOk: boolean;
  newsOk: boolean;
  brokerOk: boolean;
  duplicateSetup: boolean;
}

export interface SetupRecord {
  setupId: string;
  instrument: string;
  direction: 'LONG' | 'SHORT';
  state: SetupState;
  timestamp: number;
}

export function scanMarket(input: MarketScanInput) {
  const status = input.h4Ready && input.m5Ready && input.riskOk && input.newsOk && input.brokerOk && !input.duplicateSetup
    ? 'ready'
    : input.duplicateSetup
      ? 'BLOCKED'
      : 'WAITING';

  return {
    instrument: input.instrument,
    marketType: input.marketType,
    status,
    h4Ready: input.h4Ready,
    m5Ready: input.m5Ready,
    riskOk: input.riskOk,
    newsOk: input.newsOk,
    brokerOk: input.brokerOk,
  };
}

const activeSetups = new Map<string, SetupRecord>();

export function createSetupState(instrument: string, direction: 'LONG' | 'SHORT'): SetupRecord {
  return {
    setupId: `${instrument}-${direction}-${Date.now()}`,
    instrument,
    direction,
    state: 'SCANNING',
    timestamp: Date.now(),
  };
}

export function registerSetup(setup: SetupRecord, instrument: string, direction: 'LONG' | 'SHORT'): boolean {
  const key = `${instrument}:${direction}`;
  const existing = activeSetups.get(key);

  if (existing) {
    return false;
  }

  const clone = { ...setup, setupId: `${key}-${Date.now()}`, instrument, direction };
  activeSetups.set(key, clone);
  return true;
}

export function getActiveSetup(instrument: string, direction: 'LONG' | 'SHORT'): SetupRecord | undefined {
  return activeSetups.get(`${instrument}:${direction}`);
}
