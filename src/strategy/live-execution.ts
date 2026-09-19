export interface LiveExecutionInput {
  orderSubmitted: boolean;
  orderId: string;
  positionId: string;
  fillPrice: number;
  quantity: number;
  stopLoss: number;
  takeProfit: number;
  brokerStatus: string;
  protectiveOrdersVerified: boolean;
  riskStateConsistent: boolean;
  duplicateOrder: boolean;
  partialFill: boolean;
}

export interface LiveExecutionResult {
  allowed: boolean;
  reason: string;
  checks: Record<string, boolean>;
}

export function validateLiveExecution(input: LiveExecutionInput): LiveExecutionResult {
  const checks = {
    orderSubmitted: input.orderSubmitted,
    orderId: Boolean(input.orderId && input.orderId.trim().length > 0),
    positionId: Boolean(input.positionId && input.positionId.trim().length > 0),
    fillPrice: input.fillPrice > 0,
    quantity: input.quantity > 0,
    stopLoss: input.stopLoss > 0,
    takeProfit: input.takeProfit > 0,
    brokerStatus: input.brokerStatus === 'filled' || input.brokerStatus === 'partially_filled',
    protectiveOrdersVerified: input.protectiveOrdersVerified,
    riskStateConsistent: input.riskStateConsistent,
    duplicateOrder: !input.duplicateOrder,
    partialFill: !input.partialFill,
  };

  const allowed = Object.values(checks).every(Boolean);

  return {
    allowed,
    reason: allowed ? 'live execution verified' : Object.entries(checks).find(([, value]) => !value)?.[0] ?? 'execution blocked',
    checks,
  };
}
