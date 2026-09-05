---
package: addy
path: evals/cases/context-engineering.json
type: config
bytes: 1390
unit: inv-addy-6
aliases: []
memo_inputs:
  - {path: evals/cases/context-engineering.json, sha256: 38dd00d2f108fe1cb703d5a01dbb2310d6f3719cf32950bc2f9adbeabfb9c617}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/context-engineering.json

## Purpose — required, verbatim
> "context-engineering" — evals/cases/context-engineering.json:2
*(no explicit purpose statement; JSON evaluation case configuration)*

## Design intent — required
Defines trigger routing benchmarks and execution verification expectations for the `context-engineering` skill within `scripts/run-evals.js`. It tests positive intent mapping (selecting context before refactoring, resolving mid-session output degradation, and configuring rules files and context packing), negative routing boundaries (directing unit testing to `test-driven-development` and SQL injection defense to `security-and-hardening`), and execution quality (diagnosing probable context causes rather than blaming the model, developing a selective context-loading strategy, and scoping context to the task instead of loading everything). Without this evaluation, degradations in context management guidance cannot be detected.

## Phase — required
addy:Build

## Inputs — required
Target skill definition `skills/context-engineering/SKILL.md`, test prompts, and test fixture `evals/fixtures/context-engineering/`.

## Outputs — required
Routing rank metrics, cosine similarity scores, and execution verification reports produced by `scripts/run-evals.js`.

## Invokes — required
- skill context-engineering — evals/cases/context-engineering.json:2

## Invoked by — required
orphan

## Concepts named — required, verbatim
`skill_name` — evals/cases/context-engineering.json:2 — defined here
`trigger` — evals/cases/context-engineering.json:3 — defined here
`positive` — evals/cases/context-engineering.json:4 — defined here
`negative` — evals/cases/context-engineering.json:18 — defined here
`evals` — evals/cases/context-engineering.json:29 — defined here
`expected_output` — evals/cases/context-engineering.json:33 — defined here
`expectations` — evals/cases/context-engineering.json:37 — defined here

## Structure
- JSON object
- trigger (positive, negative)
- evals (id: 1, prompt, expected_output, files, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Negative triggers establish ownership boundaries with `test-driven-development` (line 22) and `security-and-hardening` (line 26). The execution eval specifically tests that the agent diagnoses root causes of context decay rather than blaming model intelligence, and enforces task-scoped context loading (lines 38, 40).

## Context cost
1390 bytes, ~348 tokens. Loads no external files.
