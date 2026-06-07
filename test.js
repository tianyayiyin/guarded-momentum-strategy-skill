const assert = require("assert");
const { generateStrategy } = require("./strategy");
const { summarizeBacktest } = require("./metrics");
const { normalizeCmcMarketData } = require("./cmc-adapter");
const { evaluateExecutionPolicy } = require("./execution-policy");
const sample = require("./sample_market_data.json");
const bearishSample = require("./sample_bearish_market_data.json");
const sidewaysSample = require("./sample_sideways_market_data.json");

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

const explicitBearish = generateStrategy(bearishSample);
assert.strictEqual(explicitBearish.action, "REDUCE");
assert.ok(explicitBearish.diagnostics.drawdown20 > 0.08);

const sideways = generateStrategy(sidewaysSample);
assert.strictEqual(sideways.action, "HOLD");
assert.ok(sideways.confidence < bullish.confidence);

const cmcStylePayload = {
  symbol: "bnb",
  sentiment_score: 0.24,
  ohlcv: sample.candles.map((candle) => ({
    time_open: candle.timestamp,
    quote: {
      USD: {
        open: candle.open,
        high: candle.high,
        low: candle.low,
        close: candle.close,
        volume: candle.volume
      }
    }
  }))
};

const normalized = normalizeCmcMarketData(cmcStylePayload);
assert.strictEqual(normalized.symbol, "BNB");
assert.strictEqual(normalized.candles.length, sample.candles.length);
assert.strictEqual(generateStrategy(normalized).action, "BUY");

const defaultExecutionPlan = evaluateExecutionPolicy(bullish);
assert.strictEqual(defaultExecutionPlan.executionMode, "simulation_only");
assert.strictEqual(defaultExecutionPlan.requiresManualApproval, true);
assert.ok(defaultExecutionPlan.reasons.some((reason) => /disabled/i.test(reason)));

const approvedSimulationPlan = evaluateExecutionPolicy(bullish, {
  allowLiveExecution: true,
  requireManualApproval: true,
  maxPositionFraction: 0.18
});
assert.strictEqual(approvedSimulationPlan.allowedByRisk, true);
assert.strictEqual(approvedSimulationPlan.requiresManualApproval, true);

const reducePlan = evaluateExecutionPolicy(explicitBearish, {
  allowLiveExecution: true,
  maxPositionFraction: 0.18
});
assert.strictEqual(reducePlan.allowedByRisk, false);
assert.ok(reducePlan.reasons.some((reason) => /reducing exposure/i.test(reason)));

console.log("All strategy tests passed.");
