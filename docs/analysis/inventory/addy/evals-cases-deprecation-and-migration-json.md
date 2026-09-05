---
package: addy
path: evals/cases/deprecation-and-migration.json
type: config
bytes: 1257
unit: inv-addy-6
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/deprecation-and-migration.json, sha256: 9ee13965566161b30f3bf73f4d8d6f9e243f910f4d661d9f0835902714ecc6ec}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/deprecation-and-migration.json

## Purpose — required, verbatim
> "skill_name": "deprecation-and-migration" — evals/cases/deprecation-and-migration.json:2

(no explicit purpose statement)

## Design intent — required
Defines trigger routing and execution evals for the `deprecation-and-migration` skill in the Addy eval harness. Specifies 3 positive prompts covering API sunsetting, user migration off legacy systems, and safe feature removal (top_k=3), 2 negative prompts (feature additions and flaky CI tests), and 1 execution eval testing staged deprecation planning for an API with external consumers.

## Phase — required
none

## Inputs — required
User prompts requesting feature sunsetting or system migration, and fixture directory `evals/fixtures/deprecation-and-migration`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js`.

## Invokes — required
- skill deprecation-and-migration — evals/cases/deprecation-and-migration.json:2
- skill ci-cd-and-automation — evals/cases/deprecation-and-migration.json:24

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/deprecation-and-migration.json:2 — used here
- `deprecation-and-migration` — evals/cases/deprecation-and-migration.json:2 — used here
- `trigger` — evals/cases/deprecation-and-migration.json:3 — defined here
- `positive` — evals/cases/deprecation-and-migration.json:4 — defined here
- `top_k` — evals/cases/deprecation-and-migration.json:7 — defined here
- `negative` — evals/cases/deprecation-and-migration.json:18 — defined here
- `owner` — evals/cases/deprecation-and-migration.json:24 — defined here
- `evals` — evals/cases/deprecation-and-migration.json:28 — defined here
- `expected_output` — evals/cases/deprecation-and-migration.json:32 — defined here
- `expectations` — evals/cases/deprecation-and-migration.json:36 — defined here

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
Verifies that deprecation removal criteria are gated on measured user migration rather than arbitrary calendar deadlines, requiring clear consumer notifications and usage telemetry during the transition window.

## Context cost
1,257 bytes (~320 tokens). Loads nothing directly.
