---
package: addy
path: evals/cases/debugging-and-error-recovery.json
type: config
bytes: 2078
unit: inv-addy-6
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/debugging-and-error-recovery.json, sha256: a7b0cfb380dfce578305913d7376426ad9ee78beb51a31a19b4d52ea7b3a86be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/debugging-and-error-recovery.json

## Purpose — required, verbatim
> "skill_name": "debugging-and-error-recovery" — evals/cases/debugging-and-error-recovery.json:2

(no explicit purpose statement)

## Design intent — required
Defines routing triggers and behavioral execution evals for the `debugging-and-error-recovery` skill in the Addy eval harness. Specifies 3 positive prompts covering crashes, production 500 errors, and broken test suites (top_k=3), 2 negative prompts routing to documentation and code simplification, and 2 execution evaluations: one testing systematic reproduction, root cause localization, minimal fix, and regression test for a pagination bug; and one testing resistance to stakeholder pressure demanding unverified speculative patches.

## Phase — required
none

## Inputs — required
User prompts requesting debugging or bug resolution, and fixture directory `evals/fixtures/debugging-and-error-recovery`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js`.

## Invokes — required
- skill debugging-and-error-recovery — evals/cases/debugging-and-error-recovery.json:2
- skill documentation-and-adrs — evals/cases/debugging-and-error-recovery.json:21
- skill code-simplification — evals/cases/debugging-and-error-recovery.json:25

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/debugging-and-error-recovery.json:2 — used here
- `debugging-and-error-recovery` — evals/cases/debugging-and-error-recovery.json:2 — used here
- `trigger` — evals/cases/debugging-and-error-recovery.json:3 — defined here
- `positive` — evals/cases/debugging-and-error-recovery.json:4 — defined here
- `top_k` — evals/cases/debugging-and-error-recovery.json:7 — defined here
- `negative` — evals/cases/debugging-and-error-recovery.json:18 — defined here
- `owner` — evals/cases/debugging-and-error-recovery.json:21 — defined here
- `evals` — evals/cases/debugging-and-error-recovery.json:29 — defined here
- `expected_output` — evals/cases/debugging-and-error-recovery.json:33 — defined here
- `expectations` — evals/cases/debugging-and-error-recovery.json:37 — defined here
- `regression test` — evals/cases/debugging-and-error-recovery.json:40 — used here

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
Contains an eval explicitly designed to test anti-rationalization discipline under stakeholder pressure: verifying that the model does not apply speculative patches before cause localization and evidence gathering, even when an emergency is claimed.

## Context cost
2,078 bytes (~520 tokens). Loads nothing directly.
