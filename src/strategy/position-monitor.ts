export interface ManagedPosition {
  symbol: string;
  side: 'long' | 'short';
  entry: number;
  stopLoss: number;
  takeProfit: number;
  quantity: number;
}

export interface PositionStateInput {
  position: ManagedPosition;
  currentPrice: number;
  accountEquity: number;
  peakEquity: number;
  spread: number;
  maxDrawdownPercent: number;
  trailingEnabled: boolean;
  activationR: number;
  protectedR: number;
}

export interface PositionStateResult {
  pnl: number;
  rMultiple: number;
  drawdownPercent: number;
  spread: number;
  trailingActivated: boolean;
  breakEvenActivated: boolean;
  newStopLoss: number;
  shouldClose: boolean;
  allowed: boolean;
  reason: string;
}

export function evaluatePositionState(input: PositionStateInput): PositionStateResult {
  const { position } = input;
  const priceMove = position.side === 'long'
    ? input.currentPrice - position.entry
    : position.entry - input.currentPrice;
  const riskDistance = Math.abs(position.entry - position.stopLoss);
  const rMultiple = riskDistance === 0 ? 0 : priceMove / riskDistance;
  const pnl = priceMove * position.quantity;
  const drawdownPercent = input.peakEquity <= 0
    ? 0
    : Math.max(0, ((input.peakEquity - input.accountEquity) / input.peakEquity) * 100);
  const thresholdTolerance = 1e-9;
  const trailingActivated = input.trailingEnabled && rMultiple + thresholdTolerance >= input.activationR;
  const breakEvenActivated = input.trailingEnabled && rMultiple + thresholdTolerance >= input.protectedR;
  const trailingStop = position.entry + priceMove * 0.2;
  const newStopLoss = breakEvenActivated
    ? position.side === 'long'
      ? Math.max(position.stopLoss, trailingStop)
      : Math.min(position.stopLoss, trailingStop)
    : position.stopLoss;
  const stopHit = position.side === 'long'
    ? input.currentPrice <= position.stopLoss
    : input.currentPrice >= position.stopLoss;
  const takeProfitHit = position.side === 'long'
    ? input.currentPrice >= position.takeProfit
    : input.currentPrice <= position.takeProfit;
  const drawdownLimitHit = drawdownPercent >= input.maxDrawdownPercent;
  const shouldClose = stopHit || takeProfitHit || drawdownLimitHit;

  return {
    pnl,
    rMultiple,
    drawdownPercent,
    spread: input.spread,
    trailingActivated,
    breakEvenActivated,
    newStopLoss,
    shouldClose,
    allowed: !drawdownLimitHit,
    reason: drawdownLimitHit
      ? 'maximum drawdown reached'
      : stopHit
        ? 'stop loss reached'
        : takeProfitHit
          ? 'take profit reached'
          : trailingActivated
            ? 'position actively protected'
            : 'position open',
  };
}
