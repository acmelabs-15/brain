---
name: planning-and-task-breakdown
description: "Breaks work into ordered tasks, and picks a plan up where it stands. Use when a spec or clear requirements need breaking into implementable tasks — a plan in parts, each with acceptance criteria and a status line — when a task feels too large to start, when scope needs estimating, or when parallel work is possible. Also the way in for a repo with a plan and a session log (docs/plan, docs/sessions): `continue PLAN-NNN`, \"work on PLAN-NNN\", \"catch me up\", \"where were we\", \"what's next on the plan\", \"pick it up where it left off\" — it reads the plan, the part in progress, the session serving it and what the last entries left unverified, and posts a brief. Not for writing the record once work lands — a commit's entry, a session's Outcome, marking a plan part or session done are the session skill's — nor for a changelog or rundown of recent commits, a PRD or ADR, grilling a plan's assumptions, a doc explaining how plans and sessions relate, or implementing a task once the plan exists."
---

# Planning and Task Breakdown

Before exploring the codebase, read `CONTEXT.md` (and `CONTEXT-MAP.md` if the repo has more than one context) when it exists, and the ADRs where the project keeps them. Use the glossary's terms and never a synonym it lists under _Avoid_; a concept it lacks is a gap to note for `/domain-modeling`.

## Overview

Decompose work into small, verifiable tasks with explicit acceptance criteria. Good task breakdown is the difference between an agent that completes work reliably and one that produces a tangled mess. Every task should be small enough to implement, test, and verify in a single focused session.

## When to Use

- You have a spec and need to break it into implementable units
- A task feels too large or vague to start
- Work needs to be parallelized across multiple agents or sessions
- You need to communicate scope to a human
- The implementation order isn't obvious

**When NOT to use:** Single-file changes with obvious scope, or when the spec already contains well-defined tasks.

## The Planning Process

### Step 1: Enter Plan Mode

Before writing any code, operate in read-only mode:

- Read the spec and relevant codebase sections
- Identify existing patterns and conventions
- Map dependencies between components
- Note risks and unknowns

**Do NOT write code during planning.** The output is a plan document saved to `tasks/plan.md` and a task list recorded in the task list target (see Output Files; default `tasks/todo.md`), not implementation.

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

### Step 3: Slice Vertically

Instead of building all the database, then all the API, then all the UI — build one complete feature path at a time:

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

Each vertical slice delivers working, testable functionality.

### Step 4: Write Tasks

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

1. Dependencies are satisfied (build foundation first)
2. Each task leaves the system in a working state
3. Verification checkpoints occur after every 2-3 tasks
4. High-risk tasks are early (fail fast)

Add explicit checkpoints to the task list target:

```markdown
## Checkpoint: After Tasks 1-3
- [ ] All tests pass
- [ ] Application builds without errors
- [ ] Core user flow works end-to-end
- [ ] Review with human before proceeding
```

## Task Sizing Guidelines

| Size | Files | Scope | Example |
|------|-------|-------|---------|
| **XS** | 1 | Single function or config change | Add a validation rule |
| **S** | 1-2 | One component or endpoint | Add a new API endpoint |
| **M** | 3-5 | One feature slice | User registration flow |
| **L** | 5-8 | Multi-component feature | Search with filtering and pagination |
| **XL** | 8+ | **Too large — break it down further** | — |

If a task is L or larger, it should be broken into smaller tasks. An agent performs best on S and M tasks.

**When to break a task down further:**
- It would take more than one focused session (roughly 2+ hours of agent work)
- You cannot describe the acceptance criteria in 3 or fewer bullet points
- It touches two or more independent subsystems (e.g., auth and billing)
- You find yourself writing "and" in the task title (a sign it is two tasks)

## Output Files

- **Plan document:** Save the implementation plan to `tasks/plan.md`. This is always a markdown file — design decisions, risks, and open questions don't map cleanly onto individual tracker issues.
- **Task list:** Record each task in the **task list target** (defined below).

Create the `tasks/` directory if it does not exist.

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

## Parts

### Part 1: Foundation

> Status: planned
- [ ] Task 1: ...
- [ ] Task 2: ...
- [ ] Checkpoint: tests pass, builds clean

### Part 2: Core Features

> Status: planned
- [ ] Task 3: ...
- [ ] Task 4: ...
- [ ] Checkpoint: end-to-end flow works

### Part 3: Polish

> Status: planned
- [ ] Task 5: ...
- [ ] Task 6: ...
- [ ] Checkpoint: all acceptance criteria met, ready for review

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| [Risk] | [High/Med/Low] | [Strategy] |

## Open Questions
- [Question needing human input]
```

Each **part** carries its own status line, directly under its heading, and it is the way a later
conversation finds the work: `planned` until a session takes it, `in progress (session SES-NNN)`
while one does, `done (session SES-NNN, sha)` when it is finished — the `/session` skill writes
those lines and ticks the tasks citing the commit that did each. Where a repo keeps a session log
(`docs/sessions/`), "work on PLAN-NNN" is then enough to rehydrate: the plan says which part is
in progress and which session holds its story. A repo without one keeps the lines anyway; they
cost nothing and the plan still says where it stands.

When tasks live in an external tracker, keep the Task List section above as an ordered index of tracker item IDs or links instead of a duplicate checklist.

## Continuing a plan

"Work on PLAN-NNN" is enough for a conversation that starts from nothing but the repo, when the
repo keeps a session log (`docs/sessions/`, the `brain` plugin's `session` skill). The plan says
where the work stands — the first part `in progress` and its first unticked task — and the session
that part's status line names says what the last conversation did and left unverified. This
section is that walk. The session skill records; it does not rehydrate.

Copy this checklist and tick it as you go:

```
Rehydration progress:
- [ ] Step 1: Arguments — continue, or create
- [ ] Step 2: Order — the repo's read order found
- [ ] Step 3: Where it stands — the part and the task
- [ ] Step 4: What happened — the session read, the unverified named
- [ ] Step 5: What comes next — the task's own files read
- [ ] Step 6: The session for this conversation — SES-NNN in hand
- [ ] Step 7: The brief — posted, the entire reply
- [ ] Step 8: Route
```

**Step 1: Arguments.** `PLAN-NNN` and `docs/plan/PLAN-NNN-*.md` exists → continue with it.
`PLAN-NNN` and no such file, or a description and no id → a new plan: run the Planning Process
above, write it where the project keeps plans with every part `> Status: planned`, add it to the
PRD's Plans table, and stop — nothing below applies until a part starts. Nothing at all →
`docs/sessions/README.md`'s index names the sessions `in progress` and the plan part each serves:
one → continue with that plan; several → ask which with the `ask-user-question` skill, one option
per plan with its part and that session's Goal; none → say so and ask what to plan. Done when one
plan file is in hand, or a new plan is written.

**Step 2: Order.** The root `CLAUDE.md`'s rehydrate section, where the repo has one, names the
files and the order; otherwise: `docs/OVERVIEW.md` (or the README's status section) → the plan →
the PRD its status line cites → the session → `CONTEXT.md` (`CONTEXT-MAP.md` first when there is
one). Every file named is read to its last line; a truncated read continues with `offset`. Done
when the order is known and its first file is read.

**Step 3: Where it stands.** Read the plan in full, then the PRD it cites. The first part whose
status line says `in progress` is the part; with none, the first `planned` part. Its first
unticked task is the next move — tasks are listed in execution order, and a task's number is its
name, so file order wins over number. Done when the part, the task and the status line's
`SES-NNN` (if any) are named.

**Step 4: What happened.** The part's status line names `SES-NNN`. Read
`docs/sessions/SES-NNN-*.md` in full: the Narrative, then the entries newest-first, then every
file the last entries name. What is unverified is what the entries' `Notes` lines say is
unverified; what was tried and abandoned is in the Narrative. A part still `planned` has no
session; the previous part's session, if any, says how things were left. Done when the last
entry's sha, its Notes and the Narrative's last paragraph are in hand.

**Step 5: What comes next.** Everything the next task names: the ADRs (settled — a change needs
a superseding ADR), the analyses, the files, the directory's own `CLAUDE.md`. Done when every
file the task names is read to its last line.

**Step 6: The session for this conversation.** The part `in progress` → its `SES-NNN` is the id
every `log` in this conversation uses (`/brain:session log SES-NNN`). The part `planned` → start
one: call the Skill tool with `skill: brain:session` and `args: start <a description drawn from
the part> --plan "PLAN-NNN · part N"`; the skill writes the file and the part's status line. A
question, a review, a check — nothing will change — starts nothing. Done when `SES-NNN` is in
hand, or "none" is stated with the reason.

**Step 7: The brief** — the whole reply, nothing before it or after it. ALWAYS use this exact
template structure — square brackets mark what you write, every line present, under ~1,200
characters (one clause per line; the session file and the Narrative hold the detail):

```text
Released: [vX.Y.Z (date, sha)]
Unreleased on main: [commits since the last release marker]
Parked: [branch — what, verified or not]
Findings: [branch/tree/sessions observations, or "clean"]
Open / unverified: [what the log names as unverified]
Plan: [PLAN-NNN · part — its status before this conversation] | none
Next: [item] — first step: [the first move]
Question: [one clause, at most one question, or omit the line]
Session: [SES-NNN — its Goal | SES-NNN started — its Goal] | none — nothing to record yet
read in full: [every file from steps 2–5]
```

Findings come from `git branch --show-current`, `git status --short` and the sessions index — an
unexpected branch, a dirty tree, another session's unfilled placeholders, a commit newer than the
last entry with no entry. Report them; tidy nothing.

**Step 8: Route.** The next task → `/brain:build` with the plan's path; a decision the task needs
→ `/brain:grill-with-docs`; a question → answer it from what you read, and start no session.

### Verification

- [ ] Every file named in steps 2–5 was read to its last line
- [ ] The part and task in the brief are the first `in progress` part and its first unticked task
- [ ] `SES-NNN` in the brief is the one the part's status line names, or the one just started
- [ ] The brief is the entire reply

## Parallelization Opportunities

When multiple agents or sessions are available:

- **Safe to parallelize:** Independent feature slices, tests for already-implemented features, documentation
- **Must be sequential:** Database migrations, shared state changes, dependency chains
- **Needs coordination:** Features that share an API contract (define the contract first, then parallelize)

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "I'll figure it out as I go" | That's how you end up with a tangled mess and rework. 10 minutes of planning saves hours. |
| "The tasks are obvious" | Write them down anyway. Explicit tasks surface hidden dependencies and forgotten edge cases. |
| "Planning is overhead" | Planning is the task. Implementation without a plan is just typing. |
| "I can hold it all in my head" | Context windows are finite. Written plans survive session boundaries and compaction. |
| "I'll read `git log` to see where things stand" | Git says what changed. The plan says where the work stands and the session says what was verified and what was abandoned. Read those; a sha is the join key, not the story. |

## Red Flags

- Starting implementation without a written task list
- Writing `tasks/todo.md` when the project has designated an external tracker (or scattering tasks across both)
- Tasks that say "implement the feature" without acceptance criteria
- No verification steps in the plan
- All tasks are XL-sized
- No checkpoints between tasks
- Dependency order isn't considered

## Verification

Before starting implementation, confirm:

- [ ] Every task has acceptance criteria
- [ ] Every task has a verification step
- [ ] Task dependencies are identified and ordered correctly
- [ ] Tasks are recorded in the task list target (default `tasks/todo.md`)
- [ ] No task touches more than ~5 files
- [ ] Checkpoints close each part, and each part carries its `> Status:` line (`planned` at first)
- [ ] The human has reviewed and approved the plan

## See Also

Acceptance criteria are per-task and answer "did we build the right thing?". They sit on top of the project-wide Definition of Done, the standing bar every task clears before it counts as done. See `~/.claude/references/definition-of-done.md`.
