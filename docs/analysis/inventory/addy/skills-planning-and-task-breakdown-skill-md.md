---
package: addy
path: skills/planning-and-task-breakdown/SKILL.md
type: skill
bytes: 10564
unit: inv-addy-13
---

# skills/planning-and-task-breakdown/SKILL.md

## Purpose — required, verbatim
> "Decompose work into small, verifiable tasks with explicit acceptance criteria. Good task breakdown is the difference between an agent that completes work reliably and one that produces a tangled mess. Every task should be small enough to implement, test, and verify in a single focused session." — skills/planning-and-task-breakdown/SKILL.md:10

## Design intent — required
Bridges the gap between high-level architectural specifications and granular implementation by decomposing complex features into small, vertically sliced, dependency-ordered tasks with unambiguous acceptance criteria and verification commands. It prevents agents from sprawling across disjointed subsystems, protects existing incomplete work through strict plan-overwrite guardrails, unifies local markdown (`tasks/todo.md`) and external tracker workflows under a single abstraction, and inserts periodic verification checkpoints to catch compounding integration errors early.

## Phase — required
addy:Plan

## Inputs — required
- Specification document or clear requirements (e.g. from `spec-driven-development`) — skills/planning-and-task-breakdown/SKILL.md:3, 14, 28
- Codebase structure and existing conventions — skills/planning-and-task-breakdown/SKILL.md:28-29
- Component dependency graph, risks, and unknowns — skills/planning-and-task-breakdown/SKILL.md:30-31
- Existing `tasks/plan.md` and `tasks/todo.md` (or external tracker items) to inspect for incomplete work — skills/planning-and-task-breakdown/SKILL.md:150-155

## Outputs — required
- Implementation plan document saved to `tasks/plan.md` — skills/planning-and-task-breakdown/SKILL.md:33, 145, 168-209
- Task list recorded in the task list target (default `tasks/todo.md` or external issue tracker) — skills/planning-and-task-breakdown/SKILL.md:33, 80-104, 146, 157-165
- Checkpoints embedded after every 2-3 tasks — skills/planning-and-task-breakdown/SKILL.md:112-123, 184, 191, 198

## Invokes — required
- reference references/definition-of-done.md — skills/planning-and-task-breakdown/SKILL.md:257

## Invoked by — required
- command .claude/commands/plan.md — .claude/commands/plan.md:5
- command commands/planning.toml — commands/planning.toml:4
- command commands/build.toml — commands/build.toml:32
- skill skills/spec-driven-development/SKILL.md — skills/spec-driven-development/SKILL.md:174, 176, 190
- skill skills/interview-me/SKILL.md — skills/interview-me/SKILL.md:184
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:23, 137, 149, 173
- reference references/definition-of-done.md — references/definition-of-done.md:3
- doc docs/getting-started.md — docs/getting-started.md:61, 112, 114
- doc docs/adoption-guide.md — docs/adoption-guide.md:40
- doc docs/antigravity-setup.md — docs/antigravity-setup.md:53
- doc docs/cursor-setup.md — docs/cursor-setup.md:156
- doc docs/opencode-setup.md — docs/opencode-setup.md:117, 169, 193
- doc CLAUDE.md — CLAUDE.md:22
- doc AGENTS.md — AGENTS.md:27, 41
- doc README.md — README.md:243, 357

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — skills/planning-and-task-breakdown/SKILL.md:2 — defined here
- `Planning and Task Breakdown` — skills/planning-and-task-breakdown/SKILL.md:6 — defined here
- `Plan Mode` — skills/planning-and-task-breakdown/SKILL.md:24 — defined here
- `Dependency Graph` — skills/planning-and-task-breakdown/SKILL.md:35 — defined here
- `Slice Vertically` — skills/planning-and-task-breakdown/SKILL.md:57 — defined here
- `horizontal slicing` — skills/planning-and-task-breakdown/SKILL.md:61 — defined here
- `vertical slicing` — skills/planning-and-task-breakdown/SKILL.md:69 — defined here
- `Acceptance criteria` — skills/planning-and-task-breakdown/SKILL.md:88, 256 — defined here
- `Verification` — skills/planning-and-task-breakdown/SKILL.md:92, 242 — defined here
- `Dependencies` — skills/planning-and-task-breakdown/SKILL.md:97 — defined here
- `Estimated scope` — skills/planning-and-task-breakdown/SKILL.md:103 — defined here
- `Checkpoint` — skills/planning-and-task-breakdown/SKILL.md:106, 118, 184, 191, 198 — defined here
- `Task Sizing Guidelines` — skills/planning-and-task-breakdown/SKILL.md:125 — defined here
- `XS` — skills/planning-and-task-breakdown/SKILL.md:129 — defined here
- `S` — skills/planning-and-task-breakdown/SKILL.md:130, 135 — defined here
- `M` — skills/planning-and-task-breakdown/SKILL.md:131, 135 — defined here
- `L` — skills/planning-and-task-breakdown/SKILL.md:132, 135 — defined here
- `XL` — skills/planning-and-task-breakdown/SKILL.md:133 — defined here
- `tasks/plan.md` — skills/planning-and-task-breakdown/SKILL.md:33, 145, 150, 164, 229, 234 — defined here
- `tasks/todo.md` — skills/planning-and-task-breakdown/SKILL.md:33, 150, 161, 234, 249 — defined here
- `tasks/` — skills/planning-and-task-breakdown/SKILL.md:148 — defined here
- `Never overwrite an incomplete plan` — skills/planning-and-task-breakdown/SKILL.md:150 — defined here
- `Task List Target` — skills/planning-and-task-breakdown/SKILL.md:157 — defined here
- `external tracker` — skills/planning-and-task-breakdown/SKILL.md:155, 162, 211, 235 — defined here
- `Plan Document Template` — skills/planning-and-task-breakdown/SKILL.md:166 — defined here
- `Parallelization Opportunities` — skills/planning-and-task-breakdown/SKILL.md:213 — defined here
- `Common Rationalizations` — skills/planning-and-task-breakdown/SKILL.md:222 — defined here
- `Red Flags` — skills/planning-and-task-breakdown/SKILL.md:231 — defined here
- `Definition of Done` — skills/planning-and-task-breakdown/SKILL.md:256 — used here
- `definition-of-done.md` — skills/planning-and-task-breakdown/SKILL.md:257 — used here

## Structure
- `# Planning and Task Breakdown` (line 6)
- `## Overview` (line 8)
- `## When to Use` (line 12)
- `## The Planning Process` (line 22)
  - `### Step 1: Enter Plan Mode` (line 24)
  - `### Step 2: Identify the Dependency Graph` (line 35)
  - `### Step 3: Slice Vertically` (line 57)
  - `### Step 4: Write Tasks` (line 79)
  - `### Step 5: Order and Checkpoint` (line 106)
- `## Task Sizing Guidelines` (line 125)
- `## Output Files` (line 143)
  - `### Task List Target` (line 157)
- `## Plan Document Template` (line 166)
- `## Parallelization Opportunities` (line 213)
- `## Common Rationalizations` (line 222)
- `## Red Flags` (line 231)
- `## Verification` (line 242)
- `## See Also` (line 255)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `skills/planning-and-task-breakdown/SKILL.md:257` vs `docs/skill-anatomy.md:111-119` · `planning-and-task-breakdown/SKILL.md:257` references `../../references/definition-of-done.md`. As acknowledged in `docs/skill-anatomy.md:117`, single-skill installation tools (`npx addy-skills add planning-and-task-breakdown`) copy only `skills/planning-and-task-breakdown/`, leaving shared root `references/` behind and causing broken markdown links at runtime.

## Observations
- Canonical Authority on Task Decomposition: `spec-driven-development/SKILL.md:174, 190` explicitly assigns precedence to `planning-and-task-breakdown` for dependency mapping, vertical slicing, and task sizing over its own inline summaries.
- Incomplete Plan Overwrite Guardrail (Lines 150-156): Enforces an explicit "stop and ask" gate before overwriting existing plan documents containing unchecked tasks, mitigating multi-session state destruction.
- Task List Target Polymorphism (Lines 157-165): Unifies local markdown (`tasks/todo.md`) and external tracker (GitHub Issues, Linear, Jira, beads/`bd`) workflows, converting `tasks/plan.md` into an issue index when external trackers are active.
- Distinction Between Acceptance Criteria and Definition of Done (Line 256): Clearly separates per-task acceptance criteria ("did we build the right thing?") from standing, project-wide Definition of Done ("is this finished to our standard?").

## Context cost
File size: 10,564 bytes (~2,640 tokens). Transitive cost when loaded with referenced reference `references/definition-of-done.md` (3,798 bytes): 14,362 bytes (~3,590 tokens).
