---
package: rjm
name: Anemic Domain Model with thick services
slug: anemic-domain-model-with-thick-services
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

# Anemic Domain Model with thick services

## Definition — verbatim
> "entities are bags of getters and setters; every rule lives in a service. Push the rule onto the entity that owns the data." — .claude/skills/software-engineering-library/references/clean-architecture.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 144 | defined here | Listed as an anti-pattern in review guidance with recommendation to push business rules onto the entity owning the data. |

## Consumes
Domain entities, service implementations, data models.

## Produces
Architectural smell identification and refactoring recommendation to encapsulate domain logic within entities.

## When applied
During code review and architecture auditing when entities lack behavior and business logic is concentrated in procedural services.

## Sub-concepts
none

## Part of
clean-architecture

## Implementation status
clean

## Design notes
Anemic Domain Model with thick services describes an architectural anti-pattern where domain entities are reduced to passive data holders while external services manipulate their state. In rjm's Clean Architecture guidelines, this anti-pattern violates object-oriented encapsulation and cohesion, mandating that business invariants and validation logic reside directly on the entity owning the data.
