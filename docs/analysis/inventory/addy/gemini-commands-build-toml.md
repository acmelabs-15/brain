---
package: addy
path: .gemini/commands/build.toml
type: command
bytes: 3840
unit: inv-addy-1
aliases: []
memo_inputs:
  - {path: .gemini/commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .gemini/commands/build.toml

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit." — .gemini/commands/build.toml:1

## Design intent — required
Antigravity/Gemini slash command configuration executing incremental test-driven implementation. It supports single-task execution mode (one slice via RED-GREEN-Refactor, regression suite, build, commit) and autonomous plan execution (`/build auto`), enforcing clean baselines, single approval checkpoints, dependency ordering, and safety pauses for ambiguity or high-risk actions.

## Phase — required
addy:BUILD

## Inputs — required
- Arguments (`auto` / `all` vs single-task default)
- Spec (`SPEC.md`, `docs/SPEC.md`, `spec/*`)
- Plan (`tasks/plan.md`, `tasks/todo.md`)
- Git status (`git status --porcelain`)

## Outputs — required
- Code changes and test additions
- Atomic per-task commits
- Task status updates in `tasks/plan.md`

## Invokes — required
- skill incremental-implementation — .gemini/commands/build.toml:4
- skill test-driven-development — .gemini/commands/build.toml:4
- skill planning-and-task-breakdown — .gemini/commands/build.toml:32
- skill debugging-and-error-recovery — .gemini/commands/build.toml:36,42
- skill doubt-driven-development — .gemini/commands/build.toml:38

## Invoked by — required
none

## Concepts named — required, verbatim
- `incremental-implementation` — .gemini/commands/build.toml:4 — used here
- `test-driven-development` — .gemini/commands/build.toml:4 — used here
- `/build` — .gemini/commands/build.toml:8 — defined here
- `/build auto` — .gemini/commands/build.toml:9,26 — defined here
- `single-task mode` — .gemini/commands/build.toml:11 — defined here
- `autonomous mode` — .gemini/commands/build.toml:11 — defined here
- `RED` — .gemini/commands/build.toml:19,34 — used here
- `GREEN` — .gemini/commands/build.toml:20,34 — used here
- `clean baseline` — .gemini/commands/build.toml:31 — defined here
- `clean-rollback guarantee` — .gemini/commands/build.toml:31 — defined here
- `planning-and-task-breakdown` — .gemini/commands/build.toml:32 — used here
- `Single checkpoint` — .gemini/commands/build.toml:33 — defined here
- `dependency order` — .gemini/commands/build.toml:34 — defined here
- `debugging-and-error-recovery` — .gemini/commands/build.toml:36,42 — used here
- `doubt-driven-development` — .gemini/commands/build.toml:38 — used here
- `high-risk` — .gemini/commands/build.toml:38 — defined here
- `irreversible` — .gemini/commands/build.toml:38 — defined here

## Structure
- ## Modes
- ## Default: one task
- ## Autonomous: the whole plan (`/build auto`)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact alias of `commands/build.toml`.

## Context cost
3840 bytes, ~960 tokens. Transitive cost: loads `incremental-implementation` (9507 bytes) and `test-driven-development` (16483 bytes), with conditional calls to `planning-and-task-breakdown` (10564 bytes), `debugging-and-error-recovery` (10837 bytes), and `doubt-driven-development` (16499 bytes).
