---
package: rjm
name: Strategic Architecture Principles
slug: strategic-architecture-principles
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Strategic Architecture Principles

## Definition — verbatim
(used, not defined)

> "## Strategic Architecture Principles" — templates/agents/architect.shared.md:553

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/architect.shared.md | 553 | defines | Section heading grouping strategic architectural reasoning frameworks: Chesterton's Fence, Path Dependence, Second-System Effect, and Core vs Context. |

## Consumes
Architectural proposals, feature removal plans, and legacy system evaluations.

## Produces
Evaluated architectural designs that avoid over-engineering, honor historical constraints, and focus investment on core capabilities.

## When applied
Applied by the architect agent when evaluating design trade-offs, refactoring legacy components, and reviewing ADRs.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A catalog of high-level reasoning models that guide architectural governance, preventing unreflective simplification and scope creep while optimizing engineering investment.
