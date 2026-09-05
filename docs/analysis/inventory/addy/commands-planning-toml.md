---
package: addy
path: commands/planning.toml
type: command
bytes: 635
unit: inv-addy-4
deprecated: false
aliases:
  - .gemini/commands/planning.toml
memo_inputs:
  - {path: commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# commands/planning.toml

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — commands/planning.toml:1

## Design intent — required
Provides a slash command `/planning` to decompose specifications into discrete, vertically sliced implementation tasks with explicit dependency ordering, acceptance criteria, and verification checkpoints before implementation begins.

## Phase — required
`addy:Plan`

## Inputs — required
- Specification: `SPEC.md or equivalent` — commands/planning.toml:6
- Codebase context: `relevant codebase sections` — commands/planning.toml:6

## Outputs — required
- Plan artifact: `tasks/plan.md` — commands/planning.toml:15
- Task checklist: `tasks/todo.md` — commands/planning.toml:15

## Invokes — required
- skill planning-and-task-breakdown — commands/planning.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — commands/planning.toml:4 — used here
- `plan mode` — commands/planning.toml:8 — defined here
- `dependency graph` — commands/planning.toml:9 — used here
- `acceptance criteria` — commands/planning.toml:1, 11 — used here
- `verification steps` — commands/planning.toml:11 — used here
- `checkpoints` — commands/planning.toml:12 — used here
- `human review` — commands/planning.toml:13 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact alias of `.gemini/commands/planning.toml` (EXACT duplicate ledger group 5). Uses the command name `/planning` instead of `/plan` to avoid naming conflicts with harness-internal plan commands in Gemini/Antigravity CLI environments.

## Context cost
635 bytes (~160 tokens). Loads `skills/planning-and-task-breakdown/SKILL.md` when invoked.
