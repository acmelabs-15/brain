---
package: rjm
name: Move Method
slug: move-method
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

# Move Method

## Definition — verbatim
(used, not defined)

> "one named, mechanical step (Extract Function, Inline Variable, Move Method)" — .claude/skills/software-engineering-library/references/refactoring.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 15 | used here | Cited as an example of a named mechanical transformation step. |

## Consumes
Code with misallocated methods, feature envy, or shotgun surgery where behavior belongs in a collaborator or target class.

## Produces
Restructured code with the method moved to the appropriate class or module and call sites redirected.

## When applied
Applied when resolving Shotgun Surgery or Feature Envy, moving a method to where the data it uses primarily resides.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Move Method is a classic Fowler refactoring transformation in rjm's software engineering library. It relocates a method from its current class or module to another class that uses or holds the relevant data more extensively, addressing smells like Feature Envy and Shotgun Surgery while preserving external behavior across intermediate test runs.
