# Official Rules Alignment

Source checked:

```text
https://coinmarketcap.com/api/hackathon/
```

## Track 2 Requirement

The official CoinMarketCap hackathon page describes Track 2 as Strategy Skills and asks builders to ship a backtestable strategy specification, not a live trading agent.

## Project Alignment

| Official Expectation | Project Evidence |
| --- | --- |
| Strategy skill | `skill.json` declares `Strategy Skills`. |
| Uses market data | `sample_market_data.json` fixtures and `cmc-adapter.js` normalize CMC-style OHLCV data. |
| Backtestable spec | `backtest.js`, `metrics.js`, and `run-all.js` produce inspectable metrics. |
| Not a live agent | `execution-policy.js` defaults to `simulation_only` and requires manual approval. |
| Sponsor stack fit | `JUDGING_NOTES.md` maps CoinMarketCap, Trust Wallet, and BNB Chain integration paths. |

## Useful Commands

```bash
npm run verify
npm run demo:cmc-adapter
```

## Submission Language

Use this wording if a judge asks why the project does not connect to a wallet:

```text
Track 2 is a Strategy Skills track. This submission intentionally ships a backtestable strategy specification and a simulation-only execution policy gate, rather than a live trading agent.
```
