# JS Trading Bot

This project is a TypeScript-based automated trading platform scaffold built around the master specification provided in the project prompt. It preserves the required trading logic structure:

- M5 as the execution timeframe
- H4 higher-timeframe context and structure
- H4 breakout -> Fibonacci -> retracement -> 50/61.8 zone
- M5 breakout -> Fibonacci -> retracement -> 50/61.8 zone
- RSI 10/90 rules
- risk cap of 0.25% per trade
- drawdown, news, compliance, and broker safety gates
- Deriv Synthetic Index support architecture
- detached strategy engine and broker execution adapters

## Repository structure

- `src/config` for strategy defaults and types
- `src/strategy` for market structure, Fibonacci, and risk logic
- `tests` for strategy validation

## Quick start

1. Install dependencies:
   `npm install`
2. Run the tests:
   `npm test`
3. Build TypeScript:
   `npm run build`

## Production deployment notes

- The project is structured to be deployable to VPS/cloud/Docker environments.
- Add broker adapters under `src/brokers` as the integration layer grows.
- Never bypass configured safety checks or risk limits.
- Read [`docs/OPERATIONS.md`](docs/OPERATIONS.md) for installation, paper-trading, recovery, security, and live-trading readiness guidance.

## Current implementation layers

- Position monitoring with directional P/L, R-multiple, drawdown, trailing, and break-even state
- Supply/Demand, Ichimoku, and RSI 10/90 confirmation engines
- Execution recovery plans for duplicate orders, partial fills, latency, disconnects, and failed protection
- Backtest metrics including win rate, profit factor, expectancy, maximum drawdown, and walk-forward windows
- Atomic JSON state persistence for restart recovery

## Important rule

This code intentionally keeps the strategy deterministic and auditable. It does not permit fake fills, look-ahead data, or discretionary risk overruns.
