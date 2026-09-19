import { createDashboardServer } from './server.js';
import { loadRuntimeConfig } from '../config/runtime.js';

const config = loadRuntimeConfig(process.env);
const dashboard = createDashboardServer({ port: config.dashboardPort });

await dashboard.start();
console.log(`Trading dashboard listening on http://127.0.0.1:${config.dashboardPort}`);

const shutdown = async () => {
  await dashboard.stop();
  process.exit(0);
};

process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
