function mean(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function pctChange(a, b) {
  return (b - a) / a;
}

function maxDrawdown(closes) {
  let peak = closes[0];
  let worst = 0;
  for (const close of closes) {
    peak = Math.max(peak, close);
    worst = Math.min(worst, (close - peak) / peak);
  }
  return Math.abs(worst);
}

function volatility(closes) {
  const returns = [];
  for (let i = 1; i < closes.length; i++) {
    returns.push(pctChange(closes[i - 1], closes[i]));
  }
  const avg = mean(returns);
  const variance = mean(returns.map((r) => (r - avg) ** 2));
  return Math.sqrt(variance);
}

function generateStrategy(input) {
  const candles = input.candles;
  if (!Array.isArray(candles) || candles.length < 20) {
    throw new Error("Need at least 20 candles.");
  }

  const closes = candles.map((c) => c.close);
  const volumes = candles.map((c) => c.volume);
  const lastClose = closes.at(-1);
  const ma10 = mean(closes.slice(-10));
  const ma20 = mean(closes.slice(-20));
  const vol10 = mean(volumes.slice(-10));
  const vol20 = mean(volumes.slice(-20));
  const momentum20 = pctChange(closes.at(-20), lastClose);
  const dd = maxDrawdown(closes.slice(-20));
  const vol = volatility(closes.slice(-20));
  const sentiment = Number(input.sentimentScore ?? 0);

  const trendOk = lastClose > ma10 && ma10 > ma20 && momentum20 > 0.02;
  const volumeOk = vol10 > vol20 * 1.05;
  const sentimentOk = sentiment > -0.15;
  const drawdownTooHigh = dd > 0.08;

  let action = "HOLD";
  if (drawdownTooHigh) {
    action = "REDUCE";
  } else if (trendOk && volumeOk && sentimentOk) {
    action = "BUY";
  }

  const maxPositionFraction = Math.max(
    0.03,
    Math.min(0.18, 0.12 - vol * 3 + Math.max(0, sentiment) * 0.04)
  );

  const confidence =
    (trendOk ? 0.35 : 0) +
    (volumeOk ? 0.25 : 0) +
    (sentimentOk ? 0.2 : 0) +
    (drawdownTooHigh ? 0 : 0.2);

  return {
    symbol: input.symbol,
    action,
    confidence: Number(confidence.toFixed(3)),
    maxPositionFraction: Number(maxPositionFraction.toFixed(3)),
    stopLossPct: Number(Math.max(0.025, vol * 4).toFixed(3)),
    takeProfitPct: Number(Math.max(0.045, vol * 7).toFixed(3)),
    diagnostics: {
      lastClose,
      ma10: Number(ma10.toFixed(4)),
      ma20: Number(ma20.toFixed(4)),
      momentum20: Number(momentum20.toFixed(4)),
      volumeRatio: Number((vol10 / vol20).toFixed(4)),
      drawdown20: Number(dd.toFixed(4)),
      volatility20: Number(vol.toFixed(4)),
      sentiment
    },
    rationale: [
      `20-candle momentum is ${(momentum20 * 100).toFixed(2)}%.`,
      `Price ${lastClose > ma10 ? "is" : "is not"} above MA10 and MA20 trend.`,
      `Recent volume is ${(vol10 / vol20).toFixed(2)}x the 20-candle average.`,
      `Sentiment score is ${sentiment}.`,
      `Recent max drawdown is ${(dd * 100).toFixed(2)}%.`
    ].join(" ")
  };
}

module.exports = { generateStrategy };
