---
package: rjm
name: "Phase 2: Execute the Workflow"
slug: phase-2-execute-the-workflow
kind: phase
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

# Phase 2: Execute the Workflow

## Definition — verbatim
> "### Phase 2: Execute the Workflow" — .claude/skills/git-advanced-workflows/SKILL.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/git-advanced-workflows/SKILL.md | 32 | defined here | Defined as the central execution phase implementing rebase, cherry-pick, bisect, worktree, and recovery procedures. |

## Consumes
Assessed repository state, selected workflow procedure, and safety backup branch.

## Produces
Executed Git changes including rewritten commits, cherry-picked patches, bisect verdicts, or recovered branches.

## When applied
Follows Phase 1 assessment once the repository state is verified and backup created.

## Sub-concepts
rebase-operations, autosquash-pattern, split-a-commit, partial-cherry-pick, automated-bisect, multi-branch-development, move-safe-caveat, recovery, abort-operations-in-progress

## Part of
git-advanced-workflows

## Implementation status
defects: orphan

## Design notes
Phase 2: Execute the Workflow encapsulates the command-level procedures and conflict resolution strategies for executing complex Git transformations safely.
