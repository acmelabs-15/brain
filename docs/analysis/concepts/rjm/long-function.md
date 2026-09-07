---
package: rjm
name: Long Function
slug: long-function
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

# Long Function

## Definition — verbatim
> "a function that no longer fits one screen and one idea. Suggests Extract Function. Be aggressive: a six-line function with a clear name beats a forty-line function whose body you have to scan." — .claude/skills/software-engineering-library/references/refactoring.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 52 | defined here | Defined as a code smell where a function exceeds a single screen and handles multiple ideas. |

## Consumes
Source code containing oversized functions that span multiple concerns.

## Produces
Identification of decomposition targets to be refactored via Extract Function.

## When applied
Identified during code quality review when a function no longer fits on one screen or embodies more than one idea.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Long Function is an established code smell recognized in rjm's refactoring catalog. It identifies procedures that have grown beyond a single coherent conceptual responsibility or single screen of text. Addressing it through aggressive extraction of smaller, intention-revealing functions enhances readability, simplifies test writing, and limits bug surface area.
