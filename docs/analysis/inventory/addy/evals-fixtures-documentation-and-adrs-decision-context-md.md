---
package: addy
path: evals/fixtures/documentation-and-adrs/decision-context.md
type: doc
bytes: 757
unit: inv-addy-9
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/documentation-and-adrs/decision-context.md, sha256: d7c35e0ff7c16b0716076df5513d18fe3569c0ea32d5756295ae0d47c8ec6de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/documentation-and-adrs/decision-context.md

## Purpose — required, verbatim
> "The orders service currently stores mutable order rows and emits best-effort" — evals/fixtures/documentation-and-adrs/decision-context.md:3
(no explicit purpose statement)

## Design intent — required
Evaluation fixture providing architectural context, requirements, options, and trade-offs for testing the `documentation-and-adrs` skill (`evals/cases/documentation-and-adrs.json`). It details an orders service needing auditability and point-in-time state reconstruction, presenting three options (append-only audit table, event sourcing with read projections, and change-data capture) with specific engineering trade-offs (eventual consistency, synchronous reader expectations, bounded context scope). Without it, the evaluation would lack rich architectural tension to test whether an agent writes an ADR capturing context, alternatives considered, decision rationale, and consequences rather than just documenting a winning choice.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Orders architecture decision context` — evals/fixtures/documentation-and-adrs/decision-context.md:1 — defined here
- `Options discussed` — evals/fixtures/documentation-and-adrs/decision-context.md:7 — defined here
- `audit table` — evals/fixtures/documentation-and-adrs/decision-context.md:9 — used here
- `event sourcing` — evals/fixtures/documentation-and-adrs/decision-context.md:10 — used here
- `change-data capture` — evals/fixtures/documentation-and-adrs/decision-context.md:11 — used here
- `bounded context` — evals/fixtures/documentation-and-adrs/decision-context.md:16 — used here

## Structure
- `# Orders architecture decision context` — evals/fixtures/documentation-and-adrs/decision-context.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Outlines key trade-offs between append-only audit logging, event sourcing, and CDC, noting that while event sourcing provides replayability, downstream reporting requires synchronous reads.

## Context cost
757 bytes, ~160 tokens.
