---
package: addy
path: evals/cases/documentation-and-adrs.json
type: config
bytes: 1328
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/documentation-and-adrs.json, sha256: 63369e93c8eccc4bd11dfd3830a28f25b5d50bf09844d3d2c7d5643f9051fd9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/documentation-and-adrs.json

## Purpose — required, verbatim
> "skill_name" — evals/cases/documentation-and-adrs.json:2 (no explicit purpose statement)

## Design intent — required
This configuration file provides automated Tier 2 trigger evaluation prompts and Tier 3 behavioral evaluation assertions for the `documentation-and-adrs` skill. Without this file, the skill catalog could not deterministically prevent routing drift or detect regressions where prompts demanding architectural decision records or design documentation fail to route to `documentation-and-adrs`, or where execution traces fail to enforce ADR structural conventions (context, decision, alternatives, consequences).

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` along with skill metadata from `skills/documentation-and-adrs/SKILL.md` and behavioral test fixtures located in `evals/fixtures/documentation-and-adrs/`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc evals/cases/<skill-name>.json — evals/README.md:42
- script cases — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `documentation-and-adrs` — evals/cases/documentation-and-adrs.json:2 — defined here
- `ADR` — evals/cases/documentation-and-adrs.json:6 — used here
- `architecture decision` — evals/cases/documentation-and-adrs.json:10 — used here
- `debugging-and-error-recovery` — evals/cases/documentation-and-adrs.json:21 — used here
- `security-and-hardening` — evals/cases/documentation-and-adrs.json:25 — used here
- `event sourcing` — evals/cases/documentation-and-adrs.json:32 — used here
- `context` — evals/cases/documentation-and-adrs.json:33 — used here
- `decision` — evals/cases/documentation-and-adrs.json:33 — used here
- `alternatives` — evals/cases/documentation-and-adrs.json:33 — used here
- `consequences` — evals/cases/documentation-and-adrs.json:33 — used here
- `trade-offs` — evals/cases/documentation-and-adrs.json:39 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Specifies 3 positive triggers with `top_k: 3`, 2 negative triggers owned by `debugging-and-error-recovery` and `security-and-hardening`, and 1 execution eval backed by fixture directory `evals/fixtures/documentation-and-adrs/` asserting clear separation of context, decision, alternatives, and consequences.

## Context cost
1328 bytes, ~332 tokens.
