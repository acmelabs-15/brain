---
package: addy
path: commands/build.toml
type: command
bytes: 3840
unit: inv-addy-3
aliases:
  - .gemini/commands/build.toml
memo_inputs:
  - {path: commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# commands/build.toml

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit." — commands/build.toml:1

## Design intent — required
Slash command configuration for `/build` defining both step-by-step single-task implementation and autonomous multi-task execution (`/build auto`). Composes `incremental-implementation` and `test-driven-development` in an iterative test-driven cycle (RED → GREEN → regression → build → commit), requires specification baselines, mandates a single human approval checkpoint for autonomous runs, and preserves clean rollback guarantees.

## Phase — required
addy:Build

## Inputs — required
Command arguments (`auto` or `all`), task breakdown plans (`tasks/plan.md`, `tasks/todo.md`), specification artifacts (`SPEC.md`, `docs/SPEC.md`, `spec/*`), and git working tree status (`git status --porcelain`).

## Outputs — required
Incremental source code implementations, unit and regression tests, atomic git commits per task, task status updates in `tasks/plan.md`, and completion summary reports.

## Invokes — required
- skill incremental-implementation — commands/build.toml:4
- skill test-driven-development — commands/build.toml:4
- command /spec — commands/build.toml:30
- skill planning-and-task-breakdown — commands/build.toml:32
- skill debugging-and-error-recovery — commands/build.toml:36
- skill doubt-driven-development — commands/build.toml:38

## Invoked by — required
- doc /build — README.md:30
- doc /build — external/source-driven-development.md:12

## Concepts named — required, verbatim
- `autonomous mode` — commands/build.toml:11 — defined here
- `acceptance criteria` — commands/build.toml:17 — used here
- `RED` — commands/build.toml:19 — used here
- `GREEN` — commands/build.toml:20 — used here
- `clean-rollback guarantee` — commands/build.toml:31 — defined here
- `clean baseline` — commands/build.toml:31 — defined here
- `Single checkpoint` — commands/build.toml:33 — defined here
- `human gate` — commands/build.toml:33 — defined here
- `dependency order` — commands/build.toml:34 — defined here

## Structure
- description
- prompt
- ## Modes
- ## Default: one task
- ## Autonomous: the whole plan (/build auto)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact duplicate of `.gemini/commands/build.toml` (hash `e25857cf424905bc`), listed as an EXACT group canonical in `docs/analysis/manifest/addy-duplicates.md`. Satisfies both manifest rows.

## Context cost
3840 bytes (~960 tokens).
