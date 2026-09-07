---
package: rjm
name: Comments
slug: comments
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

# Comments

## Definition — verbatim
> "a comment explaining what the code does usually marks code that wants to be a function with that name. Suggests Extract Function and Rename, then delete the comment." — .claude/skills/software-engineering-library/references/refactoring.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 64 | defined here | Defined as a code smell where explanatory comments indicate code that should be extracted as a named function. |

## Consumes
Source code containing explanatory comments that describe what contiguous code blocks do.

## Produces
Extracted named functions and the removal of redundant comments.

## When applied
Identified during code inspection where inline comments attempt to compensate for obscure code structure.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Comments is treated as a code smell in Fowler's refactoring catalog and rjm when used as a deodorant for poor code structure. When a developer writes a comment explaining what an awkward block of code does, the block almost always wants to be extracted into a standalone function bearing that description as its name. Once extracted, the comment is deleted, letting the code express its own intent.
