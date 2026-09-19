export type BrokerRequest = Record<string, unknown>;

export interface BrokerTransport {
  connect: () => Promise<void>;
  close: () => Promise<void>;
  request: (request: BrokerRequest) => Promise<Record<string, unknown>>;
}

export interface WebSocketLike {
  send: (payload: string) => void;
  close: () => void;
  addEventListener: (event: 'open' | 'message' | 'error' | 'close', listener: (value: unknown) => void) => void;
}

export type WebSocketFactory = (url: string) => WebSocketLike;

export function createWebSocketTransport(url: string, createSocket: WebSocketFactory): BrokerTransport {
  let socket: WebSocketLike | undefined;
  let sequence = 0;
  const pending = new Map<number, { resolve: (value: Record<string, unknown>) => void; reject: (error: Error) => void }>();

  const connect = () => new Promise<void>((resolve, reject) => {
    socket = createSocket(url);
    socket.addEventListener('open', () => resolve());
    socket.addEventListener('error', () => reject(new Error('broker websocket error')));
    socket.addEventListener('close', () => {
      for (const request of pending.values()) {
        request.reject(new Error('broker websocket closed'));
      }
      pending.clear();
      socket = undefined;
    });
    socket.addEventListener('message', (event) => {
      const payload = typeof event === 'string' ? event : (event as { data?: string }).data;
      if (!payload) return;
      const response = JSON.parse(payload) as Record<string, unknown>;
      const requestId = response.req_id;
      if (typeof requestId !== 'number') return;
      const request = pending.get(requestId);
      if (!request) return;
      pending.delete(requestId);
      if (response.error) {
        request.reject(new Error(String((response.error as Record<string, unknown>).message ?? 'broker request failed')));
      } else {
        request.resolve(response);
      }
    });
  });

  return {
    connect,
    close: async () => {
      socket?.close();
      socket = undefined;
    },
    request: (request) => new Promise((resolve, reject) => {
      if (!socket) {
        reject(new Error('broker transport is not connected'));
        return;
      }
      const reqId = ++sequence;
      pending.set(reqId, { resolve, reject });
      socket.send(JSON.stringify({ ...request, req_id: reqId }));
    }),
  };
}
