---
package: addy
path: evals/cases/interview-me.json
type: config
bytes: 1197
unit: inv-addy-7
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/interview-me.json, sha256: 5fcd623b845d367ac360776008cee6d6bebec60bb2f16c175e5410424794886d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/interview-me.json

## Purpose — required, verbatim
> "skill_name" — evals/cases/interview-me.json:2 (no explicit purpose statement)

## Design intent — required
This configuration file provides automated Tier 2 trigger evaluation prompts and Tier 3 dialogue evaluation assertions for the `interview-me` skill. Without this file, fuzzy requirements-gathering prompts could erroneously route to execution or test skills, and behavioral evaluation would not enforce the strict requirement to ask questions one at a time without batching or premature solutionizing.

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` alongside skill metadata from `skills/interview-me/SKILL.md`. Does not consume file fixtures because it is configured with `kind: "dialogue"`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc evals/cases/<skill-name>.json — evals/README.md:42
- script cases — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `interview-me` — evals/cases/interview-me.json:2 — defined here
- `test-driven-development` — evals/cases/interview-me.json:21 — used here
- `shipping-and-launch` — evals/cases/interview-me.json:25 — used here
- `dialogue` — evals/cases/interview-me.json:32 — used here
- `one-question-at-a-time` — evals/cases/interview-me.json:34 — used here
- `validated requirements` — evals/cases/interview-me.json:34 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configured as `kind: "dialogue"` where conversation dynamics are evaluated without file system fixtures. Contains 3 positive triggers with `top_k: 3` and 2 negative triggers owned by `test-driven-development` and `shipping-and-launch`.

## Context cost
1197 bytes, ~299 tokens.
