---
package: addy
path: evals/cases/code-review-and-quality.json
type: config
bytes: 1374
unit: inv-addy-6
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/cases/code-review-and-quality.json, sha256: afeaca38540db520a3aca1b25c199001f76a540b4777b08ad668313dd1d2ad7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/cases/code-review-and-quality.json

## Purpose — required, verbatim
> "code-review-and-quality" — evals/cases/code-review-and-quality.json:2
*(no explicit purpose statement; JSON evaluation case configuration)*

## Design intent — required
Defines trigger routing benchmarks and multi-axis review evaluation criteria for the `code-review-and-quality` skill. Used by `scripts/run-evals.js`, it verifies positive intent activation (pull request review, multi-axis diff inspection, and review of other models' generated code), negative routing boundaries (ensuring production deployment routes to `shipping-and-launch` and bug-reproducing tests route to `test-driven-development`), and execution quality (requiring severity-labelled findings, multiple review dimensions, security checks on input, and prioritizing high-leverage architectural issues over formatting nits). Without this benchmark, degradation in code review rigor cannot be detected.

## Phase — required
addy:Review

## Inputs — required
Target skill definition `skills/code-review-and-quality/SKILL.md`, test prompts, and test fixture `evals/fixtures/code-review-and-quality/`.

## Outputs — required
Routing rank metrics, cosine similarity scores, and execution verification reports produced by `scripts/run-evals.js`.

## Invokes — required
- skill code-review-and-quality — evals/cases/code-review-and-quality.json:2

## Invoked by — required
orphan

## Concepts named — required, verbatim
`skill_name` — evals/cases/code-review-and-quality.json:2 — defined here
`trigger` — evals/cases/code-review-and-quality.json:3 — defined here
`positive` — evals/cases/code-review-and-quality.json:4 — defined here
`negative` — evals/cases/code-review-and-quality.json:18 — defined here
`evals` — evals/cases/code-review-and-quality.json:29 — defined here
`expected_output` — evals/cases/code-review-and-quality.json:33 — defined here
`expectations` — evals/cases/code-review-and-quality.json:37 — defined here

## Structure
- JSON object
- trigger (positive, negative)
- evals (id: 1, prompt, expected_output, files, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Negative triggers route deployment requests to `shipping-and-launch` (line 21) and failing test requests to `test-driven-development` (line 25). Behavioral expectations require findings across multiple axes (correctness, readability, architecture, security, performance) and demand severity labels from the skill's taxonomy (lines 38, 39).

## Context cost
1374 bytes, ~344 tokens. Loads no external files.
