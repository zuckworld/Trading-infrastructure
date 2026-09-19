export interface BacktestTrade {
  entry: number;
  stop: number;
  takeProfit: number;
  side: 'long' | 'short';
  outcome: 'win' | 'loss';
}

export interface BacktestInput {
  initialBalance: number;
  riskPercent: number;
  trades: BacktestTrade[];
}

export interface BacktestReport {
  totalTrades: number;
  winningTrades: number;
  losingTrades: number;
  netProfit: number;
  equityCurve: number[];
  winRate: number;
  profitFactor: number;
  expectancy: number;
  maxDrawdown: number;
}

export interface WalkForwardInput extends BacktestInput {
  trainingWindow: number;
  testingWindow: number;
}

export interface WalkForwardReport {
  windows: BacktestReport[];
  aggregate: BacktestReport;
}

export function runBacktest(input: BacktestInput): BacktestReport {
  let balance = input.initialBalance;
  const equityCurve: number[] = [balance];

  let wins = 0;
  let losses = 0;
  let grossProfit = 0;
  let grossLoss = 0;
  let peakBalance = balance;
  let maxDrawdown = 0;

  for (const trade of input.trades) {
    const riskAmount = balance * (input.riskPercent / 100);
    const riskPerPip = Math.abs(trade.entry - trade.stop);
    const profitAmount = trade.outcome === 'win'
      ? riskAmount * 2
      : -riskAmount;

    balance += profitAmount;
    if (profitAmount > 0) {
      grossProfit += profitAmount;
    } else {
      grossLoss += Math.abs(profitAmount);
    }
    peakBalance = Math.max(peakBalance, balance);
    maxDrawdown = Math.max(maxDrawdown, peakBalance - balance);
    equityCurve.push(balance);

    if (trade.outcome === 'win') {
      wins += 1;
    } else {
      losses += 1;
    }
  }

  return {
    totalTrades: input.trades.length,
    winningTrades: wins,
    losingTrades: losses,
    netProfit: balance - input.initialBalance,
    equityCurve,
    winRate: input.trades.length === 0 ? 0 : wins / input.trades.length,
    profitFactor: grossLoss === 0 ? (grossProfit > 0 ? Number.POSITIVE_INFINITY : 0) : grossProfit / grossLoss,
    expectancy: input.trades.length === 0 ? 0 : (balance - input.initialBalance) / input.trades.length,
    maxDrawdown,
  };
}

export function runWalkForwardBacktest(input: WalkForwardInput): WalkForwardReport {
  if (input.trainingWindow <= 0 || input.testingWindow <= 0) {
    throw new Error('walk-forward windows must be positive');
  }

  const windows: BacktestReport[] = [];
  let offset = input.trainingWindow;
  let balance = input.initialBalance;

  while (offset < input.trades.length) {
    const testTrades = input.trades.slice(offset, offset + input.testingWindow);
    if (testTrades.length === 0) {
      break;
    }

    const report = runBacktest({
      initialBalance: balance,
      riskPercent: input.riskPercent,
      trades: testTrades,
    });
    windows.push(report);
    balance += report.netProfit;
    offset += input.trainingWindow + input.testingWindow;
  }

  const testedTrades = input.trades.slice(input.trainingWindow);
  const testedAggregate = runBacktest({
    initialBalance: input.initialBalance,
    riskPercent: input.riskPercent,
    trades: testedTrades,
  });

  return { windows, aggregate: testedAggregate };
}
