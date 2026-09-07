---
package: rjm
name: Switch Statements
slug: switch-statements
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

# Switch Statements

## Definition — verbatim
> "repeated `switch`/`if` chains over a type code. Suggests Replace Conditional with Polymorphism, or a table-driven dispatch when polymorphism would be overkill." — .claude/skills/software-engineering-library/references/refactoring.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 61 | defined here | Defined as a code smell where repeated switch or if chains branch over type codes. |

## Consumes
Source code with multiple conditional branches or switch statements switching on the same type codes.

## Produces
Refactoring recommendations toward polymorphism or table-driven dispatch mechanisms.

## When applied
Identified when conditional cascades repeatedly inspect type indicators across a codebase.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Switch Statements is a classic Fowler code smell in rjm identifying repeated conditional branching on identical type codes. When switch or if/else cascades proliferate, adding a new type requires locating and updating every switch site across the codebase. Resolving this smell via polymorphic dispatch or lookup tables decouples callers and localizes new type additions.
