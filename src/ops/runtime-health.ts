import { cpus, freemem, loadavg, totalmem, uptime } from 'node:os';

export interface RuntimeMetrics {
  uptimeSeconds: number;
  memoryPercentUsed: number;
  rssBytes: number;
  cpuCount: number;
  loadAverage: number;
}

export function collectRuntimeMetrics(): RuntimeMetrics {
  const memory = process.memoryUsage();
  const memoryPercentUsed = totalmem() === 0 ? 0 : ((totalmem() - freemem()) / totalmem()) * 100;
  return {
    uptimeSeconds: uptime(),
    memoryPercentUsed,
    rssBytes: memory.rss,
    cpuCount: cpus().length,
    loadAverage: cpus().length === 0 ? 0 : loadAverage()[0] / cpus().length,
  };
}

function loadAverage(): number[] {
  return loadavg();
}
