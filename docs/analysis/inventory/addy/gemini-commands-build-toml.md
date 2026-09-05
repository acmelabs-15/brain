---
package: addy
path: .gemini/commands/build.toml
type: command
bytes: 3840
unit: inv-addy-2
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: .gemini/commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .gemini/commands/build.toml

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit." — .gemini/commands/build.toml:1

## Design intent — required
Executes plan tasks either interactively one-by-one or continuously in autonomous mode (`/build auto`), enforcing a strict RED-GREEN-regression-commit loop per task with explicit git clean-rollback boundaries and human checkpoints for high-risk changes.

## Phase — required
addy:build

## Inputs — required
Command mode argument (`auto`, `all`, or default single-task) (.gemini/commands/build.toml:11), task acceptance criteria (.gemini/commands/build.toml:17), `tasks/plan.md` (.gemini/commands/build.toml:32), `SPEC.md` / `docs/SPEC.md` / `spec/*` (.gemini/commands/build.toml:30), clean git working tree status (.gemini/commands/build.toml:31), and single affirmative approval before autonomous execution (.gemini/commands/build.toml:33).

## Outputs — required
Incremental implementation code and tests (.gemini/commands/build.toml:19-20), per-task git commits (.gemini/commands/build.toml:23, 34), generated or updated `tasks/plan.md` (.gemini/commands/build.toml:32-33), and end-of-run execution summary (.gemini/commands/build.toml:40).

## Invokes — required
- skill incremental-implementation — .gemini/commands/build.toml:4
- skill test-driven-development — .gemini/commands/build.toml:4
- skill planning-and-task-breakdown — .gemini/commands/build.toml:32
- skill debugging-and-error-recovery — .gemini/commands/build.toml:36
- skill doubt-driven-development — .gemini/commands/build.toml:38

## Invoked by — required
none

## Concepts named — required, verbatim
- `acceptance criteria` — .gemini/commands/build.toml:17 — used here
- `RED` — .gemini/commands/build.toml:19 — used here
- `GREEN` — .gemini/commands/build.toml:20 — used here
- `SPEC.md` — .gemini/commands/build.toml:30 — used here
- `clean-rollback guarantee` — .gemini/commands/build.toml:31 — defined here
- `tasks/plan.md` — .gemini/commands/build.toml:32 — used here
- `human gate` — .gemini/commands/build.toml:33 — used here

## Structure
- "## Modes" — .gemini/commands/build.toml:6
- "## Default: one task" — .gemini/commands/build.toml:13
- "## Autonomous: the whole plan (`/build auto`)" — .gemini/commands/build.toml:26

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Byte-identical to `commands/build.toml` (canonical member of EXACT group 1 in `docs/analysis/manifest/addy-duplicates.md`). Enforces that autonomous execution does not relax testing or commit discipline.

## Context cost
3840 bytes, ~960 tokens.
