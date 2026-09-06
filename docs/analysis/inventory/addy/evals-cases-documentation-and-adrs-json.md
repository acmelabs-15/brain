---
package: addy
path: evals/cases/documentation-and-adrs.json
type: config
bytes: 1328
unit: inv-addy-7
aliases: []
memo_inputs:
  - {path: evals/cases/documentation-and-adrs.json, sha256: 63369e93c8eccc4bd11dfd3830a28f25b5d50bf09844d3d2c7d5643f9051fd9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/documentation-and-adrs.json

## Purpose — required, verbatim
> "skill_name": "documentation-and-adrs" — evals/cases/documentation-and-adrs.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and behavioral evaluation criteria for the `documentation-and-adrs` skill in the Addy eval harness. Specifies 3 positive trigger prompts for creating Architecture Decision Records (ADRs) and documenting architecture decisions (tested with top_k=3), 2 negative prompts routing away to debugging and security skills, and 1 execution evaluation testing whether recorded ADRs capture context, decision, alternatives considered, consequences, trade-offs, and timeless language.

## Phase — required
none

## Inputs — required
User prompts requesting ADR generation or architecture documentation, test fixture directory `evals/fixtures/documentation-and-adrs`.

## Outputs — required
Evaluation verdicts and assertion checks from `scripts/run-evals.js` (trigger ranking scores and behavioral assertion evaluations).

## Invokes — required
- skill documentation-and-adrs — evals/cases/documentation-and-adrs.json:2
- skill debugging-and-error-recovery — evals/cases/documentation-and-adrs.json:21
- skill security-and-hardening — evals/cases/documentation-and-adrs.json:25

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/documentation-and-adrs.json:2 — used here
- `documentation-and-adrs` — evals/cases/documentation-and-adrs.json:2 — used here
- `trigger` — evals/cases/documentation-and-adrs.json:3 — defined here
- `positive` — evals/cases/documentation-and-adrs.json:4 — defined here
- `top_k` — evals/cases/documentation-and-adrs.json:7 — defined here
- `negative` — evals/cases/documentation-and-adrs.json:18 — defined here
- `owner` — evals/cases/documentation-and-adrs.json:21 — defined here
- `evals` — evals/cases/documentation-and-adrs.json:29 — defined here
- `expected_output` — evals/cases/documentation-and-adrs.json:33 — defined here
- `expectations` — evals/cases/documentation-and-adrs.json:37 — defined here
- `ADR` — evals/cases/documentation-and-adrs.json:6 — used here
- `architecture decision` — evals/cases/documentation-and-adrs.json:10 — used here
- `event sourcing` — evals/cases/documentation-and-adrs.json:32 — used here
- `trade-offs` — evals/cases/documentation-and-adrs.json:39 — used here
- `timeless language` — evals/cases/documentation-and-adrs.json:40 — used here

## Structure
JSON top-level keys:
- skill_name
- trigger (positive, negative)
- evals (id, prompt, expected_output, files, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines trigger classification tests (3 positive, 2 negative with explicit owner targets `debugging-and-error-recovery` and `security-and-hardening`) and 1 execution evaluation testing ADR authoring quality against 3 qualitative expectations (distinct structure, recording rejected alternatives/trade-offs, and timeless language).

## Context cost
1,328 bytes (~330 tokens). Loads nothing directly.
