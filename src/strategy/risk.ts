import type { TradeEvaluationInput } from '../config/types.js';

export function calculatePositionSize({
  accountEquity,
  riskPercent,
  entry,
  stop,
  tickSize,
  tickValue,
  contractSize,
}: Pick<TradeEvaluationInput, 'accountEquity' | 'riskPercent' | 'entry' | 'stop' | 'tickSize' | 'tickValue' | 'contractSize'>) {
  const riskAmount = accountEquity * (riskPercent / 100);
  const priceDistance = Math.abs(entry - stop);
  const lotSize = priceDistance > 0 ? riskAmount / (priceDistance * contractSize * tickValue / tickSize) : 0;

  return {
    riskAmount,
    lotSize: Number.isFinite(lotSize) ? Math.max(0, lotSize) : 0,
  };
}

export function getRiskPerTrade(input: Pick<TradeEvaluationInput, 'accountEquity' | 'riskPercent' | 'entry' | 'stop' | 'tickSize' | 'tickValue' | 'contractSize'>) {
  return calculatePositionSize(input);
}
