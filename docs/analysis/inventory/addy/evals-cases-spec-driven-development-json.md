---
package: addy
path: evals/cases/spec-driven-development.json
type: config
bytes: 2657
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/cases/spec-driven-development.json, sha256: e6e637aad5de3e7dcec37ba6a3ae4ccf5f4394057a5a2266efb3e5f224ca719c}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/spec-driven-development.json

## Purpose — required, verbatim
> "\"skill_name\": \"spec-driven-development\"," — evals/cases/spec-driven-development.json:2
(no explicit purpose statement)

## Design intent — required
Defines trigger benchmarks and evaluation scenarios for the `spec-driven-development` skill, covering both single-feature specification drafting and multi-capability decomposition. It asserts that specifications articulate objectives, boundaries, data models, and testing strategies without generating premature implementation code, and verifies that initiative decomposition establishes a dependency-ordered capability map before drafting per-module specs.

## Phase — required
none

## Inputs — required
Trigger test prompts and evaluation scenarios:
- Positive triggers: prompts requesting specifications, PRDs, requirements, and capability decomposition: `"Write a spec for the new billing feature before we write any code"` — evals/cases/spec-driven-development.json:6, `"Draft a PRD with objectives and boundaries for this project"` — evals/cases/spec-driven-development.json:10, `"We are starting a new service, define the requirements first"` — evals/cases/spec-driven-development.json:14, `"This one requirement covers identity, billing, notifications, and reporting — decompose it into independently specifiable modules first"` — evals/cases/spec-driven-development.json:18, and `"Before we spec this platform, map the capabilities and their dependency order"` — evals/cases/spec-driven-development.json:22
- Negative triggers for `observability-and-instrumentation` — evals/cases/spec-driven-development.json:29, `code-simplification` — evals/cases/spec-driven-development.json:33, and `planning-and-task-breakdown` — evals/cases/spec-driven-development.json:37
- Eval 1 prompt: `"We want usage-based billing. Produce the spec before any implementation."` — evals/cases/spec-driven-development.json:44
- Eval 2 prompt: `"Read portal-brief.md and produce the spec work for the customer portal initiative."` — evals/cases/spec-driven-development.json:58

## Outputs — required
none

## Invokes — required
- skill spec-driven-development — evals/cases/spec-driven-development.json:2
- skill observability-and-instrumentation — evals/cases/spec-driven-development.json:29
- skill code-simplification — evals/cases/spec-driven-development.json:33
- skill planning-and-task-breakdown — evals/cases/spec-driven-development.json:37

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `spec-driven-development` — evals/cases/spec-driven-development.json:2 — used here
- `observability-and-instrumentation` — evals/cases/spec-driven-development.json:29 — used here
- `code-simplification` — evals/cases/spec-driven-development.json:33 — used here
- `planning-and-task-breakdown` — evals/cases/spec-driven-development.json:37 — used here
- `SPEC.md` — evals/cases/spec-driven-development.json:45 — used here
- `capability map` — evals/cases/spec-driven-development.json:59 — used here
- `spec-driven-development-decomposition` — evals/cases/spec-driven-development.json:61 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The evaluation specifies two distinct scenarios: Eval 1 tests single-spec production yielding `SPEC.md` covering `"objectives, behavior, data model, testing strategy, and explicit boundaries"` (evals/cases/spec-driven-development.json:45) with the hard rule `"No implementation code is written"` (evals/cases/spec-driven-development.json:53). Eval 2 tests Phase 0 decomposition from `portal-brief.md` into a dependency-ordered capability map where `"Approval of the map is requested before per-module specs are drafted"` (evals/cases/spec-driven-development.json:66).

## Context cost
2657 bytes, ~664 tokens.
