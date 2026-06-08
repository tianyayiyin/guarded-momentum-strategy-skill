# Contributing

Thanks for reviewing or improving Guarded Momentum Strategy Skill.

## Safe Contribution Rules

This repository is strategy-only. Contributions should not add:

- private key handling,
- wallet connection by default,
- live trading by default,
- real-funds requirements,
- leverage by default,
- transaction signing,
- social posting automation,
- CAPTCHA bypasses,
- third-party probing without permission.

Future wallet or BNB Chain execution work should stay simulation-first and require explicit user approval.

## Before Opening A Pull Request

Run:

```bash
npm run verify
```

If demo output changed, refresh it first:

```bash
npm run demo:update-output
npm run verify
```

## Strategy Changes

When changing strategy behavior, include:

- the expected action change,
- which market regime is affected,
- why the risk envelope is still safe,
- test coverage for the new behavior.

The three baseline regimes should remain easy to inspect:

- bullish momentum -> `BUY`,
- bearish drawdown -> `REDUCE`,
- sideways chop -> `HOLD`.

## Documentation Changes

Keep DoraHacks-facing copy aligned across:

- `README.md`,
- `DORAHACKS_FORM_COPY.md`,
- `SUBMISSION_DRAFT.md`,
- `JUDGING_NOTES.md`,
- `FINAL_SUBMISSION_REVIEW.md`.

## Security

Follow `SECURITY.md`. Do not include secrets, wallet credentials, seed phrases, API keys, or account-specific screenshots in issues, pull requests, demo recordings, or logs.
