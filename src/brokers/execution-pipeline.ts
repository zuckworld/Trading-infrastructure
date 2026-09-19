import type { BrokerAdapter } from './broker-adapter.js';
import { validateLiveExecution } from '../strategy/live-execution.js';

export interface OrderRequest {
  symbol: string;
  side: 'buy' | 'sell';
  volume: number;
  entry: number;
  stopLoss: number;
  takeProfit: number;
  type: 'market' | 'limit';
}

export interface SubmitOrderResult {
  accepted: boolean;
  orderId: string;
  status: string;
  message: string;
}

export interface VerifyOrderInput {
  orderId: string;
  symbol: string;
  positionId: string;
  fillPrice: number;
  quantity: number;
  stopLoss: number;
  takeProfit: number;
  brokerStatus: string;
  protectiveOrdersVerified: boolean;
  riskStateConsistent: boolean;
  duplicateOrder: boolean;
}

export interface ExecutionPipeline {
  submitOrder: (request: OrderRequest) => SubmitOrderResult;
  verifyOrder: (input: VerifyOrderInput) => { allowed: boolean; reason: string; checks: Record<string, boolean> };
}

export function createExecutionPipeline(broker: BrokerAdapter): ExecutionPipeline {
  return {
    submitOrder: (request) => {
      const orderId = `order-${broker.name}-${request.symbol}-${Date.now()}`;

      return {
        accepted: Boolean(request.symbol && request.volume > 0 && request.entry > 0),
        orderId,
        status: 'submitted',
        message: 'order submitted',
      };
    },
    verifyOrder: (input) => validateLiveExecution({
      orderSubmitted: true,
      orderId: input.orderId,
      positionId: input.positionId,
      fillPrice: input.fillPrice,
      quantity: input.quantity,
      stopLoss: input.stopLoss,
      takeProfit: input.takeProfit,
      brokerStatus: input.brokerStatus,
      protectiveOrdersVerified: input.protectiveOrdersVerified,
      riskStateConsistent: input.riskStateConsistent,
      duplicateOrder: input.duplicateOrder,
      partialFill: false,
    }),
  };
}
