# Security Policy

## Scope

This project is a hackathon prototype for strategy generation and backtesting. It does not execute trades, connect wallets, store private keys, or require real funds.

## Supported Version

| Version | Supported |
| --- | --- |
| 0.1.0 | Yes |

## Safe Usage

- Run demos locally with sample market data only.
- Use `npm run verify` before judging or submission.
- Keep wallet execution disabled unless a future version adds explicit simulation, limits, and manual approval.
- Do not paste seed phrases, private keys, API keys, or wallet credentials into issues, forms, logs, or demos.

## Reporting Issues

For hackathon judging, report issues through the repository issue tracker or the DoraHacks project comments.

Please include:

- affected file or command,
- expected behavior,
- actual behavior,
- reproduction steps,
- whether the issue affects strategy output, safety controls, or documentation.

## Non-Goals

This project is not a bug bounty target and does not invite attacks against third-party systems, exchanges, wallets, APIs, or blockchain networks.

Do not submit reports based on:

- social engineering,
- wallet-draining flows,
- credential harvesting,
- denial-of-service testing,
- live trading with real funds,
- probing third-party infrastructure without permission.
