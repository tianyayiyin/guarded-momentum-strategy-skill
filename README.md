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
- `CHANGELOG.md` - version notes for the hackathon prototype.
- `MORNING_ACTIONS.md` - next user actions after the repo is packaged.
- `DORAHACKS_FORM_COPY.md` - copy-paste fields for the hackathon submission form.
- `JUDGING_NOTES.md` - quick-start notes for hackathon judges.
- `JUDGE_QA.md` - concise answers to likely judging questions.
- `FINAL_SUBMISSION_REVIEW.md` - scorecard-style final submission review.
- `RECORDING_CHECKLIST.md` - step-by-step demo recording checklist.
- `skill.json` - skill metadata and input/output schema.
- `cmc-adapter.js` - normalizes CMC-style OHLCV payloads into skill input.
- `demo-cmc-adapter.js` - demonstrates CMC-style payload normalization.
- `execution-policy.js` - simulation-only execution gate for future wallet integrations.
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
npm run verify
```

This runs tests, the multi-regime demo, and the submission preflight check.

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

CMC-style payload adapter demo:

```bash
npm run demo:cmc-adapter
```

## Test

```bash
npm test
```

The GitHub Actions workflow runs `npm run verify` on every push and pull request.

Before final submission, run:

```bash
npm run demo:update-output
npm run preflight
```

This refreshes the demo output snapshot, then checks required submission files, metadata, safety notes, payout address presence, repository links, and the expected BUY / REDUCE / HOLD demo behavior.

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
- number of simulated trades,
- execution policy mode and manual-approval requirement.

## Safety

- No private keys.
- No wallet connection.
- No live trades.
- No leverage by default.
- No real money.
