const assert = require("assert");
const skill = require("./skill.json");
const sample = require("./sample_market_data.json");
const { generateStrategy } = require("./strategy");
const { summarizeBacktest } = require("./metrics");

function validateMarketInput(input) {
  assert.strictEqual(typeof input.symbol, "string");
  assert.ok(input.symbol.length > 0);
  assert.ok(Array.isArray(input.candles));
  assert.ok(input.candles.length >= 20);
  assert.strictEqual(typeof input.sentimentScore, "number");
  assert.ok(input.sentimentScore >= -1 && input.sentimentScore <= 1);

  for (const candle of input.candles) {
    assert.strictEqual(typeof candle.timestamp, "string");
    for (const key of ["open", "high", "low", "close", "volume"]) {
      assert.strictEqual(typeof candle[key], "number");
      assert.ok(Number.isFinite(candle[key]));
    }
  }
}

function validateStrategyOutput(output) {
  assert.ok(["BUY", "HOLD", "REDUCE"].includes(output.action));
  assert.ok(output.confidence >= 0 && output.confidence <= 1);
  assert.ok(output.maxPositionFraction >= 0 && output.maxPositionFraction <= 1);
  assert.ok(output.stopLossPct > 0);
  assert.ok(output.takeProfitPct > 0);
  assert.strictEqual(typeof output.rationale, "string");
  assert.ok(output.rationale.length > 40);
}

function validateBacktestOutput(output) {
  assert.ok(output.trades > 0);
  assert.ok(output.maxDrawdownPct >= 0);
  assert.ok(output.winRatePct >= 0 && output.winRatePct <= 100);
  assert.ok(Number.isFinite(output.totalReturnPct));
}

assert.strictEqual(skill.track, "Strategy Skills");
assert.ok(skill.riskControls.some((rule) => /No live execution/i.test(rule)));

validateMarketInput(sample);
const strategy = generateStrategy(sample);
validateStrategyOutput(strategy);
validateBacktestOutput(summarizeBacktest(sample.candles, strategy));

console.log("Skill metadata and I/O validation passed.");
