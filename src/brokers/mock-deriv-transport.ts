import type { BrokerRequest, BrokerTransport } from './transport.js';

export interface MockDerivTransportOptions {
  balance?: number;
  quote?: number;
}

export function createMockDerivTransport(options: MockDerivTransportOptions = {}): BrokerTransport {
  let connected = false;
  let orderSequence = 0;
  const orders = new Map<string, Record<string, unknown>>();
  const balance = options.balance ?? 10000;
  const quote = options.quote ?? 1.1;

  return {
    connect: async () => {
      connected = true;
    },
    close: async () => {
      connected = false;
    },
    request: async (request: BrokerRequest) => {
      if (!connected) throw new Error('mock broker is disconnected');
      if (request.authorize) return { authorize: { loginid: 'MOCK-ACCOUNT', balance, currency: 'USD' } };
      if (request.balance) return { balance: { balance, currency: 'USD' } };
      if (request.ticks) return { tick: { symbol: request.ticks, quote } };
      if (request.buy) {
        const orderId = `mock-order-${++orderSequence}`;
        const order = { order_id: orderId, status: 'filled', symbol: request.symbol, price: quote, quantity: request.amount };
        orders.set(orderId, order);
        return { buy: order };
      }
      if (request.open_contract) {
        const order = orders.get(String(request.contract_id));
        return { proposal_open_contract: order ?? { order_id: request.contract_id, status: 'unknown' } };
      }
      return { error: { message: 'unsupported mock request' } };
    },
  };
}
