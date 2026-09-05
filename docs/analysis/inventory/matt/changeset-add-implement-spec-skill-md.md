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
verified: 2026-09-05 quote-check+coverage
---

# .changeset/add-implement-spec-skill.md

## Purpose — required, verbatim
> "Add the `implement-spec` skill (in-progress bucket, user-invoked). It takes a spec and its tickets and drives them to a single PR: the tickets are read as a task graph with blocking edges, so implementer subagents run in background worktrees across the ready frontier for concurrency, a merger subagent folds each one back into the PR branch, and the flow closes with `/code-review` before the PR is marked ready." — .changeset/add-implement-spec-skill.md:5

## Design intent — required
Changeset entry recording a patch release for package `mattpocock-skills` introducing the experimental `implement-spec` skill in `skills/in-progress/`. Documents the multi-agent task execution model: reading tickets as a task graph with blocking edges, spawning concurrent implementer subagents in background worktrees along the ready frontier, folding changes via a merger subagent, and gating PR completion behind a `/code-review` pass.

## Phase — required
none

## Inputs — required
Spec document and tickets describing architectural and implementation tasks.

## Outputs — required
Single pull request (PR) containing verified and merged code changes.

## Invokes — required
- skill implement-spec — .changeset/add-implement-spec-skill.md:5
- skill code-review — .changeset/add-implement-spec-skill.md:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `implement-spec` — .changeset/add-implement-spec-skill.md:5 — defined here
- `in-progress bucket` — .changeset/add-implement-spec-skill.md:5 — used here
- `user-invoked` — .changeset/add-implement-spec-skill.md:5 — used here
- `task graph` — .changeset/add-implement-spec-skill.md:5 — defined here
- `blocking edges` — .changeset/add-implement-spec-skill.md:5 — defined here
- `implementer subagents` — .changeset/add-implement-spec-skill.md:5 — defined here
- `background worktrees` — .changeset/add-implement-spec-skill.md:5 — defined here
- `ready frontier` — .changeset/add-implement-spec-skill.md:5 — defined here
- `merger subagent` — .changeset/add-implement-spec-skill.md:5 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Represents an advanced concurrency pattern in the repository: fan-out of subagents into separate git worktrees coordinated by a task dependency graph ("ready frontier") and merged by a dedicated merger subagent before a code review gate.

## Context cost
450 bytes, ~100 tokens. Self-contained release note.
