---
package: rjm
name: Value Objects
slug: value-objects
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-tell-dont-ask.md, sha256: 8ad4df76c0b11537efc5a3ab2c560a719f6a321511778f1307c3ef198d61c00a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Value Objects

## Definition — verbatim
> "Value Objects: immutable data with no behavior" — .claude/skills/analyze/references/design-tell-dont-ask.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/design-tell-dont-ask.md | 76 | defined here | Identified as an architectural pattern exempt from Tell Don't Ask requirements. |

## Consumes
Domain attribute groupings requiring structural equality and immutability.

## Produces
Self-contained immutable domain values without side effects or independent identity.

## When applied
Modeled in domain logic for concepts identified by their attributes rather than identity.

## Sub-concepts
none

## Part of
domain-driven-design

## Implementation status
defects: missing-path

## Design notes
Immutable domain objects defined entirely by their attributes rather than lifecycle identity. In rjm's Tell Don't Ask guidelines, Value Objects are recognized as valid state-carrying containers exempt from behavioral encapsulation enforcement.
