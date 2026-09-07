---
package: rjm
name: edit
slug: edit
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

# edit

## Definition — verbatim
(used, not defined)

> "`edit` (amend content)" — .claude/skills/git-advanced-workflows/SKILL.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 43 | used here | Specified as the interactive rebase operation to pause and amend commit contents. |

## Consumes
A commit in an interactive rebase list requiring content modification or decomposition.

## Produces
A paused rebase prompt allowing file modifications, commit amends, or commit splitting.

## When applied
Applied during interactive rebase when a commit must be modified, amended, or split into multiple commits.

## Sub-concepts
none

## Part of
rebase-operations

## Implementation status
defects: orphan

## Design notes
edit pauses the rebase loop immediately after applying a commit, providing shell access to modify files or split the commit before running git rebase --continue.
