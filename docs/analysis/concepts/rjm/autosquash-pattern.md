---
package: rjm
name: Autosquash pattern
slug: autosquash-pattern
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

# Autosquash pattern

## Definition — verbatim
> "**Autosquash pattern:**" — .claude/skills/git-advanced-workflows/SKILL.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 45 | defined here | Defined as an automated rebase pattern pairing git commit --fixup with git rebase -i --autosquash. |

## Consumes
Fixup commits created with reference to target commit hashes.

## Produces
Automatically ordered rebase todo list positioning fixup lines directly beneath target commits.

## When applied
Applied when iterating on code review comments to automate history cleanup.

## Sub-concepts
fixup

## Part of
interactive-or-standard-rebase

## Implementation status
defects: orphan

## Design notes
Autosquash pattern pairs git commit --fixup with git rebase -i --autosquash to automatically rearrange and merge fixup commits into their original commits without manual todo list editing.
