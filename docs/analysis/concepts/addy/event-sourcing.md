---
package: addy
name: event sourcing
slug: event-sourcing
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/documentation-and-adrs.json, sha256: 63369e93c8eccc4bd11dfd3830a28f25b5d50bf09844d3d2c7d5643f9051fd9e}
  - {path: evals/fixtures/documentation-and-adrs/decision-context.md, sha256: d7c35e0ff7c16b0716076df5513d18fe3569c0ea32d5756295ae0d47c8ec6de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# event sourcing

## Definition — verbatim
> "2. Adopt event sourcing for orders and build read projections." — evals/fixtures/documentation-and-adrs/decision-context.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/documentation-and-adrs.json | 32 | used here | Evaluation prompt asking to record the decision to adopt event sourcing as an ADR. |
| evals/fixtures/documentation-and-adrs/decision-context.md | 10 | used here | Option evaluated in decision context fixture detailing benefits and trade-offs of event sourcing. |

## Consumes
An append-only log of domain events representing state transitions.

## Produces
Materialized read projections and the capability to reconstruct entity state across time.

## When applied
When full auditability, temporal replay, and complete historical transition tracking are required.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Event sourcing is an architectural persistence pattern where state transitions are recorded as an immutable log of events rather than mutable rows. In addy's evaluation fixtures, event sourcing serves as the representative architectural problem used to evaluate an agent's ability to articulate architectural trade-offs, operational complexity, and eventual consistency in ADRs.
