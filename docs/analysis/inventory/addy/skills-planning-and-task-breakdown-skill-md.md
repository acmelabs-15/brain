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
verified: 2026-09-04 quote-check+coverage
---

# skills/planning-and-task-breakdown/SKILL.md

## Purpose — required, verbatim
> "Breaks work into ordered tasks. Use when you have a spec or clear requirements and need to break work into implementable tasks. Use when a task feels too large to start, when you need to estimate scope, or when parallel work is possible." — skills/planning-and-task-breakdown/SKILL.md:3

## Design intent — required
Decomposes software specifications into small, vertically sliced, testable tasks with explicit acceptance criteria, verification commands, and dependency ordering before coding begins. It enforces a strict read-only planning mode that maps system dependencies bottom-up, bounds task scope to manageable sizes (small/medium chunks touching ~5 or fewer files), inserts periodic verification checkpoints, establishes a durable task list target (defaulting to `tasks/todo.md` alongside `tasks/plan.md`) that accommodates external issue trackers, and prevents silent overwriting of incomplete plans. Without it, agents jump prematurely into unconstrained code modifications without architectural forethought or verification gates, producing tangled implementations, broken dependencies, and unrecoverable session states.

## Phase — required
addy:Plan

## Inputs — required
- Existing specification or clear requirements (`SPEC.md` or equivalent) — skills/planning-and-task-breakdown/SKILL.md:3, 14, 28
- Relevant codebase sections, existing patterns, and conventions — skills/planning-and-task-breakdown/SKILL.md:28-29
- Component dependencies and system architecture — skills/planning-and-task-breakdown/SKILL.md:30, 35-55
- Pre-existing plan documents (`tasks/plan.md`, `tasks/todo.md`, or external tracker items) to inspect for incomplete tasks before replanning — skills/planning-and-task-breakdown/SKILL.md:150-156
- User input or human review to resolve conflicts on existing plans and approve the final plan — skills/planning-and-task-breakdown/SKILL.md:153, 208, 253

## Outputs — required
- Implementation plan document: `tasks/plan.md` — skills/planning-and-task-breakdown/SKILL.md:33, 145
- Task list checklist: `tasks/todo.md` — skills/planning-and-task-breakdown/SKILL.md:33, 161
- External tracker items (alternative task list target if designated by project rules or user) — skills/planning-and-task-breakdown/SKILL.md:81, 162-165

## Invokes — required
- reference ../../references/definition-of-done.md — skills/planning-and-task-breakdown/SKILL.md:257

## Invoked by — required
- command plan — .claude/commands/plan.md:5
- command build — .claude/commands/build.md:33
- command planning — commands/planning.toml:4
- command build — commands/build.toml:32
- command planning — .gemini/commands/planning.toml:4
- skill spec-driven-development — skills/spec-driven-development/SKILL.md:174
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:149
- reference definition-of-done.md — references/definition-of-done.md:3
- doc README.md — README.md:243
- doc CLAUDE.md — CLAUDE.md:22
- doc AGENTS.md — AGENTS.md:27

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — skills/planning-and-task-breakdown/SKILL.md:2 — defined here
- `acceptance criteria` — skills/planning-and-task-breakdown/SKILL.md:10 — defined here
- `spec` — skills/planning-and-task-breakdown/SKILL.md:14 — used here
- `Plan Mode` — skills/planning-and-task-breakdown/SKILL.md:24 — defined here
- `tasks/plan.md` — skills/planning-and-task-breakdown/SKILL.md:33 — defined here
- `tasks/todo.md` — skills/planning-and-task-breakdown/SKILL.md:33 — defined here
- `Dependency Graph` — skills/planning-and-task-breakdown/SKILL.md:35 — defined here
- `bottom-up` — skills/planning-and-task-breakdown/SKILL.md:55 — used here
- `Slice Vertically` — skills/planning-and-task-breakdown/SKILL.md:57 — defined here
- `horizontal slicing` — skills/planning-and-task-breakdown/SKILL.md:61 — used here
- `vertical slicing` — skills/planning-and-task-breakdown/SKILL.md:69 — defined here
- `Write Tasks` — skills/planning-and-task-breakdown/SKILL.md:79 — defined here
- `Acceptance criteria` — skills/planning-and-task-breakdown/SKILL.md:88 — used here
- `Verification` — skills/planning-and-task-breakdown/SKILL.md:92 — used here
- `Dependencies` — skills/planning-and-task-breakdown/SKILL.md:97 — used here
- `Estimated scope` — skills/planning-and-task-breakdown/SKILL.md:103 — used here
- `Order and Checkpoint` — skills/planning-and-task-breakdown/SKILL.md:106 — defined here
- `Verification checkpoints` — skills/planning-and-task-breakdown/SKILL.md:112 — defined here
- `fail fast` — skills/planning-and-task-breakdown/SKILL.md:113 — used here
- `Checkpoint` — skills/planning-and-task-breakdown/SKILL.md:118 — defined here
- `Task Sizing Guidelines` — skills/planning-and-task-breakdown/SKILL.md:125 — defined here
- `Plan document` — skills/planning-and-task-breakdown/SKILL.md:145 — defined here
- `Task list` — skills/planning-and-task-breakdown/SKILL.md:146 — defined here
- `Task List Target` — skills/planning-and-task-breakdown/SKILL.md:157 — defined here
- `/build` — skills/planning-and-task-breakdown/SKILL.md:161 — used here
- `External tracker` — skills/planning-and-task-breakdown/SKILL.md:162 — used here
- `Plan Document Template` — skills/planning-and-task-breakdown/SKILL.md:166 — defined here
- `Architecture Decisions` — skills/planning-and-task-breakdown/SKILL.md:174 — used here
- `Phase 1: Foundation` — skills/planning-and-task-breakdown/SKILL.md:180 — used here
- `Phase 2: Core Features` — skills/planning-and-task-breakdown/SKILL.md:187 — used here
- `Phase 3: Polish` — skills/planning-and-task-breakdown/SKILL.md:194 — used here
- `Risks and Mitigations` — skills/planning-and-task-breakdown/SKILL.md:202 — used here
- `Open Questions` — skills/planning-and-task-breakdown/SKILL.md:207 — used here
- `Parallelization Opportunities` — skills/planning-and-task-breakdown/SKILL.md:213 — defined here
- `Common Rationalizations` — skills/planning-and-task-breakdown/SKILL.md:221 — used here
- `Red Flags` — skills/planning-and-task-breakdown/SKILL.md:231 — used here
- `Definition of Done` — skills/planning-and-task-breakdown/SKILL.md:257 — used here

## Structure
- `# Planning and Task Breakdown` — skills/planning-and-task-breakdown/SKILL.md:6
- `## Overview` — skills/planning-and-task-breakdown/SKILL.md:8
- `## When to Use` — skills/planning-and-task-breakdown/SKILL.md:12
- `## The Planning Process` — skills/planning-and-task-breakdown/SKILL.md:22
- `### Step 1: Enter Plan Mode` — skills/planning-and-task-breakdown/SKILL.md:24
- `### Step 2: Identify the Dependency Graph` — skills/planning-and-task-breakdown/SKILL.md:35
- `### Step 3: Slice Vertically` — skills/planning-and-task-breakdown/SKILL.md:57
- `### Step 4: Write Tasks` — skills/planning-and-task-breakdown/SKILL.md:79
- `### Step 5: Order and Checkpoint` — skills/planning-and-task-breakdown/SKILL.md:106
- `## Task Sizing Guidelines` — skills/planning-and-task-breakdown/SKILL.md:125
- `## Output Files` — skills/planning-and-task-breakdown/SKILL.md:143
- `### Task List Target` — skills/planning-and-task-breakdown/SKILL.md:157
- `## Plan Document Template` — skills/planning-and-task-breakdown/SKILL.md:166
- `## Parallelization Opportunities` — skills/planning-and-task-breakdown/SKILL.md:213
- `## Common Rationalizations` — skills/planning-and-task-breakdown/SKILL.md:221
- `## Red Flags` — skills/planning-and-task-breakdown/SKILL.md:231
- `## Verification` — skills/planning-and-task-breakdown/SKILL.md:242
- `## See Also` — skills/planning-and-task-breakdown/SKILL.md:255

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Enforces strict read-only behavior during planning ("Do NOT write code during planning", line 33), keeping design exploration decoupled from implementation state.
- Enforces guardrails against destructive overwriting of existing plans: agents must verify whether existing `tasks/plan.md` or `tasks/todo.md` files contain unchecked tasks and stop to ask the user before replacing them (lines 150-156).
- Defines an adaptable "Task List Target" pattern supporting either a default markdown checklist (`tasks/todo.md`) or external tracking systems (e.g. GitHub Issues, Jira, Linear, `bd`/beads) while keeping `tasks/plan.md` as an index of item IDs (lines 157-165).
- Provides explicit task sizing criteria (XS through XL), discouraging tasks touching more than ~5 files and recommending that XL tasks (8+ files, multiple subsystems, or taking >2 hours) be broken down further (lines 125-142).
- Distinguishes per-task acceptance criteria ("did we build the right thing?") from the standing Definition of Done ("is this finished to our standard?") referenced at `../../references/definition-of-done.md` (line 257).

## Context cost
10564 bytes (~2641 tokens). Invocations load `../../references/definition-of-done.md` (3056 bytes). Total: 13620 bytes (~3405 tokens).
