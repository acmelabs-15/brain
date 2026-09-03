---
package: addy
path: commands/build.toml
type: command
bytes: 3840
unit: inv-addy-11
---

# commands/build.toml

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit. Add \"auto\" to run the whole plan in one approved pass." — commands/build.toml:1

## Design intent — required
Executes planned engineering tasks through disciplined, test-driven iteration across two execution modes: single-task stepping (`/build`) and autonomous plan execution (`/build auto`). In single-task mode, it guides the agent through an 8-step RED-GREEN-Refactor cycle ending in build verification and atomic commit. In autonomous mode, it verifies strict spec prerequisites (`SPEC.md`, `docs/SPEC.md`, `spec/*`), verifies a clean git baseline, secures an explicit single human approval, and executes all plan tasks in dependency order with isolated commits. It halts autonomously when confronted with ambiguity, persistent test failures, or high-risk/irreversible changes.

## Phase — required
`addy:Build`

## Inputs — required
- Command mode argument: default (empty or single-task) vs `auto` / `all` — commands/build.toml:11
- Specification document: `SPEC.md` at repo root, `docs/SPEC.md`, or a file under `spec/` — commands/build.toml:30
- Execution plan: `tasks/plan.md` and `tasks/todo.md` — commands/build.toml:31-33
- Git baseline status via `git status --porcelain` — commands/build.toml:31
- User confirmation / approval checkpoint — commands/build.toml:33

## Outputs — required
- Production code and unit/integration test files — commands/build.toml:19-20
- Atomic per-task git commits — commands/build.toml:23, 34
- Task completion markers updated in `tasks/plan.md` — commands/build.toml:24, 34
- Autonomous execution summary report — commands/build.toml:40

## Invokes — required
- skill incremental-implementation — commands/build.toml:4
- skill test-driven-development — commands/build.toml:4
- skill planning-and-task-breakdown — commands/build.toml:32
- skill debugging-and-error-recovery — commands/build.toml:36, 42
- skill doubt-driven-development — commands/build.toml:38

## Invoked by — required
none

## Concepts named — required, verbatim
- `incremental-implementation` — commands/build.toml:4 — used here
- `test-driven-development` — commands/build.toml:4 — used here
- `/build` — commands/build.toml:8 — defined here
- `/build auto` — commands/build.toml:9, 26 — defined here
- `single-task mode` — commands/build.toml:11 — defined here
- `autonomous mode` — commands/build.toml:11 — defined here
- `acceptance criteria` — commands/build.toml:17 — used here
- `RED` — commands/build.toml:19, 34 — used here
- `GREEN` — commands/build.toml:20, 34 — used here
- `clean baseline` — commands/build.toml:31 — defined here
- `clean-rollback guarantee` — commands/build.toml:31 — defined here
- `SPEC.md` — commands/build.toml:30, 31 — used here
- `docs/SPEC.md` — commands/build.toml:30, 31 — used here
- `spec/*` — commands/build.toml:30, 31 — used here
- `tasks/plan.md` — commands/build.toml:31, 32, 33 — used here
- `tasks/todo.md` — commands/build.toml:31 — used here
- `planning-and-task-breakdown` — commands/build.toml:32 — used here
- `single checkpoint` — commands/build.toml:33 — defined here
- `dependency order` — commands/build.toml:34 — defined here
- `debugging-and-error-recovery` — commands/build.toml:36, 42 — used here
- `doubt-driven-development` — commands/build.toml:38 — used here
- `high-risk operation` — commands/build.toml:38 — defined here

## Structure
- `description = "..."` — commands/build.toml:1
- `prompt = """` — commands/build.toml:3
  - Skill invocation statement (incremental-implementation and test-driven-development) — commands/build.toml:4
  - `## Modes` — commands/build.toml:6-11
  - `## Default: one task` (8 numbered steps) — commands/build.toml:13-24
  - `## Autonomous: the whole plan (/build auto)` (7 numbered steps) — commands/build.toml:26-40
  - Fallback error recovery clause — commands/build.toml:42

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · scripts/validate-artifact-paths.js:44-52 · In `scripts/validate-artifact-paths.js`, `commands/build.toml` is omitted from `GUARDED_FILES`, leaving Antigravity build command artifact references unmonitored for path drift.

## Observations
- Strict human gate definition: mandates waiting for unambiguous affirmative approvals ("approve", "go", "yes") and explicitly directs agents to treat hedged responses ("looks reasonable", "I guess") as NOT approved (`commands/build.toml:33`).
- Rollback safety: enforces staging only touched files per task and strictly forbids `git add -A` to guarantee atomic rollback capability (`commands/build.toml:34`).
- Strict spec verification: requires canonical spec paths (`SPEC.md`, `docs/SPEC.md`, `spec/*`), refusing to invent requirements from arbitrary READMEs (`commands/build.toml:30`).

## Context cost
3,840 bytes (~960 tokens). Transitive cost: loads `incremental-implementation` SKILL.md (9,507 bytes) and `test-driven-development` SKILL.md (16,483 bytes), with potential escalations to `planning-and-task-breakdown` (10,564 bytes), `debugging-and-error-recovery` (10,837 bytes), and `doubt-driven-development` (16,499 bytes), totaling up to 67,730 bytes (~16,933 tokens).
