export interface ExecutionIntegrityInput {
  duplicateOrder: boolean;
  partialFill: boolean;
  executionLatencyMs: number;
  maxExecutionLatencyMs: number;
  orderIdVerified: boolean;
  positionVerified: boolean;
  stopVerified: boolean;
  takeProfitVerified: boolean;
  riskStateConsistent: boolean;
}

export interface ExecutionIntegrityResult {
  allowed: boolean;
  reason: string;
  checks: Record<string, boolean>;
}

export function validateExecutionIntegrity(input: ExecutionIntegrityInput): ExecutionIntegrityResult {
  const checks = {
    duplicateProtection: !input.duplicateOrder,
    partialFillProtection: !input.partialFill,
    latency: input.executionLatencyMs <= input.maxExecutionLatencyMs,
    orderIdVerified: input.orderIdVerified,
    positionVerified: input.positionVerified,
    stopVerified: input.stopVerified,
    takeProfitVerified: input.takeProfitVerified,
    riskStateConsistent: input.riskStateConsistent,
  };

  const allowed = Object.values(checks).every(Boolean);

  return {
    allowed,
    reason: allowed ? 'execution safe' : Object.entries(checks).find(([, value]) => !value)?.[0] ?? 'execution blocked',
    checks,
  };
}
