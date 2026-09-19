export interface ExecutionSafetyInput {
  setupValid: boolean;
  marketAvailable: boolean;
  brokerConnected: boolean;
  executionReady: boolean;
  orderVerified: boolean;
  newsOk: boolean;
  duplicateSetup: boolean;
  expired: boolean;
  invalidated: boolean;
}

export interface ExecutionSafetyResult {
  allowed: boolean;
  reason: string;
  checks: Record<string, boolean>;
}

export function evaluateExecutionSafety(input: ExecutionSafetyInput): ExecutionSafetyResult {
  const checks = {
    setupValid: input.setupValid,
    marketAvailable: input.marketAvailable,
    brokerConnected: input.brokerConnected,
    executionReady: input.executionReady,
    orderVerified: input.orderVerified,
    news: input.newsOk,
    duplicate: !input.duplicateSetup,
    expired: !input.expired,
    invalidated: !input.invalidated,
  };

  const allowed = Object.values(checks).every(Boolean);

  return {
    allowed,
    reason: allowed ? 'safe to execute' : Object.entries(checks).find(([, value]) => !value)?.[0] ?? 'blocked',
    checks,
  };
}
