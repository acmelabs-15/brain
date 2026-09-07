---
package: rjm
name: Inheritance
slug: inheritance
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Inheritance

## Definition — verbatim
> "| Inheritance | Subtypes coupled to superclass changes |" — .claude/skills/golden-principles/references/design-code-qualities.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-code-qualities.md | 33 | defined here | Defined in Coupling table as coupling where subtypes are coupled to superclass changes. |
| .claude/skills/quality-grades/references/code-qualities.md | 34 | defined here | Defined in Coupling Types table as subtype coupling to changes in the superclass. |

## Consumes
Class hierarchies and polymorphic base classes.

## Produces
Subtype relationships that share common behavior but inherit vulnerability to superclass modifications.

## When applied
Applied when modeling variation of a common concept where the fragile base class problem can be managed.

## Sub-concepts
none

## Part of
the-five-qualities

## Implementation status
defects: missing-path

## Design notes
A coupling classification describing how derived classes depend on the internal structure, protected members, and behavioral invariants of their base classes, requiring strict discipline to avoid fragile base class defects.
