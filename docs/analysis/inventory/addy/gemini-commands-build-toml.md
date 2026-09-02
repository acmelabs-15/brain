---
package: addy
path: .gemini/commands/build.toml
type: command
bytes: 3840
unit: inv-addy-1
---

# .gemini/commands/build.toml

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit. Add \"auto\" to run the whole plan in one approved pass." — .gemini/commands/build.toml:1

## Design intent — required
Enforces test-driven, incremental implementation across both stepped single-task and autonomous whole-plan execution modes. In default stepped mode, it executes one vertical slice at a time with strict RED-GREEN-Refactor verification, compilation checks, and atomic commits. In autonomous mode (`/build auto`), it establishes a clean git baseline, requires a single unambiguous human approval gate, and runs tasks in dependency order while halting on ambiguity, unexpected test failures, or high-risk operations. Without it, coding agents perform risky monolithic modifications, batch multiple unverified changes into untraceable commits, or make unauthorized high-stakes modifications.

## Phase — required
`addy:Build`

## Inputs — required
- Arguments: empty/default (single-task mode) vs `auto` / `all` (autonomous mode) — .gemini/commands/build.toml:8-11
- Task execution plan (`tasks/plan.md`, `tasks/todo.md`) — .gemini/commands/build.toml:15, 31-33
- Specifications (`SPEC.md`, `docs/SPEC.md`, `spec/*`) — .gemini/commands/build.toml:30
- Git repository state via `git status --porcelain` — .gemini/commands/build.toml:31

## Outputs — required
- Production code implementations and tests — .gemini/commands/build.toml:19-21
- Atomic per-task git commits — .gemini/commands/build.toml:23, 34
- Updated task status in `tasks/plan.md` / `tasks/todo.md` — .gemini/commands/build.toml:24, 34
- Execution summary report — .gemini/commands/build.toml:40

## Invokes — required
- skill incremental-implementation — .gemini/commands/build.toml:4
- skill test-driven-development — .gemini/commands/build.toml:4
- skill planning-and-task-breakdown — .gemini/commands/build.toml:32
- skill debugging-and-error-recovery — .gemini/commands/build.toml:36, 42
- skill doubt-driven-development — .gemini/commands/build.toml:38
- external-tool git (git status --porcelain, git add, git commit, git revert) — .gemini/commands/build.toml:31, 34, 38

## Invoked by — required
none

## Concepts named — required, verbatim
- `incremental-implementation` — .gemini/commands/build.toml:4 — used here
- `test-driven-development` — .gemini/commands/build.toml:4 — used here
- `single-task mode` — .gemini/commands/build.toml:8, 11, 13 — defined here
- `autonomous mode` — .gemini/commands/build.toml:9, 11, 26 — defined here
- `RED-GREEN cycle` — .gemini/commands/build.toml:19-20, 34 — used here
- `regression testing` — .gemini/commands/build.toml:21, 34 — used here
- `clean baseline` — .gemini/commands/build.toml:31 — defined here
- `clean rollback guarantee` — .gemini/commands/build.toml:31, 34 — defined here
- `planning-and-task-breakdown` — .gemini/commands/build.toml:32 — used here
- `single checkpoint` — .gemini/commands/build.toml:33 — defined here
- `dependency order execution` — .gemini/commands/build.toml:34 — defined here
- `atomic per-task commit` — .gemini/commands/build.toml:34 — defined here
- `debugging-and-error-recovery` — .gemini/commands/build.toml:36, 42 — used here
- `doubt-driven-development` — .gemini/commands/build.toml:38 — used here
- `high-risk operation halt` — .gemini/commands/build.toml:38 — defined here

## Structure
- `## Modes` — .gemini/commands/build.toml:6
- `## Default: one task` — .gemini/commands/build.toml:13
- `## Autonomous: the whole plan (/build auto)` — .gemini/commands/build.toml:26

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Strict spec requirement: "Look only for a spec at a known path: SPEC.md at the repo root, docs/SPEC.md, or a file under spec/. A README or arbitrary doc does NOT count. If none exists, stop and tell the user to run /spec first — do not invent requirements" (.gemini/commands/build.toml:30).
- Explicit gatekeeper on human approval: "Treat hedged responses ('looks reasonable', 'I guess') as NOT approved" (.gemini/commands/build.toml:33).
- Clean rollback isolation: avoids `git add -A` and stages only the files touched by the task plus its status update (.gemini/commands/build.toml:34).
- High-risk safety circuit breaker: halts and requires explicit sign-off via `doubt-driven-development` for auth/permissions, data migrations, payments, deletions, deploys, or secrets (.gemini/commands/build.toml:38).

## Context cost
- File size: 3,840 bytes (~960 tokens).
- Transitive context cost when invoked: loads `incremental-implementation` SKILL.md (9,120 bytes) and `test-driven-development` SKILL.md (9,840 bytes), with potential calls to `planning-and-task-breakdown` (8,924 bytes), `debugging-and-error-recovery` (8,410 bytes), and `doubt-driven-development` (8,230 bytes), totaling ~48,364 bytes (~12,090 tokens) across full autonomous execution.
