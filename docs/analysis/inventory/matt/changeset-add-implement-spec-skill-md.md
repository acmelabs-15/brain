---
package: matt
path: .changeset/add-implement-spec-skill.md
type: doc
bytes: 450
unit: inv-matt-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .changeset/add-implement-spec-skill.md, sha256: abbf2ece03c6629782df0f815603378f275252c92379529eae0268e101721246}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .changeset/add-implement-spec-skill.md

## Purpose — required, verbatim
> "Add the `implement-spec` skill (in-progress bucket, user-invoked). It takes a spec and its tickets and drives them to a single PR: the tickets are read as a task graph with blocking edges, so implementer subagents run in background worktrees across the ready frontier for concurrency, a merger subagent folds each one back into the PR branch, and the flow closes with `/code-review` before the PR is marked ready." — .changeset/add-implement-spec-skill.md:5 (no explicit purpose statement)

## Design intent — required
Documents the introduction of the user-invoked `implement-spec` skill in the in-progress bucket. Outlines an orchestration architecture for driving a spec and tickets to a completed pull request: parsing tickets as a dependency task graph with blocking edges, executing concurrent implementer subagents in background git worktrees across the ready frontier, folding branches back with a dedicated merger subagent, and gating completion behind `/code-review`.

## Phase — required
matt:Implement

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `implement-spec` — .changeset/add-implement-spec-skill.md:5 — used here
- `in-progress` — .changeset/add-implement-spec-skill.md:5 — used here
- `user-invoked` — .changeset/add-implement-spec-skill.md:5 — used here
- `task graph` — .changeset/add-implement-spec-skill.md:5 — defined here
- `ready frontier` — .changeset/add-implement-spec-skill.md:5 — defined here
- `/code-review` — .changeset/add-implement-spec-skill.md:5 — used here

## Structure
- Changeset package bump header — .changeset/add-implement-spec-skill.md:1
- Skill introduction summary — .changeset/add-implement-spec-skill.md:5

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · .changeset/add-implement-spec-skill.md:1: Not referenced or invoked by any other in-scope file in the repository.

## Observations
Provides a concise description of concurrent subagent orchestration using git worktrees and topological ready frontiers.

## Context cost
450 bytes, ~100 tokens.
