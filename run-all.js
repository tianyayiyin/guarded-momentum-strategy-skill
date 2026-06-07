const fs = require("fs");
const { generateStrategy } = require("./strategy");
const { summarizeBacktest } = require("./metrics");

const scenarios = [
  ["Bullish momentum", "sample_market_data.json"],
  ["Bearish drawdown", "sample_bearish_market_data.json"],
  ["Sideways chop", "sample_sideways_market_data.json"]
];

function runAllScenarios() {
  const results = scenarios.map(([name, file]) => {
    const input = JSON.parse(fs.readFileSync(file, "utf8"));
    const result = generateStrategy(input);
    const backtest = summarizeBacktest(input.candles, result);
    return {
      scenario: name,
      file,
      symbol: input.symbol,
      action: result.action,
      confidence: result.confidence,
      maxPositionFraction: result.maxPositionFraction,
      stopLossPct: result.stopLossPct,
      takeProfitPct: result.takeProfitPct,
      totalReturnPct: backtest.totalReturnPct,
      maxDrawdownPct: backtest.maxDrawdownPct,
      winRatePct: backtest.winRatePct,
      rationale: result.rationale
    };
  });

  return {
    project: "Guarded Momentum Strategy Skill",
    generatedAt: new Date().toISOString(),
    scenarios: results
  };
}

if (require.main === module) {
  console.log(JSON.stringify(runAllScenarios(), null, 2));
}

module.exports = { runAllScenarios };
