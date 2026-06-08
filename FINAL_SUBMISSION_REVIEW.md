# Final Submission Review

## Fit To Track

| Requirement | Evidence |
| --- | --- |
| Strategy Skills track | `skill.json` declares `Strategy Skills`; README and DoraHacks copy match the same track. |
| Generates trading strategies from market data | `strategy.js` consumes OHLCV and sentiment data and outputs `BUY`, `HOLD`, or `REDUCE`. |
| Backtestable output | `metrics.js`, `backtest.js`, and `run-all.js` report return, drawdown, win rate, and simulated trades. |
| Agent-readable skill shape | `skill.json` documents inputs, outputs, and risk controls. |

## Sponsor Fit

| Sponsor | Evidence |
| --- | --- |
| CoinMarketCap | `cmc-adapter.js` normalizes CMC-style OHLCV payloads; `npm run demo:cmc-adapter` shows the path. |
| Trust Wallet | `execution-policy.js` acts as a pre-execution gate and keeps manual approval required. |
| BNB Chain | Demo uses BNB-style scenarios and leaves BNB Chain execution as simulation-first future work. |

## Safety

| Risk | Control |
| --- | --- |
| Private keys | None stored or requested. |
| Wallet execution | No wallet connection and no transaction signing. |
| Blind buy signals | Three-regime demo proves `BUY`, `REDUCE`, and `HOLD` behavior. |
| Oversized positions | Strategy emits max position fraction and execution policy caps it. |
| Live trading | Default execution mode is `simulation_only`. |

## Verification

Run:

```bash
npm run verify
```

This covers:

- strategy tests,
- skill metadata validation,
- multi-regime demo,
- required submission files,
- payout address presence in form copy,
- repository links,
- demo output snapshot consistency.

## Remaining Manual Actions

- Update the DoraHacks website/demo fields if they still show placeholders.
- Confirm hackathon association and `Strategy Skills` track in the DoraHacks UI.
- Add the payout wallet only if the form asks for it.
- Record a short demo video if time allows.
