const sample = require("./sample_market_data.json");
const { normalizeCmcMarketData } = require("./cmc-adapter");
const { generateStrategy } = require("./strategy");
const { evaluateExecutionPolicy } = require("./execution-policy");

function buildCmcStylePayload(input) {
  return {
    symbol: input.symbol.toLowerCase(),
    sentiment_score: input.sentimentScore,
    ohlcv: input.candles.map((candle) => ({
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
}

function runCmcAdapterDemo() {
  const normalized = normalizeCmcMarketData(buildCmcStylePayload(sample));
  const strategy = generateStrategy(normalized);
  const executionPlan = evaluateExecutionPolicy(strategy);

  return {
    demo: "CMC payload adapter",
    normalizedInput: {
      symbol: normalized.symbol,
      sentimentScore: normalized.sentimentScore,
      candleCount: normalized.candles.length,
      firstTimestamp: normalized.candles[0].timestamp,
      lastTimestamp: normalized.candles.at(-1).timestamp
    },
    strategy: {
      action: strategy.action,
      confidence: strategy.confidence,
      maxPositionFraction: strategy.maxPositionFraction,
      stopLossPct: strategy.stopLossPct,
      takeProfitPct: strategy.takeProfitPct
    },
    executionPlan: {
      executionMode: executionPlan.executionMode,
      requiresManualApproval: executionPlan.requiresManualApproval,
      allowedByRisk: executionPlan.allowedByRisk
    }
  };
}

if (require.main === module) {
  console.log(JSON.stringify(runCmcAdapterDemo(), null, 2));
}

module.exports = { buildCmcStylePayload, runCmcAdapterDemo };
