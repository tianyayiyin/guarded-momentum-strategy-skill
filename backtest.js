const fs = require("fs");
const { generateStrategy } = require("./strategy");
const { summarizeBacktest } = require("./metrics");

function main() {
  const file = process.argv[2];
  if (!file) {
    throw new Error("Usage: node backtest.js sample_market_data.json");
  }

  const input = JSON.parse(fs.readFileSync(file, "utf8"));
  const result = generateStrategy(input);
  const backtest = summarizeBacktest(input.candles, result);

  console.log(JSON.stringify({
    project: "Guarded Momentum Strategy Skill",
    generatedAt: new Date().toISOString(),
    result,
    backtest
  }, null, 2));
}

main();
