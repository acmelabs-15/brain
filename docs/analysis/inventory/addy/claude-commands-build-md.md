---
package: addy
path: .claude/commands/build.md
type: command
bytes: 3959
unit: inv-addy-4
---

# .claude/commands/build.md

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit. Add \"auto\" to run the whole plan in one approved pass." — .claude/commands/build.md:2

## Design intent — required
Orchestrates incremental test-driven software implementation across two execution modes: single-task stepping (`/build`) and autonomous plan execution (`/build auto`). In single-task mode, it implements one slice via RED-GREEN-Refactor, regression testing, build verification, and atomic commit. In autonomous mode, it verifies spec prerequisites (`SPEC.md` / `docs/SPEC.md` / `spec/*`), ensures a clean git baseline, secures a single explicit human approval, executes tasks in dependency order with isolated per-task commits, and halts for ambiguity, persistent test failures, or high-risk/irreversible changes.

## Phase — required
`addy:Build`

## Inputs — required
- `$ARGUMENTS` (default single-task vs `auto` / `all`)
- Execution plan (`tasks/plan.md`, `tasks/todo.md`)
- Spec (`SPEC.md`, `docs/SPEC.md`, `spec/*`)
- Git working tree status (`git status --porcelain`)

## Outputs — required
- Production code implementations and test files
- Atomic per-task git commits
- Task completion markers in `tasks/plan.md`
- Autonomous execution summary report

## Invokes — required
- skill incremental-implementation — .claude/commands/build.md:5 (named `agent-skills:incremental-implementation`)
- skill test-driven-development — .claude/commands/build.md:5 (named `agent-skills:test-driven-development`)
- skill planning-and-task-breakdown — .claude/commands/build.md:33 (named `agent-skills:planning-and-task-breakdown`)
- skill debugging-and-error-recovery — .claude/commands/build.md:37, 44 (named `agent-skills:debugging-and-error-recovery`)
- skill doubt-driven-development — .claude/commands/build.md:39 (named `agent-skills:doubt-driven-development`)

## Invoked by — required
none

## Concepts named — required, verbatim
- `incremental-implementation` — .claude/commands/build.md:5 — used here
- `test-driven-development` — .claude/commands/build.md:5 — used here
- `/build` — .claude/commands/build.md:9 — defined here
- `/build auto` — .claude/commands/build.md:10, 27 — defined here
- `single-task mode` — .claude/commands/build.md:12 — defined here
- `autonomous mode` — .claude/commands/build.md:12 — defined here
- `RED-GREEN cycle` — .claude/commands/build.md:20-21, 35 — used here
- `clean baseline` — .claude/commands/build.md:32 — defined here
- `clean-rollback guarantee` — .claude/commands/build.md:32, 35 — defined here
- `planning-and-task-breakdown` — .claude/commands/build.md:33 — used here
- `single checkpoint` — .claude/commands/build.md:34 — defined here
- `dependency order execution` — .claude/commands/build.md:35 — defined here
- `debugging-and-error-recovery` — .claude/commands/build.md:37, 44 — used here
- `doubt-driven-development` — .claude/commands/build.md:39 — used here
- `high-risk operation halt` — .claude/commands/build.md:39 — defined here

## Structure
- `---` (frontmatter: description) — .claude/commands/build.md:1-3
- `## Modes` — .claude/commands/build.md:7
- `## Default: one task` — .claude/commands/build.md:14
- `## Autonomous: the whole plan (/build auto)` — .claude/commands/build.md:27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Strict spec verification: only recognises specs at canonical paths (`SPEC.md`, `docs/SPEC.md`, `spec/*`), refusing to invent requirements from arbitrary README files (.claude/commands/build.md:31).
- Uncompromising human approval rule: "Treat hedged responses ('looks reasonable', 'I guess') as not approved" (.claude/commands/build.md:34).
- Clean rollback staging: avoids `git add -A` and stages only touched files per task (.claude/commands/build.md:35).

## Context cost
- File size: 3,959 bytes (~990 tokens).
- Transitive cost when invoked: loads `incremental-implementation` SKILL.md (9,507 bytes) and `test-driven-development` SKILL.md (16,483 bytes), with potential calls to `planning-and-task-breakdown` (10,564 bytes), `debugging-and-error-recovery` (10,837 bytes), and `doubt-driven-development` (16,499 bytes), totaling ~67,849 bytes (~16,960 tokens) across full autonomous execution.
