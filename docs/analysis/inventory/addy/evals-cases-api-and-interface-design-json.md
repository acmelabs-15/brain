---
package: addy
path: evals/cases/api-and-interface-design.json
type: config
bytes: 1494
unit: inv-addy-6
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/api-and-interface-design.json, sha256: b297745de905b4b40845551acb19c4f91e66141cb1231fda1b760f5abfb157a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/api-and-interface-design.json

## Purpose — required, verbatim
> "skill_name": "api-and-interface-design" — evals/cases/api-and-interface-design.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and behavioral assertions for the `api-and-interface-design` skill in the Addy eval harness. Specifies 3 positive prompts covering REST endpoints, module interfaces, and frontend-backend contracts (tested with top_k=3), 2 negative prompts routing to debugging and UI engineering, and 1 execution evaluation verifying endpoint contracts with explicit error shapes and validation boundaries.

## Phase — required
none

## Inputs — required
User prompts matching API interface design scenarios, and test fixture directory `evals/fixtures/api-and-interface-design`.

## Outputs — required
Evaluation verdicts produced by `scripts/run-evals.js` (trigger ranking scores and behavioral assertion checks).

## Invokes — required
- skill api-and-interface-design — evals/cases/api-and-interface-design.json:2
- skill debugging-and-error-recovery — evals/cases/api-and-interface-design.json:21
- skill frontend-ui-engineering — evals/cases/api-and-interface-design.json:25

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/api-and-interface-design.json:2 — used here
- `api-and-interface-design` — evals/cases/api-and-interface-design.json:2 — used here
- `trigger` — evals/cases/api-and-interface-design.json:3 — defined here
- `positive` — evals/cases/api-and-interface-design.json:4 — defined here
- `top_k` — evals/cases/api-and-interface-design.json:7 — defined here
- `negative` — evals/cases/api-and-interface-design.json:18 — defined here
- `owner` — evals/cases/api-and-interface-design.json:21 — defined here
- `evals` — evals/cases/api-and-interface-design.json:29 — defined here
- `expected_output` — evals/cases/api-and-interface-design.json:33 — defined here
- `expectations` — evals/cases/api-and-interface-design.json:37 — defined here

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
Configures trigger routing evals and an execution eval for `api-and-interface-design`. Defines 3 positive triggers and 2 negative triggers declaring explicit owner routing targets (`debugging-and-error-recovery` and `frontend-ui-engineering`), ensuring pairwise routing tests pass non-vacuously.

## Context cost
1,494 bytes (~380 tokens). Loads nothing directly.
