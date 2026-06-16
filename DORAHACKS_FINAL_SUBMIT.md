# DoraHacks Final Submit Handoff

Last prepared: 2026-06-14 06:16 UTC / 2026-06-14 00:16 MDT

## Open Pages

```text
https://dorahacks.io/buidl/244288
https://dorahacks.io/hackathon/bnbhack-twt-cmc/detail
```

## Required Fix On BUIDL

If the BUIDL still shows `jr-soft.com`, replace it with:

```text
https://github.com/tianyayiyin/guarded-momentum-strategy-skill
```

Also add the same URL to any required GitHub / GitLab / Bitbucket / repository field:

```text
https://github.com/tianyayiyin/guarded-momentum-strategy-skill
```

## Hackathon Submission Choices

Use existing BUIDL:

```text
Guarded Momentum Strategy Skill
```

Track:

```text
Strategy Skills
```

Category:

```text
AI / Robotics
```

If a more specific category is offered, prefer:

```text
AI Agent / Trading / DeFi
```

## Copy-Paste Fields

Tagline:

```text
A risk-aware strategy skill that converts market data into a backtestable trading plan with position sizing, stop-loss, take-profit, and rationale.
```

Short description:

```text
Guarded Momentum Strategy Skill reads CMC-style OHLCV and sentiment data, then outputs BUY, HOLD, or REDUCE with confidence, max position size, stop-loss, take-profit, diagnostics, backtest metrics, and plain-English rationale.
```

Full description:

```text
Guarded Momentum Strategy Skill is a risk-aware strategy layer for agent-native trading systems. It reads CMC-style OHLCV and sentiment data, then outputs a structured recommendation: BUY, HOLD, or REDUCE, with confidence, max position size, stop-loss, take-profit, diagnostics, backtest metrics, and plain-English rationale.

The prototype is intentionally not a live trading bot. It does not connect to wallets or execute trades. Instead, it produces a safer, backtestable strategy spec that can later be connected to CoinMarketCap Agent Hub data, Trust Wallet Agent Kit, or BNB Chain tooling under user-defined rules.

The demo includes bullish, bearish, and sideways market fixtures to show that the skill is not a blind long-only signal. It buys in bullish momentum, reduces exposure in bearish drawdown, and holds in sideways chop.
```

Tech stack:

```text
JavaScript, Node.js, CoinMarketCap-style market data, strategy skill schema, backtesting harness, GitHub Actions CI
```

How to run:

```text
npm run verify
```

Sponsor technology:

```text
CoinMarketCap-style market data and strategy skill design. Future integration path: CMC Agent Hub, Trust Wallet Agent Kit, and BNB Chain AI Agent SDK.
```

Repository / website / demo URL:

```text
https://github.com/tianyayiyin/guarded-momentum-strategy-skill
```

Wallet / payout address if the form asks:

```text
0xDA423EC38A4d36c294Cb1D187af0312039C569eE
```

## Verification

Latest local verification:

```text
Command: npm run verify
Result: passed
Time: 2026-06-14 06:16 UTC
```

## Do Not Automate Without User Present

- Final DoraHacks submit button.
- Wallet signatures.
- KYC.
- CAPTCHA.
- Social posts or messages.
- Any mainnet transaction or real fund movement.

## Remaining Blocker

The Chrome automation channel was blocked by the local sandbox during this heartbeat, so the exact DoraHacks form could not be edited directly. The two target pages were opened in Chrome for manual handoff.
