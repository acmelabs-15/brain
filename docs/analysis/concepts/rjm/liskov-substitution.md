---
package: rjm
name: Liskov Substitution
slug: liskov-substitution
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Liskov Substitution

## Definition — verbatim
> "Subtypes must be substitutable for base types" — .claude/skills/quality-grades/references/solid-principles.md:17

## Also called — verbatim
> "Liskov Substitution (LSP)" — .claude/skills/quality-grades/references/solid-principles.md:17

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/solid-principles.md | 17 | defined here | Defined as requiring subtypes to be substitutable for base types without breaking client expectations. |

## Consumes
Inheritance hierarchies, interface contracts, polymorphism models.

## Produces
Polymorphically sound subtype implementations conforming to base class behavioral contracts.

## When applied
When designing class hierarchies, subclassing base types, and auditing polymorphic behavior.

## Sub-concepts
none

## Part of
solid-principles

## Implementation status
defects: missing-path

## Design notes
The third SOLID principle in rjm, ensuring subtype substitutability so that clients using base type contracts function correctly with any derived class without type-checking hacks.
