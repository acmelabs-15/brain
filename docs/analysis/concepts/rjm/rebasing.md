---
package: rjm
name: rebasing
slug: rebasing
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

# rebasing

## Definition — verbatim
(used, not defined)

> "description: Advanced Git workflows including rebasing, cherry-picking, bisect, worktrees, and reflog." — .claude/skills/git-advanced-workflows/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 4 | used here | Cited in skill description as one of the advanced git workflows for managing complex git histories and feature branches. |

## Consumes
Feature branch commits and upstream target branch

## Produces
Linearized commit sequence re-applied onto target base

## When applied
When triggered by "rebase my branch" or cleaning up a feature branch before submitting a pull request.

## Sub-concepts
none

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
A Git history rewriting technique used to re-apply feature branch commits onto an updated base branch, squash intermediate commits, and maintain a clean linear commit history prior to pull request submission.
