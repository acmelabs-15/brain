---
package: addy
path: evals/cases/doubt-driven-development.json
type: config
bytes: 1274
unit: inv-addy-7
aliases: []
memo_inputs:
  - {path: evals/cases/doubt-driven-development.json, sha256: c92769c979e81afa55f9f937eff6a952e60599792e59d8a38ed8e68d7b7abeba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/doubt-driven-development.json

## Purpose — required, verbatim
> "skill_name": "doubt-driven-development" — evals/cases/doubt-driven-development.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and behavioral assertions for the `doubt-driven-development` skill in the Addy eval harness. Specifies 3 positive trigger prompts for cross-examining assumptions, adversarial review in fresh context, and stressing plans for hidden failure modes (top_k=3), 2 negative prompts for routine tasks (code formatting and changelog writing without owner routing), and 1 execution evaluation requiring claim extraction, adversarial challenge, assumption testing, and a clear go or stop verdict distinguishing verified claims from surviving doubts.

## Phase — required
none

## Inputs — required
User prompts requesting adversarial review of high-stakes plans or assumptions, and test fixture directory `evals/fixtures/doubt-driven-development`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js` (trigger ranking scores and claim extraction / doubt-raising behavioral assertions).

## Invokes — required
- skill doubt-driven-development — evals/cases/doubt-driven-development.json:2

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/doubt-driven-development.json:2 — used here
- `doubt-driven-development` — evals/cases/doubt-driven-development.json:2 — used here
- `trigger` — evals/cases/doubt-driven-development.json:3 — defined here
- `positive` — evals/cases/doubt-driven-development.json:4 — defined here
- `top_k` — evals/cases/doubt-driven-development.json:7 — defined here
- `negative` — evals/cases/doubt-driven-development.json:18 — defined here
- `evals` — evals/cases/doubt-driven-development.json:27 — defined here
- `expected_output` — evals/cases/doubt-driven-development.json:31 — defined here
- `expectations` — evals/cases/doubt-driven-development.json:35 — defined here
- `adversarially review` — evals/cases/doubt-driven-development.json:10 — used here
- `failure modes` — evals/cases/doubt-driven-development.json:14 — used here
- `adversarial review` — evals/cases/doubt-driven-development.json:30 — used here
- `go or stop verdict` — evals/cases/doubt-driven-development.json:31 — used here
- `surviving doubts` — evals/cases/doubt-driven-development.json:38 — used here

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
Unlike most other eval cases, negative trigger entries (lines 19-24) omit the `owner` field, reflecting generic non-trigger distractors (`Format this file with prettier`, `Write the changelog entry for the release`). Evaluates whether the agent challenges non-trivial claims individually, tests at least one assumption, and produces a go/stop verdict separating verified claims from surviving doubts.

## Context cost
1,274 bytes (~320 tokens). Loads nothing directly.
