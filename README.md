# Guarded Momentum Strategy Skill

[![CI](https://github.com/tianyayiyin/guarded-momentum-strategy-skill/actions/workflows/ci.yml/badge.svg)](https://github.com/tianyayiyin/guarded-momentum-strategy-skill/actions/workflows/ci.yml)

Prototype for the CoinMarketCap / Trust Wallet / BNB Chain hackathon Track 2: Strategy Skills.

This is intentionally **not** a live trading bot. It creates a backtestable strategy spec from market data and emphasizes risk controls, drawdown limits, and no-custody execution.

## Why This Can Win

- Fits Track 2: "Build CMC Skills that generate trading strategies from market data."
- Uses the agent-skill framing: input market data, output a strategy decision and risk envelope.
- Avoids unsafe autonomous live trading during development.
- Can later connect to CMC Agent Hub data, Trust Wallet Agent Kit, or BNB SDK if the user registers for the hackathon/API access.

## Files

- `PROJECT_SUMMARY.md` - one-page project overview.
- `DORAHACKS_FORM_COPY.md` - copy-paste fields for the hackathon submission form.
- `JUDGING_NOTES.md` - quick-start notes for hackathon judges.
- `JUDGE_QA.md` - concise answers to likely judging questions.
- `skill.json` - skill metadata and input/output schema.
- `sample_market_data.json` - demo CMC-style OHLCV and sentiment data.
- `sample_bearish_market_data.json` - defensive-market fixture.
- `sample_sideways_market_data.json` - neutral-market fixture.
- `strategy.js` - strategy generator.
- `metrics.js` - simple backtest summary metrics.
- `validate-skill.js` - metadata and input/output validation.
- `backtest.js` - simple backtest harness.
- `ARCHITECTURE.md` - integration plan for CMC, Trust Wallet, and BNB Chain.
- `DEMO_OUTPUT.md` - representative output across multiple market regimes.

## Run

Recommended judge flow:

```bash
npm test
npm run demo:all
```

Single-scenario demo:

```bash
npm run demo
npm run demo:all
```

Additional regimes:

```bash
node backtest.js sample_bearish_market_data.json
node backtest.js sample_sideways_market_data.json
```

## Test

```bash
npm test
```

The GitHub Actions workflow runs `npm test` and `npm run demo:all` on every push and pull request.

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
