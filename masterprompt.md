ULTIMATE MASTER PROMPT

PROFESSIONAL MULTI-MARKET AUTOMATED TRADING BOT

M5 EXECUTION • H4 + M5 BREAKOUT + RETRACEMENT • H4 + M5 FIBONACCI 50–61.8% • RSI 10/90 • ICHIMOKU • SUPPLY/DEMAND • MARKET STRUCTURE • DERIV SYNTHETIC INDICES • TRAILING PROFIT • PROP-FIRM COMPLIANCE • STRICT 0.25% RISK

⸻

1. ROLE

You are an elite team of:

* Quantitative Developer
* Algorithmic Trading Engineer
* Technical Analysis Engineer
* Market Structure Engineer
* TypeScript/JavaScript Architect
* Risk Management Engineer
* Broker/API Integration Engineer
* Deriv Integration Engineer
* Prop-Firm Compliance Engineer
* Backtesting Engineer
* DevOps Engineer
* Cybersecurity Engineer
* QA/Test Engineer
* Dashboard/UI Engineer

Your task is to DESIGN AND BUILD a professional, modular, production-grade automated trading system from the complete specification below.

This is NOT a simple indicator bot.

This is NOT a basic RSI bot.

This is NOT a simple crossover strategy.

This is a complete:

SCANNER → ANALYSIS → SETUP DETECTION → VALIDATION → EXECUTION → TRADE MANAGEMENT → PROFIT PROTECTION → COMPLIANCE → LOGGING

system.

⸻

2. ABSOLUTE PRIORITY — PRESERVE THE STRATEGY

The user’s original trading strategy is the foundation of this system.

DO NOT replace it.

DO NOT simplify it.

DO NOT remove any of its core components.

DO NOT invent a completely different strategy.

DO NOT convert it into an RSI-only strategy.

DO NOT convert it into an Ichimoku-only strategy.

DO NOT convert it into a Fibonacci-only strategy.

The final system must contain:

* Multi-timeframe analysis
* Higher-timeframe market context
* H4 setup/structure
* Market structure
* BOS
* CHoCH where appropriate
* Valid breakout
* Fibonacci
* Retracement
* 50–61.8% Fibonacci entry zone
* Supply and Demand
* Ichimoku
* RSI 10/90
* M5 breakout
* M5 Fibonacci
* M5 retracement
* M5 50–61.8% Fibonacci zone
* M5 confirmation
* Risk management
* Position sizing
* Drawdown protection
* Prop-firm compliance
* Trade management
* Trailing profit
* Automated market scanning
* Automated execution
* Alerts
* Backtesting
* Paper trading
* Broker integration
* Deriv Synthetic Indices support

The additional engineering features in this specification are intended to make the strategy:

* precise
* deterministic
* testable
* safer
* more reliable
* easier to audit
* suitable for automation

They must NOT change the underlying trading philosophy.

⸻

3. MOST IMPORTANT TIMEFRAME RULE

M5 IS THE EXECUTION TIMEFRAME.

M5 is the primary and required timeframe for actual trade entry.

M1 IS REMOVED.

There must be:

* NO M1 confirmation requirement
* NO M1 entry requirement
* NO M1 scalping engine
* NO waiting for M1 before entering

Do not add M1 confirmation back into the strategy.

If M1 data exists because of a broker/data feed, it may exist internally for technical infrastructure only, but it must have ZERO mandatory influence on trade qualification.

The strategy must execute from:

M5

⸻

4. MULTI-TIMEFRAME STRUCTURE

Use the following hierarchy:

MN1

Macro context.

W1

Major long-term market structure.

D1

Major directional context.

H4

PRIMARY setup and structure timeframe.

H1

Intermediate confirmation.

M30

Refinement.

M15

Setup refinement.

M5

PRIMARY EXECUTION.

Higher timeframes establish the context and setup.

However, M5 must independently establish the final execution setup.

⸻

5. CORE TRADE SEQUENCE

The fundamental sequence must be:

HIGHER-TIMEFRAME CONTEXT

↓

H4 SETUP

↓

H4 MARKET STRUCTURE

↓

H4 VALID BREAKOUT

↓

H4 FIBONACCI

↓

H4 RETRACEMENT

↓

H4 50–61.8% FIBONACCI ZONE

↓

SUPPLY/DEMAND

↓

ICHIMOKU

↓

RSI 10/90

↓

M5 EXECUTION STRUCTURE

↓

M5 VALID BREAKOUT

↓

M5 FIBONACCI

↓

M5 RETRACEMENT

↓

M5 50–61.8% FIBONACCI ZONE

↓

M5 SUPPLY/DEMAND

↓

M5 ICHIMOKU

↓

M5 RSI 10/90

↓

M5 CONFIRMATION

↓

RISK CHECK

↓

DRAWDOWN CHECK

↓

NEWS CHECK

↓

PROP-FIRM CHECK

↓

BROKER CHECK

↓

EXECUTE

↓

MANAGE

↓

TRAILING PROFIT

↓

CLOSE

↓

LOG

⸻

6. SCOUT → QUALIFY → VERIFY → EXECUTE

The bot must operate using four major stages.

STAGE 1 — SCOUT

Scan available markets and identify possible setups.

STAGE 2 — QUALIFY

Determine whether the setup satisfies the trading strategy.

STAGE 3 — VERIFY

Perform all final:

* strategy
* risk
* market
* news
* broker
* exposure
* compliance

checks.

STAGE 4 — EXECUTE

Only execute if every mandatory requirement passes.

A partial setup is NOT a trade.

⸻

7. QUALITY OVER QUANTITY

The bot must be selective.

The philosophy is:

QUALITY > QUANTITY

CONFLUENCE > SINGLE INDICATOR

VALIDATED SETUP > EARLY ENTRY

CAPITAL PROTECTION > TRADE FREQUENCY

DISCIPLINE > FREQUENCY

If there is no complete setup:

DO NOTHING.

Waiting is a valid trading decision.

⸻

8. TRADING MODES

Implement three independent modes:

1. DAY TRADING
2. SWING TRADING
3. POSITION TRADING

Each mode must have separate configuration and risk controls.

⸻

9. DAY TRADING RULES

Risk:

0.25% PER TRADE

Maximum Day trades:

4 EXECUTED TRADES PER DAY

Maximum Day Trading drawdown:

2%

The bot must stop opening new Day trades when:

* 4 trades have been executed
    OR
* the 2% drawdown limit is reached
    OR
* another safety/compliance restriction activates.

Day Trading should not intentionally hold positions overnight.

Trading sessions must be configurable.

⸻

10. SWING TRADING RULES

Risk:

0.25% PER TRADE

Maximum Swing drawdown:

3%

Maximum simultaneous Swing trades:

1

The bot may continue scanning while the Swing trade is open.

It may identify new opportunities.

It may notify the user.

But it MUST NOT execute another Swing trade until the existing Swing position is closed.

Overnight holding is permitted only when broker and prop-firm rules allow it.

⸻

11. POSITION TRADING RULES

Risk:

0.25% PER TRADE

Maximum Position drawdown:

4%

Maximum simultaneous Position trades:

1

The bot may continue scanning while the Position trade is open.

But it MUST NOT open another Position trade until the current Position trade is closed.

Overnight/weekend holding depends on configured broker and prop-firm rules.

⸻

12. RISK PER TRADE

Default risk:

0.25% OF ACCOUNT EQUITY

This is a HARD RISK LIMIT.

Position sizing must be calculated from:

* account equity
* risk percentage
* entry price
* stop-loss price
* tick size
* tick value
* contract size
* lot size
* point value
* instrument specifications
* currency conversion where required
* broker requirements

Never assume all instruments have identical specifications.

If the system cannot accurately calculate risk:

NO TRADE.

⸻

13. MARKET SCANNER

Create a professional multi-market scanner.

Support, where the connected broker/data provider allows:

* Forex
* Gold
* Metals
* Commodities
* Stock indices
* Crypto
* Derived markets
* Deriv Synthetic Indices

The scanner must continuously search for potential setups.

The scanner does NOT automatically trade a candidate.

Every candidate must pass the complete qualification pipeline.

⸻

14. DERIV SYNTHETIC INDICES SUPPORT

The system MUST support Deriv Synthetic Indices as a dedicated market category.

Deriv currently provides Synthetic Indices such as:

* Volatility Indices
* Crash/Boom
* Jump
* Step
* Range Break
* other available Synthetic/Derived instruments

Availability and instrument specifications can change, so the implementation must dynamically discover available symbols and their trading specifications instead of hard-coding an outdated symbol list.

The Deriv adapter must account for instrument-specific:

* symbol
* tick size
* price precision
* contract size
* minimum/maximum trade size
* volume/lot rules
* margin
* trading hours/availability
* execution method
* order types
* SL/TP capabilities
* volatility characteristics
* API limitations
* instrument-specific trading conditions

Do NOT assume Forex specifications apply to Synthetic Indices.

⸻

15. IMPORTANT SYNTHETIC-INDEX NEWS RULE

Real-world news does not drive Deriv Synthetic Indices in the same way it can affect real-world financial markets.

Therefore:

REAL-WORLD MARKETS

The user’s rule is:

DO NOT TRADE NEWS.

The bot must block new trades during the configured high-impact news blackout window.

DERIV SYNTHETIC INDICES

Do NOT incorrectly block Synthetic Index trades because of unrelated real-world economic news.

Instead, apply the Synthetic Index’s own configured strategy, risk, market-state, and broker rules.

The news engine must understand the difference between:

REAL-WORLD NEWS-AFFECTED INSTRUMENTS

and

SIMULATED DERIV SYNTHETIC INDICES.

⸻

16. NEWS BLACKOUT

The user does NOT trade news.

Therefore:

NEWS TRADING IS FORBIDDEN.

For news-sensitive markets, configure:

* high-impact news blackout
* pre-news blackout period
* post-news blackout period
* affected instruments
* affected currencies
* event classification

Example:

NEWS EVENT

↓

BLACKOUT WINDOW

↓

NO NEW TRADE

The system may continue:

* monitoring existing positions
* managing SL
* managing TP
* managing trailing profit
* sending alerts

But it must NOT open a new trade during the configured news blackout.

⸻

17. NEWS FAILURE SAFETY

If the news service is required for a real-world market but becomes unavailable:

NO NEW TRADE.

The system must fail safely.

Existing trades may continue to be managed according to the normal trade-management engine.

⸻

18. MARKET STRUCTURE ENGINE

Implement objective market structure detection.

Detect:

* swing highs
* swing lows
* HH
* HL
* LH
* LL
* BOS
* CHoCH
* support
* resistance

The system must define structural pivots using deterministic rules.

Do not use vague statements such as:

“market looks bullish.”

Every structural decision must have a measurable reason.

⸻

19. H4 SETUP ENGINE

H4 is the primary higher-timeframe setup/structure confirmation.

The engine must determine:

* market direction
* major structure
* relevant swing
* major support/resistance
* trend condition
* breakout context
* Supply/Demand context
* Ichimoku context
* RSI context

A valid H4 setup must be identified before the system proceeds to the execution phase.

⸻

20. BREAKOUT ENGINE

A breakout must be objectively defined.

BULLISH BREAKOUT

Generally requires:

* identifiable resistance/swing high
* meaningful structural level
* price closing beyond the level
* minimum configurable breakout distance
* acceptable candle quality
* no immediate invalidation

BEARISH BREAKOUT

Generally requires:

* identifiable support/swing low
* meaningful structural level
* price closing below the level
* minimum configurable breakout distance
* acceptable candle quality
* no immediate invalidation

The engine must distinguish:

* valid breakout
* weak breakout
* false breakout
* failed breakout
* liquidity sweep
* breakout rejection

A single tick or tiny wick beyond a level must NOT automatically count as a valid breakout.

Closed-candle confirmation should be the default.

⸻

21. BREAKOUT CHASING IS FORBIDDEN

The bot must NOT enter simply because a breakout occurred.

The breakout starts the setup.

The bot must then WAIT.

Required H4 sequence:

H4 BREAKOUT

↓

H4 FIBONACCI

↓

H4 RETRACEMENT

↓

H4 50–61.8%

↓

WAIT FOR M5 EXECUTION STRUCTURE

The bot must NOT chase the H4 breakout.

⸻

22. H4 FIBONACCI ENGINE

After a valid H4 breakout, calculate Fibonacci using the correct confirmed H4 swing anchors.

Required levels:

* 0%
* 23.6%
* 38.2%
* 50%
* 61.8%
* 78.6%
* 100%
* 161.8%

Primary H4 retracement entry zone:

50%–61.8%

This zone is a core component of the strategy.

Do not remove it.

Do not replace it with another Fibonacci zone.

⸻

23. H4 RETRACEMENT ENGINE

The retracement MUST occur after the H4 breakout.

The engine tracks:

* breakout level
* swing high/low
* Fibonacci anchors
* retracement depth
* retracement duration
* zone entry
* rejection
* structure
* invalidation

If price never reaches the required H4 50–61.8% zone:

NO TRADE.

If the setup becomes invalid before the M5 execution process:

CANCEL SETUP.

⸻

24. RSI STRATEGY

The RSI strategy uses:

RSI 10 / 90

RSI ≤ 10

Extreme oversold.

RSI ≥ 90

Extreme overbought.

These are the required default thresholds.

Do NOT change them to 20/80.

Do NOT change them to 30/70.

Do NOT remove them.

RSI alone must NEVER trigger a trade.

RSI must be combined with:

* H4 context
* structure
* breakout
* Fibonacci
* retracement
* Supply/Demand
* Ichimoku
* M5 breakout
* M5 Fibonacci
* M5 retracement
* M5 confirmation

The implementation may provide configurable behavior such as:

* touch threshold
* close beyond threshold
* recovery from extreme
* persistence
* divergence filter

But the base strategy remains:

10 / 90.

⸻

25. ICHIMOKU ENGINE

Implement the complete Ichimoku system.

Components:

* Tenkan-sen
* Kijun-sen
* Senkou Span A
* Senkou Span B
* Chikou Span
* Kumo/cloud

Default parameters:

* Tenkan = 9
* Kijun = 26
* Senkou B = 52
* Displacement = 26

Evaluate:

* price vs cloud
* cloud direction
* cloud thickness
* Tenkan/Kijun relationship
* Chikou relationship
* cloud support/resistance
* trend
* potential reversal
* alignment with trade direction

Do NOT reduce Ichimoku to only a Tenkan/Kijun crossover.

⸻

26. SUPPLY & DEMAND ENGINE

Implement Supply and Demand zone detection.

Each zone must track:

* type
* upper boundary
* lower boundary
* timeframe
* creation time
* strength
* freshness
* touch count
* mitigation
* invalidation
* distance from price

Zones must expire or become invalid when appropriate.

Do not treat every random horizontal area as Supply/Demand.

⸻

27. M5 EXECUTION ENGINE

M5 is the final execution timeframe.

The M5 execution engine must NOT be treated as merely a single confirmation candle.

Once the higher-timeframe setup reaches the required H4 50–61.8% zone, the system must begin searching for an independent M5 execution setup.

The M5 execution setup MUST contain its own:

1. M5 market structure
2. M5 valid breakout
3. M5 Fibonacci mapping
4. M5 retracement
5. M5 50–61.8% Fibonacci zone
6. M5 Supply/Demand reaction where applicable
7. M5 Ichimoku alignment
8. M5 RSI 10/90 condition
9. M5 final confirmation

The M5 breakout must be objectively defined.

The M5 Fibonacci must be calculated from the confirmed M5 breakout structure and appropriate M5 swing anchors.

Required M5 Fibonacci levels:

* 0%
* 23.6%
* 38.2%
* 50%
* 61.8%
* 78.6%
* 100%
* 161.8%

The primary M5 execution retracement zone is:

50%–61.8%.

The M5 Fibonacci is an additional execution-layer requirement.

It does NOT replace the H4 Fibonacci.

Therefore:

H4 Fibonacci = higher-timeframe setup zone

and

M5 Fibonacci = lower-timeframe execution zone.

The M5 engine must wait for the M5 breakout before mapping the M5 execution Fibonacci where the configured implementation requires breakout-based anchors.

It must then wait for the M5 retracement into the M5 50–61.8% Fibonacci zone.

The bot must NOT enter simply because:

* H4 reaches 50–61.8%
* M5 touches the H4 zone
* M5 produces one bullish candle
* M5 produces one bearish candle
* RSI reaches an extreme
* Ichimoku aligns
* Supply/Demand is present

All required M5 execution conditions must be satisfied.

⸻

28. M5 BREAKOUT ENGINE

The M5 breakout must be independently validated.

M5 BULLISH BREAKOUT

Require, according to deterministic configurable rules:

* identifiable M5 resistance/swing high
* meaningful M5 structural level
* M5 candle close beyond the level
* minimum breakout distance
* acceptable candle quality
* no immediate invalidation
* no classification as a false breakout

M5 BEARISH BREAKOUT

Require:

* identifiable M5 support/swing low
* meaningful M5 structural level
* M5 candle close below the level
* minimum breakout distance
* acceptable candle quality
* no immediate invalidation
* no classification as a false breakout

The M5 engine must distinguish:

* valid breakout
* weak breakout
* false breakout
* failed breakout
* liquidity sweep
* rejection

A wick alone must NOT automatically qualify as an M5 breakout.

Closed M5 candle confirmation should be the default.

⸻

29. M5 FIBONACCI ENGINE

After the M5 breakout is confirmed, calculate the M5 Fibonacci using the correct M5 structural anchors.

The M5 Fibonacci must include:

* 0%
* 23.6%
* 38.2%
* 50%
* 61.8%
* 78.6%
* 100%
* 161.8%

The primary M5 execution zone is:

50%–61.8%.

The M5 Fibonacci must be independently validated.

Do NOT simply copy the H4 Fibonacci levels into M5.

The M5 Fibonacci must be calculated from the M5 execution structure.

⸻

30. M5 RETRACEMENT ENGINE

After a valid M5 breakout:

WAIT FOR RETRACEMENT.

The M5 engine must track:

* M5 breakout level
* M5 swing high/low
* M5 Fibonacci anchors
* retracement depth
* retracement duration
* M5 50–61.8% zone
* reaction inside the zone
* M5 structure
* invalidation
* setup expiry

If price does not retrace into the required M5 50–61.8% zone:

NO ENTRY.

If the M5 breakout fails:

CANCEL M5 EXECUTION SETUP.

If the M5 Fibonacci becomes invalid:

CANCEL M5 EXECUTION SETUP.

If the M5 retracement becomes invalid:

CANCEL M5 EXECUTION SETUP.

The bot must wait for a new valid M5 setup rather than chasing price.

⸻

31. M5 CONFIRMATION ENGINE

After:

H4 setup

↓

H4 breakout

↓

H4 Fibonacci

↓

H4 retracement

↓

H4 50–61.8% zone

↓

M5 breakout

↓

M5 Fibonacci

↓

M5 retracement

↓

M5 50–61.8% zone

the system may evaluate the final M5 confirmation.

Possible confirmation components include:

* M5 candle close
* rejection from M5 50–61.8%
* M5 structure shift
* M5 BOS
* rejection candle
* engulfing candle
* momentum confirmation
* M5 Supply/Demand reaction
* M5 Ichimoku alignment
* M5 RSI requirement

The exact mandatory trigger must be deterministic and configurable.

Do not use:

“looks bullish”

or

“looks bearish”

as an executable rule.

⸻

32. IMPORTANT M5 ENTRY RULE

The final M5 execution sequence MUST be:

H4 SETUP

↓

H4 BREAKOUT

↓

H4 FIBONACCI

↓

H4 RETRACEMENT

↓

H4 50–61.8% ZONE

↓

M5 BREAKOUT

↓

M5 FIBONACCI

↓

M5 RETRACEMENT

↓

M5 50–61.8% ZONE

↓

M5 SUPPLY/DEMAND

↓

M5 ICHIMOKU

↓

M5 RSI 10/90

↓

M5 CONFIRMATION

↓

RISK CHECK

↓

EXECUTE

This is mandatory.

Do NOT enter directly from the H4 Fibonacci zone.

Do NOT enter immediately after the M5 breakout.

Do NOT skip the M5 Fibonacci.

Do NOT skip the M5 retracement.

Do NOT skip the M5 50–61.8% zone.

Do NOT treat M5 as only a candle confirmation.

⸻

33. LONG TRADE CONDITIONS

A LONG may be executed only when all required conditions are satisfied:

1. Higher-timeframe context valid.
2. H4 setup valid.
3. Bullish market structure valid.
4. Valid H4 bullish breakout.
5. H4 breakout not classified as false.
6. H4 Fibonacci correctly mapped.
7. H4 retracement occurred.
8. H4 price reaches 50–61.8%.
9. Supply/Demand supports the setup.
10. Ichimoku supports the setup.
11. RSI 10/90 requirement is satisfied.
12. M5 bullish structure valid.
13. M5 valid bullish breakout.
14. M5 breakout not classified as false.
15. M5 Fibonacci correctly mapped.
16. M5 retracement occurred.
17. M5 price reaches the M5 50–61.8% Fibonacci zone.
18. M5 Supply/Demand supports the setup where required.
19. M5 Ichimoku supports the setup where required.
20. M5 RSI 10/90 requirement is satisfied.
21. M5 confirmation is valid.
22. SL is valid.
23. TP is valid.
24. Risk is exactly within the 0.25% limit.
25. Drawdown protection passes.
26. Trade-count restriction passes.
27. Correlation/exposure protection passes.
28. Spread is acceptable.
29. Slippage conditions are acceptable.
30. News blackout is NOT active for the instrument.
31. Broker requirements pass.
32. Prop-firm requirements pass.
33. Setup has not expired.
34. Setup has not already been traded.
35. Broker connection is healthy.
36. Execution system is healthy.

Only then:

EXECUTE LONG.

⸻

34. SHORT TRADE CONDITIONS

A SHORT may be executed only when all required conditions are satisfied:

1. Higher-timeframe context valid.
2. H4 setup valid.
3. Bearish market structure valid.
4. Valid H4 bearish breakout.
5. H4 breakout not classified as false.
6. H4 Fibonacci correctly mapped.
7. H4 retracement occurred.
8. H4 price reaches 50–61.8%.
9. Supply/Demand supports the setup.
10. Ichimoku supports the setup.
11. RSI 10/90 requirement is satisfied.
12. M5 bearish structure valid.
13. M5 valid bearish breakout.
14. M5 breakout not classified as false.
15. M5 Fibonacci correctly mapped.
16. M5 retracement occurred.
17. M5 price reaches the M5 50–61.8% Fibonacci zone.
18. M5 Supply/Demand supports the setup where required.
19. M5 Ichimoku supports the setup where required.
20. M5 RSI 10/90 requirement is satisfied.
21. M5 confirmation is valid.
22. SL is valid.
23. TP is valid.
24. Risk is exactly within the 0.25% limit.
25. Drawdown protection passes.
26. Trade-count restriction passes.
27. Correlation/exposure protection passes.
28. Spread is acceptable.
29. Slippage conditions are acceptable.
30. News blackout is NOT active for the instrument.
31. Broker requirements pass.
32. Prop-firm requirements pass.
33. Setup has not expired.
34. Setup has not already been traded.
35. Broker connection is healthy.
36. Execution system is healthy.

Only then:

EXECUTE SHORT.

⸻

35. STOP LOSS

SL must be based on trade invalidation.

Priority:

1. Structural invalidation
2. Supply/Demand invalidation
3. Fibonacci/technical invalidation
4. ATR-based fallback where appropriate

The SL must:

* invalidate the trade thesis
* satisfy broker minimum-distance rules
* work with instrument specifications
* preserve the 0.25% maximum risk

If the correct SL creates unacceptable risk:

NO TRADE.

Never widen the SL simply to make the trade work.

Never increase risk to accommodate an oversized SL.

⸻

36. TAKE PROFIT

Support:

* 38.2% target
* 61.8% target
* 100% target
* 161.8% extension
* structural targets

Support:

* single TP
* multiple TP
* partial profit taking
* break-even
* trailing profit

Target selection must be deterministic.

⸻

37. TRAILING PROFIT ENGINE

Implement a professional:

TRAILING PROFIT / PROFIT PROTECTION ENGINE

This is a required feature.

Its purpose is to protect accumulated profit while still allowing the trade to continue toward a larger target.

The trailing system must NOT activate immediately unless explicitly configured.

Example:

ENTRY

↓

TRADE MOVES INTO PROFIT

↓

PROFIT REACHES ACTIVATION THRESHOLD

↓

TRAILING PROFIT ACTIVATES

↓

SL MOVES TO PROTECT PROFIT

↓

PRICE CONTINUES

↓

SL TRAILS

↓

TRADE CLOSES AT TP OR TRAILING SL

Support:

* activation in R
* activation in percentage
* activation in points
* break-even activation
* minimum profit protection
* trailing distance
* trailing step
* ATR trailing
* structure trailing
* fixed-distance trailing

Example configuration:

TRAILING_PROFIT_ENABLED=true
TRAILING_ACTIVATION_R=1.0
TRAILING_PROTECTED_R=0.25
TRAILING_METHOD=STRUCTURE_OR_ATR
TRAILING_STEP=CONFIGURABLE

The trailing engine must:

* never increase original risk
* never move SL backward
* respect broker minimum stop distance
* respect tick size
* respect price precision
* avoid excessive modifications
* log every modification

⸻

38. BREAK-EVEN

Support break-even separately from trailing profit.

Example:

Trade reaches configured profit.

↓

SL moves to:

ENTRY + BUFFER

The buffer must be configurable.

Break-even must not activate prematurely by default.

⸻

39. DRAWDOWN PROTECTION

Hard limits:

DAY

2%

SWING

3%

POSITION

4%

When the applicable limit is reached:

* stop new trades
* cancel eligible pending entries
* lock trading
* notify user
* log event
* display exact reason

Support configurable drawdown methodologies:

* static
* intraday
* trailing
* end-of-day

The active methodology must be explicit.

⸻

40. DAY TRADE LIMIT

Maximum:

4 DAY TRADES PER DAY

This must be enforced in software.

Do not allow the scanner to bypass it.

Do not allow reconnecting the bot to reset it.

Do not allow restarting the application to reset it.

Persist the count.

⸻

41. ONE-SETUP-ONE-EXECUTION

Every setup receives a unique:

SETUP ID

The system must prevent repeated scanner cycles from opening duplicate trades.

Track:

* instrument
* direction
* timeframe
* breakout reference
* Fibonacci reference
* setup timestamp
* setup state

Possible states:

SCANNING
QUALIFIED
WAITING_FOR_BREAKOUT
BREAKOUT_CONFIRMED
WAITING_FOR_RETRACEMENT
RETRACEMENT_REACHED
WAITING_FOR_M5
READY
EXECUTING
OPEN
MANAGED
CLOSED
INVALIDATED
EXPIRED
BLOCKED

The M5 execution stage must additionally track:

* M5 breakout reference
* M5 Fibonacci anchors
* M5 retracement status
* M5 50–61.8% zone status
* M5 confirmation status

One logical setup = one execution.

⸻

42. SETUP INVALIDATION

Cancel a setup if:

* structure invalidates
* breakout fails
* false breakout confirmed
* Fibonacci structure becomes invalid
* retracement becomes invalid
* Supply/Demand invalidates
* Ichimoku context becomes incompatible
* RSI requirement fails beyond allowed rules
* M5 breakout invalidates
* M5 Fibonacci becomes invalid
* M5 retracement becomes invalid
* M5 50–61.8% zone becomes invalid
* M5 confirmation fails beyond configured rules
* risk becomes unacceptable
* drawdown lock activates
* news blackout activates before entry
* prop-firm restriction activates
* market becomes unavailable

Never force a setup to remain alive.

⸻

43. SETUP EXPIRATION

Every setup must have a configurable expiry.

Expiry can be based on:

* number of candles
* number of minutes
* number of hours

If no valid entry occurs:

SETUP EXPIRED.

Wait for a new setup.

⸻

44. RE-ENTRY RULES

After SL:

Do NOT immediately re-enter.

A new trade requires a:

NEW INDEPENDENT SETUP.

No revenge trading.

No automatic loss recovery.

No doubling risk.

⸻

45. CORRELATION & EXPOSURE CONTROL

The bot must detect correlated positions.

Example:

Multiple instruments may effectively represent the same directional exposure.

The system must prevent excessive combined exposure.

Day Trading may have up to 4 trades, but total exposure must still respect configured limits.

Swing:

ONE OPEN TRADE.

Position:

ONE OPEN TRADE.

⸻

46. SPREAD FILTER

Before execution:

Check spread.

If spread exceeds the instrument’s configured maximum:

NO TRADE.

Spread limits must be configurable by:

* instrument
* market
* broker
* trading mode
* session

⸻

47. SLIPPAGE PROTECTION

Implement:

* maximum allowed slippage
* pre-trade price validation
* execution price validation
* broker response validation

Never endlessly retry failed orders.

A failed order must enter controlled failure handling.

⸻

48. NEWS ENGINE

For real-world news-sensitive markets, detect:

* high-impact news
* medium-impact news
* low-impact news
* affected currencies
* affected instruments
* event time
* blackout period

The user strategy is:

DO NOT TRADE NEWS.

Therefore:

If the instrument is affected by a configured news event and the blackout window is active:

BLOCK NEW TRADE.

Existing positions continue to be managed.

For Deriv Synthetic Indices, real-world news should not be treated as a reason to block the trade because those instruments are simulated and independent of external news.

⸻

49. PROP-FIRM COMPLIANCE ENGINE

Never claim that the bot is universally compatible with every prop firm.

Different firms have different rules.

Build a configurable Prop-Firm Compliance Engine.

Support:

* daily loss limit
* total drawdown
* static drawdown
* trailing drawdown
* end-of-day drawdown
* profit target
* consistency requirements
* maximum positions
* maximum lot size
* news restrictions
* overnight restrictions
* weekend restrictions
* minimum trading days
* EA/bot permissions
* hedging restrictions
* prohibited strategies
* exposure restrictions

Before EVERY trade:

PROP-FIRM COMPLIANCE CHECK.

If failed:

TRADE BLOCKED — PROP-FIRM COMPLIANCE FAILURE.

Show the exact reason.

⸻

50. BROKER COMPLIANCE

Before every order validate:

* minimum lot
* maximum lot
* lot step
* tick size
* tick value
* contract size
* margin
* stop distance
* trading hours
* order type
* instrument availability
* SL/TP rules

If any required broker information is unavailable:

NO TRADE.

⸻

51. MANUAL MODE

Manual mode must:

* scan
* analyze
* qualify
* calculate entry
* calculate SL
* calculate TP
* calculate position size
* calculate risk
* check compliance
* show setup

Then wait for:

USER CONFIRMATION.

Manual mode must never execute without confirmation.

⸻

52. AUTOMATIC MODE

Automatic mode:

SCAN

→ ANALYZE

→ QUALIFY

→ WAIT

→ H4 BREAKOUT

→ H4 FIBONACCI

→ H4 RETRACEMENT

→ H4 50–61.8%

→ M5 BREAKOUT

→ M5 FIBONACCI

→ M5 RETRACEMENT

→ M5 50–61.8%

→ M5 CONFIRMATION

→ RISK CHECK

→ NEWS CHECK

→ COMPLIANCE CHECK

→ EXECUTE

→ VERIFY EXECUTION

→ MANAGE

→ BREAK-EVEN / TRAILING PROFIT

→ CLOSE

→ LOG

⸻

53. ORDER EXECUTION VERIFICATION

Never assume an order succeeded.

After submission verify:

* order ID
* position ID
* actual fill price
* actual quantity
* SL
* TP
* broker status

If SL/TP attachment fails:

EMERGENCY RISK PROCEDURE.

Never knowingly leave a live position without intended protection.

⸻

54. POSITION MANAGEMENT

After execution, continuously monitor:

* current price
* P/L
* R multiple
* SL
* TP
* spread
* drawdown
* trailing status
* break-even status
* market structure
* broker connection

Do not change the trade thesis randomly after entry.

⸻

55. ALERT SYSTEM

Alerts must work across:

* mobile
* laptop
* browser
* dashboard
* desktop notification
* push notification
* sound where supported

Send alerts for:

* setup found
* setup qualified
* H4 breakout confirmed
* H4 retracement reached
* H4 50–61.8% reached
* M5 breakout confirmed
* M5 Fibonacci mapped
* M5 retracement reached
* M5 50–61.8% reached
* M5 confirmation
* trade ready
* trade executed
* SL hit
* TP hit
* break-even activated
* trailing profit activated
* trailing SL updated
* trade closed
* trade blocked
* drawdown limit
* prop-firm violation
* news blackout
* broker connection lost
* execution failure
* system error

⸻

56. DASHBOARD

Create a professional dashboard.

Display:

* balance
* equity
* floating P/L
* daily P/L
* current drawdown
* mode
* open positions
* scanner
* active setups
* setup state
* H4 status
* H4 breakout
* H4 Fibonacci
* H4 retracement
* H4 50–61.8%
* Supply/Demand
* Ichimoku
* RSI
* M5 structure
* M5 breakout
* M5 Fibonacci
* M5 retracement
* M5 50–61.8%
* M5 Supply/Demand
* M5 Ichimoku
* M5 RSI
* M5 confirmation
* entry
* SL
* TP
* trailing profit
* risk
* position size
* spread
* news status
* prop-firm status
* broker status
* system health

Clearly display:

TRADING ENABLED

or:

TRADING BLOCKED

with the exact reason.

⸻

57. SCANNER DISPLAY

For every market show:

* instrument
* market type
* direction
* H4 status
* H4 structure status
* H4 breakout status
* H4 Fibonacci status
* H4 retracement status
* H4 50–61.8% status
* Supply/Demand
* Ichimoku
* RSI
* M5 structure
* M5 breakout
* M5 Fibonacci
* M5 retracement
* M5 50–61.8%
* M5 Supply/Demand
* M5 Ichimoku
* M5 RSI
* M5 confirmation
* risk
* news
* compliance
* final status

Possible final statuses:

SCANNING

WAITING

QUALIFIED

READY

BLOCKED

INVALIDATED

EXPIRED

OPEN

CLOSED

⸻

58. BACKTESTING ENGINE

Use the SAME strategy engine for:

* backtesting
* paper trading
* live trading

Do not create a simplified fake backtesting strategy.

Prevent:

* look-ahead bias
* future data leakage
* future candle access
* unrealistic fills
* impossible execution

The backtester must reproduce:

H4 breakout → H4 Fibonacci → H4 retracement → H4 50–61.8% → M5 breakout → M5 Fibonacci → M5 retracement → M5 50–61.8% → M5 confirmation

using only information available at each historical point in time.

Model where applicable:

* spread
* slippage
* commission
* swap
* broker-specific costs
* instrument-specific behavior

⸻

59. WALK-FORWARD TESTING

Support:

* in-sample testing
* validation
* out-of-sample testing
* walk-forward testing

Do not optimize solely for maximum historical profit.

Avoid overfitting.

The goal is robust strategy behavior, not a perfect historical curve.

⸻

60. PERFORMANCE REPORTING

Report:

* total trades
* wins
* losses
* win rate
* profit factor
* expectancy
* maximum drawdown
* average R
* largest win
* largest loss
* consecutive wins
* consecutive losses
* average holding time
* Day performance
* Swing performance
* Position performance
* market performance
* long performance
* short performance
* session performance
* trailing-profit performance
* news-blocked trades
* compliance-blocked trades
* strategy-blocked trades
* H4 setup failures
* H4 breakout failures
* H4 retracement failures
* M5 breakout failures
* M5 Fibonacci failures
* M5 retracement failures
* M5 confirmation failures

⸻

61. PAPER TRADING

Default mode:

PAPER / DEMO

Do not default to live trading.

Live trading must require explicit activation.

The user must clearly understand that live trading involves real financial risk.

⸻

62. BROKER ARCHITECTURE

Separate:

STRATEGY ENGINE

from:

BROKER EXECUTION ENGINE

Use adapters.

Potential adapters:

* Deriv
* MetaTrader 5
* cTrader
* supported crypto exchanges
* future brokers

Adding a broker must not require rewriting the strategy engine.

⸻

63. DERIV API ARCHITECTURE

Build a dedicated Deriv adapter.

Use the current official Deriv API documentation as the implementation reference.

The adapter should support, where applicable:

* authentication
* account information
* balance
* available symbols
* market data
* historical data
* real-time data
* order/contract execution
* position monitoring
* execution confirmation
* error handling
* reconnection
* rate limits
* symbol specifications

Do not hard-code assumptions about available Synthetic Index symbols.

Discover available instruments dynamically where the API permits.

⸻

64. DATA ENGINE

Implement:

* historical data
* live data
* candle synchronization
* tick data where available
* missing candle detection
* duplicate candle detection
* UTC normalization
* closed-candle detection
* reconnection
* data validation
* stale-data detection

Never use incomplete candle data as if it were confirmed unless explicitly designed and documented.

⸻

65. SECURITY

Never hard-code:

* API keys
* passwords
* tokens
* broker credentials
* account secrets

Use:

* environment variables
* secure configuration
* encrypted storage where appropriate

Never expose secrets in:

* frontend
* logs
* alerts
* Git
* error messages

⸻

66. AUDIT LOG

Every trade decision must be explainable.

Record:

* timestamp
* market
* market type
* mode
* setup ID
* direction
* timeframe
* H4 condition
* H4 structure
* H4 BOS/CHoCH
* H4 breakout
* H4 Fibonacci
* H4 retracement
* H4 50–61.8%
* Supply/Demand
* Ichimoku
* RSI
* M5 structure
* M5 BOS/CHoCH
* M5 breakout
* M5 Fibonacci
* M5 retracement
* M5 50–61.8%
* M5 Supply/Demand
* M5 Ichimoku
* M5 RSI
* M5 confirmation
* entry
* SL
* TP
* risk
* position size
* spread
* slippage
* news state
* drawdown
* exposure
* compliance
* broker response
* execution
* break-even
* trailing changes
* exit
* final result
* reason for rejection

⸻

67. EXPLAINABLE TRADE DECISIONS

For every blocked trade, show exactly why.

Example:

EURUSD LONG
STATUS:
BLOCKED
H4:
PASS
H4 STRUCTURE:
PASS
H4 BREAKOUT:
PASS
H4 FIBONACCI:
PASS
H4 RETRACEMENT:
PASS
H4 50–61.8%:
PASS
SUPPLY/DEMAND:
PASS
ICHIMOKU:
PASS
RSI:
PASS
M5 STRUCTURE:
PASS
M5 BREAKOUT:
PASS
M5 FIBONACCI:
PASS
M5 RETRACEMENT:
PASS
M5 50–61.8%:
PASS
M5 CONFIRMATION:
PASS
RISK:
PASS
NEWS:
FAIL
COMPLIANCE:
NOT CHECKED
DECISION:
NO TRADE
REASON:
High-impact news blackout is active.

This transparency is mandatory.

⸻

68. FAILURE-SAFE SYSTEM

If critical information is unavailable:

DO NOT TRADE.

Examples:

Market data unavailable
→ NO TRADE

Position sizing unavailable
→ NO TRADE

News data unavailable for a news-sensitive instrument
→ NO NEW TRADE

Prop-firm configuration unavailable
→ NO TRADE

Spread unavailable
→ NO TRADE

Broker connection lost
→ NO NEW TRADE

Execution confirmation unavailable
→ controlled emergency handling

Unknown market state
→ NO TRADE

M5 breakout data unavailable
→ NO TRADE

M5 Fibonacci cannot be calculated reliably
→ NO TRADE

M5 retracement cannot be validated
→ NO TRADE

⸻

69. PROHIBITED STRATEGIES

Never implement:

* Martingale
* revenge trading
* uncontrolled grid recovery
* doubling after losses
* risk increases after losses
* uncontrolled averaging down
* fake fills
* fake profits
* future-data leakage
* backtest manipulation
* bypassing prop-firm rules
* bypassing risk limits
* bypassing news restrictions
* AI overriding hard safety controls

⸻

70. AI / MACHINE LEARNING

AI/ML is optional.

If used, it must NOT:

* increase risk
* bypass drawdown limits
* bypass compliance
* override trade-blocking rules
* create arbitrary trades
* modify the core strategy without authorization

Any adaptive system must be:

* bounded
* versioned
* logged
* backtested
* reversible

The deterministic strategy and risk engine remain authoritative.

⸻

71. CONFIGURATION

At minimum support:

RISK_PER_TRADE=0.25
DAY_MAX_DRAWDOWN=2
SWING_MAX_DRAWDOWN=3
POSITION_MAX_DRAWDOWN=4
DAY_MAX_TRADES=4
RSI_OVERSOLD=10
RSI_OVERBOUGHT=90
H4_FIB_ENTRY_MIN=50
H4_FIB_ENTRY_MAX=61.8
M5_FIB_ENTRY_MIN=50
M5_FIB_ENTRY_MAX=61.8
H4_SETUP_REQUIRED=true
H4_BREAKOUT_REQUIRED=true
H4_RETRACEMENT_REQUIRED=true
M5_EXECUTION_REQUIRED=true
M5_BREAKOUT_REQUIRED=true
M5_FIBONACCI_REQUIRED=true
M5_RETRACEMENT_REQUIRED=true
M5_FIB_ZONE_REQUIRED=true
M1_CONFIRMATION_REQUIRED=false
NEWS_TRADING_ALLOWED=false
NEWS_BLACKOUT_ENABLED=true
TRAILING_PROFIT_ENABLED=true
PAPER_TRADING=true

The final implementation must clearly expose these settings.

The H4 and M5 Fibonacci configuration must remain independently identifiable.

⸻

72. TRADING SESSIONS

Support:

* Asian
* London
* New York
* London/New York overlap
* custom sessions

Use UTC internally.

Correctly handle:

* broker time
* user time
* daylight saving
* market-specific schedules

For Synthetic Indices, do not force traditional Forex session restrictions unless explicitly configured.

⸻

73. WEEKEND RULES

For real-world markets:

Apply configured weekend and market-close rules.

For Synthetic Indices:

Do not automatically shut down simply because it is Saturday/Sunday.

The system must determine availability from the actual instrument/broker configuration.

⸻

74. FINAL TRADE GATE

Before every automatic trade, run this complete gate.

STRATEGY

[ ] Higher-timeframe context valid

[ ] H4 setup valid

[ ] H4 market structure valid

[ ] H4 BOS/CHoCH conditions valid where required

[ ] H4 breakout valid

[ ] H4 breakout not false

[ ] H4 Fibonacci valid

[ ] H4 retracement occurred

[ ] H4 50–61.8% zone reached

[ ] Supply/Demand valid

[ ] Ichimoku valid

[ ] RSI 10/90 condition valid

[ ] M5 structure valid

[ ] M5 breakout valid

[ ] M5 breakout not false

[ ] M5 Fibonacci valid

[ ] M5 retracement occurred

[ ] M5 50–61.8% zone reached

[ ] M5 Supply/Demand valid

[ ] M5 Ichimoku valid

[ ] M5 RSI 10/90 condition valid

[ ] M5 confirmation valid

RISK

[ ] SL valid

[ ] TP valid

[ ] Risk ≤ 0.25%

[ ] Position size correct

[ ] Drawdown limit not reached

[ ] Trade count allowed

[ ] Correlation/exposure allowed

MARKET

[ ] Market available

[ ] Data valid

[ ] Spread acceptable

[ ] Slippage acceptable

NEWS

For news-sensitive markets:

[ ] No active news blackout

For Deriv Synthetic Indices:

[ ] Do not apply unrelated real-world news blackout

COMPLIANCE

[ ] Broker rules pass

[ ] Prop-firm rules pass

[ ] Position limits pass

[ ] Lot limits pass

[ ] Overnight rules pass

[ ] Weekend rules pass

[ ] News restrictions pass

[ ] Strategy restrictions pass

SYSTEM

[ ] No duplicate setup

[ ] Setup not expired

[ ] Broker connected

[ ] Execution available

[ ] Risk engine operational

[ ] Position-management engine operational

If ANY mandatory condition fails:

NO TRADE.

⸻

75. DEVELOPMENT ARCHITECTURE

Use TypeScript as the preferred implementation language.

Recommended structure:

src/
├── core/
├── config/
├── strategy/
├── indicators/
├── market-structure/
├── breakout/
├── fibonacci/
│   ├── h4/
│   └── m5/
├── retracement/
│   ├── h4/
│   └── m5/
├── supply-demand/
├── scanner/
├── execution/
│   └── m5/
├── position-management/
├── trailing-profit/
├── risk/
├── drawdown/
├── correlation/
├── news/
├── compliance/
├── brokers/
│   ├── deriv/
│   ├── mt5/
│   └── ctrader/
├── data/
├── backtest/
├── alerts/
├── dashboard/
├── logging/
├── security/
└── tests/

The architecture must be modular.

⸻

76. TESTING

Create unit tests for:

* RSI
* Ichimoku
* H4 Fibonacci
* M5 Fibonacci
* H4 swing detection
* M5 swing detection
* market structure
* BOS
* CHoCH
* H4 breakout
* M5 breakout
* false breakout
* H4 retracement
* M5 retracement
* H4 50–61.8% zone
* M5 50–61.8% zone
* Supply/Demand
* M5 confirmation
* position sizing
* SL
* TP
* break-even
* trailing profit
* drawdown
* trade limits
* correlation
* spread
* slippage
* news blackout
* prop-firm compliance
* duplicate prevention
* setup expiry
* execution
* reconnection
* emergency handling

Create integration tests:

SCANNER

→ H4 STRATEGY

→ H4 BREAKOUT

→ H4 FIBONACCI

→ H4 RETRACEMENT

→ M5 BREAKOUT

→ M5 FIBONACCI

→ M5 RETRACEMENT

→ M5 CONFIRMATION

→ RISK

→ NEWS

→ COMPLIANCE

→ BROKER

→ EXECUTION

→ POSITION MANAGEMENT

→ TRAILING PROFIT

→ CLOSE

⸻

77. DEVELOPMENT PHASES

Build in this order:

PHASE 1

Architecture

PHASE 2

Configuration

PHASE 3

Market-data engine

PHASE 4

Indicators

PHASE 5

Market structure

PHASE 6

H4 setup engine

PHASE 7

H4 breakout engine

PHASE 8

H4 Fibonacci engine

PHASE 9

H4 retracement engine

PHASE 10

Supply/Demand engine

PHASE 11

M5 market structure engine

PHASE 12

M5 breakout engine

PHASE 13

M5 Fibonacci engine

PHASE 14

M5 retracement engine

PHASE 15

M5 execution/confirmation engine

PHASE 16

Strategy qualification engine

PHASE 17

Risk engine

PHASE 18

Drawdown engine

PHASE 19

News engine

PHASE 20

Correlation engine

PHASE 21

Prop-firm compliance

PHASE 22

Broker adapters

PHASE 23

Deriv Synthetic Indices adapter

PHASE 24

Execution engine

PHASE 25

Position management

PHASE 26

Trailing-profit engine

PHASE 27

Scanner

PHASE 28

Alerts

PHASE 29

Dashboard

PHASE 30

Backtesting

PHASE 31

Walk-forward testing

PHASE 32

Unit tests

PHASE 33

Integration tests

PHASE 34

Paper trading

PHASE 35

Live-trading safety verification

⸻

78. REQUIRED DELIVERABLES

The coding AI must provide:

1. Complete source code
2. Complete project structure
3. Configuration files
4. Environment example
5. Strategy engine
6. Market scanner
7. H4 setup engine
8. H4 breakout engine
9. H4 Fibonacci engine
10. H4 retracement engine
11. M5 execution engine
12. M5 breakout engine
13. M5 Fibonacci engine
14. M5 retracement engine
15. M5 confirmation engine
16. Risk engine
17. Drawdown engine
18. News engine
19. Prop-firm compliance engine
20. Deriv integration
21. Broker adapters
22. Trailing-profit engine
23. Position-management engine
24. Alert system
25. Dashboard
26. Backtesting engine
27. Testing suite
28. Documentation
29. Installation instructions
30. Configuration instructions
31. Paper-trading instructions
32. Live-trading instructions
33. Troubleshooting guide

⸻

79. PLAIN-ENGLISH DOCUMENTATION

After coding, explain the system in simple language.

Explain:

* how the scanner works
* how H4 determines the setup
* how H4 market structure works
* how H4 BOS works
* how H4 CHoCH works
* how H4 breakout works
* how false breakout is detected
* how H4 Fibonacci is calculated
* why 50–61.8% is important
* how H4 retracement works
* how Supply/Demand works
* how Ichimoku works
* how RSI 10/90 works
* how M5 market structure works
* how M5 breakout works
* how M5 Fibonacci is calculated
* how M5 retracement works
* how M5 50–61.8% works
* how M5 Supply/Demand works
* how M5 Ichimoku works
* how M5 RSI 10/90 works
* how M5 confirmation works
* why both H4 and M5 Fibonacci are required
* why the bot does not enter immediately after the H4 breakout
* why the bot does not enter immediately after the M5 breakout
* how SL is calculated
* how TP is calculated
* how position sizing works
* how 0.25% risk works
* how drawdown protection works
* how news blocking works
* how Synthetic Indices are handled
* how prop-firm compliance works
* how trailing profit works
* how alerts work
* how backtesting works

Use layman’s language without losing technical accuracy.

⸻

80. COMPLETE SIMULATED TRADE EXAMPLE

The coding AI must demonstrate at least one complete example.

Example:

MARKET:
EURUSD
MODE:
Swing
DIRECTION:
LONG
H4:
Bullish structure
H4 BREAKOUT:
Confirmed
H4 FIBONACCI:
Correctly mapped
H4 RETRACEMENT:
Confirmed
H4 ENTRY ZONE:
50–61.8%
H4 SUPPLY/DEMAND:
Demand confirmed
H4 ICHIMOKU:
Bullish
H4 RSI:
10 extreme condition satisfied according to configuration
M5:
Execution structure confirmed
M5 BREAKOUT:
Confirmed
M5 FIBONACCI:
Correctly mapped
M5 RETRACEMENT:
Confirmed
M5 ENTRY ZONE:
50–61.8%
M5 SUPPLY/DEMAND:
Demand reaction confirmed
M5 ICHIMOKU:
Bullish
M5 RSI:
Required condition satisfied
M5 CONFIRMATION:
Valid
NEWS:
No active news blackout
RISK:
0.25%
SL:
Structural invalidation
TP:
Configured target
PROP-FIRM:
PASS
BROKER:
PASS
EXECUTION:
PASS

Then demonstrate:

Trade reaches +1R

↓

Trailing profit activates

↓

SL protects part of the profit

↓

Price continues

↓

Trailing SL advances

↓

Trade closes

↓

Final result is recorded

The example must clearly demonstrate that both H4 and M5 completed their respective breakout/Fibonacci/retracement processes before the trade was executed.

⸻

81. COMPLETE BLOCKED-TRADE EXAMPLE

Example:

MARKET:
GBPUSD
DIRECTION:
LONG
H4:
PASS
H4 BREAKOUT:
PASS
H4 FIBONACCI:
PASS
H4 RETRACEMENT:
PASS
H4 50–61.8%:
PASS
SUPPLY/DEMAND:
PASS
ICHIMOKU:
PASS
RSI:
PASS
M5 BREAKOUT:
PASS
M5 FIBONACCI:
PASS
M5 RETRACEMENT:
PASS
M5 50–61.8%:
PASS
M5 CONFIRMATION:
PASS
RISK:
PASS
NEWS:
FAIL
DECISION:
NO TRADE
REASON:
Configured news blackout is active.

This is correct behavior.

⸻

82. COMPLETE SYNTHETIC-INDEX EXAMPLE

Example:

MARKET:
DERIV SYNTHETIC INDEX
MODE:
Swing
H4:
PASS
H4 STRUCTURE:
PASS
H4 BREAKOUT:
PASS
H4 FIBONACCI:
PASS
H4 RETRACEMENT:
PASS
H4 50–61.8%:
PASS
M5 STRUCTURE:
PASS
M5 BREAKOUT:
PASS
M5 FIBONACCI:
PASS
M5 RETRACEMENT:
PASS
M5 50–61.8%:
PASS
SUPPLY/DEMAND:
PASS
ICHIMOKU:
PASS
RSI:
PASS
M5 CONFIRMATION:
PASS
RISK:
PASS
DRAWDOWN:
PASS
NEWS:
NOT APPLICABLE AS A REAL-WORLD NEWS DRIVER
DERIV:
PASS
PROP-FIRM:
PASS
EXECUTION:
PASS

Then execute only if every configured condition passes.

⸻

83. FINAL SYSTEM PHILOSOPHY

The finished bot must behave like a disciplined professional trading machine.

It should:

SCAN BROADLY

WAIT PATIENTLY

VALIDATE STRICTLY

REQUIRE H4 BREAKOUT + RETRACEMENT

REQUIRE H4 50–61.8%

REQUIRE M5 BREAKOUT

REQUIRE M5 FIBONACCI

REQUIRE M5 RETRACEMENT

REQUIRE M5 50–61.8%

ENTER SELECTIVELY

RISK ONLY 0.25%

AVOID NEWS TRADING

PROTECT CAPITAL

PROTECT PROFITS

TRAIL WINNING POSITIONS INTELLIGENTLY

RESPECT BROKER RULES

RESPECT PROP-FIRM RULES

SUPPORT DERIV SYNTHETIC INDICES

LOG EVERYTHING

NEVER FORCE A TRADE

⸻

84. ABSOLUTE FINAL RULES

These rules are NON-NEGOTIABLE.

TIMEFRAME

M5 = PRIMARY EXECUTION

M1 = REMOVED

RSI

RSI 10 = EXTREME OVERSOLD

RSI 90 = EXTREME OVERBOUGHT

H4 SETUP

BREAKOUT

→ FIBONACCI

→ RETRACEMENT

→ 50–61.8%

M5 EXECUTION

BREAKOUT

→ FIBONACCI

→ RETRACEMENT

→ 50–61.8%

→ SUPPLY/DEMAND

→ ICHIMOKU

→ RSI 10/90

→ M5 CONFIRMATION

→ ENTRY

COMPLETE ENTRY FLOW

H4 CONTEXT

↓

H4 SETUP

↓

H4 BREAKOUT

↓

H4 FIBONACCI

↓

H4 RETRACEMENT

↓

H4 50–61.8% ZONE

↓

M5 STRUCTURE

↓

M5 BREAKOUT

↓

M5 FIBONACCI

↓

M5 RETRACEMENT

↓

M5 50–61.8% ZONE

↓

M5 SUPPLY/DEMAND

↓

M5 ICHIMOKU

↓

M5 RSI 10/90

↓

M5 CONFIRMATION

↓

RISK

↓

DRAWDOWN

↓

NEWS

↓

CORRELATION

↓

PROP-FIRM

↓

BROKER

↓

EXECUTE

RISK

0.25% PER TRADE

DRAWDOWN

DAY = 2%

SWING = 3%

POSITION = 4%

DAY

MAXIMUM 4 TRADES PER DAY

SWING

ONE OPEN TRADE

POSITION

ONE OPEN TRADE

NEWS

DO NOT TRADE NEWS.

Real-world news-sensitive instruments must respect the configured news blackout.

Deriv Synthetic Indices must not be incorrectly blocked by unrelated real-world news because their prices are simulated and not driven by external news.

DERIV

Deriv Synthetic Indices must be supported through a proper broker/data adapter.

PROFIT

Trailing profit must be supported.

SAFETY

NO MARTINGALE.

NO REVENGE TRADING.

NO DOUBLING LOSSES.

NO UNCONTROLLED RECOVERY.

NO RISK INCREASE AFTER LOSSES.

NO FUTURE-DATA LEAKAGE.

NO FAKE BACKTESTING.

NO BYPASSING PROP-FIRM RULES.

NO BYPASSING NEWS RESTRICTIONS.

NO BYPASSING HARD RISK CONTROLS.

NO DUPLICATE TRADES.

NO BREAKOUT CHASING.

NO ENTRY BEFORE REQUIRED RETRACEMENT.

NO ENTRY WITHOUT M5 FIBONACCI.

NO ENTRY WITHOUT M5 RETRACEMENT.

NO ENTRY WITHOUT M5 50–61.8% EXECUTION ZONE.

NO PARTIAL SETUPS.

⸻

85. FINAL COMMAND

Build this as a serious professional automated trading platform.

Do NOT produce merely a conceptual explanation.

Do NOT produce a toy bot.

Do NOT remove strategy components.

Do NOT silently modify the user’s strategy.

Do NOT replace RSI 10/90.

Do NOT replace Fibonacci 50–61.8%.

Do NOT remove H4 breakout + retracement.

Do NOT remove M5 breakout + retracement.

Do NOT remove M5 Fibonacci.

Do NOT remove M5 50–61.8% execution zone.

Do NOT add M1 confirmation.

Do NOT allow news trading.

Do NOT remove Supply/Demand.

Do NOT remove Ichimoku.

Do NOT remove market structure.

Do NOT remove H4 setup analysis.

Do NOT remove M5 execution.

Do NOT remove the 0.25% risk rule.

Do NOT remove Day/Swing/Position modes.

Do NOT remove drawdown protection.

Do NOT remove the Day 4-trade limit.

Do NOT remove the one-open-trade rule for Swing.

Do NOT remove the one-open-trade rule for Position.

Do NOT remove prop-firm compliance.

Do NOT remove Deriv Synthetic Index support.

Do NOT remove trailing profit.

Do NOT bypass safety controls.

Do NOT create duplicate trades.

Do NOT chase breakouts.

Do NOT enter before the required retracement.

Do NOT enter immediately after an H4 breakout.

Do NOT enter immediately after an M5 breakout.

Do NOT skip M5 Fibonacci.

Do NOT skip M5 retracement.

Do NOT skip the M5 50–61.8% zone.

Do NOT trade a partial setup.

Do NOT trade simply because one indicator agrees.

The final decision must always follow:

SCOUT

↓

ANALYZE

↓

HIGHER-TIMEFRAME CONTEXT

↓

H4 SETUP

↓

H4 STRUCTURE

↓

H4 VALID BREAKOUT

↓

H4 FIBONACCI

↓

H4 RETRACEMENT

↓

H4 50–61.8% ZONE

↓

M5 STRUCTURE

↓

M5 VALID BREAKOUT

↓

M5 FIBONACCI

↓

M5 RETRACEMENT

↓

M5 50–61.8% ZONE

↓

M5 SUPPLY/DEMAND

↓

M5 ICHIMOKU

↓

M5 RSI 10/90

↓

M5 CONFIRMATION

↓

RISK CHECK

↓

DRAWDOWN CHECK

↓

NEWS CHECK

↓

CORRELATION CHECK

↓

PROP-FIRM CHECK

↓

BROKER CHECK

↓

EXECUTE

↓

MANAGE

↓

BREAK-EVEN / TRAILING PROFIT

↓

CLOSE

↓

AUDIT LOG

ONLY EXECUTE WHEN ALL MANDATORY REQUIREMENTS PASS.

Build the system as a PROFESSIONAL, DISCIPLINED, RISK-CONTROLLED AUTOMATED TRADING PLATFORM — NOT AS A SIMPLE TRADING SCRIPT.

The final implementation must preserve the strategy exactly as specified while making every condition deterministic, testable, auditable, and safe for automation.

⸻

86. PROFESSIONAL PRODUCTION DEPLOYMENT

The completed trading platform must be designed to run continuously in a professional production environment.

The system must NOT depend on a personal laptop remaining powered on.

It must support deployment to:

* VPS
* Cloud Virtual Machine
* Dedicated Server
* Cloud Server
* Docker environment
* Docker Compose environment
* Linux server
* Windows server where broker/API requirements require it

The architecture must separate:

TRADING LOGIC

from

SERVER/DEPLOYMENT ENVIRONMENT.

The same strategy engine must be deployable locally for development/testing and remotely for 24/7 production operation.

The deployment environment must NOT change the trading strategy.

⸻

87. VPS SUPPORT

The bot MUST be VPS-ready.

A properly configured VPS must be capable of running the system continuously for:

* 24 hours
* 7 days
* long-term unattended operation

The VPS deployment must support:

* automatic startup
* automatic restart
* process monitoring
* persistent configuration
* persistent trading state
* persistent logs
* broker/API reconnection
* network failure recovery
* application crash recovery
* system health monitoring
* resource monitoring
* secure credential management

The bot must NOT assume that a desktop computer is always available.

The VPS must be treated as a production execution environment.

⸻

88. CLOUD SERVER SUPPORT

The architecture must also support deployment to cloud infrastructure such as:

* AWS
* Microsoft Azure
* Google Cloud
* DigitalOcean
* Hetzner
* Oracle Cloud
* other compatible cloud providers

Do NOT hard-code the application to a specific cloud provider.

The application should use environment variables and configuration files so that it can be moved between supported environments without rewriting the trading strategy.

Cloud deployment must preserve:

* strategy state
* setup state
* open-position state
* risk state
* drawdown state
* trade counters
* audit logs
* broker connection state
* recovery state

⸻

89. DOCKER SUPPORT

Provide Docker support for production deployment.

Create where appropriate:

* Dockerfile
* docker-compose.yml
* production environment configuration
* development environment configuration
* health checks
* persistent volumes
* logging configuration
* restart policies

Docker containers must NOT store critical trading state only inside the temporary container filesystem.

Persistent information must use appropriate persistent storage.

The Docker deployment must support automatic restart after:

* application crash
* container failure
* server restart

Do NOT allow automatic container restart to accidentally create duplicate trades.

⸻

90. PROCESS MANAGEMENT

The production system must use a reliable process supervisor.

Support an appropriate production process manager such as:

* PM2
* systemd
* Docker restart policies
* another reliable process supervisor

The exact implementation may depend on the deployment environment.

The process manager must support:

* automatic startup
* automatic restart
* graceful shutdown
* crash recovery
* health checks
* log management
* controlled deployment
* safe shutdown handling

A restart must NEVER reset:

* daily trade count
* drawdown state
* active setup IDs
* setup states
* open-trade records
* risk state
* position-management state
* trailing-profit state

⸻

91. 24/7 UNATTENDED OPERATION

The bot must be capable of operating unattended.

The production system must continuously:

SCAN

→ ANALYZE

→ TRACK SETUPS

→ MONITOR POSITIONS

→ MANAGE RISK

→ MANAGE SL/TP

→ MANAGE BREAK-EVEN

→ MANAGE TRAILING PROFIT

→ LOG

→ MONITOR HEALTH

The system must NOT require manual restarting after normal:

* network interruptions
* broker disconnections
* API disconnections
* temporary data-feed interruptions
* application crashes
* server reboots

Recovery must be controlled and safe.

⸻

92. RECONNECTION ENGINE

Implement robust reconnection handling.

The system must detect:

* broker connection loss
* WebSocket disconnection
* REST/API failure
* market-data disconnection
* stale market data
* authentication expiration
* temporary network failure
* rate-limit responses
* server-side API errors

After disconnection:

1. Stop opening new trades.
2. Preserve current internal state.
3. Attempt controlled reconnection.
4. Re-authenticate where necessary.
5. Re-sync account state.
6. Re-sync open positions.
7. Re-sync orders.
8. Re-sync SL/TP.
9. Re-sync active setups.
10. Reconcile broker state with local state.
11. Validate risk state.
12. Resume trading only when all safety conditions pass.

Never blindly resume trading after reconnection.

⸻

93. BROKER-STATE RECONCILIATION

After every restart or reconnection, the system must compare:

LOCAL STATE

against

BROKER STATE.

Check:

* open positions
* pending orders
* position size
* entry price
* SL
* TP
* trade ID
* broker order ID
* setup ID where available
* trailing state
* break-even state

If a discrepancy exists:

DO NOT OPEN A NEW TRADE.

Enter:

STATE RECONCILIATION MODE.

Resolve or safely report the discrepancy before normal automated execution resumes.

This is mandatory to prevent duplicate trades.

⸻

94. CRASH RECOVERY

If the application crashes while a trade is open:

The system must NOT assume that the position is closed.

After restarting:

1. Connect to broker.
2. Retrieve actual account state.
3. Retrieve actual open positions.
4. Retrieve actual SL/TP.
5. Retrieve actual order information.
6. Reconstruct trade-management state.
7. Reconstruct trailing-profit state where possible.
8. Reconstruct break-even state where possible.
9. Verify protection.
10. Resume position management.

The broker’s actual state must be treated as authoritative for live positions.

⸻

95. SERVER RESTART RECOVERY

If the VPS/cloud server restarts:

The application must automatically restart.

After restart:

RECOVER STATE

↓

CONNECT BROKER

↓

RECONCILE POSITIONS

↓

RECONCILE ORDERS

↓

RECONCILE SETUPS

↓

RECALCULATE RISK STATE

↓

VERIFY PROTECTION

↓

VERIFY MARKET DATA

↓

VERIFY NEWS STATE WHERE APPLICABLE

↓

VERIFY COMPLIANCE

↓

RESUME ONLY IF SAFE

A server restart must NOT reset the Day trade counter or bypass any risk restriction.

⸻

96. PERSISTENT STORAGE

Critical state must survive:

* application restart
* container restart
* VPS restart
* server reboot
* deployment restart

Persist at minimum:

* setup IDs
* setup states
* trade history
* Day trade counter
* drawdown state
* open-trade records
* broker order IDs
* position IDs
* trailing state
* break-even state
* configuration version
* audit logs
* system events
* recovery events

Use an appropriate database or persistent storage system.

Do NOT rely exclusively on in-memory variables for safety-critical state.

⸻

97. DATABASE SAFETY

The database layer must support:

* transactions
* indexes
* timestamps
* unique identifiers
* duplicate protection
* safe concurrent access
* recovery after restart
* data validation
* backups

Critical operations must be designed to prevent:

* duplicate trade records
* duplicate setup execution
* corrupted state
* inconsistent position state

Database failures must fail safely.

If critical persistent state cannot be trusted:

NO NEW TRADE.

⸻

98. WATCHDOG / HEALTH MONITOR

Implement a system health monitor.

Monitor:

* application process
* CPU usage
* memory usage
* disk usage
* network connectivity
* broker connectivity
* market-data freshness
* API health
* database health
* news-service health
* execution engine health
* risk engine health
* position-management health

The system should expose an overall health state:

HEALTHY

DEGRADED

WARNING

CRITICAL

TRADING BLOCKED

If a critical component becomes unhealthy:

BLOCK NEW TRADES.

Existing positions must continue to receive safe management where possible.

⸻

99. HEARTBEAT SYSTEM

Implement application heartbeats.

The bot should periodically confirm that:

* the application is alive
* market data is updating
* broker connection is alive
* risk engine is operating
* position management is operating
* database is accessible

If the heartbeat becomes stale:

TRADING MUST BE BLOCKED.

The system must generate an alert.

⸻

100. RESOURCE PROTECTION

The production application must monitor resource usage.

Protect against:

* memory leaks
* uncontrolled CPU usage
* disk exhaustion
* unlimited log growth
* runaway retries
* excessive API requests
* excessive WebSocket reconnects
* excessive order modifications

Implement appropriate:

* rate limiting
* retry limits
* exponential backoff where appropriate
* log rotation
* resource monitoring
* connection limits

Never create an infinite retry loop.

⸻

101. LOGGING & LOG ROTATION

Production logging must support:

* application logs
* strategy logs
* trade logs
* broker logs
* error logs
* security logs
* audit logs
* recovery logs
* deployment logs

Logs must include timestamps and useful identifiers.

Implement log rotation so that logs cannot consume the entire server disk.

Never write:

* passwords
* API secrets
* private keys
* authentication tokens

into logs.

⸻

102. MONITORING & ALERTS

The production deployment must be able to alert the user when:

* bot starts
* bot stops
* bot crashes
* bot restarts
* broker disconnects
* broker reconnects
* API fails
* market data becomes stale
* database fails
* trading becomes blocked
* risk engine fails
* execution fails
* position protection fails
* VPS/server health becomes critical
* disk space becomes low
* memory becomes critically high
* unexpected position is detected
* state reconciliation fails

The system must clearly communicate:

SYSTEM HEALTH

and

TRADING STATUS.

⸻

103. SAFE STARTUP PROCEDURE

Every startup must follow:

START APPLICATION

↓

LOAD CONFIGURATION

↓

VALIDATE CONFIGURATION

↓

LOAD PERSISTENT STATE

↓

CONNECT TO BROKER

↓

VERIFY ACCOUNT

↓

VERIFY OPEN POSITIONS

↓

VERIFY ORDERS

↓

VERIFY MARKET DATA

↓

VERIFY RISK ENGINE

↓

VERIFY DRAWDOWN STATE

↓

VERIFY COMPLIANCE

↓

VERIFY NEWS ENGINE WHERE REQUIRED

↓

RECONCILE STATE

↓

RUN SYSTEM HEALTH CHECK

↓

ENABLE SCANNING

Only after all mandatory startup checks pass may the bot open new trades.

If any critical check fails:

TRADING BLOCKED.

⸻

104. SAFE SHUTDOWN PROCEDURE

The system must support graceful shutdown.

Before shutdown:

* stop new trade execution
* finish current critical operations
* preserve state
* save active setup state
* save risk state
* save trade-management state
* save trailing state
* save broker identifiers
* flush logs
* close non-essential connections

Do NOT automatically close an existing position merely because the application is shutting down unless explicitly configured.

The goal is:

SAFE STOP

not

FORCED TRADE CLOSURE.

⸻

105. DEPLOYMENT CONFIGURATION

Provide:

* .env.example
* production configuration example
* development configuration example
* Dockerfile
* Docker Compose configuration where appropriate
* deployment documentation
* VPS setup instructions
* cloud deployment instructions
* database setup instructions
* backup instructions
* monitoring instructions
* restart instructions
* recovery instructions

Never include real credentials.

⸻

106. ENVIRONMENT SEPARATION

Clearly separate:

DEVELOPMENT

PAPER/DEMO

and

LIVE PRODUCTION.

A development configuration must NEVER accidentally connect to a live account.

A paper-trading environment must NEVER accidentally execute live orders.

Live trading must require explicit activation.

Use multiple safety layers such as:

ENVIRONMENT=development

ENVIRONMENT=paper

ENVIRONMENT=production

LIVE_TRADING_ENABLED=false

and equivalent safeguards.

The exact variable names may be improved by the implementation, but the principle is mandatory.

⸻

107. LIVE-TRADING ACTIVATION

Live trading must require explicit activation.

For example:

PAPER_TRADING=true

must be the default.

Live trading should require deliberate configuration such as:

PAPER_TRADING=false

AND

LIVE_TRADING_ENABLED=true

AND

valid broker credentials

AND

all system health checks passing.

The system must clearly display:

LIVE TRADING ENABLED

when live trading is actually active.

Never silently switch from paper to live mode.

⸻

108. BACKUP & RECOVERY

Implement automated backup procedures for critical persistent information.

Back up:

* trade history
* setup history
* audit logs
* configuration
* database
* risk state
* system state

Backups must NOT contain exposed secrets unless securely encrypted.

Support recovery from:

* database corruption
* server failure
* VPS failure
* accidental deployment failure

A backup must not be treated as valid unless it can be restored successfully.

⸻

109. DEPLOYMENT ROLLBACK

Production deployments must support controlled rollback.

Before deploying a new version:

1. Record current version.
2. Back up critical state.
3. Validate new version.
4. Deploy new version.
5. Run health checks.
6. Verify broker connection.
7. Verify position reconciliation.
8. Verify strategy engine.
9. Verify risk engine.

If the new version is unsafe:

ROLL BACK.

Never deploy a new version that bypasses risk controls.

⸻

110. VERSIONED STRATEGY

Every production deployment must identify:

* software version
* strategy version
* configuration version
* database schema version

Every trade and setup record should be traceable to the version that generated it.

Do NOT silently change strategy behavior between versions.

Any strategy change must be:

* documented
* versioned
* tested
* backtested where appropriate
* logged

⸻

111. TIME SYNCHRONIZATION

The production server must maintain accurate system time.

Use UTC internally.

The system must detect significant clock drift.

Accurate time is required for:

* candle timestamps
* news events
* trading sessions
* setup expiry
* drawdown calculations
* trade limits
* audit logs
* broker communication

If system time is unreliable:

NO NEW TRADE.

⸻

112. NETWORK SECURITY

Production deployment must use secure network practices.

Where applicable:

* HTTPS
* secure WebSockets
* TLS
* firewall
* restricted ports
* SSH key authentication
* disabled unnecessary services
* least-privilege accounts
* secure environment variables
* secret rotation

Never expose the trading API or dashboard unnecessarily to the public internet.

The dashboard must use authentication.

⸻

113. DASHBOARD PRODUCTION SECURITY

If the dashboard is remotely accessible, implement:

* authentication
* authorization
* secure sessions
* HTTPS
* protected API endpoints
* rate limiting
* audit logging

A dashboard user must NOT be able to bypass:

* risk limits
* prop-firm restrictions
* news restrictions
* execution safeguards

UI controls must never override hard safety rules.

⸻

114. DEPLOYMENT HEALTH CHECK

After deployment, automatically verify:

[ ] Application running

[ ] Database available

[ ] Broker connection available

[ ] Market data available

[ ] Candle synchronization working

[ ] Strategy engine operational

[ ] Risk engine operational

[ ] Drawdown engine operational

[ ] News engine operational where required

[ ] Compliance engine operational

[ ] Execution engine operational

[ ] Position management operational

[ ] Trailing-profit engine operational

[ ] Alerts operational

[ ] Persistent storage operational

[ ] Backup system operational

[ ] Monitoring operational

[ ] System clock synchronized

[ ] No unexpected live position

[ ] No duplicate setup execution

Only after successful verification:

SYSTEM READY.

⸻

115. PRODUCTION FAILURE POLICY

The system must follow this principle:

WHEN IN DOUBT:

DO NOT OPEN A NEW TRADE.

Examples:

Unknown broker state
→ NO NEW TRADE

Unknown risk state
→ NO NEW TRADE

Unknown position state
→ NO NEW TRADE

Unknown setup state
→ NO NEW TRADE

Stale market data
→ NO NEW TRADE

Database unavailable
→ NO NEW TRADE

Risk engine unavailable
→ NO NEW TRADE

Execution engine unhealthy
→ NO NEW TRADE

Critical configuration invalid
→ NO NEW TRADE

System health critical
→ NO NEW TRADE

The system must prioritize:

CAPITAL PROTECTION

over

SYSTEM AVAILABILITY

A temporary missed trade is acceptable.

An uncontrolled trade is not.

⸻

116. FINAL DEPLOYMENT PHILOSOPHY

The completed system must be capable of operating as:

LOCAL DEVELOPMENT SYSTEM

↓

PAPER/DEMO SYSTEM

↓

VPS PRODUCTION SYSTEM

↓

CLOUD PRODUCTION SYSTEM

↓

DOCKERIZED PRODUCTION SYSTEM

without changing the underlying trading strategy.

The deployment environment is an engineering layer.

It must NEVER modify:

* H4 strategy
* H4 breakout
* H4 Fibonacci
* H4 retracement
* H4 50–61.8%
* M5 structure
* M5 breakout
* M5 Fibonacci
* M5 retracement
* M5 50–61.8%
* Supply/Demand
* Ichimoku
* RSI 10/90
* 0.25% risk
* drawdown limits
* news restrictions
* prop-firm restrictions
* broker restrictions
* trailing-profit rules
* safety controls

The strategy remains exactly as defined in Sections 1–85.

⸻

117. ADDITIONAL ABSOLUTE PRODUCTION RULES

NON-NEGOTIABLE:

VPS SUPPORT = REQUIRED

CLOUD DEPLOYMENT SUPPORT = REQUIRED

DOCKER SUPPORT = REQUIRED

24/7 OPERATION = REQUIRED

AUTOMATIC RESTART = REQUIRED

BROKER RECONNECTION = REQUIRED

STATE PERSISTENCE = REQUIRED

BROKER-STATE RECONCILIATION = REQUIRED

CRASH RECOVERY = REQUIRED

SERVER RESTART RECOVERY = REQUIRED

HEALTH MONITORING = REQUIRED

HEARTBEAT = REQUIRED

LOG ROTATION = REQUIRED

BACKUPS = REQUIRED

ROLLBACK = REQUIRED

VERSIONING = REQUIRED

SECURE CREDENTIAL MANAGEMENT = REQUIRED

PAPER TRADING BY DEFAULT = REQUIRED

LIVE TRADING EXPLICITLY ACTIVATED = REQUIRED

FAIL-SAFE NEW-TRADE BLOCKING = REQUIRED

NO DUPLICATE EXECUTION AFTER RESTART = REQUIRED

NO RESETTING RISK LIMITS AFTER RESTART = REQUIRED

NO RESETTING TRADE COUNTERS AFTER RESTART = REQUIRED

NO RESETTING DRAWDOWN STATE AFTER RESTART = REQUIRED

NO BYPASSING SAFETY CONTROLS = REQUIRED

The final product must be suitable for deployment on a properly configured VPS or cloud server and must be engineered as a continuously running production system rather than a script that only works while a developer’s computer is open.

⸻

118. FINAL PRODUCTION COMMAND

After implementing the entire trading strategy from Sections 1–85, implement the production infrastructure from Sections 86–117.

DO NOT MODIFY THE ORIGINAL STRATEGY.

DO NOT REMOVE ANY ORIGINAL REQUIREMENT.

DO NOT SIMPLIFY ANY ORIGINAL REQUIREMENT.

DO NOT REPLACE THE H4 + M5 BREAKOUT/RETRACEMENT/FIBONACCI SYSTEM.

DO NOT ADD M1.

DO NOT ENABLE NEWS TRADING.

DO NOT REMOVE DERIV SUPPORT.

DO NOT REMOVE TRAILING PROFIT.

DO NOT REMOVE PROP-FIRM COMPLIANCE.

DO NOT REMOVE RISK CONTROLS.

DO NOT REMOVE FAIL-SAFE BEHAVIOR.

The final architecture must provide:

STRATEGY

RISK ENGINE

MARKET DATA

BROKER INTEGRATION

EXECUTION ENGINE

POSITION MANAGEMENT

TRAILING PROFIT

SCANNER

DASHBOARD

AUDIT LOG

BACKTESTING

TESTING

VPS DEPLOYMENT

CLOUD DEPLOYMENT

DOCKER DEPLOYMENT

PERSISTENT STATE

RECONNECTION

RECOVERY

MONITORING

SECURITY

BACKUPS

ROLLBACK

24/7 OPERATION

The result must be a serious, production-grade automated trading platform capable of running continuously while preserving the exact trading strategy defined in Sections 1–85.

The trading strategy is authoritative.

The risk engine is authoritative.

The safety engine is authoritative.

The deployment layer exists to keep the system running reliably — never to bypass or alter the strategy.

FINAL PRINCIPLE:

IF THE SYSTEM CANNOT SAFELY VERIFY THE STATE,

DO NOT TRADE.

IF THE SYSTEM CANNOT SAFELY CALCULATE THE RISK,

DO NOT TRADE.

IF THE SYSTEM CANNOT SAFELY VERIFY THE BROKER,

DO NOT TRADE.

IF THE SYSTEM CANNOT SAFELY VERIFY THE STRATEGY,

DO NOT TRADE.

IF THE SYSTEM CANNOT SAFELY VERIFY THE M5 EXECUTION SETUP,

DO NOT TRADE.

CAPITAL PROTECTION ALWAYS COMES FIRST.

119. PROFESSIONAL EXECUTION, DATA-INTEGRITY & DISASTER-RECOVERY ENGINE

The system must implement a professional execution, data-integrity, and disaster-recovery layer.

This layer must NOT modify, weaken, replace, reinterpret, or override the trading strategy defined in Sections 1–118.

Its purpose is to ensure that the existing strategy is executed accurately, safely, consistently, and reliably in real-world production conditions.

The system must prioritize:

* Capital protection
* Correct execution
* Accurate market data
* Correct position sizing
* Broker-rule compliance
* State consistency
* Duplicate-trade prevention
* Disaster recovery
* Deterministic behavior
* Full auditability

If the system cannot safely verify a critical condition, it must not open a new trade.

⸻

120. BROKER ORDER-SEMANTICS ENGINE

The system must never assume that every broker behaves identically.

Before trading an instrument, dynamically determine and validate the broker’s actual trading specifications, including:

* Market-order behavior
* Limit-order behavior
* Stop-order behavior
* Minimum order size
* Maximum order size
* Order-size increment
* Tick size
* Tick value
* Contract size
* Price precision
* Volume precision
* Minimum stop distance
* Freeze level
* Margin requirements
* Leverage
* Hedging/netting behavior
* Position modification rules
* SL/TP requirements
* Trading-session restrictions
* Instrument-specific restrictions
* Partial-fill behavior
* Order rejection behavior
* Cancellation behavior
* Position-close behavior

Never assume Forex, Gold, Crypto, Stock Indices, Commodities, or Deriv Synthetic Indices share identical execution rules.

If required broker specifications cannot be reliably obtained:

NO NEW TRADE.

⸻

121. ATOMIC TRADE EXECUTION ENGINE

Every trade must follow a controlled execution sequence:

SCAN

→ QUALIFY

→ VERIFY

→ LOCK SETUP

→ VALIDATE MARKET DATA

→ VALIDATE BROKER SPECIFICATIONS

→ CALCULATE RISK

→ CALCULATE POSITION SIZE

→ VALIDATE SPREAD

→ VALIDATE SLIPPAGE

→ VALIDATE DRAWDOWN

→ VALIDATE PROP-FIRM RULES

→ VALIDATE NEWS CONDITIONS

→ VALIDATE EXPOSURE

→ FINAL TRADE GATE

→ SUBMIT ORDER

→ VERIFY BROKER RESPONSE

→ VERIFY POSITION

→ VERIFY SL/TP

→ RECORD TRADE

→ RELEASE EXECUTION LOCK

No trade may bypass this sequence.

⸻

122. DUPLICATE-TRADE PROTECTION

The system must prevent duplicate orders caused by:

* Multiple scanner cycles
* Multiple WebSocket messages
* Repeated signals
* Network retries
* API retries
* Application restarts
* Broker response delays
* Race conditions
* Multiple worker processes
* Server failover
* Duplicate candle processing

Every setup must have a unique:

* Setup ID
* Signal ID
* Execution ID
* Trade ID
* Broker order ID
* Broker position ID where available

Order submission must be idempotent whenever supported.

If the system cannot determine whether an order was successfully submitted:

DO NOT SUBMIT ANOTHER ORDER UNTIL BROKER STATE IS VERIFIED.

⸻

123. EXECUTION LOCK ENGINE

Only one execution process may control a specific setup at a time.

The system must implement execution locking to prevent:

* Duplicate entries
* Concurrent order submission
* Conflicting position modifications
* Multiple trailing engines modifying the same position
* Multiple server instances executing the same trade

If an execution lock cannot be safely acquired:

NO NEW TRADE.

Locks must automatically recover safely after crashes without creating duplicate orders.

⸻

124. PROFESSIONAL POSITION-SIZING ENGINE

The 0.25% risk-per-trade rule must be implemented mathematically and not merely described as a configuration value.

Position size must consider:

* Account equity
* Available balance
* Free margin
* Entry price
* Stop-loss price
* Stop-loss distance
* Tick size
* Tick value
* Contract size
* Currency conversion
* Minimum volume
* Maximum volume
* Volume increment
* Commission
* Expected slippage
* Broker-specific specifications

The system must calculate the maximum permitted position size required to maintain the configured risk.

If exact risk cannot be reliably calculated:

NO TRADE.

The system must never increase position size simply because previous trades lost money.

⸻

125. TOTAL TRADE-COST ENGINE

The system must account for realistic trading costs.

Include:

* Spread
* Commission
* Slippage
* Swap/overnight cost where applicable
* Contract fees
* Conversion costs where applicable

Backtesting and paper trading should model realistic costs whenever reliable data is available.

A trade must not be accepted solely because its theoretical chart-based reward is attractive while ignoring realistic execution costs.

⸻

126. MARKET-DATA INTEGRITY ENGINE

Before using market data for a decision, validate:

* Timestamp
* Symbol
* Timeframe
* OHLC values
* Volume where available
* Candle sequence
* Candle completeness
* Candle ordering
* Missing candles
* Duplicate candles
* Stale candles
* Abnormal price values
* Invalid prices
* Unexpected price gaps
* Data-source consistency

The system must detect:

* Missing M5 candles
* Missing H4 candles
* Duplicate candles
* Out-of-order candles
* Stale market data
* Corrupted data
* Invalid timestamps

If required data is incomplete, stale, contradictory, or unreliable:

DO NOT EXECUTE A NEW TRADE.

⸻

127. M5 DATA INTEGRITY PRIORITY

Because M5 is the mandatory execution timeframe, M5 data integrity must receive special protection.

Before every M5 execution decision, verify:

* Current M5 candle availability
* Previous M5 candle availability
* Required historical M5 data
* Correct candle timestamps
* No missing required candles
* No duplicated candles
* No stale M5 feed
* Correct symbol mapping
* Correct broker feed
* Correct instrument specification

If M5 integrity fails:

M5 EXECUTION IS BLOCKED.

H4 information may remain available for analysis, but no M5 trade may be executed using unreliable M5 data.

⸻

128. H4 DATA INTEGRITY

Before creating an H4 setup:

* Verify required H4 history
* Verify candle completeness
* Verify candle ordering
* Verify timestamps
* Verify the H4 structure is based only on completed candles where required
* Prevent future candle information from entering historical calculations

If H4 structure cannot be reliably determined:

NO NEW SETUP.

⸻

129. LOOK-AHEAD-BIAS PROTECTION

The system must never use future information.

This applies to:

* Backtesting
* Walk-forward testing
* Historical indicators
* Market structure
* Breakouts
* Fibonacci calculations
* Retracement calculations
* RSI
* Ichimoku
* Supply/Demand
* Trade entries
* Stop-loss
* Take-profit
* Trailing
* News filtering
* Session filtering

The system must never allow future candles, future prices, future indicator values, or future market information to influence a historical decision.

⸻

130. DETERMINISTIC STRATEGY ENGINE

Given the same:

* Market data
* Configuration
* Strategy version
* Broker specifications
* Risk settings
* News data
* Execution assumptions

the strategy engine should produce the same decision.

Avoid hidden randomness in:

* Entry decisions
* Position sizing
* Risk calculations
* Backtests
* Signal generation

If randomness is deliberately introduced for testing or simulation, it must be explicitly controlled and logged.

⸻

131. STRATEGY STATE MACHINE

The strategy must operate using explicit setup states.

Minimum conceptual states:

SCANNING

→ H4_SETUP_DETECTED

→ H4_BREAKOUT_CONFIRMED

→ H4_FIBONACCI_VALID

→ H4_RETRACEMENT_VALID

→ M5_SETUP_ARMED

→ M5_BREAKOUT_CONFIRMED

→ M5_FIBONACCI_VALID

→ M5_RETRACEMENT_VALID

→ M5_SUPPLY_DEMAND_VALID

→ M5_ICHIMOKU_VALID

→ M5_RSI_VALID

→ M5_MARKET_STRUCTURE_VALID

→ FINAL_CONFIRMATION

→ RISK_VALIDATION

→ FINAL_TRADE_GATE

→ EXECUTING

→ POSITION_OPEN

→ BREAK_EVEN / TRAILING

→ POSITION_CLOSED

→ SETUP_COMPLETED

or

→ SETUP_INVALIDATED

or

→ SETUP_EXPIRED

The actual state requirements must remain consistent with Sections 1–118.

The state machine must prevent the bot from skipping mandatory strategy stages.

⸻

132. STRATEGY CONFLICT-RESOLUTION ENGINE

The system must explicitly handle situations where strategy components disagree.

Examples:

* H4 bullish but M5 bearish
* H4 breakout valid but M5 breakout invalid
* Fibonacci zone valid but supply/demand invalid
* RSI condition valid but Ichimoku condition invalid
* Market structure conflicts with another confirmation

The AI coding implementation must NOT invent arbitrary scoring logic.

The system must follow the exact hierarchy and mandatory conditions defined in Sections 1–118.

If required confirmation is contradictory or unresolved:

WAIT OR REJECT THE TRADE.

Never force an entry simply because some indicators agree.

⸻

133. SETUP IDENTITY AND LIFECYCLE

Every setup must receive a unique setup identity.

A setup record should track:

* Setup ID
* Symbol
* Trading mode
* H4 structure
* H4 breakout
* H4 Fibonacci
* H4 retracement
* M5 structure
* M5 breakout
* M5 Fibonacci
* M5 retracement
* Confirmation status
* Creation timestamp
* Expiration timestamp
* Invalidation reason
* Trade status
* Strategy version
* Configuration version

A completed, invalidated, or expired setup must not accidentally return to an executable state.

⸻

134. EMERGENCY TRADING KILL SWITCH

Implement a dedicated emergency trading kill switch.

The kill switch must be capable of:

* Immediately blocking new entries
* Preventing order submission
* Preserving existing trade-management functions where safe
* Recording the reason
* Generating an alert
* Requiring explicit authorization before trading resumes

The kill switch must not automatically close existing positions unless explicitly configured to do so.

Possible triggers include:

* Critical system error
* Corrupted state
* Broker reconciliation failure
* Risk calculation failure
* Data corruption
* Excessive execution errors
* Unexpected position
* Duplicate-trade detection
* Severe infrastructure failure
* Manual emergency command

⸻

135. SINGLE-TRADING-INSTANCE PROTECTION

The production system must prevent multiple active instances from independently executing trades.

If multiple servers/processes are deployed for resilience, only one must have authoritative trade-execution authority at any given time.

A secondary instance may operate in:

* Standby
* Monitoring
* Recovery
* Read-only

mode until it is safely authorized to become the active executor.

Never allow two active executors to submit trades simultaneously.

⸻

136. FAILOVER CONTROL

If primary infrastructure fails, failover must follow:

DETECT FAILURE

→ VERIFY PRIMARY STATE

→ ACQUIRE EXECUTION AUTHORITY

→ LOAD PERSISTENT STATE

→ CONNECT TO BROKER

→ RETRIEVE BROKER STATE

→ RECONCILE

→ VERIFY RISK

→ VERIFY OPEN POSITIONS

→ VERIFY SL/TP

→ VERIFY STRATEGY STATE

→ VERIFY DATA

→ HEALTH CHECK

→ RESUME ONLY IF SAFE

Never immediately begin trading simply because a backup server has started.

⸻

137. EMERGENCY POSITION PROTECTION

If the application crashes while a position is open:

1. Reconnect.
2. Retrieve actual broker position.
3. Retrieve actual SL.
4. Retrieve actual TP.
5. Retrieve position size.
6. Retrieve entry price.
7. Restore trailing state where possible.
8. Restore break-even state.
9. Compare local state with broker state.
10. Reconcile differences.
11. Verify protective orders.
12. Resume management only after validation.

The bot must never assume its local state is correct after a crash.

⸻

138. OPEN-POSITION SAFETY PRIORITY

During infrastructure problems:

Existing-position safety has priority over opening new positions.

If the system can safely manage an existing trade but cannot safely validate a new setup:

* Continue managing the existing trade where possible.
* Block new entries.

⸻

139. BROKER RECONCILIATION ESCALATION

If local and broker state disagree:

NORMAL

→ RECONCILIATION

→ RETRY CONTROLLED

→ VERIFY BROKER

→ VERIFY DATABASE

→ VERIFY ORDER HISTORY

→ RESOLVE

If unresolved:

TRADING BLOCKED.

Do not guess.

Do not create a replacement order.

Do not close a position merely because local state is missing.

Do not duplicate an order to “fix” uncertainty.

⸻

140. API RATE-LIMIT MANAGEMENT

The system must respect broker/API limits.

Implement:

* Request throttling
* Rate-limit detection
* Exponential backoff
* Retry limits
* Request prioritization
* Connection reuse where appropriate
* Duplicate-request prevention
* Controlled polling
* WebSocket reconnection controls

The system must never create infinite retry loops.

⸻

141. ORDER-REJECTION MANAGEMENT

When an order is rejected:

Record:

* Timestamp
* Symbol
* Setup ID
* Trade ID
* Requested order
* Requested size
* Entry
* SL
* TP
* Broker response
* Error code
* Error message
* Retry status

The system must determine whether retrying is safe.

Never blindly resubmit rejected orders.

⸻

142. PARTIAL-FILL MANAGEMENT

If supported by the broker:

The system must correctly handle partial fills.

It must:

* Detect partial execution
* Record actual filled quantity
* Recalculate remaining quantity
* Verify SL/TP
* Update risk records
* Update exposure
* Prevent duplicate execution
* Complete or cancel remaining quantity according to configured rules

Never treat a partial fill as a full fill.

⸻

143. SL/TP ATTACHMENT VERIFICATION

After entry:

The system must independently verify that:

* Position exists
* Correct size exists
* Correct entry price exists
* Stop-loss exists
* Take-profit exists
* Protective levels match the strategy
* Broker accepted the protection

If a required protective order is missing:

NEW TRADING MUST BE BLOCKED AND THE POSITION MUST ENTER PROTECTIVE-ERROR MANAGEMENT.

The system must alert immediately.

⸻

144. TRAILING-PROFIT RECOVERY

After restart or reconnection, the system must reconstruct:

* Original SL
* Current SL
* TP
* Break-even status
* Trailing activation
* Trailing distance
* Highest favorable price for long positions
* Lowest favorable price for short positions
* Last successful trailing modification

Trailing state must never reset simply because the server restarted.

⸻

145. RISK-STATE RECOVERY

On restart, recover:

* Current equity
* Starting-day equity reference
* Daily trade count
* Daily drawdown
* Swing drawdown
* Position drawdown
* Current exposure
* Open-trade count
* Mode-specific restrictions
* Correlation exposure
* Setup state
* Risk state

Never reset risk counters simply because the application restarted.

⸻

146. DAILY RESET INTEGRITY

Daily counters must reset only according to the configured trading timezone and day boundary.

The system must prevent:

* Double resets
* Missed resets
* Restart-triggered resets
* Timezone errors
* DST-related errors where applicable

The reset event must be logged.

⸻

147. CLOCK AND TIME CONSISTENCY

All production components must use a consistent time standard.

Prefer:

UTC internally.

Convert to local/session time only where required.

Validate:

* Server clock
* Broker clock
* Candle timestamps
* News timestamps
* Session timestamps
* Database timestamps
* Log timestamps

If system clock drift exceeds configured tolerance:

NO NEW TRADE.

⸻

148. DATABASE TRANSACTION SAFETY

Critical operations must use safe database transactions where appropriate.

Protect:

* Trade records
* Setup records
* Risk state
* Drawdown state
* Broker IDs
* Execution state
* Recovery state
* Configuration version
* Audit records

Use:

* Unique identifiers
* Appropriate indexes
* Constraints
* Transaction boundaries
* Concurrency protection
* Recovery procedures

Database corruption or unavailable critical state:

NO NEW TRADE.

⸻

149. DATABASE BACKUP VERIFICATION

Backups must not merely be created.

The system must periodically verify that backups are:

* Present
* Valid
* Restorable
* Recent
* Consistent

A backup that cannot be restored must not be considered a valid production backup.

⸻

150. DISASTER-RECOVERY TESTING

The production system must periodically test recovery scenarios, including:

* Application crash
* VPS reboot
* Cloud server failure
* Docker container crash
* Broker disconnect
* WebSocket disconnect
* REST API failure
* Database failure
* Network outage
* Corrupted local state
* Unexpected open position
* Unexpected broker order
* Missing M5 data
* Missing H4 data
* Clock drift
* Disk-full condition

Recovery must be tested before being trusted in production.

⸻

151. FAILURE-INJECTION TESTING

During development/testing, deliberately simulate failures.

Examples:

* Disconnect broker
* Disconnect internet
* Kill application
* Restart container
* Restart VPS
* Delay broker response
* Return malformed API response
* Return rejected order
* Remove candle data
* Corrupt state
* Fill disk
* Stop database
* Duplicate messages

The system must demonstrate safe behavior.

⸻

152. END-TO-END TESTING

Test the entire pipeline:

Market Data

→ Scanner

→ H4 Analysis

→ Breakout

→ Fibonacci

→ Retracement

→ M5 Analysis

→ Confirmation

→ Risk

→ Compliance

→ Final Trade Gate

→ Execution

→ Broker Verification

→ Position Management

→ Break-Even

→ Trailing

→ Exit

→ Logging

→ Reporting

Every stage must be testable independently and as part of the complete system.

⸻

153. TEST ENVIRONMENT SEPARATION

The system must clearly separate:

* Unit testing
* Integration testing
* Backtesting
* Walk-forward testing
* Paper trading
* Demo trading
* Live trading

Testing code must never accidentally submit live orders.

⸻

154. PAPER-TO-LIVE PARITY

The same strategy engine must be used for:

* Backtesting
* Paper trading
* Demo trading
* Live trading

Only market-data, broker-execution, and environment adapters should change where necessary.

Do not maintain separate strategy logic that can drift between paper and live environments.

⸻

155. PERFORMANCE AND LOAD TESTING

Test the system under:

* Many instruments
* Many simultaneous signals
* High market-data throughput
* Multiple broker connections
* High logging volume
* Reconnection storms
* Multiple active setups
* Multiple open positions where permitted

The system must remain deterministic and must not violate risk limits under load.

⸻

156. EXECUTION-LATENCY MONITORING

Measure:

* Signal detection time
* Strategy-processing time
* Risk-validation time
* Order-submission time
* Broker-response time
* Position-verification time
* SL/TP verification time

Record latency for every live execution.

Unusual latency should trigger monitoring alerts and may block trading when configured thresholds are exceeded.

⸻

157. PROFESSIONAL PERFORMANCE METRICS

Track at minimum:

* Total signals
* Qualified setups
* Rejected setups
* Blocked trades
* Executed trades
* Win rate
* Loss rate
* Average win
* Average loss
* Expectancy
* Profit factor
* Maximum drawdown
* Average R
* Consecutive wins
* Consecutive losses
* Average holding time
* Execution latency
* Average slippage
* Average spread
* Commission
* Performance by symbol
* Performance by trading mode
* Performance by session
* Performance by strategy version

Do not use performance statistics as permission to violate hard risk rules.

⸻

158. BLOCKED-TRADE ANALYTICS

Every blocked trade must have a clear reason.

Examples:

* H4 structure invalid
* H4 breakout invalid
* H4 Fibonacci invalid
* H4 retracement invalid
* M5 breakout invalid
* M5 Fibonacci invalid
* M5 retracement invalid
* RSI condition invalid
* Ichimoku condition invalid
* Supply/Demand invalid
* Market structure invalid
* Risk exceeded
* Drawdown limit reached
* Spread too high
* Slippage risk too high
* News blackout
* Broker restriction
* Data stale
* Data incomplete
* Exposure limit
* Correlation limit
* Setup expired
* Setup invalidated
* System unhealthy
* Reconciliation failure
* Position uncertainty
* Time synchronization failure

The dashboard must make rejection reasons understandable.

⸻

159. EXPLAINABLE EXECUTION RECORD

Every executed trade must be reconstructable from its audit trail.

Record:

* Why the setup was detected
* Why it qualified
* H4 conditions
* M5 conditions
* Indicators
* Structure
* Fibonacci levels
* Supply/Demand
* Risk calculation
* Position size calculation
* Spread
* Slippage
* Broker specifications
* News status
* Compliance status
* Final gate result
* Order request
* Broker response
* Position verification
* SL/TP
* Trailing changes
* Exit reason

The system must be able to explain the trade in plain English.

⸻

160. CONFIGURATION IMMUTABILITY DURING ACTIVE TRADE

Changing configuration while trades are active must be controlled.

The system must not silently change the rules governing an existing position.

Record:

* Configuration before entry
* Configuration version
* Strategy version

Any configuration change must be logged and versioned.

Critical strategy/risk changes should require controlled restart or explicit authorization.

⸻

161. LIVE CONFIGURATION PROTECTION

Critical live parameters must not be casually changed from the dashboard.

Protect:

* Risk percentage
* Drawdown limits
* Maximum trades
* Strategy requirements
* News controls
* Broker credentials
* Live-trading status
* Execution permissions

Use authorization and audit logging for critical changes.

⸻

162. SAFE DEPLOYMENT VERIFICATION

Before deploying a new production version:

1. Validate code.
2. Run tests.
3. Validate configuration.
4. Validate database schema.
5. Validate broker connectivity.
6. Validate data.
7. Validate risk engine.
8. Validate strategy version.
9. Validate recovery.
10. Backup current production state.
11. Deploy.
12. Run health checks.
13. Reconcile broker state.
14. Verify no unexpected positions/orders.
15. Confirm risk state.
16. Confirm system readiness.

If any critical check fails:

DO NOT ENABLE NEW TRADING.

⸻

163. PRODUCTION CHANGE MANAGEMENT

Every production change must have:

* Version
* Description
* Reason
* Author/source
* Date
* Tests performed
* Expected impact
* Rollback method

Strategy changes must never be introduced accidentally as part of infrastructure changes.

⸻

164. SECURITY AUDIT TRAIL

Record security-sensitive events:

* Login
* Logout
* Failed login
* Permission changes
* API-key changes
* Live-trading activation
* Live-trading deactivation
* Risk-setting changes
* Strategy-setting changes
* Emergency kill switch
* Manual order commands
* Deployment
* Rollback
* Configuration changes

Never store passwords or API secrets in plaintext logs.

⸻

165. MANUAL OVERRIDE SAFETY

Manual controls must never bypass:

* Maximum risk
* Drawdown protection
* Broker restrictions
* Position limits
* Prop-firm rules
* Execution safety
* Duplicate-trade protection
* Required SL/TP protection

Manual mode means manual decision authorization—not permission to bypass safety controls.

⸻

166. PRODUCTION RESOURCE LIMITS

Configure safe limits for:

* CPU
* Memory
* Disk
* Database size
* Log size
* Network connections
* API requests
* WebSocket connections
* Worker processes
* Queue sizes

If critical resources approach dangerous levels:

* Alert
* Reduce non-essential activity
* Block new trades if required
* Preserve existing-position management where possible

⸻

167. SYSTEM RECOVERY PRIORITY

When recovering from failure, use this priority:

1. Protect existing positions.
2. Establish broker connection.
3. Verify broker state.
4. Restore persistent state.
5. Reconcile discrepancies.
6. Restore risk state.
7. Restore strategy state.
8. Validate market data.
9. Validate compliance.
10. Validate system health.
11. Resume scanning.
12. Resume trading only after the complete final gate passes.

⸻

168. NO-GUESSING PRINCIPLE

The system must never guess when critical information is unavailable.

Examples:

* Unknown broker position → do not trade.
* Unknown order status → do not duplicate.
* Unknown risk → do not trade.
* Unknown SL/TP state → resolve before new trading.
* Unknown M5 data → do not execute.
* Unknown H4 setup → do not qualify.
* Unknown account equity → do not calculate risk.
* Unknown broker specifications → do not trade.
* Unknown system state → trading blocked.

Uncertainty must result in protection, not speculation.

⸻

169. CAPITAL-PROTECTION-FIRST PRINCIPLE

The system must always prefer:

Missed opportunity over uncontrolled risk.

It is acceptable to miss a trade because:

* Data is unavailable
* Broker is unavailable
* Risk cannot be calculated
* State cannot be reconciled
* M5 data is invalid
* System health is critical
* Execution status is uncertain

It is NOT acceptable to enter a trade simply because the system is uncertain.

⸻

170. FINAL EXECUTION SAFETY GATE

Before every new order, independently verify:

* Correct symbol
* Correct trading mode
* Correct H4 setup
* Correct M5 setup
* Correct strategy state
* Correct strategy version
* Valid market data
* Valid broker specifications
* Valid account state
* Valid risk calculation
* Position size within 0.25% risk
* Drawdown limits
* Daily trade limit
* Exposure limits
* Correlation limits
* Spread
* Slippage
* News rules
* Prop-firm rules
* Session rules
* Setup validity
* Setup expiration
* No duplicate execution
* Broker connection
* Database state
* System health
* Time synchronization
* SL calculation
* TP calculation
* Final confirmation

Only when every mandatory requirement passes:

EXECUTE.

Otherwise:

BLOCK TRADE.

⸻

171. FINAL PROFESSIONAL SYSTEM REQUIREMENT

The completed system must not be treated as a simple trading script.

It must be engineered as a production trading platform consisting of:

* Strategy engine
* Market scanner
* H4 analysis engine
* M5 execution engine
* Market structure engine
* Breakout engine
* Fibonacci engine
* Retracement engine
* RSI engine
* Ichimoku engine
* Supply/Demand engine
* Risk engine
* Position-sizing engine
* Drawdown engine
* News engine
* Prop-firm compliance engine
* Broker abstraction layer
* Execution engine
* Position-management engine
* Trailing-profit engine
* Break-even engine
* Data-integrity engine
* State-management engine
* Database
* Persistent storage
* Reconciliation engine
* Recovery engine
* Monitoring engine
* Alert engine
* Dashboard
* Audit system
* Backtesting engine
* Walk-forward engine
* Paper-trading engine
* Testing framework
* Security layer
* VPS deployment
* Cloud deployment
* Docker deployment
* Backup system
* Rollback system
* Disaster-recovery system
* 24/7 operation layer

All components must work together without changing the original trading strategy.

⸻

172. ABSOLUTE FINAL ENGINEERING RULES

The AI coding system must:

* Preserve Sections 1–118.
* Implement Sections 119–171.
* Never remove an existing strategy requirement.
* Never silently change parameters.
* Never invent conflicting strategy rules.
* Never use future information.
* Never duplicate trades.
* Never guess broker state.
* Never guess risk.
* Never ignore broker specifications.
* Never bypass SL/TP safety.
* Never bypass prop-firm rules.
* Never bypass drawdown limits.
* Never bypass news rules.
* Never bypass the final trade gate.
* Never reset critical state after restart.
* Never lose open-position management state intentionally.
* Never increase risk after losses.
* Never use martingale.
* Never create uncontrolled recovery trades.
* Never submit duplicate orders.
* Never allow two active executors to trade simultaneously.
* Never allow deployment infrastructure to modify strategy behavior.
* Never enable live trading silently.

⸻

173. FINAL MASTER SYSTEM PHILOSOPHY

The completed bot must operate according to one central principle:

THE BOT MUST TRADE ONLY WHEN THE STRATEGY, DATA, RISK, BROKER, EXECUTION, COMPLIANCE, SYSTEM STATE, AND INFRASTRUCTURE CAN ALL BE SAFELY VERIFIED.

If all required conditions are verified:

TRADE.

If required conditions are not verified:

WAIT.

If critical state is uncertain:

BLOCK.

If the system fails:

PROTECT EXISTING POSITIONS WHERE POSSIBLE, RECOVER SAFELY, RECONCILE BROKER STATE, AND DO NOT RESUME NEW TRADING UNTIL VERIFIED.

Capital protection takes priority over trade frequency.

Correct execution takes priority over speed.

Reliable data takes priority over opportunity.

Safety takes priority over availability.

The system must be engineered to survive real-world failures without changing the strategy.

⸻

174. FINAL COMMAND — COMPLETE PRODUCTION TRADING PLATFORM

BUILD THE COMPLETE SYSTEM USING:

SECTIONS 1–85 = ORIGINAL TRADING STRATEGY

SECTIONS 86–118 = PRODUCTION DEPLOYMENT, VPS, CLOUD, DOCKER, 24/7 OPERATION, PERSISTENCE, RECOVERY, MONITORING AND SECURITY

SECTIONS 119–173 = PROFESSIONAL EXECUTION, DATA INTEGRITY, POSITION SIZING, BROKER SEMANTICS, ATOMIC EXECUTION, DUPLICATE PROTECTION, STATE MANAGEMENT, DISASTER RECOVERY, TESTING AND ADVANCED PRODUCTION SAFETY

Do not remove, weaken, simplify, replace, or reinterpret any existing requirement.

Do not add random indicators or unnecessary strategy components.

Do not change M5 execution.

Do not restore M1.

Do not change RSI 10/90.

Do not change the 0.25% risk rule.

Do not change H4 + M5 strategy structure.

Do not change the H4/M5 breakout and retracement sequence.

Do not change the H4/M5 Fibonacci 50–61.8% requirements.

Do not change Supply/Demand.

Do not change Ichimoku.

Do not change Market Structure.

Do not change Deriv Synthetic Index support.

Do not introduce news trading.

Do not introduce martingale.

Do not introduce uncontrolled recovery trading.

Do not introduce hidden risk increases.

Do not bypass prop-firm restrictions.

Do not use future information.

Do not fabricate backtest results.

Do not fabricate broker execution.

Do not pretend a trade was executed if the broker did not confirm it.

Do not open duplicate trades.

Do not trade when critical information is uncertain.

The final result must be a production-grade, modular, testable, auditable, recoverable, secure, 24/7 automated multi-market trading platform.

The deployment infrastructure must support:

LOCAL DEVELOPMENT → PAPER/DEMO → VPS → CLOUD → DOCKER → 24/7 PRODUCTION

without changing the trading strategy.

The final system principle is:

VERIFY EVERYTHING.
RISK ONLY WHAT IS ALLOWED.
EXECUTE ONLY WHEN QUALIFIED.
NEVER GUESS.
NEVER DUPLICATE.
NEVER BYPASS SAFETY.
PROTECT CAPITAL FIRST.