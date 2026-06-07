# Judge Q&A

## Is This A Trading Bot?

No. Guarded Momentum Strategy Skill is a strategy-generation module. It does not connect to a wallet, hold private keys, place orders, use leverage, or execute live trades.

The output is a structured recommendation that another system can review:

- `BUY`, `HOLD`, or `REDUCE`
- confidence
- max position fraction
- stop-loss and take-profit bands
- diagnostics
- rationale
- backtest metrics

## What Should A Judge Run?

```bash
npm test
npm run demo:all
```

`npm test` validates the strategy behavior and the skill metadata contract. `npm run demo:all` shows the same strategy reacting to bullish, bearish, and sideways market regimes.

## Why Is This A Strategy Skill?

The project turns market data into an agent-consumable strategy plan. It is designed to sit between market data providers and wallet/execution tools:

```text
CMC-style market data -> strategy skill -> bounded recommendation -> optional wallet/execution layer
```

That makes the strategy testable before any real funds are involved.

## How Does It Use CoinMarketCap?

The current prototype uses local CMC-style OHLCV and sentiment fixtures so judges can run it without API keys. The next integration step is to replace those fixtures with CoinMarketCap Agent Hub or Data API inputs:

- OHLCV candles
- trending assets
- category/rank changes
- sentiment or news signals
- volume confirmation

## How Does It Fit Trust Wallet?

The output is intentionally suitable for a future Trust Wallet Agent Kit pre-execution policy layer. A wallet agent could receive this recommendation, check the risk envelope, and still require explicit user approval before any transaction.

## How Does It Fit BNB Chain?

The demo is centered on BNB-style market data and can be extended to BNB Chain assets, BSC spot venues, or simulated PancakeSwap adapters. Live execution is deliberately outside this prototype until simulation, limits, and user approval are complete.

## What Makes It Safer Than A Raw Signal?

Raw signals often say only "buy" or "sell." This skill adds the controls needed for agent workflows:

- no live execution by default
- capped position sizing
- stop-loss and take-profit bands
- drawdown-aware `REDUCE` behavior
- sentiment filter
- rationale suitable for audit or human review

## What Are The Current Demo Outcomes?

The included fixtures demonstrate three distinct behaviors:

- bullish regime -> `BUY`
- bearish drawdown regime -> `REDUCE`
- sideways regime -> `HOLD`

This shows that the skill is not hardcoded to always produce a positive trading signal.

## What Is The Most Important Limitation?

The prototype uses simplified local fixtures and a lightweight backtest. It is meant to prove the strategy-skill contract, safety model, and integration direction. Production use would require live data validation, richer market features, paper trading, execution simulation, and explicit user limits.
