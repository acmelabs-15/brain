---
package: rjm
name: Entities and Value Objects
slug: entities-and-value-objects
kind: technique
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

# Entities and Value Objects

## Definition — verbatim
> "## Entities and Value Objects" — .claude/skills/software-engineering-library/references/domain-driven-design.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 106 | defined here | Section heading establishing design rules to distinguish identity-tracked objects from immutable value representations. |

## Consumes
Domain concepts, identity lifecycles, and primitive domain data attributes.

## Produces
Clear architectural separation between entities tracked by identity and immutable value objects encapsulating business validation.

## When applied
Applied when modeling domain concepts, deciding whether identity matters, or wrapping primitive types that carry implicit validation rules.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Distinguishing Entities from Value Objects prevents primitive obsession and excessive mutable state. Defaulting to immutable value objects with constructor validation ensures domain state remains valid and easily testable without tracking spurious object identities.
