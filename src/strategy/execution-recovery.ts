export interface ExecutionRecoveryInput {
  brokerConnected: boolean;
  orderSubmitted: boolean;
  orderStatus: 'pending' | 'filled' | 'rejected' | 'unknown';
  partialFill: boolean;
  protectiveOrdersVerified: boolean;
  duplicateOrder: boolean;
  latencyExceeded: boolean;
}

export interface ExecutionRecoveryResult {
  allowedToContinue: boolean;
  action: 'none' | 'halt' | 'cancel-order' | 'close-position' | 'reconcile';
  reason: string;
  steps: string[];
}

export function createExecutionRecoveryPlan(input: ExecutionRecoveryInput): ExecutionRecoveryResult {
  if (!input.brokerConnected) {
    return {
      allowedToContinue: false,
      action: 'halt',
      reason: 'broker disconnected',
      steps: ['halt new execution', 'reconnect to broker', 'reconcile account and orders before resuming'],
    };
  }

  if (input.duplicateOrder) {
    return {
      allowedToContinue: false,
      action: input.orderStatus === 'filled' ? 'close-position' : 'cancel-order',
      reason: 'duplicate order detected',
      steps: ['block duplicate submission', 'cancel or close the duplicate exposure', 'reconcile local and broker state'],
    };
  }

  if (input.orderStatus === 'filled' && !input.protectiveOrdersVerified) {
    return {
      allowedToContinue: false,
      action: 'close-position',
      reason: 'filled position lacks verified protection',
      steps: ['freeze new trades', 'close unprotected position', 'record emergency execution alert'],
    };
  }

  if (input.partialFill || input.latencyExceeded || input.orderStatus === 'pending') {
    return {
      allowedToContinue: false,
      action: 'reconcile',
      reason: input.partialFill ? 'partial fill requires reconciliation' : 'order state requires reconciliation',
      steps: ['freeze additional quantity', 'poll broker until fill state is final', 'reconcile quantity and protective orders'],
    };
  }

  if (!input.orderSubmitted || input.orderStatus === 'rejected' || input.orderStatus === 'unknown') {
    return {
      allowedToContinue: false,
      action: 'cancel-order',
      reason: 'order was not safely accepted',
      steps: ['cancel any residual order', 'verify no position was created', 'return setup to blocked state'],
    };
  }

  return {
    allowedToContinue: true,
    action: 'none',
    reason: 'execution state safe',
    steps: ['continue position management'],
  };
}
