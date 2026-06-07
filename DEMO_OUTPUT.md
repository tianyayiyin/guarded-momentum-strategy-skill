# Demo Output

Run:

```bash
npm run demo:all
```

Expected behavior across market regimes:

| Scenario | Expected Action | Why |
| --- | --- | --- |
| Bullish momentum | `BUY` | Positive momentum, price above moving averages, volume confirmation, non-bearish sentiment, low drawdown. |
| Bearish drawdown | `REDUCE` | Large recent drawdown, negative momentum, bearish sentiment. |
| Sideways chop | `HOLD` | Weak momentum and neutral volume/sentiment; no reason to increase exposure. |

Representative output:

```json
{
  "project": "Guarded Momentum Strategy Skill",
  "scenarios": [
    {
      "scenario": "Bullish momentum",
      "symbol": "BNB",
      "action": "BUY",
      "confidence": 1,
      "maxPositionFraction": 0.119,
      "totalReturnPct": 1.17,
      "maxDrawdownPct": 0.05,
      "winRatePct": 86.96
    },
    {
      "scenario": "Bearish drawdown",
      "symbol": "BNB",
      "action": "REDUCE",
      "confidence": 0.25,
      "maxPositionFraction": 0.11,
      "totalReturnPct": -0.48,
      "maxDrawdownPct": 0.48,
      "winRatePct": 0
    },
    {
      "scenario": "Sideways chop",
      "symbol": "BNB",
      "action": "HOLD",
      "confidence": 0.4,
      "maxPositionFraction": 0.11,
      "totalReturnPct": 0.02,
      "maxDrawdownPct": 0.05,
      "winRatePct": 52.17
    }
  ]
}
```

This shows that the skill is not a blind long-only signal. It changes behavior based on trend, drawdown, volume, and sentiment.
