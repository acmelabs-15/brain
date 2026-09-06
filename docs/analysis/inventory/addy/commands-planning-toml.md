---
package: addy
path: commands/planning.toml
type: command
bytes: 635
unit: inv-addy-4
aliases:
  - .gemini/commands/planning.toml
memo_inputs:
  - {path: commands/planning.toml, sha256: 0be6342ddff35204095b23c64a389323185624418c365390955c3c716eba4d85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# commands/planning.toml

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — commands/planning.toml:1

## Design intent — required
Provides the `/planning` slash command configuration, instructing the agent to invoke the `planning-and-task-breakdown` skill, enter read-only plan mode, analyze component dependency graphs, slice work vertically, and output actionable plan artifacts (`tasks/plan.md`, `tasks/todo.md`) with checkpoints and acceptance criteria before implementation starts.

## Phase — required
addy:Plan

## Inputs — required
- Specification file: "SPEC.md or equivalent" — commands/planning.toml:6
- Relevant codebase sections: "the relevant codebase sections" — commands/planning.toml:6

## Outputs — required
- "tasks/plan.md" — commands/planning.toml:15
- "tasks/todo.md" — commands/planning.toml:15

## Invokes — required
- skill planning-and-task-breakdown — commands/planning.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `plan mode` — commands/planning.toml:8 — defined here
- `dependency graph` — commands/planning.toml:9 — used here
- `Slice work vertically` — commands/planning.toml:10 — defined here
- `acceptance criteria` — commands/planning.toml:1, 11 — used here
- `verification steps` — commands/planning.toml:11 — used here
- `checkpoints` — commands/planning.toml:12 — used here
- `human review` — commands/planning.toml:13 — used here

## Structure
- description — commands/planning.toml:1
- prompt — commands/planning.toml:3

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exact byte duplicate of `.gemini/commands/planning.toml` (635 bytes, sha256: 0be6342ddff35204). Satisfies the manifest row for both paths. Uses `/planning` rather than `/plan` to prevent collisions with built-in harness plan commands. Addresses Phase 1V findings by including `Slice work vertically` (line 10), `verification steps` (line 11), and `human review` (line 13).

## Context cost
635 bytes, approximately 160 tokens.
