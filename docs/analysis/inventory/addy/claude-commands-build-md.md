---
package: addy
path: .claude/commands/build.md
type: command
bytes: 3959
unit: inv-addy-1
deprecated: false
aliases: []
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 74cc85b5092f8e209bcda36441a4ce17a5cd9efd2a7d8ce76ba202816088e277}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/build.md

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit. Add \"auto\" to run the whole plan in one approved pass." — .claude/commands/build.md:2

## Design intent — required
Enforces a rigorous task execution loop combining incremental implementation with test-driven development. It supports both interactive task-by-task stepping and an autonomous mode that executes an entire task plan after a single human approval checkpoint, while maintaining strict verification, rollback safety, and halting on unresolvable errors or high-risk actions.

## Phase — required
addy:Build

## Inputs — required
- `$ARGUMENTS` (`auto` or `all` for autonomous mode, empty or other for default single-task mode) — .claude/commands/build.md:12
- Next pending task from the plan — .claude/commands/build.md:16
- Required specification file at `SPEC.md`, `docs/SPEC.md`, or under `spec/` — .claude/commands/build.md:31
- Existing planning artifacts `tasks/plan.md` and `tasks/todo.md` — .claude/commands/build.md:32
- Existing codebase context, conventions, and types — .claude/commands/build.md:19
- Test suite and compiler/build outputs — .claude/commands/build.md:22, 23
- User confirmation or approval response for plan execution — .claude/commands/build.md:34

## Outputs — required
- Code implementation and behavior-verifying tests per task — .claude/commands/build.md:20, 21
- Per-task git commits with descriptive messages — .claude/commands/build.md:24, 35
- Updated task status in plan — .claude/commands/build.md:25, 35
- Preparatory commit of `tasks/plan.md` if generated — .claude/commands/build.md:34
- Execution summary report — .claude/commands/build.md:42

## Invokes — required
- skill agent-skills:incremental-implementation — .claude/commands/build.md:5
- skill agent-skills:test-driven-development — .claude/commands/build.md:5
- skill agent-skills:planning-and-task-breakdown — .claude/commands/build.md:33
- skill agent-skills:debugging-and-error-recovery — .claude/commands/build.md:37, 44
- skill agent-skills:doubt-driven-development — .claude/commands/build.md:39

## Invoked by — required
none

## Concepts named — required, verbatim
`/build` — .claude/commands/build.md:9 — defined here
`/build auto` — .claude/commands/build.md:10, 27, 41 — defined here
`autonomous mode` — .claude/commands/build.md:12 — defined here
`single-task mode` — .claude/commands/build.md:12 — defined here
`acceptance criteria` — .claude/commands/build.md:18 — used here
`RED` — .claude/commands/build.md:20, 35 — used here
`GREEN` — .claude/commands/build.md:21, 35 — used here
`regressions` — .claude/commands/build.md:22 — used here
`SPEC.md` — .claude/commands/build.md:31, 32 — used here
`/spec` — .claude/commands/build.md:31 — used here
`clean baseline` — .claude/commands/build.md:32 — defined here
`tasks/plan.md` — .claude/commands/build.md:32, 33, 34 — used here
`tasks/todo.md` — .claude/commands/build.md:32 — used here
`planning-and-task-breakdown` — .claude/commands/build.md:33 — used here
`human gate` — .claude/commands/build.md:34 — defined here
`dependency order` — .claude/commands/build.md:35 — used here
`debugging-and-error-recovery` — .claude/commands/build.md:37, 44 — used here
`doubt-driven-development` — .claude/commands/build.md:39 — used here
`git revert` — .claude/commands/build.md:39 — used here
`blocker` — .claude/commands/build.md:41 — used here

## Structure
- `## Modes` — .claude/commands/build.md:7
- `## Default: one task` — .claude/commands/build.md:14
- `## Autonomous: the whole plan (`/build auto`)` — .claude/commands/build.md:27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides a clean-rollback guarantee: each task commits only the files it modified plus task status, never using `git add -A` blindly. Halts when operations cannot be undone via `git revert`.

## Context cost
3959 bytes, approximately 900 tokens.
