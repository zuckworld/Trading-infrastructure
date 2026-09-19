import type { Candle, Direction } from '../config/types.js';

export function detectMarketStructure(candles: Candle[]): { direction: Direction; breakout: boolean; last: number; prev: number } {
  const closes = candles.map((c) => c.close);
  const last = closes.at(-1) ?? 0;
  const prev = closes.at(-2) ?? last;

  return {
    direction: last > prev ? 'bullish' : last < prev ? 'bearish' : 'neutral',
    breakout: last > prev,
    last,
    prev,
  };
}

export function detectBOS(values: number[]) {
  const last = values.at(-1) ?? 0;
  const prev = values.at(-2) ?? last;
  return last > prev;
}

export function detectChoCH(values: number[]) {
  const last = values.at(-1) ?? 0;
  const prev = values.at(-2) ?? last;
  return last < prev;
}
