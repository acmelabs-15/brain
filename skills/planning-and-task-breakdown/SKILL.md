---
name: planning-and-task-breakdown
description: Breaks a spec into ordered, verifiable tasks: finds a prefactor, slices vertically, sequences a wide refactor as expand, migrate, contract, writes the plan rows and task blocks into the spec folder's tasks/plan.md and tasks/todo.md, and puts granularity, blocking edges and merge-or-split to the user before build. Use when a spec needs implementable tasks, a task is too large to start, scope needs an estimate, or parallel work is possible.
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

- Read the spec (`spec.md` in the active spec folder; `docs/agents/workspace.md` says how to find the active spec) and the relevant codebase sections
- Identify existing patterns and conventions
- Map dependencies between components
- Note risks and unknowns
- Note a change to the code that would make the feature easier to build. That change is a prefactor candidate.

**Planning writes no code.** The output is the spec folder's plan: one row per task in `tasks/plan.md`, one block per row in `tasks/todo.md`, and the plan's Parallel waves section from `brain plan` (see Output Files), not implementation.

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

A task's dependencies are its **blocking edges**: the tasks that must complete before it can start. A task with no blocking edges can start at once. Blocking edges live in one place only: the Blocked by column of the plan's row table (see Output Files).

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

Task titles and descriptions use the project's domain words. Domain words come from `GLOSSARY.md` through `docs/agents/domain.md`, which also points at the ADRs for the area a task touches. A concept the glossary lacks is a gap to note for the domain-modeling skill.

Each task is one row in the plan and one block in `tasks/todo.md`, under the row's two-digit number (see Output Files). The block follows this structure:

```markdown
## Task 03: [Short descriptive title]

**Description:** One paragraph explaining what this task accomplishes.

**Acceptance criteria:**
- [ ] [Specific, testable condition]
- [ ] [Specific, testable condition]

**Verification:**
- [ ] Tests pass: [the repository's focused-test command]
- [ ] Build succeeds: [the repository's build command]
- [ ] Manual check: [description of what to verify]

**Files likely touched:**
- `src/path/to/file.ts`
- `tests/path/to/test.ts`

**Scope:** [XS, S, M or L: see Task Sizing Guidelines]
```

A block holds no status line and no dependencies. Its row in the plan holds both, so the two never disagree.

### Step 5: Order and Checkpoint

Arrange tasks so that:

1. A prefactor task from Step 1 comes first: make the change easy, then make the easy change
2. Dependencies are satisfied (build foundation first)
3. Each task leaves the system in a working state
4. Verification checkpoints occur after every 2-3 tasks
5. High-risk tasks are early (fail fast)

Add explicit checkpoints. A checkpoint is a row of type `checkpoint` in the plan, with its own block in `tasks/todo.md`:

```markdown
## Checkpoint 04: After tasks 01-03
- [ ] All tests pass
- [ ] Application builds without errors
- [ ] Core user flow works end-to-end
- [ ] Review with human before proceeding
```

A checkpoint's phase is the tasks it checks: list them in its Blocked by. Then list the checkpoint in the Blocked by of every later task that depends, directly or through other tasks, on a task in its phase, and of no other task. A checkpoint that blocks more holds back work it never reviewed. A later task lists the tasks it needs beside the checkpoint: `brain check` reads what a task depends on from its task blockers alone.

### Step 6: Get the Plan Approved

Present the breakdown as a numbered list. For each task, show its title, the tasks that block it, and the end-to-end behaviour it delivers.

Then put three questions to the user, one per call. Call the Skill tool with "ask-user-question" to compose each call. Every decision in this skill that is the user's goes through that same call.

| Question | What it settles |
|---|---|
| Does the granularity feel right: too coarse, too fine, or right? | Task size |
| Are the blocking edges correct: does each task depend only on the tasks that gate it? | Dependency order |
| Should any task be merged, or split further? | Task boundaries |

Apply each answer to the plan's rows and the task blocks before the next question. An answer that changes a row, an edge or a block's files makes the Parallel waves section stale: write it again from `brain plan` before the next question. Repeat the three questions until the user approves the breakdown. That approval is the gate before implementation starts.

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

A plan lives in its spec's folder: `SPEC-NNN-<slug>/` in the workspace's specs folder (`paths.specs` in `docs/agents/workspace.md`, `specs/` by default).

- **Plan document:** the spec folder's `tasks/plan.md`: the index, the only status of every task, and the only place for its blocking edges.
- **Task blocks:** the spec folder's `tasks/todo.md`, one block per row of the plan. `/build` hands each block to the sub-agent that builds it, and `brain plan` reads each block's files.

Tasks live only in these two files, so status has one home and `brain plan` sees every task's files.

When spec-driven-development wrote the spec, `brain new-doc SPEC` created both files from brain's templates. When the spec has no spec folder yet (it came in the chat, or from a file outside the workspace), create one first:

```
bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" new-doc SPEC <slug> --title "<the spec's title>"
```

Claude Code fills in the plugin path when it loads this skill. On another host, resolve the plugin folder as setup-brain does, then run `scripts/brain.ts` from it with bun. Put the spec into the new `spec.md`, as spec-driven-development's step 5 says. In a repo with no `docs/agents/workspace.md`, the command uses the default folders: tell the user once to run setup-brain.

**Never overwrite an incomplete plan.** Before writing `tasks/plan.md` or `tasks/todo.md`, read the plan's row table. A row that is `open` or `in-progress` makes the plan incomplete:

- Same work being replanned (the user asked to revise or extend this plan) → update the existing rows and blocks in place.
- Different work → **stop and ask.** The open rows may be mid-build in another session. Do not delete, overwrite or rename the existing files on your own. Put the conflict to the user as one question, the Step 6 call, with the ways out: finish the old plan first, discard it explicitly, or give the new work its own spec folder.

### The plan: `tasks/plan.md`

Fill the sections the template wrote (`scripts/workspace/templates/plan.md` in the plugin), and keep their headings:

| Part | Holds |
|---|---|
| H1 | The spec's ID, then the title: `# SPEC-012 plan: <title>` |
| Overview | One paragraph: what this plan builds, and in what order |
| Decisions | One line per decision record the plan follows: `- DEC-031: <title>`. A decision is a link here, never its text. A decision the user makes while you plan gets its own record first, in [domain-modeling's DEC format](../domain-modeling/DEC-FORMAT.md) |
| Tasks | The row table below. The template wrote its header only; write the rows right under it |
| Parallel waves | What `brain plan` prints above its `Cap:` line, as it prints it (see The Parallel waves section) |
| Risks | One row per risk: the risk, its impact (high, medium or low), the mitigation |
| Open questions | The questions for the user |

The row table holds every task and checkpoint, in order:

```markdown
| # | Task | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Count the words in a file | task | open | — | — |
| 02 | Exit 1 on a missing file | task | open | 01 | — |
| 03 | Read the text from stdin | task | open | 01 | — |
| 04 | Checkpoint: after tasks 01-03 | checkpoint | open | 01, 02, 03 | — |
| 05 | Print a count per line | task | open | 01, 04 | — |
```

- **#**: two digits, local to the file. The row's block carries the same number.
- **Type**: `task` or `checkpoint`.
- **Status**: `open`, `in-progress`, `resolved`, or `superseded by NN` when row NN replaced it. Every row of a new plan starts `open`.
- **Blocked by**: the rows this one needs, as `01, 02`, or `—`. Each number names a row in the same table.
- **Result**: `—` until the row is resolved; then the commit SHA, the verification command and its outcome, such as `3f2a91c; bun test src: 4 pass`.

You write the rows. During the build, the main session is their only writer: after each task it ticks the task's boxes, updates Status and Result, then writes the Parallel waves section again, because a resolved row leaves the waves. A sub-agent ticks nothing.

### The task blocks

Each row gets one block in `tasks/todo.md`, under the row's number: `## Task NN: <title>` for a task (Step 4), `## Checkpoint NN: <title>` for a checkpoint (Step 5).

### The Parallel waves section

The section shows what can run at once: the waves (each wave is the frontier once the waves above it are done), the critical path, the files that tasks in one wave share, and the phases that share a wave. `brain plan` works it out from the rows and the blocks; the section holds its output as it prints it.

1. Once every row has its block, run `brain plan` for the spec, with the same plugin path as `new-doc` above:

   ```
   bun "${CLAUDE_PLUGIN_ROOT}/scripts/brain.ts" plan SPEC-NNN
   ```

   An exit of 1 names a cycle, a blocker that is not a row, or a row that a superseded row blocks. Fix those rows, then run it again.
2. Put every line it prints above its `Cap:` line under the `## Parallel waves` heading, below the Tasks table. The cap lines stay out, so a change to `max_parallel` leaves the section current.
3. Whenever a row, an edge or a block's files change, run `brain plan` again and replace the section. A section that differs from what `brain plan` prints now is stale, and `brain check` reports it, as it reports a missing one.

The plan is done when every row has its block, the Parallel waves section is what `brain plan` prints now, and `brain check` reports no finding in the spec folder.

## Parallelization Opportunities

When multiple agents or sessions are available:

- **Safe to parallelize:** Independent feature slices, tests for already-implemented features, documentation
- **Must be sequential:** Database migrations, shared state changes, dependency chains
- **Needs coordination:** Features that share an API contract (define the contract first, then parallelize)

Work the **frontier**: every `open` row whose Blocked by rows are all `resolved`. A linear chain is worked top to bottom. The plan's Parallel waves section shows the frontier as wave 1, and the waves after it.

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "I'll figure it out as I go" | That is how you end up with a tangled mess and rework. 10 minutes of planning saves hours. |
| "The tasks are obvious" | Write them down anyway. Explicit tasks surface hidden dependencies and forgotten edge cases. |
| "Planning is overhead" | Planning is the task. Implementation without a plan is just typing. |
| "I can hold it all in my head" | Context windows are finite. Written plans survive session boundaries and compaction. |
| "The old `tasks/plan.md` is stale, I'll just replace it" | Its open and in-progress rows may be mid-build in another session. Overwriting them destroys work state that exists nowhere else. Stop and ask. |
| "The rename is mechanical, one task covers it" | A change with a codebase-wide blast radius cannot land green as one slice. Sequence it as expand, migrate, contract. |
| "The breakdown is obvious, the approval questions are a formality" | The user sees granularity and edges you cannot. Three questions cost minutes; a wrong build costs the plan. |

## Red Flags

- Starting implementation without a written task list
- Starting implementation before the user approved the breakdown
- Overwriting a `tasks/plan.md` or `tasks/todo.md` whose plan still has open or in-progress rows for different work, without asking
- A plan or a task written outside the spec folder, such as a `tasks/` folder at the repo root or an issue tracker
- A status line or a dependency written into a task block instead of the plan's row
- A Parallel waves section worked out by hand, or left as it was after a row, an edge or a block's files changed
- Tasks that say "implement the feature" without acceptance criteria
- A mechanical change with a codebase-wide blast radius written as one task
- Task titles that use words `GLOSSARY.md` marks as avoid
- No verification steps in the plan
- All tasks are XL-sized
- No checkpoints between tasks
- Dependency order is not considered

## Verification

Before starting implementation, confirm:

- [ ] Every task has acceptance criteria
- [ ] Every task has a verification step
- [ ] Task dependencies are identified, ordered correctly, and written only in the plan's Blocked by column
- [ ] A prefactor task, when Step 1 found one, is row 01
- [ ] A wide refactor is sequenced as expand, migrate, contract
- [ ] Task titles and descriptions use the glossary's words
- [ ] Every row of the spec folder's `tasks/plan.md` has its block in `tasks/todo.md`
- [ ] The plan's Parallel waves section is what `brain plan` prints now, above its `Cap:` line
- [ ] No plan with open or in-progress rows was overwritten without explicit user confirmation
- [ ] No task touches more than ~5 files
- [ ] Checkpoint rows exist between major phases, each blocking only the later tasks that depend on its phase
- [ ] `brain check` reports no finding in the spec folder
- [ ] The user approved the breakdown through the three Step 6 questions

## See Also

Acceptance criteria are per-task and answer "did we build the right thing?". They sit on top of the project-wide Definition of Done, the standing bar every task clears before it counts as done. See `../../references/definition-of-done.md`.
