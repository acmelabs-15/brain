---
package: addy
path: evals/cases/constraint-driven-development.json
type: config
bytes: 3353
unit: inv-addy-6
aliases: []
memo_inputs:
  - {path: evals/cases/constraint-driven-development.json, sha256: 45bb9aa099816de69a42147e0f217ffd03e8c6d97d4599a44ae40dec4d95625e}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/constraint-driven-development.json

## Purpose — required, verbatim
> "constraint-driven-development" — evals/cases/constraint-driven-development.json:2
*(no explicit purpose statement; JSON evaluation case configuration)*

## Design intent — required
Defines trigger routing benchmarks and three interactive dialogue evaluations for the `constraint-driven-development` skill within `scripts/run-evals.js`. It tests positive intent mapping (defining project quality standards, preventing models from adding `@ts-ignore` or skipping tests, setting coverage thresholds, and configuring accessibility/performance budgets), negative boundaries (routing PR review to `code-review-and-quality`, deployment pipelines to `ci-cd-and-automation`, and bug tests to `test-driven-development`), and conversation quality. The dialogue scenarios verify that the agent inspects existing tools before interviewing, caps questions at four with sensible defaults, pushes back against unmeetable thresholds via the ratchet pattern, and specifies actionable verification commands in `CONSTRAINTS.md`.

## Phase — required
addy:Define

## Inputs — required
Target skill definition `skills/constraint-driven-development/SKILL.md` and multi-turn conversational prompts (evaluates conversational dialogue directly, requiring no static fixture directories).

## Outputs — required
Routing rank metrics, cosine similarity scores, and multi-scenario dialogue verification reports produced by `scripts/run-evals.js`.

## Invokes — required
- skill constraint-driven-development — evals/cases/constraint-driven-development.json:2

## Invoked by — required
orphan

## Concepts named — required, verbatim
`skill_name` — evals/cases/constraint-driven-development.json:2 — defined here
`trigger` — evals/cases/constraint-driven-development.json:3 — defined here
`positive` — evals/cases/constraint-driven-development.json:4 — defined here
`negative` — evals/cases/constraint-driven-development.json:26 — defined here
`evals` — evals/cases/constraint-driven-development.json:41 — defined here
`dialogue` — evals/cases/constraint-driven-development.json:44 — defined here
`expected_output` — evals/cases/constraint-driven-development.json:46 — defined here
`expectations` — evals/cases/constraint-driven-development.json:47 — defined here
`CONSTRAINTS.md` — evals/cases/constraint-driven-development.json:46 — used here

## Structure
- JSON object
- trigger (positive, negative)
- evals (3 dialogue scenarios)
  - Scenario 1 (id: 1, dialogue): Setup constraints interview with defaults and CONSTRAINTS.md output
  - Scenario 2 (id: 2, dialogue): Ratchet pushback against unmeetable 85% coverage threshold
  - Scenario 3 (id: 3, dialogue): Working accessibility constraint setup with axe-core

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplifies the `kind: "dialogue"` evaluation pattern sanctioned in `evals/README.md` for skills where the interactive consultation is itself the core deliverable. Encodes key behavioral expectations: pushing back against sudden large coverage jumps (ratchet rule, line 62) and ensuring lint/test/axe checks specify runnable CLI commands and appropriate execution stages (lines 72, 74, 75).

## Context cost
3353 bytes, ~838 tokens. Loads no external files.
