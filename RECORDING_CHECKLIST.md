# Demo Recording Checklist

Use this with `DEMO_SCRIPT.md` when recording the final DoraHacks / BNB HACK demo video.

## Target Length

Aim for 2:30 to 3:00 minutes.

## Before Recording

- Open the GitHub repository page.
- Open `README.md`, `JUDGING_NOTES.md`, and `JUDGE_QA.md` in browser tabs.
- Open a terminal at the repository root.
- Make the terminal font large enough to read in the recording.
- Run `git status --short` and confirm there are no unexpected local changes.

## Recording Flow

### 1. Repository Overview

Show the GitHub repository and say the project name:

```text
Guarded Momentum Strategy Skill
```

Point out the important files:

- `README.md`
- `skill.json`
- `strategy.js`
- `sample_market_data.json`
- `sample_bearish_market_data.json`
- `sample_sideways_market_data.json`
- `JUDGING_NOTES.md`
- `JUDGE_QA.md`

### 2. Skill Contract

Open `skill.json` and show:

- track: `Strategy Skills`
- inputs: symbol, candles, sentiment
- outputs: action, confidence, max position fraction, stop-loss, take-profit, rationale
- risk controls

### 3. Safety

Open `JUDGE_QA.md` or `JUDGING_NOTES.md` and show that the project:

- does not connect wallets
- does not hold private keys
- does not execute live trades
- does not use leverage
- produces a reviewable strategy recommendation

### 4. Run Tests

In the terminal, run:

```bash
npm test
```

Pause briefly on:

```text
All strategy tests passed.
Skill metadata and I/O validation passed.
```

### 5. Run Multi-Regime Demo

Run:

```bash
npm run demo:all
```

Pause on the three scenario outputs:

- bullish momentum -> `BUY`
- bearish drawdown -> `REDUCE`
- sideways chop -> `HOLD`

Say clearly that this shows the strategy is not a blind long-only signal.

### 6. Sponsor Fit

Return to `JUDGING_NOTES.md` and show:

- CoinMarketCap data integration path
- Trust Wallet Agent Kit pre-execution policy role
- BNB Chain venue/simulation path

### 7. Close

End with:

```text
This project is a safe strategy layer for agent-native trading: more useful than raw indicators, safer than autonomous live trading, and ready to connect to CMC, Trust Wallet, and BNB Chain tooling after API access and user approval.
```

## Do Not Show

- private wallet screens
- seed phrases
- API keys
- personal browser notifications
- unrelated accounts or balances

## After Recording

- Upload the video as unlisted if using YouTube.
- Add the video link to the DoraHacks Demo URL field if available.
- Keep the GitHub URL as the fallback demo URL if no video is ready.
