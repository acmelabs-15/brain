---
package: addy
path: evals/cases/doubt-driven-development.json
type: config
bytes: 1274
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/doubt-driven-development.json, sha256: c92769c979e81afa55f9f937eff6a952e60599792e59d8a38ed8e68d7b7abeba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/doubt-driven-development.json

## Purpose — required, verbatim
> "skill_name" — evals/cases/doubt-driven-development.json:2 (no explicit purpose statement)

## Design intent — required
This configuration file provides automated Tier 2 trigger evaluation prompts and Tier 3 behavioral evaluation assertions for the `doubt-driven-development` skill. Without this file, there would be no regression test ensuring that prompts asking for adversarial plan review or assumption stress-testing route to `doubt-driven-development` instead of generic planning or formatting skills, and no behavioral check verifying that execution traces extract claims, test assumptions, and deliver a formal go or stop verdict.

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` alongside skill metadata from `skills/doubt-driven-development/SKILL.md` and behavioral test fixtures located in `evals/fixtures/doubt-driven-development/`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc evals/cases/<skill-name>.json — evals/README.md:42
- script cases — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `doubt-driven-development` — evals/cases/doubt-driven-development.json:2 — defined here
- `adversarially review` — evals/cases/doubt-driven-development.json:10 — used here
- `hidden failure modes` — evals/cases/doubt-driven-development.json:14 — used here
- `prettier` — evals/cases/doubt-driven-development.json:20 — used here
- `changelog` — evals/cases/doubt-driven-development.json:23 — used here
- `adversarial review` — evals/cases/doubt-driven-development.json:30 — used here
- `claims` — evals/cases/doubt-driven-development.json:31 — used here
- `doubts` — evals/cases/doubt-driven-development.json:31 — used here
- `reconciliation` — evals/cases/doubt-driven-development.json:31 — used here
- `go or stop verdict` — evals/cases/doubt-driven-development.json:31 — used here
- `verdict` — evals/cases/doubt-driven-development.json:38 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains 3 positive triggers with `top_k: 3`, 2 unowned negative triggers (`prettier`, `changelog`), and 1 execution eval backed by `evals/fixtures/doubt-driven-development/` testing adversarial plan review before an irreversible migration.

## Context cost
1274 bytes, ~318 tokens.
