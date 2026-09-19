export interface PaperTradeEntry {
  symbol: string;
  side: 'long' | 'short';
  entry: number;
  size: number;
  pnl: number;
}

export interface PaperTradeLedgerInput {
  initialBalance: number;
  mode: 'paper' | 'demo';
  trades: PaperTradeEntry[];
}

export interface PaperTradeLedger {
  mode: 'paper' | 'demo';
  initialBalance: number;
  totalTrades: number;
  netPnl: number;
  equity: number;
  trades: PaperTradeEntry[];
}

export function createPaperTradeLedger(input: PaperTradeLedgerInput): PaperTradeLedger {
  const netPnl = input.trades.reduce((sum, trade) => sum + trade.pnl, 0);
  const equity = input.initialBalance + netPnl;

  return {
    mode: input.mode,
    initialBalance: input.initialBalance,
    totalTrades: input.trades.length,
    netPnl,
    equity,
    trades: input.trades,
  };
}
