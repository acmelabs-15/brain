---
package: rjm
name: Anemic Domain Model
slug: anemic-domain-model
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
  - {path: .claude/skills/software-engineering-library/references/enterprise-patterns.md, sha256: 8219d8bb13944fb6d863027165c2e719d3347dc576cd79ebb8be5b0519b2c593}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Anemic Domain Model

## Definition — verbatim
> "Smell: an entity is a record with all public fields and no methods, and every rule about it is enforced from outside. That is an Anemic Domain Model. Push behavior down before adding more services." — .claude/skills/software-engineering-library/references/clean-architecture.md:65

## Also called — verbatim
`Anemic Domain Model with thick services` — .claude/skills/software-engineering-library/references/enterprise-patterns.md:135

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 65 | defined here | Architectural anti-pattern where entities are passive data structures without methods and behavior lives in external services. |
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 232 | defined here | Anti-pattern where entities are bags of getters/setters and behavior lives in external mutating services. |
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 135 | defined here | Anti-pattern where domain objects are passive bags of attributes while thick services enforce business rules. |

## Consumes
Domain entities and service implementations.

## Produces
Architectural anti-pattern identification and refactoring directive to push logic onto entities.

## When applied
Identified during code review or architecture audits when entities lack methods and rules are enforced externally.

## Sub-concepts
none

## Part of
anti-patterns

## Implementation status
clean

## Design notes
Anemic Domain Model is a prominent architectural anti-pattern where entities become dumb data containers while procedural services enforce business rules. In rjm, recognizing this smell prompts developers and agents to relocate state validation and invariants onto entities, simplifying use cases into orchestrators.
