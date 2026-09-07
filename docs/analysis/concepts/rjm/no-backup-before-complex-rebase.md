---
package: rjm
name: No backup before complex rebase
slug: no-backup-before-complex-rebase
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

# No backup before complex rebase

## Definition — verbatim
> "| No backup before complex rebase | No recovery path if rebase fails | Create safety branch first |" — .claude/skills/git-advanced-workflows/SKILL.md:174

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 174 | defined here | Documented as an anti-pattern where history rewriting is attempted without a preceding safety branch. |

## Consumes
Branch commits targeted for interactive rebase, autosquash, or history restructuring.

## Produces
Risk of unrecoverable commit loss and tedious reflog reconstruction upon rebase abortion or mismerge.

## When applied
Triggered when an engineer or agent executes interactive rebase without first creating a safety snapshot branch.

## Sub-concepts
none

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
An operational anti-pattern in branch maintenance where destructive Git history manipulation is executed without a backup safety branch, leaving developers dependent on reflog archaeology if conflicts or aborts damage the branch.
