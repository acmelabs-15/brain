---
package: matt
name: ready frontier
slug: ready-frontier
kind: pattern
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

# ready frontier

## Definition — verbatim
(used, not defined)

> "Add the `implement-spec` skill (in-progress bucket, user-invoked). It takes a spec and its tickets and drives them to a single PR: the tickets are read as a task graph with blocking edges, so implementer subagents run in background worktrees across the ready frontier for concurrency, a merger subagent folds each one back into the PR branch, and the flow closes with `/code-review` before the PR is marked ready." — .changeset/add-implement-spec-skill.md:5

## Also called — verbatim
`frontier` — skills/in-progress/implement-spec/SKILL.md:11

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/add-implement-spec-skill.md | 5 | used here | Describes dispatching implementer subagents across the ready frontier for concurrency. |

## Consumes
A task graph where prerequisites and completed tickets are tracked dynamically.

## Produces
The set of currently unblocked, executable tickets available for immediate subagent dispatch.

## When applied
Evaluated initially upon reading the task graph and recomputed whenever a completed ticket is merged into the PR branch.

## Sub-concepts
none

## Part of
implement-spec, task-graph

## Implementation status
clean

## Design notes
The dynamic leading edge of executable work in an acyclic task graph. The ready frontier consists of all tickets whose blocking edges are completely satisfied; as implementer subagents finish tickets and merger subagents integrate them, new tickets enter the ready frontier, maintaining maximum concurrency.
