const assert = require("assert");
const { generateStrategy } = require("./strategy");
const { summarizeBacktest } = require("./metrics");
const sample = require("./sample_market_data.json");

const bullish = generateStrategy(sample);
assert.strictEqual(bullish.action, "BUY");
assert.ok(bullish.confidence >= 0.8);
assert.ok(bullish.maxPositionFraction > 0);
assert.ok(bullish.stopLossPct > 0);
assert.ok(bullish.takeProfitPct > bullish.stopLossPct);

const bullishBacktest = summarizeBacktest(sample.candles, bullish);
assert.strictEqual(bullishBacktest.trades, sample.candles.length - 1);
assert.ok(bullishBacktest.totalReturnPct > 0);
assert.ok(bullishBacktest.maxDrawdownPct >= 0);
assert.ok(bullishBacktest.winRatePct > 50);

const bearish = JSON.parse(JSON.stringify(sample));
bearish.sentimentScore = -0.7;
bearish.candles = bearish.candles.map((c, index) => ({
  ...c,
  close: c.close - index * 4,
  high: c.high - index * 4,
  low: c.low - index * 4
}));

const defensive = generateStrategy(bearish);
assert.notStrictEqual(defensive.action, "BUY");
assert.ok(defensive.confidence <= bullish.confidence);

console.log("All strategy tests passed.");
