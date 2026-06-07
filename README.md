# Guarded Momentum Strategy Skill

Prototype for the CoinMarketCap / Trust Wallet / BNB Chain hackathon Track 2: Strategy Skills.

This is intentionally **not** a live trading bot. It creates a backtestable strategy spec from market data and emphasizes risk controls, drawdown limits, and no-custody execution.

## Why This Can Win

- Fits Track 2: "Build CMC Skills that generate trading strategies from market data."
- Uses the agent-skill framing: input market data, output a strategy decision and risk envelope.
- Avoids unsafe autonomous live trading during development.
- Can later connect to CMC Agent Hub data, Trust Wallet Agent Kit, or BNB SDK if the user registers for the hackathon/API access.

## Files

- `skill.json` - skill metadata and input/output schema.
- `sample_market_data.json` - demo CMC-style OHLCV and sentiment data.
- `strategy.js` - strategy generator.
- `metrics.js` - simple backtest summary metrics.
- `backtest.js` - simple backtest harness.
- `ARCHITECTURE.md` - integration plan for CMC, Trust Wallet, and BNB Chain.

## Run

```bash
npm run demo
```

## Test

```bash
npm test
```

## Strategy Summary

The skill looks for:

- positive 20-period momentum,
- price above moving average,
- volume confirmation,
- sentiment not bearish,
- drawdown-aware position sizing.

It outputs:

- action: `BUY`, `HOLD`, or `REDUCE`,
- confidence,
- position size cap,
- stop-loss and take-profit bands,
- explanation suitable for a trading agent.

The demo also reports:

- total return,
- max drawdown,
- win rate,
- average step return,
- number of simulated trades.

## Safety

- No private keys.
- No wallet connection.
- No live trades.
- No leverage by default.
- No real money.
