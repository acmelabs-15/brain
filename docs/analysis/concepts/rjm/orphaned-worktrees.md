---
package: rjm
name: Orphaned worktrees
slug: orphaned-worktrees
kind: pattern
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

# Orphaned worktrees

## Definition — verbatim
> "| Orphaned worktrees | Consume disk space silently | Remove after use |" — .claude/skills/git-advanced-workflows/SKILL.md:173

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 173 | defined here | Documented as an anti-pattern where secondary worktree directories are abandoned after task completion. |

## Consumes
Completed development branches or closed pull request worktree directories.

## Produces
Unnecessary disk space consumption and lingering branch tracking references.

## When applied
Recognized when temporary secondary worktree directories remain unpruned following branch merge or task conclusion.

## Sub-concepts
none

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
An operational anti-pattern in multi-branch git workflows where temporary working trees created for concurrent development are left behind, consuming disk storage and locking branches until explicitly cleaned up with git worktree remove.
