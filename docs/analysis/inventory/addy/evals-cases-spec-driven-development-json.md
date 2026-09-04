---
package: addy
path: evals/cases/spec-driven-development.json
type: config
bytes: 2657
unit: inv-addy-6
memo_inputs:
  - {path: evals/cases/spec-driven-development.json, sha256: e6e637aad5de3e7dcec37ba6a3ae4ccf5f4394057a5a2266efb3e5f224ca719c}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/spec-driven-development.json

## Purpose — required, verbatim
> "We want usage-based billing. Produce the spec before any implementation." — evals/cases/spec-driven-development.json:44 (no explicit purpose statement)

## Design intent — required
Defines routing triggers and evaluation rubrics for the `spec-driven-development` skill in the evaluation test harness across single-feature specification and large-initiative capability decomposition. Solves the problem of ensuring engineering agents produce rigorous, bounded specifications and acyclic capability maps prior to writing any implementation code. Tests whether requests for PRDs, billing feature specs, and platform capability mapping trigger the skill (top_k <= 3) while distributed tracing, code simplification, and task breakdown route away to designated owners. Validates outputs on explicit boundaries and non-goals, surfacing ambiguities as questions, defining testing strategies, proposing stable module IDs with one-way dependency direction, requesting approval on capability maps before drafting per-module specs, and strictly refraining from writing implementation code during specification.

## Phase — required
none

## Inputs — required
- Evaluation fixture directories:
  - `evals/fixtures/spec-driven-development` (evals/cases/spec-driven-development.json:47)
  - `evals/fixtures/spec-driven-development-decomposition` with `portal-brief.md` (evals/cases/spec-driven-development.json:58, 61)
- Positive trigger prompts (evals/cases/spec-driven-development.json:6, 10, 14, 18, 22)
- Negative trigger prompts with owners (evals/cases/spec-driven-development.json:28, 32, 36)
- Behavioral evaluation prompts:
  - Scenario 1 (Usage-based billing feature spec) (evals/cases/spec-driven-development.json:44)
  - Scenario 2 (Customer portal initiative capability decomposition) (evals/cases/spec-driven-development.json:58)

## Outputs — required
- Evaluation routing ranking score and behavioral rubric grading results across two test scenarios evaluated by `scripts/run-evals.js` against expectations (evals/cases/spec-driven-development.json:49-54, 63-69)

## Invokes — required
- file spec-driven-development — evals/cases/spec-driven-development.json:47
- file spec-driven-development-decomposition — evals/cases/spec-driven-development.json:61
- skill observability-and-instrumentation — evals/cases/spec-driven-development.json:29
- skill code-simplification — evals/cases/spec-driven-development.json:33
- skill planning-and-task-breakdown — evals/cases/spec-driven-development.json:37

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `spec-driven-development` — evals/cases/spec-driven-development.json:2 — used here
- `top_k` — evals/cases/spec-driven-development.json:7 — used here
- `PRD` — evals/cases/spec-driven-development.json:10 — used here
- `observability-and-instrumentation` — evals/cases/spec-driven-development.json:29 — used here
- `code-simplification` — evals/cases/spec-driven-development.json:33 — used here
- `planning-and-task-breakdown` — evals/cases/spec-driven-development.json:37 — used here
- `SPEC.md` — evals/cases/spec-driven-development.json:45 — used here
- `portal-brief.md` — evals/cases/spec-driven-development.json:58 — used here
- `capability map` — evals/cases/spec-driven-development.json:59 — used here
- `stable module ids` — evals/cases/spec-driven-development.json:59 — used here
- `one-way dependency direction` — evals/cases/spec-driven-development.json:59 — used here

## Structure
- `skill_name` (line 2)
- `trigger` (lines 3-40)
  - `positive` (5 items, lines 4-25)
  - `negative` (3 items, lines 26-39)
- `evals` (lines 41-72)
  - `evals[0]` (id 1, lines 42-55)
  - `evals[1]` (id 2, lines 56-71)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Scenario 2 establishes the capability decomposition pattern for large multi-module initiatives, enforcing acyclic dependency graphs, scoped modular specs, and approval gates prior to drafting per-module specifications.

## Context cost
2657 bytes (~664 tokens).
