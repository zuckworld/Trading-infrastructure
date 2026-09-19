import type { Alert } from '../strategy/alerts.js';

export interface AlertChannel {
  name: string;
  send: (alert: Alert) => Promise<void>;
}

export interface AlertDeliveryResult {
  alert: Alert;
  delivered: string[];
  failed: Array<{ channel: string; reason: string }>;
}

export interface AlertRouter {
  publish: (alert: Alert) => Promise<AlertDeliveryResult>;
}

export function createAlertRouter(channels: AlertChannel[]): AlertRouter {
  return {
    publish: async (alert) => {
      const delivered: string[] = [];
      const failed: Array<{ channel: string; reason: string }> = [];
      await Promise.all(channels.map(async (channel) => {
        try {
          await channel.send(alert);
          delivered.push(channel.name);
        } catch (error) {
          failed.push({ channel: channel.name, reason: error instanceof Error ? error.message : 'delivery failed' });
        }
      }));
      return { alert, delivered, failed };
    },
  };
}

export function createMemoryAlertChannel(name = 'memory'): AlertChannel & { alerts: Alert[] } {
  const alerts: Alert[] = [];
  return { name, alerts, send: async (alert) => { alerts.push(alert); } };
}

export function createWebhookAlertChannel(name: string, post: (payload: string) => Promise<void>): AlertChannel {
  return { name, send: (alert) => post(JSON.stringify(alert)) };
}
