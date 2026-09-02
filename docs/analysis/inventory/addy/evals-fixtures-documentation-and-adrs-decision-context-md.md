---
package: addy
path: evals/fixtures/documentation-and-adrs/decision-context.md
type: doc
bytes: 757
unit: inv-addy-2
---

# evals/fixtures/documentation-and-adrs/decision-context.md

## Purpose — required, verbatim
> "# Orders architecture decision context\n\nThe orders service currently stores mutable order rows and emits best-effort\nwebhooks. Auditors need a complete history of state transitions, and support\nmust be able to reconstruct an order at a prior point in time." — evals/fixtures/documentation-and-adrs/decision-context.md:1-5 (no explicit purpose statement)

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
- config `evals/cases/documentation-and-adrs.json` — evals/cases/documentation-and-adrs.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:169

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
