---
package: rjm
name: Primitive Obsession
slug: primitive-obsession
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Primitive Obsession

## Definition — verbatim
> "strings, ints, and dicts standing in for domain concepts. Suggests Replace Primitive with Object, especially at boundaries where validation should live." — .claude/skills/software-engineering-library/references/refactoring.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 60 | defined here | Defined as a code smell where generic primitives substitute for distinct domain concepts. |

## Consumes
Source code relying on raw strings, integers, or dictionaries to represent rich domain entities.

## Produces
Domain-specific value objects or entities encapsulating validation and behavior.

## When applied
Identified when primitive types represent business concepts, particularly around system input boundaries.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Primitive Obsession is a pervasive code smell in rjm where generic language primitives (such as strings, integers, and untyped dictionaries) are used in place of meaningful domain models (like PhoneNumbers, Currency, or UserIds). This practice leads to scattered validation checks, type confusion, and duplicated logic. Introducing dedicated domain value objects centralizes invariants and strengthens compile-time and runtime safety.
