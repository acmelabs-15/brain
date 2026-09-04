---
package: addy
path: .claude/commands/build.md
type: command
bytes: 3959
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 74cc85b5092f8e209bcda36441a4ce17a5cd9efd2a7d8ce76ba202816088e277}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .claude/commands/build.md

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit. Add \"auto\" to run the whole plan in one approved pass." — .claude/commands/build.md:2

## Design intent — required
Orchestrates incremental test-driven software implementation across two execution modes: single-task stepping (`/build`) and autonomous plan execution (`/build auto`). In single-task mode, it implements one slice via RED-GREEN-Refactor, regression testing, build verification, and atomic commit. In autonomous mode, it verifies spec prerequisites (`SPEC.md` / `docs/SPEC.md` / `spec/*`), ensures a clean git baseline, secures a single explicit human approval, executes tasks in dependency order with isolated per-task commits, and halts for ambiguity, persistent test failures, or high-risk/irreversible changes.

## Phase — required
addy:BUILD

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
- skill incremental-implementation — .claude/commands/build.md:5
- skill test-driven-development — .claude/commands/build.md:5
- skill planning-and-task-breakdown — .claude/commands/build.md:33
- skill debugging-and-error-recovery — .claude/commands/build.md:37,44
- skill doubt-driven-development — .claude/commands/build.md:39

## Invoked by — required
none

## Concepts named — required, verbatim
- `incremental-implementation` — .claude/commands/build.md:5 — used here
- `test-driven-development` — .claude/commands/build.md:5 — used here
- `/build` — .claude/commands/build.md:9 — defined here
- `/build auto` — .claude/commands/build.md:10,27 — defined here
- `single-task mode` — .claude/commands/build.md:12 — defined here
- `autonomous mode` — .claude/commands/build.md:12 — defined here
- `RED` — .claude/commands/build.md:20,35 — used here
- `GREEN` — .claude/commands/build.md:21,35 — used here
- `clean baseline` — .claude/commands/build.md:32 — defined here
- `clean-rollback guarantee` — .claude/commands/build.md:32 — defined here
- `planning-and-task-breakdown` — .claude/commands/build.md:33 — used here
- `Single checkpoint` — .claude/commands/build.md:34 — defined here
- `dependency order` — .claude/commands/build.md:35 — defined here
- `debugging-and-error-recovery` — .claude/commands/build.md:37,44 — used here
- `doubt-driven-development` — .claude/commands/build.md:39 — used here
- `high-risk` — .claude/commands/build.md:39 — defined here
- `irreversible` — .claude/commands/build.md:39 — defined here

## Structure
- ## Modes
- ## Default: one task
- ## Autonomous: the whole plan (`/build auto`)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Strict spec verification: only recognises specs at canonical paths (`SPEC.md`, `docs/SPEC.md`, `spec/*`), refusing to invent requirements from arbitrary README files (.claude/commands/build.md:31).
- Uncompromising human approval rule: "Treat hedged responses ('looks reasonable', 'I guess') as not approved" (.claude/commands/build.md:34).
- Clean rollback staging: avoids `git add -A` and stages only touched files per task (.claude/commands/build.md:35).

## Context cost
3959 bytes, ~990 tokens. Transitive cost: loads `incremental-implementation` (9507 bytes) and `test-driven-development` (16483 bytes), with conditional calls to `planning-and-task-breakdown` (10564 bytes), `debugging-and-error-recovery` (10837 bytes), and `doubt-driven-development` (16499 bytes).
