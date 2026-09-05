---
package: addy
path: .claude/commands/build.md
type: command
bytes: 3959
unit: inv-addy-1
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 74cc85b5092f8e209bcda36441a4ce17a5cd9efd2a7d8ce76ba202816088e277}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/commands/build.md

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit." — .claude/commands/build.md:2

## Design intent — required
Orchestrates the build/implementation phase by executing tasks incrementally using test-driven development (RED-GREEN cycle) with per-task commits. In autonomous mode (`/build auto`), it collapses planning and implementation into a single run with a single human approval checkpoint while strictly enforcing test-driven discipline, regression checking, and clean rollback boundaries.

## Phase — required
addy:Build

## Inputs — required
- Arguments: `$ARGUMENTS` (`auto` or `all` for autonomous execution of the entire plan; empty or other value for single-task stepping)
- Prior artifacts: `SPEC.md`, `docs/SPEC.md`, or `spec/*` (required by `/build auto`); `tasks/plan.md`, `tasks/todo.md`
- Git working tree status: checked via `git status --porcelain` to verify a clean baseline

## Outputs — required
- Implemented production code and tests
- Git commits (one preparatory commit for `tasks/plan.md` if generated; one commit per completed task)
- Task status updates in `tasks/plan.md` and `tasks/todo.md`
- Final execution summary listing completed tasks, tests added, and commits made

## Invokes — required
- skill agent-skills:incremental-implementation — .claude/commands/build.md:5
- skill agent-skills:test-driven-development — .claude/commands/build.md:5
- skill agent-skills:planning-and-task-breakdown — .claude/commands/build.md:33
- skill agent-skills:debugging-and-error-recovery — .claude/commands/build.md:37
- skill agent-skills:doubt-driven-development — .claude/commands/build.md:39

## Invoked by — required
none

## Concepts named — required, verbatim
- `incremental-implementation` — .claude/commands/build.md:5 — used here
- `test-driven-development` — .claude/commands/build.md:5 — used here
- `RED` — .claude/commands/build.md:20 — used here
- `GREEN` — .claude/commands/build.md:21 — used here
- `SPEC.md` — .claude/commands/build.md:31 — used here
- `tasks/plan.md` — .claude/commands/build.md:33 — used here
- `planning-and-task-breakdown` — .claude/commands/build.md:33 — used here
- `debugging-and-error-recovery` — .claude/commands/build.md:37 — used here
- `doubt-driven-development` — .claude/commands/build.md:39 — used here

## Structure
- `## Modes`
- `## Default: one task`
- `## Autonomous: the whole plan (/build auto)`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines rigorous safety stops for autonomous mode: refuses to proceed without an approved spec at recognized locations; stops if git status shows uncommitted non-planning changes; requires explicit affirmative confirmation ("approve", "go", "yes"); requires immediate stop and user escalation on ambiguous specs or irreversible changes.

## Context cost
3959 bytes (~990 tokens). Invocations load up to five skills (`incremental-implementation`, `test-driven-development`, `planning-and-task-breakdown`, `debugging-and-error-recovery`, `doubt-driven-development`).
