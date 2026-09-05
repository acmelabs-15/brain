---
package: addy
path: evals/fixtures/incremental-implementation/tasks/plan.md
type: doc
bytes: 311
unit: inv-addy-10
aliases: []
memo_inputs:
  - {path: evals/fixtures/incremental-implementation/tasks/plan.md, sha256: b693a78495810bc6c0a8941fa3472aed56346f41331c8ecc5b0429f58573c8f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/incremental-implementation/tasks/plan.md

## Purpose — required, verbatim
> "Each task must be independently verified and committed before starting the next." — evals/fixtures/incremental-implementation/tasks/plan.md:7-8

## Design intent — required
Specifies an execution plan decomposing CSV export into three distinct vertical slices (formatter, adapter, UI button) with strict incremental constraints (independent verification, commit per task, existing behavior preserved). Evaluates whether an agent follows pre-planned vertical slices.

## Phase — required
none

## Inputs — required
none

## Outputs — required
Specifies target tasks for implementation (line 3–5).

## Invokes — required
none

## Invoked by — required
- config incremental-implementation — evals/cases/incremental-implementation.json:35

## Concepts named — required, verbatim
- `CSV export plan` — evals/fixtures/incremental-implementation/tasks/plan.md:1 — defined here
- `unit tests` — evals/fixtures/incremental-implementation/tasks/plan.md:3 — used here

## Structure
- "# CSV export plan" — evals/fixtures/incremental-implementation/tasks/plan.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplar task plan structure demonstrating vertical slice decomposition and incremental commitments.

## Context cost
311 bytes, ~78 tokens.
