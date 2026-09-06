---
package: addy
path: .gemini/commands/build.toml
type: command
bytes: 3840
unit: inv-addy-2
aliases: []
memo_inputs:
  - {path: .gemini/commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .gemini/commands/build.toml

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit." — .gemini/commands/build.toml:1

## Design intent — required
Provides the `/build` and `/build auto` command workflow for the Gemini CLI environment, orchestrating incremental implementation with test-driven development. It enables developers to either step through tasks interactively one at a time or execute an entire plan autonomously following a single human approval gate, while maintaining per-task test verification, strict commit isolation for clean rollbacks, and explicit pauses on blockers, ambiguity, or high-risk actions.

## Phase — required
addy:Build

## Inputs — required
- `$ARGUMENTS` (`auto` or `all` for autonomous mode, empty or other for default single-task mode) — .gemini/commands/build.toml:11
- Task acceptance criteria — .gemini/commands/build.toml:17
- Specification file at `SPEC.md`, `docs/SPEC.md`, or under `spec/` — .gemini/commands/build.toml:30
- Baseline git status (`git status --porcelain`) — .gemini/commands/build.toml:31
- Planning artifacts `tasks/plan.md` and `tasks/todo.md` — .gemini/commands/build.toml:31
- User approval checkpoint response ("approve", "go", "yes") — .gemini/commands/build.toml:33

## Outputs — required
- Failing test (RED) and passing implementation (GREEN) per task — .gemini/commands/build.toml:19, 20
- Per-task git commits with descriptive messages — .gemini/commands/build.toml:23, 34
- Preparatory commit of `tasks/plan.md` if generated — .gemini/commands/build.toml:33
- Task status updates in plan — .gemini/commands/build.toml:24, 34
- Summary report of completed tasks, tests added, and commits made — .gemini/commands/build.toml:40

## Invokes — required
- skill incremental-implementation — .gemini/commands/build.toml:4
- skill test-driven-development — .gemini/commands/build.toml:4
- skill planning-and-task-breakdown — .gemini/commands/build.toml:32
- skill debugging-and-error-recovery — .gemini/commands/build.toml:36, 42
- skill doubt-driven-development — .gemini/commands/build.toml:38

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `/build` — .gemini/commands/build.toml:8 — defined here
- `/build auto` — .gemini/commands/build.toml:9, 26, 39 — defined here
- `autonomous mode` — .gemini/commands/build.toml:11 — defined here
- `single-task mode` — .gemini/commands/build.toml:11 — defined here
- `acceptance criteria` — .gemini/commands/build.toml:17 — used here
- `clean-rollback guarantee` — .gemini/commands/build.toml:31 — defined here
- `human gate` — .gemini/commands/build.toml:33 — defined here
- `clean rollback` — .gemini/commands/build.toml:34 — defined here

## Structure
- `## Modes` — .gemini/commands/build.toml:6
- `## Default: one task` — .gemini/commands/build.toml:13
- "Autonomous: the whole plan" — .gemini/commands/build.toml:26

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact byte duplicate of `commands/build.toml` (hash `e25857cf424905bc`, 3840 bytes). The command maintains a strict safety model for autonomous runs: requires a preexisting spec, verifies no dirty working tree baseline, requires unambiguous human approval before autonomous execution, stages only files touched by each individual task, and forbids blind `git add -A`.

## Context cost
3,840 bytes (~960 tokens). If invoked skills are loaded: `incremental-implementation` (15,190 bytes), `test-driven-development` (17,994 bytes), `planning-and-task-breakdown` (14,484 bytes), `debugging-and-error-recovery` (17,908 bytes), `doubt-driven-development` (16,047 bytes).
