---
package: rjm
name: Framework decorators on entities
slug: framework-decorators-on-entities
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

# Framework decorators on entities

## Definition — verbatim
> "ORM base classes, HTTP route decorators, or serialization decorators applied to domain types. Move the framework binding to a separate adapter type and map between them." — .claude/skills/software-engineering-library/references/clean-architecture.md:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 150 | defined here | Architectural anti-pattern defined in review guidance prohibiting framework binding annotations directly on core domain models. |

## Consumes
Entity class definitions, framework decorators, data persistence schemas.

## Produces
Coupling defect finding and remediation moving framework bindings to outer-layer adapter classes.

## When applied
When domain entities or value objects are decorated with ORM annotations, HTTP routing metadata, or framework serialization markers.

## Sub-concepts
none

## Part of
clean-architecture

## Implementation status
clean

## Design notes
Framework decorators on entities occurs when domain models inherit from ORM base classes or carry HTTP route and serialization decorators. In rjm, this couples enterprise business rules to transient framework implementations; domain models must remain POCO/POPO dataclasses, delegating framework persistence and wire mappings to outer interface adapters.
