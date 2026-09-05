---
package: addy
path: evals/cases/ci-cd-and-automation.json
type: config
bytes: 1349
unit: inv-addy-6
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/ci-cd-and-automation.json, sha256: 96676c94258e2ce3e6df37c7488c2ba6b47e51563e6e4a7d903c2296ae766bf9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/ci-cd-and-automation.json

## Purpose — required, verbatim
> "skill_name": "ci-cd-and-automation" — evals/cases/ci-cd-and-automation.json:2

(no explicit purpose statement)

## Design intent — required
Defines trigger routing and execution evals for the `ci-cd-and-automation` skill in the Addy eval harness. Specifies 3 positive prompts covering GitHub Actions test workflows, manual approval deployment gates, and automated quality gates (top_k=3), 2 negative prompts routing to code simplification and observability, and 1 execution eval testing CI pipeline generation for a Node project blocking merge on check failures.

## Phase — required
none

## Inputs — required
User prompts requesting CI/CD setup, automation, or quality gates, and fixture directory `evals/fixtures/ci-cd-and-automation`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js`.

## Invokes — required
- skill ci-cd-and-automation — evals/cases/ci-cd-and-automation.json:2
- skill code-simplification — evals/cases/ci-cd-and-automation.json:21
- skill observability-and-instrumentation — evals/cases/ci-cd-and-automation.json:25

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/ci-cd-and-automation.json:2 — used here
- `ci-cd-and-automation` — evals/cases/ci-cd-and-automation.json:2 — used here
- `trigger` — evals/cases/ci-cd-and-automation.json:3 — defined here
- `positive` — evals/cases/ci-cd-and-automation.json:4 — defined here
- `top_k` — evals/cases/ci-cd-and-automation.json:7 — defined here
- `negative` — evals/cases/ci-cd-and-automation.json:18 — defined here
- `owner` — evals/cases/ci-cd-and-automation.json:21 — defined here
- `evals` — evals/cases/ci-cd-and-automation.json:29 — defined here
- `expected_output` — evals/cases/ci-cd-and-automation.json:33 — defined here
- `expectations` — evals/cases/ci-cd-and-automation.json:37 — defined here

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
Verifies that generated CI workflows fail properly when quality gates fail, maintain logical step ordering and cache setup, and never hardcode secrets.

## Context cost
1,349 bytes (~340 tokens). Loads nothing directly.
