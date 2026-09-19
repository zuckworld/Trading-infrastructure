import type { FibonacciLevels } from '../config/types.js';

export function calculateFibonacciLevels(start: number, end: number): FibonacciLevels {
  const anchorHigh = Math.max(start, end);
  const anchorLow = Math.min(start, end);
  const range = anchorHigh - anchorLow;

  return {
    0: anchorLow,
    23_6: anchorLow + range * 0.236,
    38_2: anchorLow + range * 0.382,
    50: anchorLow + range * 0.5,
    61_8: anchorLow + range * 0.618,
    78_6: anchorLow + range * 0.786,
    100: anchorHigh,
    161_8: anchorLow + range * 1.618,
  };
}

export function isInFibZone(price: number, levels: FibonacciLevels, min = 50, max = 61.8): boolean {
  const lower = Math.min(levels[min as keyof FibonacciLevels] ?? levels[50], levels[max as keyof FibonacciLevels] ?? levels[61_8]);
  const upper = Math.max(levels[min as keyof FibonacciLevels] ?? levels[50], levels[max as keyof FibonacciLevels] ?? levels[61_8]);
  return price >= lower && price <= upper;
}

export function mapFibLevel(level: number, start: number, end: number): number {
  const levels = calculateFibonacciLevels(start, end);
  return levels[level as keyof FibonacciLevels] ?? levels[50];
}
