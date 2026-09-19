export interface DeploymentConfigInput {
  env: 'development' | 'production';
  brokerConnected: boolean;
  accountVerified: boolean;
  marketDataFresh: boolean;
  riskEngineOnline: boolean;
  newsEngineOnline: boolean;
  tradingEnabled: boolean;
  persistentStorage: boolean;
}

export interface DeploymentConfigResult {
  valid: boolean;
  reason: string;
  checks: Record<string, boolean>;
}

export interface StartupPlanInput {
  configValid: boolean;
  stateLoaded: boolean;
  brokerVerified: boolean;
  marketVerified: boolean;
  riskVerified: boolean;
  complianceVerified: boolean;
}

export interface ShutdownPlanInput {
  stopNewTrades: boolean;
  preserveState: boolean;
  flushLogs: boolean;
  closeNonEssentialConnections: boolean;
}

export function validateDeploymentConfig(input: DeploymentConfigInput): DeploymentConfigResult {
  const checks = {
    env: input.env === 'production' || input.env === 'development',
    brokerConnected: input.brokerConnected,
    accountVerified: input.accountVerified,
    marketDataFresh: input.marketDataFresh,
    riskEngineOnline: input.riskEngineOnline,
    newsEngineOnline: input.newsEngineOnline,
    tradingEnabled: input.tradingEnabled,
    persistentStorage: input.persistentStorage,
  };

  const valid = Object.values(checks).every(Boolean);

  return {
    valid,
    reason: valid ? 'deployment ready' : Object.entries(checks).find(([, value]) => !value)?.[0] ?? 'deployment blocked',
    checks,
  };
}

export function createStartupPlan(input: StartupPlanInput) {
  const checks = {
    configValid: input.configValid,
    stateLoaded: input.stateLoaded,
    brokerVerified: input.brokerVerified,
    marketVerified: input.marketVerified,
    riskVerified: input.riskVerified,
    complianceVerified: input.complianceVerified,
  };

  const allowed = Object.values(checks).every(Boolean);

  return {
    allowed,
    checks,
    steps: [
      'start application',
      'load configuration',
      'validate configuration',
      'load persistent state',
      'connect to broker',
      'verify account',
      'verify market data',
      'verify risk engine',
      'enable scanning',
    ],
  };
}

export function createShutdownPlan(input: ShutdownPlanInput) {
  const checks = {
    stopNewTrades: input.stopNewTrades,
    preserveState: input.preserveState,
    flushLogs: input.flushLogs,
    closeNonEssentialConnections: input.closeNonEssentialConnections,
  };

  const allowed = Object.values(checks).every(Boolean);

  return {
    allowed,
    checks,
    steps: [
      'stop new trade execution',
      'preserve state',
      'flush logs',
      'close non-essential connections',
      'safe stop',
    ],
  };
}
