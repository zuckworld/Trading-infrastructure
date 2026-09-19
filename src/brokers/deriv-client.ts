import type { DerivOrderRequest } from './deriv-api.js';
import type { BrokerTransport } from './transport.js';

export interface DerivTransportClientConfig {
  appId: string;
  token: string;
  environment: 'demo' | 'production';
  transport: BrokerTransport;
}

export interface DerivTransportClient {
  connect: () => Promise<{ connected: boolean; accountId: string }>;
  disconnect: () => Promise<void>;
  getAccount: () => Promise<{ accountId: string; balance: number; currency: string }>;
  getQuote: (symbol: string) => Promise<number>;
  placeOrder: (request: DerivOrderRequest) => Promise<{ accepted: boolean; orderId: string; status: string; fillPrice?: number }>;
  getOrderStatus: (orderId: string) => Promise<{ orderId: string; status: string; fillPrice?: number }>;
}

export function createDerivTransportClient(config: DerivTransportClientConfig): DerivTransportClient {
  let accountId = '';

  return {
    connect: async () => {
      if (!config.appId || !config.token) throw new Error('Deriv app ID and token are required');
      await config.transport.connect();
      const response = await config.transport.request({ authorize: config.token });
      const authorize = response.authorize as Record<string, unknown> | undefined;
      accountId = String(authorize?.loginid ?? '');
      if (!accountId) throw new Error('Deriv authorization did not return an account');
      return { connected: true, accountId };
    },
    disconnect: () => config.transport.close(),
    getAccount: async () => {
      const response = await config.transport.request({ balance: 1 });
      const balance = response.balance as Record<string, unknown>;
      return { accountId, balance: Number(balance.balance), currency: String(balance.currency) };
    },
    getQuote: async (symbol) => {
      const response = await config.transport.request({ ticks: symbol });
      const tick = response.tick as Record<string, unknown>;
      return Number(tick.quote);
    },
    placeOrder: async (request) => {
      const response = await config.transport.request({
        buy: 1,
        symbol: request.symbol,
        amount: request.volume,
        direction: request.side === 'buy' ? 'CALL' : 'PUT',
        stop_loss: request.stopLoss,
        take_profit: request.takeProfit,
      });
      const order = response.buy as Record<string, unknown>;
      return { accepted: Boolean(order.order_id), orderId: String(order.order_id ?? ''), status: String(order.status ?? 'unknown'), fillPrice: Number(order.price) };
    },
    getOrderStatus: async (orderId) => {
      const response = await config.transport.request({ open_contract: 1, contract_id: orderId });
      const order = response.proposal_open_contract as Record<string, unknown>;
      return { orderId, status: String(order.status ?? 'unknown'), fillPrice: order.price === undefined ? undefined : Number(order.price) };
    },
  };
}
