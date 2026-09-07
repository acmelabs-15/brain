---
package: rjm
name: Replace Conditional with Polymorphism
slug: replace-conditional-with-polymorphism
kind: technique
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

# Replace Conditional with Polymorphism

## Definition — verbatim
(used, not defined)

> "Each step should map to a refactoring with a known name (Extract Function, Replace Conditional with Polymorphism)." — .claude/skills/software-engineering-library/references/refactoring.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 25 | used here | Cited as an example of a small, named mechanical refactoring transformation step. |

## Consumes
Complex conditional statements or switch/if chains branching on type codes or variants.

## Produces
Polymorphic class hierarchy or subtype implementations replacing explicit branch logic.

## When applied
Suggested when handling Switch Statements smell or repeated conditional logic branching on types.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Replace Conditional with Polymorphism is a refactoring technique in rjm's software engineering library. It replaces complex conditional logic or switch statements that branch on type codes with polymorphic subclass dispatch, decomposing monolithic branching logic into discrete, cohesive classes that can vary independently without modifying call sites.
