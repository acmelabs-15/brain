---
name: planning-and-task-breakdown
description: Breaks a spec into ordered, verifiable tasks: finds a prefactor, slices vertically, sequences a wide refactor as expand, migrate, contract, writes tasks/plan.md and tasks/todo.md, and puts granularity, blocking edges and merge-or-split to the user before build. Use when a spec needs implementable tasks, a task is too large to start, scope needs an estimate, or parallel work is possible.
---

# Planning and Task Breakdown

## Overview

Decompose work into small, verifiable tasks with explicit acceptance criteria. Good task breakdown separates an agent that completes work reliably from one that produces a tangled mess. Every task is small enough to implement, test and verify in a single focused session.

## When to Use

- You have a spec and need to break it into implementable units
- A task feels too large or vague to start
- Work needs to be parallelized across multiple agents or sessions
- You need to communicate scope to a human
- The implementation order is not obvious

**When NOT to use:** Single-file changes with obvious scope, or a spec that already contains well-defined tasks.

## The Planning Process

### Step 1: Enter Plan Mode

Before writing any code, operate in read-only mode:

- Read the spec and the relevant codebase sections
- Identify existing patterns and conventions
- Map dependencies between components
- Note risks and unknowns
- Note a change to the code that would make the feature easier to build. That change is a prefactor candidate.

**Planning writes no code.** The output is a plan document saved to `tasks/plan.md` and a task list recorded in the task list target (see Output Files; default `tasks/todo.md`), not implementation.

### Step 2: Identify the Dependency Graph

Map what depends on what:

```
Database schema
    │
    ├── API models/types
    │       │
    │       ├── API endpoints
    │       │       │
    │       │       └── Frontend API client
    │       │               │
    │       │               └── UI components
    │       │
    │       └── Validation logic
    │
    └── Seed data / migrations
```

Implementation order follows the dependency graph bottom-up: build foundations first.

A task's dependencies are its **blocking edges**: the tasks that must complete before it can start. A task with no blocking edges can start at once.

### Step 3: Slice Vertically

Build one complete feature path at a time, not all the database, then all the API, then all the UI:

**Bad (horizontal slicing):**
```
Task 1: Build entire database schema
Task 2: Build all API endpoints
Task 3: Build all UI components
Task 4: Connect everything
```

**Good (vertical slicing):**
```
Task 1: User can create an account (schema + API + UI for registration)
Task 2: User can log in (auth schema + API + UI for login)
Task 3: User can create a task (task schema + API + UI for creation)
Task 4: User can view task list (query + API + UI for list view)
```

Each vertical slice delivers working, testable functionality. A completed slice is demoable or verifiable on its own.

**The wide refactor is the exception to vertical slicing.** A wide refactor is one mechanical change (rename a column, retype a shared symbol) whose blast radius spans the codebase. One edit breaks every call site at once, so no vertical slice can land green. Sequence it as expand, migrate, contract instead:

1. **Expand:** add the new form beside the old, so nothing breaks.
2. **Migrate:** move the call sites over in batches sized by blast radius (per package, per directory). Each batch is its own task, blocked by the expand task. CI stays green batch to batch because the old form still exists.
3. **Contract:** delete the old form once no caller remains, in a task blocked by every migrate batch.

When even the batches cannot stay green alone, keep the sequence but let them share an integration branch. Every batch then blocks a final integrate-and-verify task, and green is promised only there.

### Step 4: Write Tasks

Task titles and descriptions use the project's domain words. Domain words come from `CONTEXT.md` through `docs/agents/domain.md`, which also points at the ADRs for the area a task touches. A concept the glossary lacks is a gap to note for the domain-modeling skill.

Each task follows this structure, whether it lands in the markdown task list or as an item in an external tracker (see Output Files):

```markdown
## Task [N]: [Short descriptive title]

**Description:** One paragraph explaining what this task accomplishes.

**Acceptance criteria:**
- [ ] [Specific, testable condition]
- [ ] [Specific, testable condition]

**Verification:**
- [ ] Tests pass: [the repository's focused-test command]
- [ ] Build succeeds: [the repository's build command]
- [ ] Manual check: [description of what to verify]

**Dependencies:** [Task numbers this depends on, or "None"]

**Files likely touched:**
- `src/path/to/file.ts`
- `tests/path/to/test.ts`

**Estimated scope:** [Small: 1-2 files | Medium: 3-5 files | Large: 5+ files]
```

### Step 5: Order and Checkpoint

Arrange tasks so that:

1. A prefactor task from Step 1 comes first: make the change easy, then make the easy change
2. Dependencies are satisfied (build foundation first)
3. Each task leaves the system in a working state
4. Verification checkpoints occur after every 2-3 tasks
5. High-risk tasks are early (fail fast)

Add explicit checkpoints to the task list target:

```markdown
## Checkpoint: After Tasks 1-3
- [ ] All tests pass
- [ ] Application builds without errors
- [ ] Core user flow works end-to-end
- [ ] Review with human before proceeding
```

### Step 6: Get the Plan Approved

Present the breakdown as a numbered list. For each task, show its title, the tasks that block it, and the end-to-end behaviour it delivers.

Then put three questions to the user, one per call. Call the Skill tool with "ask-user-question" to compose each call. Every decision in this skill that is the user's goes through that same call.

| Question | What it settles |
|---|---|
| Does the granularity feel right: too coarse, too fine, or right? | Task size |
| Are the blocking edges correct: does each task depend only on the tasks that gate it? | Dependency order |
| Should any task be merged, or split further? | Task boundaries |

Apply each answer to the plan and the task list before the next question. Repeat the three questions until the user approves the breakdown. That approval is the gate before implementation starts.

A small reversible choice (the wording of a title, the order of two independent tasks) stays with you: decide it and state the reason.

## Task Sizing Guidelines

| Size | Files | Scope | Example |
|------|-------|-------|---------|
| **XS** | 1 | Single function or config change | Add a validation rule |
| **S** | 1-2 | One component or endpoint | Add a new API endpoint |
| **M** | 3-5 | One feature slice | User registration flow |
| **L** | 5-8 | Multi-component feature | Search with filtering and pagination |
| **XL** | 8+ | **Too large: break it down further** | (none) |

If a task is L or larger, break it into smaller tasks. An agent performs best on S and M tasks.

**When to break a task down further:**
- It would take more than one focused session (roughly 2+ hours of agent work)
- You cannot describe the acceptance criteria in 3 or fewer bullet points
- It touches two or more independent subsystems (e.g., auth and billing)
- You find yourself writing "and" in the task title (a sign it is two tasks)

## Output Files

- **Plan document:** Save the implementation plan to `tasks/plan.md`. This is always a markdown file: design decisions, risks and open questions do not map cleanly onto individual tracker issues.
- **Task list:** Record each task in the **task list target** (defined below).

Create the `tasks/` directory if it does not exist.

**Never overwrite an incomplete plan.** Before writing `tasks/plan.md` or `tasks/todo.md`, check whether they already exist and still contain unchecked tasks:

- Same work being replanned (the user asked to revise or extend this plan) → update the existing files in place.
- Different work → **stop and ask.** The unchecked tasks may be mid-build in another session. Do not delete, overwrite or rename the existing files on your own. Put the conflict to the user as one question, the Step 6 call, with the ways out: finish the old plan first, discard it explicitly, or name where the new plan goes.

The same rule applies to an external task list target: never bulk-close or delete another plan's open tracker items to make room for new ones.

### Task List Target

The task list target is where tasks and checkpoints are recorded. It is defined once, here; every other reference in this skill defers to it.

- **Default: a checklist-style markdown file at `tasks/todo.md`.** This is the convention the `/build` command and other downstream tooling expect. Use it unless the project says otherwise.
- **External tracker:** if the project's agent rules (`CLAUDE.md`, `AGENTS.md`, etc.) or the user designate an issue tracker (e.g. GitHub Issues, Jira, Linear, `bd`/beads), create one tracker item per task instead of writing `tasks/todo.md`. Map the Step 4 structure onto the tracker's fields: acceptance criteria and verification steps in the item body, dependencies via the tracker's linking mechanism (`bd dep add`, "blocked by", etc.). Record Step 5 checkpoints as tracker items too, or as a checklist in the plan document if the tracker has no natural equivalent.

When using an external tracker, note it in `tasks/plan.md` (e.g. "Tasks tracked in Linear project FOO") so downstream steps and future sessions know where to look, and keep the plan document's Task List section as an ordered index of tracker item IDs or links rather than a duplicate checklist.

## Plan Document Template

```markdown
# Implementation Plan: [Feature/Project Name]

## Overview
[One paragraph summary of what we're building]

## Architecture Decisions
- [Key decision 1 and rationale]
- [Key decision 2 and rationale]

## Task List

### Phase 1: Foundation
- [ ] Task 1: ...
- [ ] Task 2: ...

### Checkpoint: Foundation
- [ ] Tests pass, builds clean

### Phase 2: Core Features
- [ ] Task 3: ...
- [ ] Task 4: ...

### Checkpoint: Core Features
- [ ] End-to-end flow works

### Phase 3: Polish
- [ ] Task 5: ...
- [ ] Task 6: ...

### Checkpoint: Complete
- [ ] All acceptance criteria met
- [ ] Ready for review

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| [Risk] | [High/Med/Low] | [Strategy] |

## Open Questions
- [Question needing human input]
```

When tasks live in an external tracker, keep the Task List section above as an ordered index of tracker item IDs or links instead of a duplicate checklist.

## Parallelization Opportunities

When multiple agents or sessions are available:

- **Safe to parallelize:** Independent feature slices, tests for already-implemented features, documentation
- **Must be sequential:** Database migrations, shared state changes, dependency chains
- **Needs coordination:** Features that share an API contract (define the contract first, then parallelize)

Work the **frontier**: every task whose blocking edges are all done. A linear chain is worked top to bottom.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "I'll figure it out as I go" | That is how you end up with a tangled mess and rework. 10 minutes of planning saves hours. |
| "The tasks are obvious" | Write them down anyway. Explicit tasks surface hidden dependencies and forgotten edge cases. |
| "Planning is overhead" | Planning is the task. Implementation without a plan is just typing. |
| "I can hold it all in my head" | Context windows are finite. Written plans survive session boundaries and compaction. |
| "The old `tasks/plan.md` is stale, I'll just replace it" | Unchecked tasks may be mid-build in another session. Overwriting them destroys work state that exists nowhere else. Stop and ask. |
| "The rename is mechanical, one task covers it" | A change with a codebase-wide blast radius cannot land green as one slice. Sequence it as expand, migrate, contract. |
| "The breakdown is obvious, the approval questions are a formality" | The user sees granularity and edges you cannot. Three questions cost minutes; a wrong build costs the plan. |

## Red Flags

- Starting implementation without a written task list
- Starting implementation before the user approved the breakdown
- Overwriting a `tasks/plan.md` or `tasks/todo.md` that still has unchecked tasks for different work, without asking
- Writing `tasks/todo.md` when the project has designated an external tracker (or scattering tasks across both)
- Tasks that say "implement the feature" without acceptance criteria
- A mechanical change with a codebase-wide blast radius written as one task
- Task titles that use words `CONTEXT.md` marks as avoid
- No verification steps in the plan
- All tasks are XL-sized
- No checkpoints between tasks
- Dependency order is not considered

## Verification

Before starting implementation, confirm:

- [ ] Every task has acceptance criteria
- [ ] Every task has a verification step
- [ ] Task dependencies are identified and ordered correctly
- [ ] A prefactor task, when Step 1 found one, is Task 1
- [ ] A wide refactor is sequenced as expand, migrate, contract
- [ ] Task titles and descriptions use the glossary's words
- [ ] Tasks are recorded in the task list target (default `tasks/todo.md`)
- [ ] No pre-existing incomplete plan was overwritten without explicit user confirmation
- [ ] No task touches more than ~5 files
- [ ] Checkpoints exist between major phases
- [ ] The user approved the breakdown through the three Step 6 questions

## See Also

Acceptance criteria are per-task and answer "did we build the right thing?". They sit on top of the project-wide Definition of Done, the standing bar every task clears before it counts as done. See `../../references/definition-of-done.md`.
