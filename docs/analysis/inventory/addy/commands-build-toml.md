---
package: addy
path: commands/build.toml
type: command
bytes: 3840
unit: inv-addy-3
deprecated: false
aliases:
  - .gemini/commands/build.toml
memo_inputs:
  - {path: commands/build.toml, sha256: e25857cf424905bceea7f1250903eb801a8e79ed62ec67c2fd4d785969e47e62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# commands/build.toml

## Purpose — required, verbatim
> "Implement tasks incrementally — build, test, verify, commit." — commands/build.toml:1

## Design intent — required
Slash command prompt configuring the /build command for Claude Code and Gemini CLI, orchestrating incremental implementation and test-driven development. Provides two operating modes: single-task execution (the default, completing one slice and stopping) and autonomous execution (/build auto, executing the full task plan under a single upfront human approval gate). Enforces test-first development (RED/GREEN loop), per-task atomic commits, and strict stop-the-line triggers for ambiguity, test failures, or high-risk actions.

## Phase — required
addy:Build

## Inputs — required
Task descriptions from tasks/plan.md, specifications from SPEC.md or docs/SPEC.md, working tree status from git, and optional user argument ("auto" or "all").

## Outputs — required
Implemented code changes, passing test suites, atomic per-task git commits, and updated task statuses in tasks/plan.md or tasks/todo.md.

## Invokes — required
- skill incremental-implementation — commands/build.toml:4
- skill test-driven-development — commands/build.toml:4
- skill planning-and-task-breakdown — commands/build.toml:32
- skill debugging-and-error-recovery — commands/build.toml:36
- skill doubt-driven-development — commands/build.toml:38

## Invoked by — required
- command build — CLAUDE.md:13
- command BUILD — AGENTS.md:42

## Concepts named — required, verbatim
- `incremental-implementation` — commands/build.toml:4 — used here
- `test-driven-development` — commands/build.toml:4 — used here
- `Modes` — commands/build.toml:6 — defined here
- `Default: one task` — commands/build.toml:13 — defined here
- `Autonomous: the whole plan` — commands/build.toml:26 — defined here
- `RED` — commands/build.toml:19 — used here
- `GREEN` — commands/build.toml:20 — used here
- `Single checkpoint` — commands/build.toml:33 — defined here

## Structure
- Command description — commands/build.toml:1
- Skill invocation prompt — commands/build.toml:3-5
- Modes (/build vs /build auto) — commands/build.toml:6-12
- Default: one task workflow — commands/build.toml:13-25
- Autonomous: the whole plan workflow — commands/build.toml:26-42

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Exact alias: Byte-identical copy exists at `.gemini/commands/build.toml` (= `.gemini/commands/build.toml`). Satisfies exact group 1 from addy-duplicates.md.
- Clean rollback discipline: "Autonomous per-task commits must not absorb unrelated local work, or the clean-rollback guarantee breaks." — commands/build.toml:31.
- Staging discipline: "Stage only the files that task touched plus its task-status update — never `git add -A` blindly — and make one commit per task so any point is a clean rollback." — commands/build.toml:34.

## Context cost
3840 bytes, ~850 tokens. Invokes five distinct skills across planning, implementation, testing, debugging, and risk management.
