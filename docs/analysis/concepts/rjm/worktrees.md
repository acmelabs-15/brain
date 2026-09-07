---
package: rjm
name: worktrees
slug: worktrees
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

# worktrees

## Definition — verbatim
(used, not defined)

> "Advanced Git workflows including rebasing, cherry-picking, bisect, worktrees, and reflog." — .claude/skills/git-advanced-workflows/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 4 | used here | Listed in the skill description as one of the advanced Git workflows provided for repository management. |

## Consumes
A Git repository where parallel branch checkouts or isolated working trees are needed.

## Produces
Linked working trees sharing the parent repository object database.

## When applied
Applied when managing complex histories or working on multiple branches concurrently without switching branches in the main working tree.

## Sub-concepts
multi-branch-development, move-safe-caveat

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
Worktrees provide isolated directory checkouts linked to a single Git repository, enabling simultaneous branch development without branch-switching context loss or stash overhead.
