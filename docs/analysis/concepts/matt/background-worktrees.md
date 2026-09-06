---
package: matt
name: background worktrees
slug: background-worktrees
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# background worktrees

## Definition — verbatim
(used, not defined)

> "Add the `implement-spec` skill (in-progress bucket, user-invoked). It takes a spec and its tickets and drives them to a single PR: the tickets are read as a task graph with blocking edges, so implementer subagents run in background worktrees across the ready frontier for concurrency, a merger subagent folds each one back into the PR branch, and the flow closes with `/code-review` before the PR is marked ready." — .changeset/add-implement-spec-skill.md:5

## Also called — verbatim
`worktree` — skills/in-progress/implement-spec/SKILL.md:25

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Identifies background worktrees as the isolation mechanism enabling concurrent implementer subagents. |

## Consumes
Git repository, separate filesystem directories, branch references.

## Produces
Isolated working checkouts allowing parallel subagents to modify files, stage commits, and run tests independently.

## When applied
Created dynamically by `implement-spec` when launching implementer subagents across frontier tickets, and cleaned up upon completion.

## Sub-concepts
none

## Part of
implement-spec

## Implementation status
clean

## Design notes
The filesystem and version control isolation technique enabling parallel agent execution. Running multiple autonomous agents in a single shared checkout leads to git index lock errors, HEAD contention, and stash collisions; background worktrees give each subagent an independent working tree linked to the same repository.
