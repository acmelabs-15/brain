---
package: rjm
name: Value Object
slug: value-object
kind: pattern
package_phase: none
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

# Value Object

## Definition — verbatim
> "- **Value Object**: an immutable domain object identified by the values of its fields. Two value objects with identical fields are interchangeable." — .claude/skills/software-engineering-library/references/domain-driven-design.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 19 | defined here | Defined in core vocabulary as an immutable domain object identified by field values rather than identity. |

## Consumes
Descriptive domain attributes, validation rules.

## Produces
Immutable, interchangeable domain objects without conceptual identity.

## When applied
Applied when modeling descriptive aspects of the domain where identity is irrelevant and equality is determined entirely by field values.

## Sub-concepts
none

## Part of
aggregate

## Implementation status
clean

## Design notes
A Value Object is an immutable domain object completely defined by its attributes, ensuring side-effect-free sharing and replacement without tracking identity lifecycles.
