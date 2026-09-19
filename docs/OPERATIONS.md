# Trading Bot Operations Guide

## Scope

The platform preserves the specified strategy:

- M5 is the only execution timeframe.
- H4 supplies the primary setup context.
- H4 and M5 require breakout, Fibonacci retracement, and the 50-61.8% entry zone.
- Supply/Demand, Ichimoku, RSI 10/90, market structure, risk, drawdown, news, broker, and compliance gates remain mandatory.
- Risk per trade is capped at 0.25% by default.
- M1 is not a qualification or confirmation requirement.

## Install and verify

```powershell
npm install
npm test
npm run build
```

The build emits production JavaScript and declarations into `dist/`.

## Configuration

Review `src/config/defaults.ts` before enabling any runtime integration. Important defaults include:

- `riskPerTrade`: `0.25`
- `rsiOversold`: `10`
- `rsiOverbought`: `90`
- `newsTradingAllowed`: `false`
- `m1ConfirmationRequired`: `false`
- `paperTrading`: `true`

Broker credentials belong in environment variables or a secret manager. Do not commit tokens, account IDs, or private keys.

## Paper trading

Paper trading is the default operating mode. Use the paper ledger and simulated execution path to verify:

1. Scanner setup registration and duplicate rejection.
2. H4 context followed by independent M5 execution confirmation.
3. Exact risk sizing and drawdown blocking.
4. Stop-loss, take-profit, trailing, and break-even state changes.
5. Recovery behavior for disconnects, partial fills, and unprotected positions.
6. Persistent state save and restore after a restart.

The complete local orchestration is exposed by `createTradingEngine()`. Its execution cycle runs qualification, risk sizing, broker submission, order-status verification, state persistence, and position monitoring through injected broker and storage interfaces.

Example local verification flow:

```ts
const engine = createTradingEngine(mockBrokerClient, config, { stateStore });
const result = await engine.evaluateAndExecute(setupInput);
const state = engine.monitorPosition(result.position, currentPrice, equity, peakEquity, spread);
```

A paper result is not evidence that a live order can be submitted. The current Deriv client provides a broker contract and deterministic local state; it does not replace a real authenticated Deriv transport.

## Live trading gate

Do not enable live trading until all of these are true:

- A real broker transport is connected and authenticated.
- Account state and market data are verified from the broker.
- Order, position, fill, SL, and TP identifiers are reconciled.
- Execution recovery actions are wired to real cancel and close endpoints.
- Persistent state is saved before shutdown and reconciled before resume.
- Paper trading has passed an agreed observation period.
- Risk, drawdown, news, and prop-firm limits are externally monitored.

If protection cannot be verified after a fill, the execution recovery plan blocks continuation and requires the unprotected exposure to be closed.

## Restart and recovery

Use `createPersistentStateStore(path)` to save state atomically to JSON. On startup:

1. Load the last valid state.
2. Connect to the broker.
3. Retrieve account, order, position, and protection state.
4. Run local-to-broker reconciliation.
5. Reconstruct trailing and trade-management state.
6. Resume only when risk and protection checks pass.

A missing, malformed, or stale state file must block automatic resumption until reviewed.

## Troubleshooting

- **Build fails:** run `npm install`, then `npm run build`.
- **Tests fail:** run `npm test` and inspect the first failing strategy gate.
- **No trade qualifies:** inspect H4 setup, M5 setup, Fibonacci zone, RSI, news, spread, drawdown, and duplicate checks in the evaluation result.
- **Broker disconnect:** halt new execution, reconnect, reconcile account and orders, then resume only after state matches.
- **Partial fill or delayed order:** freeze additional quantity and poll until the broker reports a final state.
- **Missing protection:** close the unprotected position and record an emergency alert.

## Security and deployment

- Keep `.env` files out of source control.
- Use least-privilege broker tokens and separate demo and production credentials.
- Run the service under a non-administrator account.
- Restrict dashboard and broker ports with a firewall.
- Rotate credentials and review execution logs regularly.
- Do not deploy with `paperTrading` disabled until live integration tests and operational sign-off are complete.
- Preserve logs and state files on a protected volume with appropriate permissions.
