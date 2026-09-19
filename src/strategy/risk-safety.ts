export interface RiskSafetyInput {
  accountEquity: number;
  riskPercent: number;
  riskLimitPercent: number;
  entry: number;
  stop: number;
  tickSize: number;
  tickValue: number;
  contractSize: number;
  currentDrawdownPercent: number;
  dayTradeCount: number;
  dayMaxTrades: number;
  dayMaxDrawdown: number;
  swingMaxDrawdown: number;
  positionMaxDrawdown: number;
  mode: 'DAY' | 'SWING' | 'POSITION';
  newsOk: boolean;
  propFirmOk: boolean;
  brokerOk: boolean;
  duplicateSetup: boolean;
}

export interface RiskSafetyResult {
  allowed: boolean;
  reason: string;
  checks: Record<string, boolean>;
  riskAmount: number;
  lotSize: number;
}

export function evaluateRiskSafety(input: RiskSafetyInput): RiskSafetyResult {
  const riskAmount = input.accountEquity * (input.riskPercent / 100);
  const priceDistance = Math.abs(input.entry - input.stop);
  const lotSize = priceDistance > 0
    ? riskAmount / (priceDistance * input.contractSize * input.tickValue / input.tickSize)
    : 0;

  const drawdownLimit = input.mode === 'DAY'
    ? input.dayMaxDrawdown
    : input.mode === 'SWING'
      ? input.swingMaxDrawdown
      : input.positionMaxDrawdown;

  const checks = {
    riskLimit: input.riskPercent <= input.riskLimitPercent,
    accountData: input.accountEquity > 0,
    entryStopDistance: priceDistance > 0,
    dayTradeLimit: input.dayTradeCount < input.dayMaxTrades,
    drawdown: input.currentDrawdownPercent < drawdownLimit,
    news: input.newsOk,
    propFirm: input.propFirmOk,
    broker: input.brokerOk,
    duplicate: !input.duplicateSetup,
  };

  const allowed = Object.values(checks).every(Boolean);

  return {
    allowed,
    reason: allowed ? 'risk safe' : Object.entries(checks).find(([, value]) => !value)?.[0] ?? 'blocked',
    checks,
    riskAmount,
    lotSize: Number.isFinite(lotSize) ? Math.max(0, lotSize) : 0,
  };
}
