import { appendFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname } from 'node:path';

export interface TradeRecord {
  id: string;
  symbol: string;
  side: 'long' | 'short';
  entry: number;
  exit?: number;
  quantity: number;
  pnl?: number;
  status: 'open' | 'closed';
  timestamp: number;
}

export interface TradeEvent {
  type: string;
  payload: Record<string, unknown>;
  timestamp: number;
}

export interface TradeDatabase {
  recordTrade: (trade: TradeRecord) => void;
  recordEvent: (event: TradeEvent) => void;
  listTrades: () => TradeRecord[];
  listEvents: () => TradeEvent[];
}

type DatabaseRow = { kind: 'trade'; value: TradeRecord } | { kind: 'event'; value: TradeEvent };

export function createTradeDatabase(filePath: string): TradeDatabase {
  const append = (row: DatabaseRow) => {
    mkdirSync(dirname(filePath), { recursive: true });
    appendFileSync(filePath, `${JSON.stringify(row)}\n`, 'utf8');
  };

  const readRows = (): DatabaseRow[] => {
    if (!existsSync(filePath)) return [];
    return readFileSync(filePath, 'utf8').split('\n').filter(Boolean).map((line) => {
      const row = JSON.parse(line) as DatabaseRow;
      if (row.kind !== 'trade' && row.kind !== 'event') throw new Error('invalid trade database row');
      return row;
    });
  };

  return {
    recordTrade: (trade) => append({ kind: 'trade', value: trade }),
    recordEvent: (event) => append({ kind: 'event', value: event }),
    listTrades: () => readRows().filter((row): row is { kind: 'trade'; value: TradeRecord } => row.kind === 'trade').map((row) => row.value),
    listEvents: () => readRows().filter((row): row is { kind: 'event'; value: TradeEvent } => row.kind === 'event').map((row) => row.value),
  };
}
