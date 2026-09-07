---
package: rjm
name: Split a commit
slug: split-a-commit
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

# Split a commit

## Definition — verbatim
> "**Split a commit:**" — .claude/skills/git-advanced-workflows/SKILL.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 52 | defined here | Defined as a procedure using git rebase -i edit, git reset HEAD^, and targeted git add commands to split commits. |

## Consumes
A multi-concern commit that should be decomposed into atomic changes.

## Produces
Two or more smaller, focused commits replacing the original monolithic commit.

## When applied
Applied when a single commit bundles distinct logical changes, such as mixing feature logic with refactoring.

## Sub-concepts
edit

## Part of
interactive-or-standard-rebase

## Implementation status
defects: orphan

## Design notes
Split a commit breaks down a monolithic commit by pausing rebase with edit, resetting HEAD^ into working tree changes, and committing distinct file groups individually.
