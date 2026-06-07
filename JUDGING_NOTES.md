# Judging Notes

## What To Try First

```bash
npm test
npm run demo:all
```

## What This Project Demonstrates

Guarded Momentum Strategy Skill is a strategy-generation module for agent-native trading workflows. It consumes CMC-style market data and outputs a structured, risk-bounded recommendation rather than an unsafe raw signal.

The important behavior is visible in `npm run demo:all`:

- Bullish regime -> `BUY`
- Bearish drawdown regime -> `REDUCE`
- Sideways regime -> `HOLD`

Each decision includes:

- confidence,
- max position fraction,
- stop-loss,
- take-profit,
- diagnostics,
- rationale,
- lightweight backtest metrics.

## Why It Fits Strategy Skills

This is a skill that turns data into strategy. It can be called by an agent, evaluated by a backtester, or passed to a wallet execution layer later.

It is intentionally strategy-only during the hackathon:

- no private keys,
- no wallet connection,
- no live execution,
- no leverage,
- no user funds.

That separation is the core safety feature.

## Sponsor Integration Path

### CoinMarketCap

Replace local sample data with CMC Agent Hub or Data API market data:

- OHLCV,
- trending assets,
- categories,
- sentiment,
- volume/rank changes.

### Trust Wallet Agent Kit

Use this project as a pre-execution policy layer. The wallet agent should receive a bounded recommendation and still require user approval before any transaction.

### BNB Chain

Use BNB ecosystem assets and add simulated venue adapters first. Live BNB Chain execution should only come after explicit user limits, simulation, and approval.

## Why It Is Safer Than A Trading Bot

The prototype does not trade. It produces a structured decision and a risk envelope. This makes it reviewable, testable, and safer for downstream agent systems.

