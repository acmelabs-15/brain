---
package: rjm
name: Domain Services
slug: domain-services
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Domain Services

## Definition — verbatim
> "## Domain Services" — .claude/skills/software-engineering-library/references/domain-driven-design.md:146

## Also called — verbatim
`Domain Service` — .claude/skills/software-engineering-library/references/domain-driven-design.md:22

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 146 | defined here | Section heading establishing design principles and boundaries for stateless multi-aggregate domain behavior. |

## Consumes
Multiple aggregates, entities, or value objects participating in cross-aggregate business logic.

## Produces
Evaluated domain decisions, computed values, or coordinated domain state changes.

## When applied
Applied when behavior is significant in the domain but does not naturally belong on a single entity or value object.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Domain Services encapsulate business logic that involves multiple aggregates or operates as stateless algorithms. Separating domain services from application service layers keeps pure domain calculations isolated from persistence and infrastructure concerns.
