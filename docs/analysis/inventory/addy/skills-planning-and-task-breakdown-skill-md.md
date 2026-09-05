---
package: addy
path: skills/planning-and-task-breakdown/SKILL.md
type: skill
bytes: 10564
unit: inv-addy-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/planning-and-task-breakdown/SKILL.md, sha256: ed0f90cc5951ddd4bcab7f871f64efec93a49af9279ef93bc470da77ad8da3f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/planning-and-task-breakdown/SKILL.md

## Purpose — required, verbatim
> "Breaks work into ordered tasks. Use when you have a spec or clear requirements and need to break work into implementable tasks. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible." — skills/planning-and-task-breakdown/SKILL.md:3

## Design intent — required
Provides a disciplined planning methodology that bridges high-level requirements (specs) and actual execution by breaking complex work down into vertically sliced, small-to-medium verifiable tasks with explicit acceptance criteria and verification commands. Without this skill, coding agents tend to jump straight into unstructured implementation ("typing without a plan"), attempt horizontally sliced architectural layers that leave the system uncompilable or untestable mid-flight, lose track of open work during compaction or context resets, or overwrite active task plans from ongoing sessions.

## Phase — required
addy:Plan

## Inputs — required
- Functional specifications or requirements documents:
  > "Read the spec and relevant codebase sections" — skills/planning-and-task-breakdown/SKILL.md:28
- Codebase sections, existing patterns, conventions, and dependency relationships:
  > "Identify existing patterns and conventions" — skills/planning-and-task-breakdown/SKILL.md:29
- User confirmation when pre-existing plans have unchecked tasks:
  > "Never overwrite an incomplete plan." — skills/planning-and-task-breakdown/SKILL.md:150
- Project agent rules (`CLAUDE.md`, `AGENTS.md`) configuring external trackers

## Outputs — required
- Implementation plan document saved to `tasks/plan.md`:
  > "Save the implementation plan to `tasks/plan.md`." — skills/planning-and-task-breakdown/SKILL.md:145
- Task list checklist or issue tracker items:
  > "Default: a checklist-style markdown file at `tasks/todo.md`." — skills/planning-and-task-breakdown/SKILL.md:161
- Directory:
  > "Create the `tasks/` directory if it does not exist." — skills/planning-and-task-breakdown/SKILL.md:148

## Invokes — required
- reference ../../references/definition-of-done.md — skills/planning-and-task-breakdown/SKILL.md:257

## Invoked by — required
- command commands/build.toml — commands/build.toml:32
- command commands/planning.toml — commands/planning.toml:4
- skill skills/spec-driven-development/SKILL.md — skills/spec-driven-development/SKILL.md:174
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:23
- reference references/definition-of-done.md — references/definition-of-done.md:3
- doc CLAUDE.md — CLAUDE.md:22
- doc AGENTS.md — AGENTS.md:27
- doc README.md — README.md:243

## Concepts named — required, verbatim
- `Plan Mode` — skills/planning-and-task-breakdown/SKILL.md:24 — defined here
- `Dependency Graph` — skills/planning-and-task-breakdown/SKILL.md:35 — defined here
- `horizontal slicing` — skills/planning-and-task-breakdown/SKILL.md:61 — defined here
- `vertical slicing` — skills/planning-and-task-breakdown/SKILL.md:69 — defined here
- `acceptance criteria` — skills/planning-and-task-breakdown/SKILL.md:10 — used here
- `Checkpoint` — skills/planning-and-task-breakdown/SKILL.md:106 — defined here
- `Task Sizing Guidelines` — skills/planning-and-task-breakdown/SKILL.md:125 — defined here
- `Task List Target` — skills/planning-and-task-breakdown/SKILL.md:157 — defined here
- `Plan Document Template` — skills/planning-and-task-breakdown/SKILL.md:166 — defined here
- `Common Rationalizations` — skills/planning-and-task-breakdown/SKILL.md:221 — defined here
- `Red Flags` — skills/planning-and-task-breakdown/SKILL.md:231 — defined here
- `Definition of Done` — skills/planning-and-task-breakdown/SKILL.md:257 — used here

## Structure
- Overview — skills/planning-and-task-breakdown/SKILL.md:8
- When to Use — skills/planning-and-task-breakdown/SKILL.md:12
- The Planning Process — skills/planning-and-task-breakdown/SKILL.md:22
- Step 1: Enter Plan Mode — skills/planning-and-task-breakdown/SKILL.md:24
- Step 2: Identify the Dependency Graph — skills/planning-and-task-breakdown/SKILL.md:35
- Step 3: Slice Vertically — skills/planning-and-task-breakdown/SKILL.md:57
- Step 4: Write Tasks — skills/planning-and-task-breakdown/SKILL.md:79
- Step 5: Order and Checkpoint — skills/planning-and-task-breakdown/SKILL.md:106
- Task Sizing Guidelines — skills/planning-and-task-breakdown/SKILL.md:125
- Output Files — skills/planning-and-task-breakdown/SKILL.md:143
- Task List Target — skills/planning-and-task-breakdown/SKILL.md:157
- Plan Document Template — skills/planning-and-task-breakdown/SKILL.md:166
- Parallelization Opportunities — skills/planning-and-task-breakdown/SKILL.md:213
- Common Rationalizations — skills/planning-and-task-breakdown/SKILL.md:221
- Red Flags — skills/planning-and-task-breakdown/SKILL.md:231
- Verification — skills/planning-and-task-breakdown/SKILL.md:242
- See Also — skills/planning-and-task-breakdown/SKILL.md:255

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Anti-overwriting safety rule: "Never overwrite an incomplete plan." — skills/planning-and-task-breakdown/SKILL.md:150. Requires checking whether `tasks/plan.md` or `tasks/todo.md` already exists with unchecked tasks before creating a new plan, stopping to ask human confirmation if unrelated work is in flight.
- Sizing threshold: An agent performs best on S (1-2 files) and M (3-5 files) tasks; any task touching 8+ files or taking >2 hours must be broken down further (skills/planning-and-task-breakdown/SKILL.md:133-138).
- Flexible task tracking: Supports dual storage convention — default file `tasks/todo.md` vs. external issue tracker (GitHub Issues, Jira, Linear, `bd`/beads) mapped to the same task schema (skills/planning-and-task-breakdown/SKILL.md:161-165).

## Context cost
10564 bytes, ~2400 tokens. Standalone skill markdown file; loads `references/definition-of-done.md` (3798 bytes, ~850 tokens) on demand for total context cost of ~14362 bytes, ~3250 tokens.
