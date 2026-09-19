export interface DerivApiClientConfig {
  appId: string;
  token: string;
  environment: 'demo' | 'production';
}

export interface DerivSession {
  connected: boolean;
  broker: 'deriv';
  environment: 'demo' | 'production';
}

export interface DerivConnectionState {
  connected: boolean;
  environment: 'demo' | 'production';
}

export interface DerivAccountState {
  accountVerified: boolean;
  status: 'active' | 'inactive';
  balance: number;
}

export interface DerivOrderRequest {
  symbol: string;
  side: 'buy' | 'sell';
  volume: number;
  stopLoss?: number;
  takeProfit?: number;
}

export interface DerivOrderResult {
  accepted: boolean;
  orderId: string;
  status: 'submitted';
}

export interface DerivOrderStatus {
  orderId: string;
  status: 'submitted' | 'unknown';
}

export interface DerivApiClient {
  connect: () => DerivSession;
  disconnect: () => void;
  reconnect: () => DerivSession;
  getConnectionState: () => DerivConnectionState;
  getAccountState: () => DerivAccountState;
  placeOrder: (request: DerivOrderRequest) => DerivOrderResult;
  getOrderStatus: (orderId: string) => DerivOrderStatus;
}

export function createDerivApiClient(config: DerivApiClientConfig): DerivApiClient {
  let connected = false;
  let orderSequence = 0;
  const orders = new Set<string>();

  const connect = (): DerivSession => {
    connected = Boolean(config.appId && config.token);

    return {
      connected,
      broker: 'deriv',
      environment: config.environment,
    };
  };

  return {
    connect,
    disconnect: () => {
      connected = false;
    },
    reconnect: connect,
    getConnectionState: () => ({
      connected,
      environment: config.environment,
    }),
    getAccountState: () => ({
      accountVerified: connected && Boolean(config.appId && config.token),
      status: connected ? 'active' : 'inactive',
      balance: connected ? 10000 : 0,
    }),
    placeOrder: (request) => {
      const accepted = connected && Boolean(request.symbol && request.volume > 0);
      const orderId = `order-${config.environment}-${++orderSequence}`;

      if (accepted) {
        orders.add(orderId);
      }

      return {
        accepted,
        orderId,
        status: 'submitted',
      };
    },
    getOrderStatus: (orderId) => ({
      orderId,
      status: connected && orders.has(orderId) ? 'submitted' : 'unknown',
    }),
  };
}
