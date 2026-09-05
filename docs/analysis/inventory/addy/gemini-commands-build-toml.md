---
package: addy
path: .gemini/commands/build.toml
type: command
bytes: 3840
unit: inv-addy-2
deprecated: false
aliases: []
memo_inputs:
  - {path: .gemini/commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .gemini/commands/build.toml

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit." — .gemini/commands/build.toml:1

## Design intent — required
Defines the `/build` command for the Gemini CLI harness, providing both single-task step-by-step TDD execution and autonomous whole-plan execution (`/build auto`). Enforces a strict RED-GREEN-regression-build-commit cycle for each task, maintains a clean baseline, and ensures a clean-rollback guarantee by scoping commits per task.

## Phase — required
addy:Build

## Inputs — required
Command arguments (`auto` / `all` for autonomous execution; task specification or empty for default single-task mode, .gemini/commands/build.toml:11).
Artifacts read: task acceptance criteria (.gemini/commands/build.toml:17), `SPEC.md` or `docs/SPEC.md` or `spec/*` (.gemini/commands/build.toml:30), `tasks/plan.md` (.gemini/commands/build.toml:31,32), `tasks/todo.md` (.gemini/commands/build.toml:31).
User input: single checkpoint approval ("approve", "go", "yes", .gemini/commands/build.toml:33), blocker recovery resolutions (.gemini/commands/build.toml:35-39).

## Outputs — required
Implementation code passing tests (.gemini/commands/build.toml:20), per-task git commits (.gemini/commands/build.toml:23,34), task completion marks (.gemini/commands/build.toml:24), preparatory plan commit (.gemini/commands/build.toml:33), end summary of tasks, tests, and commits (.gemini/commands/build.toml:40).

## Invokes — required
- skill incremental-implementation — .gemini/commands/build.toml:4
- skill test-driven-development — .gemini/commands/build.toml:4
- command /spec — .gemini/commands/build.toml:30
- skill planning-and-task-breakdown — .gemini/commands/build.toml:32
- skill debugging-and-error-recovery — .gemini/commands/build.toml:36
- skill doubt-driven-development — .gemini/commands/build.toml:38

## Invoked by — required
none

## Concepts named — required, verbatim
- `incremental-implementation` — .gemini/commands/build.toml:4 — used here
- `test-driven-development` — .gemini/commands/build.toml:4 — used here
- `acceptance criteria` — .gemini/commands/build.toml:17 — used here
- `RED` — .gemini/commands/build.toml:19 — used here
- `GREEN` — .gemini/commands/build.toml:20 — used here
- `clean-rollback guarantee` — .gemini/commands/build.toml:31 — used here
- `clean baseline` — .gemini/commands/build.toml:31 — used here
- `planning-and-task-breakdown` — .gemini/commands/build.toml:32 — used here
- `dependency order` — .gemini/commands/build.toml:34 — used here
- `debugging-and-error-recovery` — .gemini/commands/build.toml:36 — used here
- `doubt-driven-development` — .gemini/commands/build.toml:38 — used here

## Structure
- "## Modes" — .gemini/commands/build.toml:6
- "## Default: one task" — .gemini/commands/build.toml:13
- "## Autonomous: the whole plan" — .gemini/commands/build.toml:26

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical to `commands/build.toml` (EXACT group 1 in `addy-duplicates.md`, SHA `e25857cf424905bc`).

## Context cost
3840 bytes, ~960 tokens.
