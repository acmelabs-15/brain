---
package: addy
path: evals/cases/spec-driven-development.json
type: config
bytes: 2657
unit: inv-addy-8
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/spec-driven-development.json, sha256: e6e637aad5de3e7dcec37ba6a3ae4ccf5f4394057a5a2266efb3e5f224ca719c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/spec-driven-development.json

## Purpose — required, verbatim
> "A SPEC.md covering objectives, behavior, data model, testing strategy, and explicit boundaries" — evals/cases/spec-driven-development.json:45
(no explicit purpose statement)

## Design intent — required
Defines routing and behavioral evaluation test cases for the `spec-driven-development` skill. It provides 5 positive trigger prompts (covering single-feature specs, PRDs, requirements definition, and multi-module decomposition), 3 negative triggers routed to other skills (`observability-and-instrumentation`, `code-simplification`, `planning-and-task-breakdown`), and 2 execution evals (single spec generation producing `SPEC.md` and initiative decomposition producing a capability map with one-way dependency order).

## Phase — required
addy:Define

## Inputs — required
Consumed by `scripts/run-evals.js` during Tier 2 (trigger routing) and Tier 3 (behavioral execution) evaluations. For eval id 1, loads fixtures from `evals/fixtures/spec-driven-development`. For eval id 2, loads fixtures from `evals/fixtures/spec-driven-development-decomposition`.

## Outputs — required
Evaluated by `scripts/run-evals.js` to produce eval score results and pass/fail grading reports recorded in `evals/results/`.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `spec-driven-development` — evals/cases/spec-driven-development.json:2 — used here
- `PRD` — evals/cases/spec-driven-development.json:10 — used here
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
Includes two distinct behavioral evaluation cases: one evaluating single-feature spec generation and the other evaluating architectural decomposition into a capability map with acyclic dependencies.

## Context cost
2,657 bytes (~664 tokens). Loads no external files directly.
