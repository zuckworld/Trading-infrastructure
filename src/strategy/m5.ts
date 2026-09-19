import type { Candle, Direction } from '../config/types.js';
import { calculateFibonacciLevels } from './fibonacci.js';

export interface M5SetupInput {
  direction: Direction;
  trendValid: boolean;
  swingHigh: number;
  swingLow: number;
  breakoutLevel: number;
  breakoutClose: number;
  fibStart: number;
  fibEnd: number;
  price: number;
  retracementZoneMin: number;
  retracementZoneMax: number;
  structureValid: boolean;
}

export interface M5SetupResult {
  valid: boolean;
  direction: Direction;
  breakout: boolean;
  retracementInZone: boolean;
  fibZone: number[];
  reason: string;
}

export function detectM5Breakout(input: {
  direction: Direction;
  previousSwingHigh: number;
  close: number;
  threshold: number;
}): boolean {
  if (input.direction === 'bullish') {
    return input.close > input.previousSwingHigh + input.threshold;
  }

  if (input.direction === 'bearish') {
    return input.close < input.previousSwingHigh - input.threshold;
  }

  return false;
}

export function isM5RetracementInZone(input: {
  price: number;
  fibStart: number;
  fibEnd: number;
  min: number;
  max: number;
}): boolean {
  const fib = calculateFibonacciLevels(input.fibStart, input.fibEnd);
  const zoneMin = Math.min(fib[50], fib[61_8]);
  const zoneMax = Math.max(fib[50], fib[61_8]);
  return input.price >= zoneMin && input.price <= zoneMax;
}

export function evaluateM5Setup(input: M5SetupInput): M5SetupResult {
  const fib = calculateFibonacciLevels(input.fibStart, input.fibEnd);
  const breakout = detectM5Breakout({
    direction: input.direction,
    previousSwingHigh: input.swingHigh,
    close: input.breakoutClose,
    threshold: 0.002,
  });

  const retracementInZone = isM5RetracementInZone({
    price: input.price,
    fibStart: input.fibStart,
    fibEnd: input.fibEnd,
    min: input.retracementZoneMin,
    max: input.retracementZoneMax,
  });

  const valid = input.trendValid && input.structureValid && breakout && retracementInZone;

  return {
    valid,
    direction: input.direction,
    breakout,
    retracementInZone,
    fibZone: [fib[50], fib[61_8]],
    reason: valid ? 'M5 execution setup ready' : 'M5 execution setup fails required checks',
  };
}

export function analyzeM5Context(candles: Candle[]) {
  const closes = candles.map((c) => c.close);
  const start = closes[0] ?? 0;
  const end = closes.at(-1) ?? 0;
  const direction: Direction = end > start ? 'bullish' : end < start ? 'bearish' : 'neutral';

  return {
    direction,
    trendValid: end !== start,
    swingHigh: Math.max(...closes),
    swingLow: Math.min(...closes),
  };
}
