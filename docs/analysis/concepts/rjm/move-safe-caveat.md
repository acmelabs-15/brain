---
package: rjm
name: Move-safe caveat
slug: move-safe-caveat
kind: reference
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

# Move-safe caveat

## Definition — verbatim
> "**Move-safe caveat:** moving a worktree" — .claude/skills/git-advanced-workflows/SKILL.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 112 | defined here | Defined as the caveat describing broken venv shebangs when moving worktrees and prescribing repair procedures. |

## Consumes
A moved or relocated Git worktree containing Python virtual environment launchers.

## Produces
Repaired launcher shebangs via scripts/maintenance/repair_worktree_venv.py or uv sync reinstall.

## When applied
Applied whenever a worktree is moved or when venv launcher scripts fail with "bad interpreter".

## Sub-concepts
none

## Part of
multi-branch-development

## Implementation status
defects: orphan

## Design notes
Move-safe caveat warns that moving a worktree breaks absolute path shebangs in .venv launchers, mandating repair_worktree_venv.py or uv sync --frozen --extra dev --reinstall.
