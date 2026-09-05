---
package: addy
path: evals/cases/ci-cd-and-automation.json
type: config
bytes: 1349
unit: inv-addy-6
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/cases/ci-cd-and-automation.json, sha256: 96676c94258e2ce3e6df37c7488c2ba6b47e51563e6e4a7d903c2296ae766bf9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/cases/ci-cd-and-automation.json

## Purpose — required, verbatim
> "ci-cd-and-automation" — evals/cases/ci-cd-and-automation.json:2
*(no explicit purpose statement; JSON evaluation case configuration)*

## Design intent — required
Defines routing triggers and behavioral evaluation criteria for the `ci-cd-and-automation` skill within the `run-evals.js` test suite. It tests positive intent mapping (GitHub Actions PR pipelines, deployment stages with approval gates, and quality gate automation), negative routing boundaries (directing refactoring to `code-simplification` and logging to `observability-and-instrumentation`), and execution quality (verifying pull request triggers, failure blocking, and secret hygiene). Without this configuration, regressions in automated pipeline generation and quality gate enforcement cannot be caught.

## Phase — required
addy:Ship

## Inputs — required
Target skill definition `skills/ci-cd-and-automation/SKILL.md`, test prompts, and test fixture `evals/fixtures/ci-cd-and-automation/`.

## Outputs — required
Routing rank metrics, cosine similarity scores, and execution verification reports produced by `scripts/run-evals.js`.

## Invokes — required
- skill ci-cd-and-automation — evals/cases/ci-cd-and-automation.json:2

## Invoked by — required
orphan

## Concepts named — required, verbatim
`skill_name` — evals/cases/ci-cd-and-automation.json:2 — defined here
`trigger` — evals/cases/ci-cd-and-automation.json:3 — defined here
`positive` — evals/cases/ci-cd-and-automation.json:4 — defined here
`negative` — evals/cases/ci-cd-and-automation.json:18 — defined here
`evals` — evals/cases/ci-cd-and-automation.json:29 — defined here
`expected_output` — evals/cases/ci-cd-and-automation.json:33 — defined here
`expectations` — evals/cases/ci-cd-and-automation.json:37 — defined here

## Structure
- JSON object
- trigger (positive, negative)
- evals (id: 1, prompt, expected_output, files, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly tests negative boundary routing against `code-simplification` (line 22) and `observability-and-instrumentation` (line 26). The execution expectations verify that failure of any quality gate fails the pipeline and blocks merge, and that secrets are never hardcoded (lines 39, 41).

## Context cost
1349 bytes, ~337 tokens. Loads no external files.
