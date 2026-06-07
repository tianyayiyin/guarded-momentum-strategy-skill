const fs = require("fs");
const { generateStrategy } = require("./strategy");
const { summarizeBacktest } = require("./metrics");

const scenarios = [
  ["Bullish momentum", "sample_market_data.json"],
  ["Bearish drawdown", "sample_bearish_market_data.json"],
  ["Sideways chop", "sample_sideways_market_data.json"]
];

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

console.log(JSON.stringify({
  project: "Guarded Momentum Strategy Skill",
  generatedAt: new Date().toISOString(),
  scenarios: results
}, null, 2));
