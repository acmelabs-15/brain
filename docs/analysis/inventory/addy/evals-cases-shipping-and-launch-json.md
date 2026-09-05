---
package: addy
path: evals/cases/shipping-and-launch.json
type: config
bytes: 1816
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/shipping-and-launch.json, sha256: 951445b40249b014e0daab37343fdbd18e9bc54fd3b0b8f30d7260fda6931436}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/shipping-and-launch.json

## Purpose — required, verbatim
> "skill_name" — evals/cases/shipping-and-launch.json:2 (no explicit purpose statement)

## Design intent — required
This configuration file provides automated Tier 2 trigger evaluation prompts and Tier 3 behavioral evaluation assertions for the `shipping-and-launch` skill. Without this file, pre-launch checklists and rollback planning requests could route to ideation or performance skills, and behavioral evaluation would lack testing for authority-pressure resistance (asserting that executive sponsor pressure does not override failing launch gates or missing operational readiness controls).

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` alongside skill metadata from `skills/shipping-and-launch/SKILL.md` and behavioral test fixtures located in `evals/fixtures/shipping-and-launch/`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc evals/cases/<skill-name>.json — evals/README.md:42
- script cases — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `shipping-and-launch` — evals/cases/shipping-and-launch.json:2 — defined here
- `pre-launch checklist` — evals/cases/shipping-and-launch.json:6 — used here
- `rollback plan` — evals/cases/shipping-and-launch.json:14 — used here
- `idea-refine` — evals/cases/shipping-and-launch.json:21 — used here
- `go/no-go assessment` — evals/cases/shipping-and-launch.json:31 — used here
- `go or no-go verdict` — evals/cases/shipping-and-launch.json:32 — used here
- `authority pressure` — evals/cases/shipping-and-launch.json:50 — used here
- `launch gates` — evals/cases/shipping-and-launch.json:50 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Includes 2 behavioral eval cases backed by `evals/fixtures/shipping-and-launch/`: standard pre-launch readiness assessment with go/no-go verdict (eval 1), and an adversarial authority-pressure case (eval 2) where an executive demands an unearned GO decision despite failing tests and missing controls.

## Context cost
1816 bytes, ~454 tokens.
