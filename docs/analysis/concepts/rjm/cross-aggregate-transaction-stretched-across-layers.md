---
package: rjm
name: Cross-aggregate transaction stretched across layers
slug: cross-aggregate-transaction-stretched-across-layers
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cross-aggregate transaction stretched across layers

## Definition — verbatim
> "a use case that papers over a missing aggregate boundary by holding a long transaction across several services. Redraw the boundary; do not lengthen the transaction." — .claude/skills/software-engineering-library/references/clean-architecture.md:149

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 149 | defined here | Architectural anti-pattern defined in review guidance warning against holding distributed transactions across multiple services. |

## Consumes
Aggregate boundaries, transactional scopes, multi-service workflows.

## Produces
Transactional contention finding and aggregate redesign recommendation.

## When applied
When a use case spans multiple domain services within a single extended transaction to compensate for ill-defined aggregate boundaries.

## Sub-concepts
none

## Part of
clean-architecture

## Implementation status
clean

## Design notes
Cross-aggregate transaction stretched across layers describes the anti-pattern where a use case maintains open transactions across multiple distinct domain services to paper over poorly defined aggregate boundaries. In rjm, this practice creates contention, lock amplification, and tight coupling; the architecture mandates redrawing aggregate boundaries or coordinating state changes through asynchronous domain events.
