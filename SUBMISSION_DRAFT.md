# Hackathon Submission Draft

## Project Name

Guarded Momentum Strategy Skill

## Track

Track 2 - Strategy Skills

## One-line Pitch

A risk-aware strategy skill that converts CMC-style market data into a backtestable trading plan with explicit position sizing, stop-loss, take-profit, and human-readable rationale.

## Problem

Many autonomous trading agents can generate buy/sell signals, but their output is often unsafe: no clear risk envelope, no drawdown awareness, no rationale, and no backtestable spec. That makes them hard to trust and hard to evaluate.

## Solution

Guarded Momentum Strategy Skill turns OHLCV and sentiment inputs into a structured strategy recommendation:

- `BUY`, `HOLD`, or `REDUCE`
- confidence score
- max position fraction
- stop-loss and take-profit levels
- diagnostics and rationale

The skill is intentionally not a live trading bot. It is designed as the strategy layer that can be consumed by an agent, wallet execution kit, or backtesting framework.

## Sponsor Fit

CoinMarketCap:

- Designed for CMC-style market data, OHLCV, sentiment, technical indicators, and agent-native strategy generation.

Trust Wallet Agent Kit:

- The output is suitable for a future self-custody execution layer, while keeping execution disabled by default.

BNB Chain:

- Demo uses BNB-style market data and can later be extended to BSC/PancakeSwap or BSC perps execution.

## Safety Model

- No private keys.
- No wallet connection.
- No live trades.
- No leverage by default.
- Position size capped by volatility and sentiment.
- Drawdown over 8% forces `REDUCE`.
- Negative sentiment blocks new long entries.

## Demo

Run:

```bash
npm test
npm run demo
```

Example output:

```json
{
  "symbol": "BNB",
  "action": "BUY",
  "confidence": 1,
  "maxPositionFraction": 0.119,
  "stopLossPct": 0.025,
  "takeProfitPct": 0.045
}
```

## Roadmap

1. Connect to CMC Agent Hub / Data API for live market data.
2. Add multiple strategy modules: mean reversion, breakout, funding-rate-aware strategy.
3. Add richer backtesting metrics: Sharpe, Sortino, hit rate, max drawdown.
4. Integrate Trust Wallet Agent Kit in simulation mode.
5. Optional BNB AI Agent SDK execution adapter with strict user-defined rules.

## Repository Contents

- `skill.json` - metadata and schema
- `strategy.js` - strategy generation logic
- `backtest.js` - demo/backtest runner
- `sample_market_data.json` - sample CMC-style data
- `README.md` - usage and safety notes
