---
package: addy
path: evals/cases/code-simplification.json
type: config
bytes: 1330
unit: inv-addy-6
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/code-simplification.json, sha256: 42c97aefd638fc08eb275c393ef5bcfaac056ac12cb2767fbb1db9fc94b6c84c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/code-simplification.json

## Purpose — required, verbatim
> "skill_name": "code-simplification" — evals/cases/code-simplification.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and behavioral assertions for the `code-simplification` skill in the Addy eval harness. Specifies 3 positive prompts for simplifying complex, clever, or overgrown code while preserving behavior (top_k=3), 2 negative prompts (feature addition and debugging), and 1 execution eval testing simplification of an 80-line config parser function.

## Phase — required
none

## Inputs — required
User prompts requesting code simplification, and fixture directory `evals/fixtures/code-simplification`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js`.

## Invokes — required
- skill code-simplification — evals/cases/code-simplification.json:2
- skill debugging-and-error-recovery — evals/cases/code-simplification.json:24

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/code-simplification.json:2 — used here
- `code-simplification` — evals/cases/code-simplification.json:2 — used here
- `trigger` — evals/cases/code-simplification.json:3 — defined here
- `positive` — evals/cases/code-simplification.json:4 — defined here
- `top_k` — evals/cases/code-simplification.json:7 — defined here
- `negative` — evals/cases/code-simplification.json:18 — defined here
- `owner` — evals/cases/code-simplification.json:24 — defined here
- `evals` — evals/cases/code-simplification.json:28 — defined here
- `expected_output` — evals/cases/code-simplification.json:32 — defined here
- `expectations` — evals/cases/code-simplification.json:36 — defined here

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
Verifies that behavior is strictly preserved, complexity is reduced rather than simply moved elsewhere, no new features are added during simplification, and the agent explicitly explains what was removed and why it was safe.

## Context cost
1,330 bytes (~340 tokens). Loads nothing directly.
