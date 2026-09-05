---
package: addy
path: commands/build.toml
type: command
bytes: 3840
unit: inv-addy-3
deprecated: false
aliases:
  - .gemini/commands/build.toml
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# commands/build.toml

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit." — commands/build.toml:1

## Design intent — required
Slash command governing the BUILD lifecycle phase by pairing incremental implementation with test-driven development. Provides two operating modes: single-task mode for step-by-step implementation with human checkpoints; and autonomous mode (`/build auto`) which verifies spec existence, checks for clean git baseline, generates plans when missing, requests a single upfront approval gate, and runs through tasks in dependency order with atomic commits.

## Phase — required
addy:Build

## Inputs — required
Command argument (`auto` or `all` for autonomous mode, empty for single task; commands/build.toml:11), task plan from `tasks/plan.md` (commands/build.toml:31), spec artifact at `SPEC.md`, `docs/SPEC.md`, or `spec/*` (commands/build.toml:30), task acceptance criteria (commands/build.toml:17), and clean git working tree verified via `git status --porcelain` (commands/build.toml:31).

## Outputs — required
Production code changes, unit and regression tests, git commits per task (commands/build.toml:23, 34), and task completion updates in `tasks/plan.md` (commands/build.toml:24, 34).

## Invokes — required
- skill incremental-implementation — commands/build.toml:4
- skill test-driven-development — commands/build.toml:4
- skill planning-and-task-breakdown — commands/build.toml:32
- skill debugging-and-error-recovery — commands/build.toml:36
- skill doubt-driven-development — commands/build.toml:38

## Invoked by — required
none

## Concepts named — required, verbatim
- `incremental-implementation` — commands/build.toml:4 — used here
- `test-driven-development` — commands/build.toml:4 — used here
- `Single checkpoint` — commands/build.toml:33 — defined here
- `clean-rollback guarantee` — commands/build.toml:31 — defined here

## Structure
- description
- ## Modes
- ## Default: one task
- ## Autonomous: the whole plan (`/build auto`)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Canonical entry for EXACT group 1 in `docs/analysis/manifest/addy-duplicates.md` (shared with alias `.gemini/commands/build.toml`). Mandates staging only files modified by the current task rather than `git add -A` to ensure a clean-rollback guarantee (commands/build.toml:34). Requires stopping for explicit user confirmation via `doubt-driven-development` whenever a task involves high-risk actions like auth changes, destructive migrations, or payments (commands/build.toml:38).

## Context cost
3840 bytes, ~900 tokens.
