---
package: addy
path: evals/cases/frontend-ui-engineering.json
type: config
bytes: 1430
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/frontend-ui-engineering.json, sha256: ae0d255641d13fe5c8d06b35a12bb388b76a24a4f2dc9d6d801d359753b28f40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/frontend-ui-engineering.json

## Purpose — required, verbatim
> "skill_name" — evals/cases/frontend-ui-engineering.json:2 (no explicit purpose statement)

## Design intent — required
This configuration file provides automated Tier 2 trigger evaluation prompts and Tier 3 behavioral evaluation assertions for the `frontend-ui-engineering` skill. Without this file, there would be no regression testing to ensure that queries relating to responsive design, WCAG accessibility, and component state management route cleanly to `frontend-ui-engineering` (and distinguish from database or build tasks), nor that behavioral executions enforce proper keyboard focus management and semantic ARIA attributes.

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` alongside skill metadata from `skills/frontend-ui-engineering/SKILL.md` and behavioral test fixtures located in `evals/fixtures/frontend-ui-engineering/`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc evals/cases/<skill-name>.json — evals/README.md:42
- script cases — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `frontend-ui-engineering` — evals/cases/frontend-ui-engineering.json:2 — defined here
- `WCAG` — evals/cases/frontend-ui-engineering.json:6 — used here
- `modal component` — evals/cases/frontend-ui-engineering.json:10 — used here
- `state management` — evals/cases/frontend-ui-engineering.json:18 — used here
- `performance-optimization` — evals/cases/frontend-ui-engineering.json:29 — used here
- `design system` — evals/cases/frontend-ui-engineering.json:39 — used here
- `focus management` — evals/cases/frontend-ui-engineering.json:45 — used here
- `ARIA` — evals/cases/frontend-ui-engineering.json:46 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Specifies 5 positive triggers (two tightened to `top_k: 1` for signature asks: responsive/WCAG compliance and pricing page accessibility), 2 negative prompts (one owned by `performance-optimization`), and 1 execution eval backed by `evals/fixtures/frontend-ui-engineering/` grading accessible dropdown component construction.

## Context cost
1430 bytes, ~358 tokens.
