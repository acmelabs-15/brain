---
package: addy
path: evals/cases/code-review-and-quality.json
type: config
bytes: 1374
unit: inv-addy-6
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/code-review-and-quality.json, sha256: afeaca38540db520a3aca1b25c199001f76a540b4777b08ad668313dd1d2ad7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/code-review-and-quality.json

## Purpose — required, verbatim
> "skill_name": "code-review-and-quality" — evals/cases/code-review-and-quality.json:2

(no explicit purpose statement)

## Design intent — required
Defines trigger routing and execution evals for the `code-review-and-quality` skill in the Addy eval harness. Specifies 3 positive prompts covering PR review, diff quality checks, and reviewing model-generated code (top_k=3), 2 negative prompts routing to shipping and TDD, and 1 execution eval testing multi-axis structured review of a user-search diff fixture with severity-labelled findings.

## Phase — required
none

## Inputs — required
User prompts requesting code review or diff quality analysis, and fixture directory `evals/fixtures/code-review-and-quality`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js`.

## Invokes — required
- skill code-review-and-quality — evals/cases/code-review-and-quality.json:2
- skill shipping-and-launch — evals/cases/code-review-and-quality.json:21
- skill test-driven-development — evals/cases/code-review-and-quality.json:25

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/code-review-and-quality.json:2 — used here
- `code-review-and-quality` — evals/cases/code-review-and-quality.json:2 — used here
- `trigger` — evals/cases/code-review-and-quality.json:3 — defined here
- `positive` — evals/cases/code-review-and-quality.json:4 — defined here
- `top_k` — evals/cases/code-review-and-quality.json:7 — defined here
- `negative` — evals/cases/code-review-and-quality.json:18 — defined here
- `owner` — evals/cases/code-review-and-quality.json:21 — defined here
- `evals` — evals/cases/code-review-and-quality.json:29 — defined here
- `expected_output` — evals/cases/code-review-and-quality.json:33 — defined here
- `expectations` — evals/cases/code-review-and-quality.json:37 — defined here

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
Enforces that review findings span multiple axes (correctness, readability, architecture, security, performance), carry severity taxonomy labels, prioritize high-leverage issues over superficial nits, and explicitly evaluate input security.

## Context cost
1,374 bytes (~350 tokens). Loads nothing directly.
