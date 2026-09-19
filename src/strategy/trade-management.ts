export interface TrailingProfitInput {
  entry: number;
  currentPrice: number;
  stopLoss: number;
  activationR: number;
  protectedR: number;
  enabled: boolean;
  trailingMethod: 'fixed' | 'structure' | 'atr';
}

export interface TrailingProfitResult {
  trailingActivated: boolean;
  breakEvenActivated: boolean;
  newStopLoss: number;
  reason: string;
}

export function evaluateTrailingProfit(input: TrailingProfitInput): TrailingProfitResult {
  const profitMove = input.currentPrice - input.entry;
  const rValue = profitMove / Math.abs(input.entry - input.stopLoss);

  const trailingActivated = input.enabled && rValue >= input.activationR;
  const breakEvenActivated = input.enabled && rValue >= input.protectedR;

  const newStopLoss = breakEvenActivated
    ? Math.max(input.stopLoss, input.entry + (input.currentPrice - input.entry) * 0.2)
    : input.stopLoss;

  return {
    trailingActivated,
    breakEvenActivated,
    newStopLoss,
    reason: trailingActivated ? 'profit protection active' : 'profit protection inactive',
  };
}
