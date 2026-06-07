# Architecture

Guarded Momentum Strategy Skill is a strategy-generation layer for agent-native trading workflows. It is deliberately separated from wallet execution so the strategy can be tested, reviewed, and constrained before any real transaction path exists.

## Flow

```text
CMC-style market data
        |
        v
Input normalization
        |
        v
Strategy signal engine
        |
        v
Risk envelope
        |
        v
Backtest summary
        |
        v
Agent-readable strategy output
```

## Components

### Market Data Input

The prototype accepts:

- symbol,
- OHLCV candles,
- sentiment score.

The schema is intentionally close to CoinMarketCap-style market data so it can later be adapted to CMC Agent Hub or Data API inputs.

### Strategy Signal Engine

`strategy.js` computes:

- 10-period moving average,
- 20-period moving average,
- 20-candle momentum,
- 10-vs-20 volume confirmation,
- 20-candle volatility,
- 20-candle max drawdown,
- sentiment gate.

It returns one of:

- `BUY`,
- `HOLD`,
- `REDUCE`.

### Risk Envelope

The strategy never emits an unconstrained trade. It always includes:

- maximum position fraction,
- stop-loss percentage,
- take-profit percentage,
- confidence,
- diagnostics,
- rationale.

This makes the output safer for downstream agents than a raw signal.

### Backtest Summary

`metrics.js` produces lightweight metrics:

- simulated exposure,
- total return,
- max drawdown,
- win rate,
- average step return,
- number of simulated trades.

This is not a full production backtester; it is a simple evaluation layer that makes the strategy output inspectable.

## Integration Plan

### CoinMarketCap

Future integration:

1. Replace `sample_market_data.json` with CMC Agent Hub or Data API market data.
2. Add more indicators such as market cap rotation, dominance, exchange volume, and trending-token scores.
3. Use CMC categories to run the skill across BNB ecosystem assets.

### Trust Wallet Agent Kit

Future integration:

1. Keep this project as a strategy-only module.
2. Pass `BUY/HOLD/REDUCE` plus the risk envelope to an execution approval layer.
3. Require explicit user confirmation before any wallet transaction.

### BNB Chain

Future integration:

1. Add BNB Chain asset universe presets.
2. Add PancakeSwap quote simulation.
3. Add execution adapters only in simulation mode first.
4. Add mainnet execution only after user-defined limits and manual approval.

## Safety Boundaries

The current project does not:

- store private keys,
- connect to wallets,
- execute trades,
- use leverage,
- submit transactions,
- require real funds.

The skill can be evaluated entirely offline with:

```bash
npm test
npm run demo
```

