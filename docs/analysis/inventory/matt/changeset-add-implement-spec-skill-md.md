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
verified: 2026-09-06 quote-check+coverage
---

# .changeset/add-implement-spec-skill.md

## Purpose — required, verbatim
> "Add the `implement-spec` skill (in-progress bucket, user-invoked)." — .changeset/add-implement-spec-skill.md:5

## Design intent — required
Changeset documentation introducing the experimental `implement-spec` skill in the in-progress bucket. Describes taking a spec and its tickets to drive them to a single pull request by interpreting tickets as a task graph with blocking edges. Implementer subagents execute concurrently in background worktrees across the ready frontier, a merger subagent integrates each change back into the PR branch, and the workflow terminates with a `/code-review` invocation before the PR is marked ready.

## Phase — required
cross-phase

## Inputs — required
- `spec` — .changeset/add-implement-spec-skill.md:5
- `tickets` — .changeset/add-implement-spec-skill.md:5

## Outputs — required
- `PR` — .changeset/add-implement-spec-skill.md:5

## Invokes — required
- skill implement-spec — .changeset/add-implement-spec-skill.md:5
- skill code-review — .changeset/add-implement-spec-skill.md:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `implement-spec` — .changeset/add-implement-spec-skill.md:5 — defined here
- `in-progress bucket` — .changeset/add-implement-spec-skill.md:5 — used here
- `user-invoked` — .changeset/add-implement-spec-skill.md:5 — used here
- `spec` — .changeset/add-implement-spec-skill.md:5 — used here
- `tickets` — .changeset/add-implement-spec-skill.md:5 — used here
- `PR` — .changeset/add-implement-spec-skill.md:5 — used here
- `task graph` — .changeset/add-implement-spec-skill.md:5 — used here
- `blocking edges` — .changeset/add-implement-spec-skill.md:5 — used here
- `implementer subagents` — .changeset/add-implement-spec-skill.md:5 — used here
- `background worktrees` — .changeset/add-implement-spec-skill.md:5 — used here
- `ready frontier` — .changeset/add-implement-spec-skill.md:5 — used here
- `concurrency` — .changeset/add-implement-spec-skill.md:5 — used here
- `merger subagent` — .changeset/add-implement-spec-skill.md:5 — used here
- `PR branch` — .changeset/add-implement-spec-skill.md:5 — used here
- `/code-review` — .changeset/add-implement-spec-skill.md:5 — used here
- `code-review` — .changeset/add-implement-spec-skill.md:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Captures Matt's initial design for parallel multi-agent spec implementation using git worktrees and automated merge subagents.

## Context cost
450 bytes, 6 lines, approximately 100 tokens.
