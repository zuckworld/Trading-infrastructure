export type Timeframe = 'MN1' | 'W1' | 'D1' | 'H4' | 'H1' | 'M30' | 'M15' | 'M5';
export type Direction = 'bullish' | 'bearish' | 'neutral';
export type TradingMode = 'DAY' | 'SWING' | 'POSITION';

export interface SetupCheckResult {
  allowed: boolean;
  reason: string;
  checks: Record<string, boolean>;
}

export interface Candle {
  close: number;
  high?: number;
  low?: number;
  timestamp?: number;
}

export interface FibonacciLevels {
  0: number;
  23_6: number;
  38_2: number;
  50: number;
  61_8: number;
  78_6: number;
  100: number;
  161_8: number;
}

export interface TradeEvaluationInput {
  h4Trend: Direction;
  h4Breakout: boolean;
  h4FibRetest: boolean;
  h4FibZone: boolean;
  m5Trend: Direction;
  m5Breakout: boolean;
  m5FibRetest: boolean;
  m5FibZone: boolean;
  supplyDemand: boolean;
  ichimoku: boolean;
  rsi: number;
  m5Confirmation: boolean;
  riskOk: boolean;
  newsOk: boolean;
  propFirmOk: boolean;
  brokerOk: boolean;
  spreadOk: boolean;
  drawdownOk: boolean;
  maxDayTradesOk: boolean;
  duplicateSetup: boolean;
  setupValid: boolean;
  marketAvailable: boolean;
  accountEquity: number;
  riskPercent: number;
  entry: number;
  stop: number;
  tickSize: number;
  tickValue: number;
  contractSize: number;
}
