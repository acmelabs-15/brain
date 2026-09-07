---
package: rjm
name: Multi-Branch Development
slug: multi-branch-development
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

# Multi-Branch Development

## Definition — verbatim
> "#### Worktree: Multi-Branch Development" — .claude/skills/git-advanced-workflows/SKILL.md:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 102 | defined here | Defined as the worktree-based workflow for working on multiple branches concurrently. |

## Consumes
Multiple active branches requiring parallel work, code review, or hotfix investigation.

## Produces
Separate working tree paths linked to the shared repository database.

## When applied
Used when switching tasks or investigating bugs without disrupting the active working tree.

## Sub-concepts
worktrees, move-safe-caveat

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
Multi-Branch Development uses Git worktrees to maintain distinct working trees for parallel branches, preventing directory churn and stash conflicts during multitasking.
