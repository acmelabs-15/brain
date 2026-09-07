---
package: rjm
name: drop
slug: drop
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/git-advanced-workflows/SKILL.md, sha256: f47de2380592b3c3bc098f7f3683406968b1df7aadd981c57f79315205659161}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# drop

## Definition — verbatim
> "| **Drop** | REMOVE or TAG as harmful | Failed, should stop |" — .claude/skills/retrospective/references/diagnosis-and-actions.md:116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 43 | used here | Listed as an interactive rebase operation to remove a commit from history. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 116 | defined here | Defined in retrospective action classification as removing or tagging a failed finding as harmful. |

## Consumes
A commit in an interactive rebase, or a failed finding/anti-pattern in a retrospective.

## Produces
Removal of the commit from Git history, or removal/harmful-tagging of an ineffective process.

## When applied
During interactive rebase to eliminate unnecessary commits, or during retrospective action classification when a practice failed.

## Sub-concepts
none

## Part of
rebase-operations, keep-drop-add-modify

## Implementation status
defects: orphan

## Design notes
drop represents explicit removal across two contexts in rjm: discarding a commit from history in interactive rebase, and decommissioning failed or harmful patterns in retrospective diagnosis.
