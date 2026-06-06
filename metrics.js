function pctChange(a, b) {
  return (b - a) / a;
}

function maxDrawdown(equityCurve) {
  let peak = equityCurve[0];
  let worst = 0;
  for (const value of equityCurve) {
    peak = Math.max(peak, value);
    worst = Math.min(worst, (value - peak) / peak);
  }
  return Math.abs(worst);
}

function summarizeBacktest(candles, strategy) {
  const closes = candles.map((c) => c.close);
  const exposure =
    strategy.action === "BUY"
      ? strategy.maxPositionFraction
      : strategy.action === "REDUCE"
        ? 0.02
        : 0.05;

  const equity = [1];
  const tradeReturns = [];

  for (let i = 1; i < closes.length; i++) {
    const rawReturn = pctChange(closes[i - 1], closes[i]);
    const cappedReturn = Math.max(
      -strategy.stopLossPct,
      Math.min(strategy.takeProfitPct, rawReturn)
    );
    const portfolioReturn = cappedReturn * exposure;
    tradeReturns.push(portfolioReturn);
    equity.push(equity.at(-1) * (1 + portfolioReturn));
  }

  const wins = tradeReturns.filter((r) => r > 0).length;
  const losses = tradeReturns.filter((r) => r < 0).length;
  const totalReturn = equity.at(-1) - 1;
  const avgReturn =
    tradeReturns.reduce((sum, value) => sum + value, 0) / tradeReturns.length;

  return {
    exposure: Number(exposure.toFixed(4)),
    totalReturnPct: Number((totalReturn * 100).toFixed(2)),
    maxDrawdownPct: Number((maxDrawdown(equity) * 100).toFixed(2)),
    winRatePct: Number(((wins / tradeReturns.length) * 100).toFixed(2)),
    averageStepReturnPct: Number((avgReturn * 100).toFixed(4)),
    trades: tradeReturns.length,
    wins,
    losses
  };
}

module.exports = { summarizeBacktest };
