# Project Summary

## Guarded Momentum Strategy Skill

Guarded Momentum Strategy Skill is a risk-aware strategy module for agent-native trading workflows. It converts CMC-style OHLCV and sentiment data into a structured, backtestable recommendation.

## Core Output

Each run returns:

- action: `BUY`, `HOLD`, or `REDUCE`,
- confidence,
- max position fraction,
- stop-loss,
- take-profit,
- diagnostics,
- rationale,
- backtest summary metrics.

## Why It Matters

Autonomous trading agents should not receive raw "buy" or "sell" signals without risk limits. This project wraps each signal in a risk envelope so downstream systems can review it before execution.

## Demo Commands

```bash
npm test
npm run demo:all
```

## Multi-Regime Behavior

| Market Regime | Output |
| --- | --- |
| Bullish momentum | `BUY` |
| Bearish drawdown | `REDUCE` |
| Sideways chop | `HOLD` |

## Sponsor Fit

- CoinMarketCap: CMC-style data in, strategy skill out.
- Trust Wallet: future wallet execution layer can consume the risk envelope.
- BNB Chain: BNB ecosystem assets and simulated BNB Chain execution can be added.

## Safety

The prototype does not connect to wallets, store private keys, execute live trades, use leverage, or require real funds.

