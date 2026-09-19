export type MarketType = 'forex' | 'synthetic' | 'crypto' | 'commodity' | 'index';

export interface BrokerAdapter {
  name: string;
  supportsMarket: (marketType: MarketType) => boolean;
  getSymbolSpec: (symbol: string) => Record<string, unknown>;
}

export function createBrokerAdapter(name: string): BrokerAdapter {
  const supported: Record<string, boolean> = {
    deriv: true,
    mt5: true,
    ctrader: true,
  };

  const adapter: BrokerAdapter = {
    name,
    supportsMarket: (marketType) => marketType === 'forex' || marketType === 'synthetic' || marketType === 'crypto' || marketType === 'commodity' || marketType === 'index',
    getSymbolSpec: (symbol) => ({
      symbol,
      source: name,
      isSynthetic: symbol.startsWith('1') || symbol.includes('BOOM') || symbol.includes('CRASH') || symbol.includes('RNG') || symbol.includes('JUMP') || symbol.includes('STEP'),
    }),
  };

  if (!supported[name.toLowerCase()]) {
    return {
      ...adapter,
      supportsMarket: () => false,
      getSymbolSpec: () => ({ symbol: name, source: 'unknown', isSynthetic: false }),
    };
  }

  return adapter;
}

export function getSyntheticIndexSpec(symbol: string) {
  const known = new Map([
    ['1HZ10V', { symbol: '1HZ10V', isSynthetic: true, tickSize: 0.1, pricePrecision: 1 }],
    ['1HZ25V', { symbol: '1HZ25V', isSynthetic: true, tickSize: 0.1, pricePrecision: 1 }],
    ['1HZ50V', { symbol: '1HZ50V', isSynthetic: true, tickSize: 0.1, pricePrecision: 1 }],
    ['BOOM1000', { symbol: 'BOOM1000', isSynthetic: true, tickSize: 0.1, pricePrecision: 1 }],
    ['CRASH500', { symbol: 'CRASH500', isSynthetic: true, tickSize: 0.1, pricePrecision: 1 }],
    ['RNG100', { symbol: 'RNG100', isSynthetic: true, tickSize: 0.1, pricePrecision: 1 }],
    ['JUMP100', { symbol: 'JUMP100', isSynthetic: true, tickSize: 0.1, pricePrecision: 1 }],
    ['STEP', { symbol: 'STEP', isSynthetic: true, tickSize: 0.1, pricePrecision: 1 }],
  ]);

  return known.get(symbol) ?? { symbol, isSynthetic: false, tickSize: null, pricePrecision: null };
}
