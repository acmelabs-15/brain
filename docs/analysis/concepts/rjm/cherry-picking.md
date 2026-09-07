---
package: rjm
name: cherry-picking
slug: cherry-picking
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

# cherry-picking

## Definition — verbatim
(used, not defined)

> "description: Advanced Git workflows including rebasing, cherry-picking, bisect, worktrees, and reflog." — .claude/skills/git-advanced-workflows/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 4 | used here | Cited in skill description as a workflow for selective commit application across branches. |

## Consumes
Specific commit SHAs from source branch

## Produces
Target commit copied and applied onto current branch

## When applied
When triggered by "cherry-pick a commit" or when porting hotfixes across multiple release branches.

## Sub-concepts
none

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
A Git workflow technique for selecting and applying specific commits from one branch to another, commonly utilized for backporting critical bug fixes and security patches across multiple active release branches without merging entire branches.
