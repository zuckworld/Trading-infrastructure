export interface RuntimeConfig {
  environment: 'test' | 'demo' | 'production';
  broker: 'deriv';
  appId: string;
  token: string;
  paperTrading: boolean;
  dashboardPort: number;
}

export function loadRuntimeConfig(env: Record<string, string | undefined>): RuntimeConfig {
  const environment = env.TRADING_ENV ?? 'test';
  if (environment !== 'test' && environment !== 'demo' && environment !== 'production') {
    throw new Error('TRADING_ENV must be test, demo, or production');
  }
  const paperTrading = env.PAPER_TRADING !== 'false';
  if (environment === 'production' && paperTrading === false && !env.DERIV_TOKEN) {
    throw new Error('DERIV_TOKEN is required for non-paper production mode');
  }
  const dashboardPort = Number(env.DASHBOARD_PORT ?? 3000);
  if (!Number.isInteger(dashboardPort) || dashboardPort < 1 || dashboardPort > 65535) {
    throw new Error('DASHBOARD_PORT must be a valid TCP port');
  }
  return {
    environment,
    broker: 'deriv',
    appId: env.DERIV_APP_ID ?? '',
    token: env.DERIV_TOKEN ?? '',
    paperTrading,
    dashboardPort,
  };
}
