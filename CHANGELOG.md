# Changelog

## 0.1.0

Initial hackathon-ready prototype for the BNB HACK / CoinMarketCap / Trust Wallet Strategy Skills track.

### Added

- Risk-aware momentum strategy generator with `BUY`, `HOLD`, and `REDUCE` outputs.
- CMC-style OHLCV and sentiment sample fixtures for bullish, bearish, and sideways regimes.
- CMC payload adapter for `quote.USD` OHLCV data normalization.
- Lightweight backtest metrics for total return, max drawdown, win rate, exposure, and simulated trades.
- Simulation-only execution policy gate for future Trust Wallet or BNB Chain integrations.
- Skill metadata, input-output validation, tests, and submission preflight checks.
- One-command verification flow with `npm run verify`.
- Demo script, recording checklist, judging notes, judge Q&A, DoraHacks form copy, and submission draft.
- GitHub Actions CI for the same verification suite.

### Safety

- No private keys.
- No wallet connection.
- No live trades.
- No leverage.
- No real funds required.
