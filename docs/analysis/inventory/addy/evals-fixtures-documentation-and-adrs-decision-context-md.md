---
package: addy
path: evals/fixtures/documentation-and-adrs/decision-context.md
type: doc
bytes: 757
unit: inv-addy-9
aliases: []
memo_inputs:
  - {path: evals/fixtures/documentation-and-adrs/decision-context.md, sha256: d7c35e0ff7c16b0716076df5513d18fe3569c0ea32d5756295ae0d47c8ec6de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/documentation-and-adrs/decision-context.md

## Purpose — required, verbatim
> "The orders service currently stores mutable order rows and emits best-effort webhooks. Auditors need a complete history of state transitions, and support must be able to reconstruct an order at a prior point in time." — evals/fixtures/documentation-and-adrs/decision-context.md:3-5
(no explicit purpose statement)

## Design intent — required
Serves as an input problem context fixture for the `documentation-and-adrs` skill evaluation. It presents an architectural problem for an orders service (auditability and historical reconstruction requirements) along with three candidate approaches (append-only audit table, event sourcing with projections, CDC) and concrete trade-offs (projection rebuilds, event versioning, eventual consistency, synchronous reporting expectations). Tests whether an agent records a formal Architecture Decision Record (ADR) capturing context, decision, alternatives, and consequences.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config documentation-and-adrs — evals/cases/documentation-and-adrs.json:35

## Concepts named — required, verbatim
- `Orders architecture decision context` — evals/fixtures/documentation-and-adrs/decision-context.md:1 — defined here
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
Explicitly scopes the architectural decision to the orders bounded context while noting cross-service friction with reporting services requiring synchronous reads.

## Context cost
757 bytes, ~189 tokens.
