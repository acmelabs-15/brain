---
package: rjm
name: Leaky type at the boundary
slug: leaky-type-at-the-boundary
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

# Leaky type at the boundary

## Definition — verbatim
> "a public method on a use case takes or returns a SQLAlchemy row, a Pydantic HTTP model, or a `requests.Response`. Replace the parameter with a domain type and map at the adapter." — .claude/skills/software-engineering-library/references/clean-architecture.md:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 147 | defined here | Architectural anti-pattern warning against exposing framework or transport serialization types across use-case boundaries. |

## Consumes
Use case signatures, boundary methods, adapter data mappers.

## Produces
Boundary breach finding and type decoupling remediation substituting domain types for framework types.

## When applied
When framework models, ORM rows, or transport schemas cross into application use-case signatures.

## Sub-concepts
none

## Part of
clean-architecture

## Implementation status
clean

## Design notes
Leaky type at the boundary describes the anti-pattern where framework-specific data structures—such as ORM instances, Pydantic HTTP request models, or client response objects—are passed directly into or returned from use cases. In rjm, boundaries must use plain primitives or domain-owned types, forcing adapters to map wire shapes explicitly and preventing external protocol churn from infecting core business logic.
