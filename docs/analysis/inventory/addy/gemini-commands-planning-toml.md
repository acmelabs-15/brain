---
package: addy
path: .gemini/commands/planning.toml
type: command
bytes: 635
unit: inv-addy-1
---

# .gemini/commands/planning.toml

## Purpose — required, verbatim
> "Break work into small verifiable tasks with acceptance criteria and dependency ordering" — .gemini/commands/planning.toml:1

## Design intent — required
Bridges requirements specification and implementation execution by establishing a structured, read-only planning phase. It analyzes component dependencies, decomposes complex features into thin vertical slices rather than horizontal layers, and defines clear acceptance criteria with phase checkpoints for human review. Without it, implementation tasks are prone to unsequenced execution, oversized work increments, and lack of verifiable exit criteria.

## Phase — required
`addy:Plan`

## Inputs — required
- Existing specification (`SPEC.md` or equivalent) — .gemini/commands/planning.toml:6
- Relevant codebase sections — .gemini/commands/planning.toml:6

## Outputs — required
- `tasks/plan.md` (execution plan with dependency ordering and checkpoints) — .gemini/commands/planning.toml:15
- `tasks/todo.md` (task list with acceptance criteria) — .gemini/commands/planning.toml:15

## Invokes — required
- skill planning-and-task-breakdown — .gemini/commands/planning.toml:4

## Invoked by — required
none

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — .gemini/commands/planning.toml:4 — used here
- `plan mode` — .gemini/commands/planning.toml:8 — defined here
- `dependency graph` — .gemini/commands/planning.toml:9 — used here
- `vertical slicing` — .gemini/commands/planning.toml:10 — defined here
- `acceptance criteria` — .gemini/commands/planning.toml:1, 11 — defined here
- `verification steps` — .gemini/commands/planning.toml:11 — defined here
- `checkpoints` — .gemini/commands/planning.toml:12 — defined here
- `human review` — .gemini/commands/planning.toml:13 — defined here

## Structure
- Unsectioned 6-step prompt workflow (ordered list) — .gemini/commands/planning.toml:8-13

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Strict read-only enforcement during planning: "Enter plan mode — read only, no code changes" (.gemini/commands/planning.toml:8).
- Mandates vertical slicing ("one complete path per task, not horizontal layers") over traditional layer-by-layer implementation (.gemini/commands/planning.toml:10).
- Cross-tool naming note: Claude Code equivalent command is `.claude/commands/plan.md`, mapped to `planning.toml` in Gemini/Antigravity via `NAME_MAP` in `validate-commands.js`.

## Context cost
- File size: 635 bytes (~160 tokens).
- Transitive context cost when invoked: loads `skills/planning-and-task-breakdown/SKILL.md` (8,924 bytes), totaling ~9,559 bytes (~2,390 tokens) before codebase exploration.
