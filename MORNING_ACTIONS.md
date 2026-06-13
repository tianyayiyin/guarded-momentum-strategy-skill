# Morning Actions

## Current Status

The GitHub repository is packaged and pushed:

```text
https://github.com/tianyayiyin/guarded-momentum-strategy-skill
```

The project now has:

- one-command verification with `npm run verify`,
- multi-regime strategy demo,
- CMC-style payload adapter demo,
- simulation-only execution policy gate,
- GitHub Actions CI,
- DoraHacks form copy,
- judging notes,
- judge Q&A,
- official Track 2 rules alignment notes,
- final submission review scorecard,
- recording checklist,
- changelog,
- security policy,
- contribution guidelines,
- GitHub issue templates,
- repository metadata,
- submission preflight.

## What To Do First

1. Open the DoraHacks BUIDL page.
2. Replace the placeholder website `jr-soft.com` with:

```text
https://github.com/tianyayiyin/guarded-momentum-strategy-skill
```

3. Confirm the BUIDL is associated with:

```text
BNB HACK / CoinMarketCap / Trust Wallet / BNB Chain Hackathon
```

4. Confirm the track is:

```text
Strategy Skills
```

5. Use `DORAHACKS_FORM_COPY.md` for any missing form fields.

6. If you need a quick final sanity check, read:

```text
FINAL_SUBMISSION_REVIEW.md
OFFICIAL_RULES_ALIGNMENT.md
```

## Payout / Wallet

If DoraHacks asks for a wallet or payout address, use:

```text
0xDA423EC38A4d36c294Cb1D187af0312039C569eE
```

If the form does not ask for a wallet yet, that is usually not fatal. Payout details are often collected later from finalists or winners, but add the wallet if DoraHacks provides a field for it.

## Prize / Deadline

Official CMC hackathon page says Track 2 Strategy Skills prizes are:

```text
1st: $3,000
2nd: $2,000
3rd: $1,000
```

Special prizes are listed as stackable at $2,000 each. Submission lock is:

```text
2026-06-21 12:00 UTC
```

See `PRIZE_AND_DEADLINE.md` for the short prize and timeline summary.

## Demo

Best command to show judges:

```bash
npm run verify
```

Optional sponsor-specific command:

```bash
npm run demo:cmc-adapter
```

If recording a video, use:

```text
DEMO_SCRIPT.md
RECORDING_CHECKLIST.md
```

## Secondary Opportunity To Check

Casper Agentic Buildathon appears worth checking manually. Official Casper pages mention the Agentic Buildathon and a $150,000 prize pool, and point to DoraHacks:

```text
https://www.casper.network/
https://www.casper.network/news/casper-ai-toolkit
https://dorahacks.io/hackathon/2202/detail
```

Do not submit anything blindly. First verify the DoraHacks page, exact deadline, tracks, rules, payout requirements, whether a fresh repo is required, and whether the current strategy-skill project can be adapted without violating originality rules.

## 2026-06-13 Automation Notes

- Correct DoraHacks BUIDL URL: `https://dorahacks.io/buidl/44288`
- User later provided candidate BUIDL URL: `https://dorahacks.io/buidl/244288`; re-check it in the logged-in browser before assuming `44288` is final.
- Correct BNB HACK DoraHacks URL: `https://dorahacks.io/hackathon/bnbhack-twt-cmc/detail`
- Current submission blocker: the BNB HACK submission modal accepts the existing BUIDL, but reports that the BUIDL is missing the required GitHub/GitLab/Bitbucket link.
- Required repository link to add: `https://github.com/tianyayiyin/guarded-momentum-strategy-skill`
- The gear menu on the BUIDL page opens management actions. Use `Edit BUIDL Profile` to replace `jr-soft.com` and add the repository link.
- After the repository link is saved, return to the BNB HACK submission modal, choose `Use existing BUIDL`, select `Guarded Momentum Strategy Skill`, choose the `Strategy Skills` track, and review the final submit screen.
- `cmd /c npm run verify` passed on 2026-06-13, including tests, all demo scenarios, and preflight.
