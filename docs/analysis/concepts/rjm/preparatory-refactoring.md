---
package: rjm
name: Preparatory refactoring
slug: preparatory-refactoring
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

# Preparatory refactoring

## Definition — verbatim
> "the next change you have to make is hard. Reshape the code so the change becomes obvious, then make the change." — .claude/skills/software-engineering-library/references/refactoring.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 36 | defined here | Defined as reshaping code to make an upcoming difficult change easy before implementing it. |

## Consumes
A planned code modification that is difficult or convoluted under current code structure.

## Produces
Restructured code optimized to accommodate the planned feature or fix cleanly.

## When applied
Applied when the next change to make is hard, adhering to "make the change easy, then make the easy change."

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Preparatory refactoring in rjm embodies Kent Beck's maxim: "Make the change easy, then make the easy change." Rather than wedging a new feature or fix into an inhospitable codebase structure, the developer or agent first restructures the existing code so that the intended modification fits naturally. This refactoring is committed separately under a refactor: commit before the behavior change is implemented.
