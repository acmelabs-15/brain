---
package: addy
path: evals/fixtures/documentation-and-adrs/decision-context.md
type: doc
bytes: 757
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/documentation-and-adrs/decision-context.md, sha256: d7c35e0ff7c16b0716076df5513d18fe3569c0ea32d5756295ae0d47c8ec6de2}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/documentation-and-adrs/decision-context.md

## Purpose — required, verbatim
> "Orders architecture decision context" — evals/fixtures/documentation-and-adrs/decision-context.md:1 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides the architectural problem narrative and trade-off context fixture for the `documentation-and-adrs` evaluation. It describes a concrete system challenge (providing complete audit history and state reconstruction for mutable order rows), details three architectural options (append-only audit table, event sourcing with read projections, change-data capture), and outlines technical trade-offs (event versioning, eventual consistency, synchronous reporting reads) to evaluate an agent's capability to draft a formal Architecture Decision Record (ADR).

## Phase — required
`addy:SPEC`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Orders architecture decision context` — evals/fixtures/documentation-and-adrs/decision-context.md:1 — defined here
- `mutable order rows` — evals/fixtures/documentation-and-adrs/decision-context.md:3 — used here
- `webhooks` — evals/fixtures/documentation-and-adrs/decision-context.md:4 — used here
- `audit table` — evals/fixtures/documentation-and-adrs/decision-context.md:9 — used here
- `event sourcing` — evals/fixtures/documentation-and-adrs/decision-context.md:10 — used here
- `read projections` — evals/fixtures/documentation-and-adrs/decision-context.md:10 — used here
- `change-data capture` — evals/fixtures/documentation-and-adrs/decision-context.md:11 — used here
- `event versioning` — evals/fixtures/documentation-and-adrs/decision-context.md:14 — used here
- `eventual consistency` — evals/fixtures/documentation-and-adrs/decision-context.md:14 — used here
- `bounded context` — evals/fixtures/documentation-and-adrs/decision-context.md:16 — used here

## Structure
- `# Orders architecture decision context` — line 1
- Options discussed list — lines 7-11
- Trade-off analysis — lines 13-16

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides a well-balanced architectural problem statement highlighting real-world trade-offs (e.g., event sourcing advantages for auditability vs operational complexity and synchronous read constraints in reporting), requiring the agent to synthesize a structured ADR with clear context, decision, consequences, and compliance notes.

## Context cost
757 bytes (~189 tokens).
