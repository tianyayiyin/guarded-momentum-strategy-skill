# Demo Video Script

## 0:00 - Intro

"This is Guarded Momentum Strategy Skill, a risk-aware strategy layer for autonomous trading agents. It is built for the Strategy Skills track and designed around CMC-style market data."

## 0:15 - Problem

"Trading agents often output simple buy or sell calls without enough risk context. That is dangerous for autonomous systems, especially when connected to wallet execution."

## 0:30 - Solution

"This skill reads OHLCV and sentiment inputs, then outputs a structured decision: action, confidence, max position size, stop-loss, take-profit, diagnostics, and plain-English rationale."

## 0:50 - Safety

"The prototype does not connect to a wallet and does not execute live trades. It is a strategy layer only. Execution can later be added through Trust Wallet Agent Kit or BNB Chain SDK, but only under user-defined rules."

## 1:10 - Run Demo

Show:

```bash
node backtest.js sample_market_data.json
```

Explain:

"The sample BNB data shows positive 20-candle momentum, price above moving averages, increased volume, positive sentiment, and low drawdown."

## 1:35 - Output

"The skill outputs BUY with confidence 1, but caps position size at 11.9%, with a 2.5% stop-loss and 4.5% take-profit. This makes the output backtestable and safer for downstream agents."

## 2:00 - Sponsor Fit

"This project fits CoinMarketCap Agent Hub as a strategy skill using market data and indicators. It can later integrate Trust Wallet Agent Kit for self-custody execution and BNB Chain SDK for venue-specific actions."

## 2:25 - Roadmap

"Next steps are live CMC data integration, richer backtest metrics, multiple strategy modules, and simulation-mode wallet execution."

## 2:45 - Close

"Guarded Momentum Strategy Skill is a practical middle layer: safer than blind autonomous trading, more useful than raw indicators, and ready for agent-native markets."

