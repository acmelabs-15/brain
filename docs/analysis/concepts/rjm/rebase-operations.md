---
package: rjm
name: Rebase operations
slug: rebase-operations
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/git-advanced-workflows/SKILL.md, sha256: f47de2380592b3c3bc098f7f3683406968b1df7aadd981c57f79315205659161}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Rebase operations

## Definition — verbatim
> "**Rebase operations:**" — .claude/skills/git-advanced-workflows/SKILL.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 43 | defined here | Defined as the set of interactive rebase commands for manipulating commits in git rebase -i. |

## Consumes
An interactive rebase todo list script.

## Produces
Restructured Git commit history reflecting selected action verbs.

## When applied
Applied during git rebase -i when editing the instruction list.

## Sub-concepts
pick, reword, edit, squash, fixup, drop

## Part of
interactive-or-standard-rebase

## Implementation status
defects: orphan

## Design notes
Rebase operations provide fine-grained control over commit series, allowing engineers to squash noisy commits, edit content, reword descriptions, and drop dead code before merging.
