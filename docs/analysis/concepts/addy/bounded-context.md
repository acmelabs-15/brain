---
package: addy
name: bounded context
slug: bounded-context
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/documentation-and-adrs/decision-context.md, sha256: d7c35e0ff7c16b0716076df5513d18fe3569c0ea32d5756295ae0d47c8ec6de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# bounded context

## Definition — verbatim
> "The decision applies only to the orders bounded context." — evals/fixtures/documentation-and-adrs/decision-context.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/documentation-and-adrs/decision-context.md | 16 | used here | Scopes the architectural decision to the orders domain boundary to prevent cross-service impact. |

## Consumes
Domain models and service boundary definitions.

## Produces
Explicit boundary within which domain models and architectural decisions apply consistently.

## When applied
When designing domain services or evaluating architectural trade-offs to prevent leakage across service boundaries.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A strategic Domain-Driven Design pattern defining explicit boundaries around models and decisions, ensuring architectural choices remain isolated to a cohesive subsystem.
