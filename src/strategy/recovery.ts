export interface BrokerStateReconciliationInput {
  localOpenPositions: number;
  brokerOpenPositions: number;
  localOrderCount: number;
  brokerOrderCount: number;
  slMatches: boolean;
  tpMatches: boolean;
  tradeIdsMatch: boolean;
  trailingStateMatches: boolean;
}

export interface BrokerStateReconciliationResult {
  allowed: boolean;
  mode: 'normal' | 'reconciliation';
  checks: Record<string, boolean>;
  reason: string;
}

export interface RecoveryPlanInput {
  brokerConnected: boolean;
  positionsRecovered: boolean;
  ordersRecovered: boolean;
  riskValidated: boolean;
  protectionVerified: boolean;
}

export interface RecoveryPlanResult {
  allowed: boolean;
  checks: Record<string, boolean>;
  steps: string[];
}

export function reconcileBrokerState(input: BrokerStateReconciliationInput): BrokerStateReconciliationResult {
  const checks = {
    openPositions: input.localOpenPositions === input.brokerOpenPositions,
    pendingOrders: input.localOrderCount === input.brokerOrderCount,
    stopLoss: input.slMatches,
    takeProfit: input.tpMatches,
    tradeIds: input.tradeIdsMatch,
    trailingState: input.trailingStateMatches,
  };

  const allowed = Object.values(checks).every(Boolean);

  return {
    allowed,
    mode: allowed ? 'normal' : 'reconciliation',
    checks,
    reason: allowed ? 'state reconciled' : Object.entries(checks).find(([, value]) => !value)?.[0] ?? 'state mismatch',
  };
}

export function createRecoveryPlan(input: RecoveryPlanInput): RecoveryPlanResult {
  const checks = {
    brokerConnected: input.brokerConnected,
    positionsRecovered: input.positionsRecovered,
    ordersRecovered: input.ordersRecovered,
    riskValidated: input.riskValidated,
    protectionVerified: input.protectionVerified,
  };

  const allowed = Object.values(checks).every(Boolean);

  return {
    allowed,
    checks,
    steps: [
      'connect to broker',
      'retrieve actual account state',
      'retrieve actual open positions',
      'retrieve actual SL/TP',
      'reconstruct trade-management state',
      'reconstruct trailing-profit state where possible',
      'verify protection',
      'resume position management',
    ],
  };
}
