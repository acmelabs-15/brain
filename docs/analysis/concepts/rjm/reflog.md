---
package: rjm
name: reflog
slug: reflog
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

# reflog

## Definition — verbatim
(used, not defined)

> "Advanced Git workflows including rebasing, cherry-picking, bisect, worktrees, and reflog." — .claude/skills/git-advanced-workflows/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 4 | used here | Highlighted in the skill description as a key capability for repository recovery. |

## Consumes
Local Git reference log history recording HEAD transitions and branch ref updates.

## Produces
Identified SHA hashes for recovering dangling commits or undoing destructive history operations.

## When applied
Invoked when a developer needs to recover lost commits or undo mistaken operations within local reflog retention windows.

## Sub-concepts
recovery

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
Reflog serves as the ultimate safety net in Git workflows, tracking local HEAD updates to allow developers and agents to recover from destructive rebase or reset errors.
