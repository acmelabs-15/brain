---
package: rjm
name: keep
slug: keep
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/avoiding-manufactured-work/SKILL.md, sha256: dabcb96a0c4d6575feac1b833b4402e6d81db7e20422444726beffd8edaeafc5}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# keep

## Definition — verbatim
> "5. Report the disposition as one of: keep, shrink, defer, or delete." — .claude/skills/avoiding-manufactured-work/SKILL.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/avoiding-manufactured-work/SKILL.md | 22 | defined here | Disposition verdict approving work that directly satisfies an acceptance criterion, test, or blocked decision. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 115 | defined here | Action classification category tagging retrospective findings that worked and should continue. |
| scripts/maintenance/gc_worktrees.py | 354 | defined here | Decision function in worktree garbage collection preserving worktrees with unpushed commits or errors. |

## Consumes
Proposed work satisfying consumer demands, successful retrospective practice, or unpushed worktree state.

## Produces
Retention decision authorizing task continuation, pattern reinforcement, or worktree preservation.

## When applied
When work is demanded by a real consumer, when retrospective techniques succeed, or when worktrees hold unpushed commits.

## Sub-concepts
none

## Part of
disposition

## Implementation status
defects: missing-path

## Design notes
Keep represents an active retention verdict across work triage, retrospective learning, and worktree maintenance in rjm. In post-task triage, keep authorizes work that directly satisfies acceptance criteria or unblocks decisions; in retrospectives, it tags successful behaviors to increment validation counts; in git maintenance, it safely preserves worktrees containing unpushed commits or active work.
