function numberFrom(value, field) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    throw new Error(`Invalid numeric value for ${field}.`);
  }
  return numeric;
}

function normalizeCandle(candle) {
  const quote = candle.quote && (candle.quote.USD || candle.quote.usd);
  const source = quote || candle;

  return {
    timestamp: String(candle.timestamp || candle.time_open || candle.time || candle.date),
    open: numberFrom(source.open, "open"),
    high: numberFrom(source.high, "high"),
    low: numberFrom(source.low, "low"),
    close: numberFrom(source.close, "close"),
    volume: numberFrom(source.volume || source.volume_24h || candle.volume, "volume")
  };
}

function normalizeCmcMarketData(payload) {
  const symbol = String(payload.symbol || payload.slug || payload.name || "").toUpperCase();
  if (!symbol) {
    throw new Error("Missing market symbol.");
  }

  const rawCandles = payload.candles || payload.ohlcv || payload.data || [];
  if (!Array.isArray(rawCandles) || rawCandles.length < 20) {
    throw new Error("Need at least 20 market candles.");
  }

  const sentimentScore = Number(payload.sentimentScore ?? payload.sentiment_score ?? 0);
  if (!Number.isFinite(sentimentScore) || sentimentScore < -1 || sentimentScore > 1) {
    throw new Error("Sentiment score must be between -1 and 1.");
  }

  return {
    symbol,
    sentimentScore,
    candles: rawCandles.map(normalizeCandle)
  };
}

module.exports = { normalizeCmcMarketData };
