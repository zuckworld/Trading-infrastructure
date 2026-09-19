# Strategy overview

This project implements the required deterministic trading flow:

1. Higher-timeframe context and H4 setup
2. H4 breakout and retracement
3. H4 Fibonacci 50–61.8 zone
4. M5 structure and execution setup
5. M5 breakout and retracement
6. M5 Fibonacci 50–61.8 zone
7. M5 confirmation and risk gates
8. News, drawdown, and broker safety checks
9. Execution, position management, and trailing profit

The engine is intentionally strict: it only permits a trade if all safety conditions pass. If a required input is missing or a critical rule fails, no new trade is opened.
