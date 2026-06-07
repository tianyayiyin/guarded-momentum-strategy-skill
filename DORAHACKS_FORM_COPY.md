# DoraHacks Form Copy

Use this page when editing the BUIDL or submitting it to BNB HACK / CoinMarketCap / Trust Wallet / BNB Chain Hackathon.

## Project / BUIDL Name

```text
Guarded Momentum Strategy Skill
```

## Version

```text
0.1.0
```

## Track

```text
Strategy Skills
```

## Category

```text
AI / Robotics
```

If a more specific option exists, prefer:

```text
AI Agent / Trading / DeFi
```

## Tagline

```text
A risk-aware strategy skill that converts market data into a backtestable trading plan with position sizing, stop-loss, take-profit, and rationale.
```

## Short Description

```text
Guarded Momentum Strategy Skill reads CMC-style OHLCV and sentiment data, then outputs BUY, HOLD, or REDUCE with confidence, max position size, stop-loss, take-profit, diagnostics, backtest metrics, and plain-English rationale.
```

## Full Description

```text
Guarded Momentum Strategy Skill is a risk-aware strategy layer for agent-native trading systems. It reads CMC-style OHLCV and sentiment data, then outputs a structured recommendation: BUY, HOLD, or REDUCE, with confidence, max position size, stop-loss, take-profit, diagnostics, backtest metrics, and plain-English rationale.

The prototype is intentionally not a live trading bot. It does not connect to wallets or execute trades. Instead, it produces a safer, backtestable strategy spec that can later be connected to CoinMarketCap Agent Hub data, Trust Wallet Agent Kit, or BNB Chain tooling under user-defined rules.

The demo includes bullish, bearish, and sideways market fixtures to show that the skill is not a blind long-only signal. It buys in bullish momentum, reduces exposure in bearish drawdown, and holds in sideways chop.
```

## Problem

```text
Autonomous trading agents often produce simple buy or sell signals without enough risk context. This is unsafe because downstream agents may execute trades without clear drawdown controls, position sizing, stop-losses, or rationale.
```

## Solution

```text
The project turns market data into a structured, risk-limited strategy output. It checks momentum, moving averages, volume confirmation, sentiment, volatility, and max drawdown, then produces a trading plan with explicit risk controls and simple backtest metrics.
```

## GitHub / Repository URL

```text
https://github.com/tianyayiyin/guarded-momentum-strategy-skill
```

## Website URL

Use the GitHub repo:

```text
https://github.com/tianyayiyin/guarded-momentum-strategy-skill
```

Important: replace the placeholder `jr-soft.com` if it is still present.

## Demo URL

Until a video is recorded, use the GitHub repo:

```text
https://github.com/tianyayiyin/guarded-momentum-strategy-skill
```

## How To Run

```text
npm test
npm run demo:all
```

## Tech Stack

```text
JavaScript, Node.js, CoinMarketCap-style market data, strategy skill schema, backtesting harness, GitHub Actions CI
```

## Sponsor Technology Used

```text
CoinMarketCap-style market data and strategy skill design. Future integration path: CMC Agent Hub, Trust Wallet Agent Kit, and BNB Chain AI Agent SDK.
```

## Team

```text
Solo builder
```

## Wallet / Payout Address If Required

```text
0xDA423EC38A4d36c294Cb1D187af0312039C569eE
```

## Submission Notes

```text
The project is strategy-only by design: it does not store private keys, connect to wallets, or execute live trades. This keeps the submission safe while still providing a clear integration path for CMC data, Trust Wallet Agent Kit, and BNB Chain execution adapters.
```

