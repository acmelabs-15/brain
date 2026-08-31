---
name: implement
description: "Implements work from a plan or tickets in small verified increments: thin vertical slices, each tested, built and committed before the next; simplicity and scope discipline at the point of writing code; the Definition of Done's Correctness and Quality checks at every task tick. Use when implementing any feature or change that touches more than one file, when picking up the next task from a plan or a ready-for-agent ticket, when about to write a large amount of code at once, or when told 'implement this', 'build the next task', or 'ship it in thin slices behind a feature flag'."
allowed-tools: Bash(cat:*)
---


!`cat "${CLAUDE_PLUGIN_ROOT}/references/read-the-glossary.md"`

# Implement

## Overview

Deliver the work a plan or ticket describes, in increments that are each verified before the
next begins. The plan decided what and in which order; this skill is the discipline of building
it without leaving the system broken, the scope crept, or the record behind. `/brain:build`
executes this doctrine task by task; invoked directly, follow it the same way.

## What you are consuming

A task or ticket arrives under the consumption contract: it states the end-to-end behaviour to
build, its acceptance criteria, and what blocks it — durable ones name interfaces and contracts,
never file paths (the freshness dial; `triage`'s AGENT-BRIEF.md carries the rules), so explore
the codebase fresh rather than trusting any path that has sat in a backlog. A task too big for
its grain — it cannot land in one fresh context window, or its criteria will not fit three
bullets — goes back to `planning-and-task-breakdown`; do not slice it ad hoc here.

## Discover the stack first

Before the first test or build, discover how *this* repository works and use its commands
throughout: the build system and checked-in wrappers, the test framework and how it runs one
focused test vs the full suite, where tests live, what CI actually gates on. Never assume a
default like `npm test`. After a clean run, never re-run the same command on unchanged code —
it adds no information.

## The increment cycle

For each slice: **implement** the smallest complete piece → **test** (`test-driven-development`
carries the loop — RED before GREEN where possible, at the seams the spec pre-agreed) →
**verify** (focused tests during the loop; typecheck regularly; the full suite once at the end
of the task, not after every slice) → **commit** with a descriptive message → next slice,
carrying forward. Keep the project compilable between increments; feature-flag work that must
merge before it is user-ready; default new code to safe, conservative behavior; keep every
increment independently revertable (additive where possible, migrations with rollbacks, never
delete-and-replace in one commit).

## The rules at the point of writing code

**Simplicity first.** Before writing: what is the simplest thing that could work? After:
fewer lines possible? abstractions earning their complexity? building for the current task or
a hypothetical future? Three similar lines beat a premature abstraction; the naive
obviously-correct version first, optimization only after correctness is proven.

**Scope discipline.** Touch only what the task requires. No drive-by cleanups, import
refactors, comment removals, syntax modernizing, or seems-useful features. Note what you
noticed and did not touch, and offer to file tasks for it:

```
NOTICED BUT NOT TOUCHING:
- src/utils/format.ts has an unused import (unrelated to this task)
→ Want me to create tasks for these?
```

**One thing at a time.** Each increment changes one logical thing; a new component, a refactor
and a config change are three commits, not one.

## The gates — the Definition of Done's tiers

- **At every task tick**: the Correctness and Quality sections of
  `~/.claude/references/definition-of-done.md` — behavior verified at runtime, new behavior
  covered by tests that fail without it, no regressions, intent-revealing names, no dead code
  or debug output, changes scoped to the task, lint and format clean.
- **At a part's checkpoint**: its Integration and Documentation sections.
- **At the plan's close**: the converge re-read — the whole document against the built work,
  the full checklist as the floor (`/brain:build` carries the procedure).

## When something breaks

Stop the line — no pushing past a failing test or broken build to the next slice. Follow
`diagnosing-bugs`: build a tight feedback loop first, fix at the root cause, guard with a
regression test at a correct seam. For a high-risk decision mid-task (irreversible operations,
auth, migrations, payments), run `doubt-driven-development` before it stands.

## Done

A task is done when its acceptance criteria are met AND the tick's DoD gate passes; then
`/code-review` or the Review stage takes it. Where the repo keeps a session log, the tick cites
the commit's sha and lands in the docs(session) commit (`/brain:session log`).

## Common Rationalizations

| Rationalization | Reality |
|---|---|
| "It's faster to do it all at once" | It feels faster until something breaks and you can't find which of 500 changed lines caused it. |
| "These changes are too small to commit separately" | Small commits are free. Large commits hide bugs and make rollbacks painful. |
| "This refactor is small enough to include" | Refactors mixed with features make both harder to review and debug. |
| "I'll test it all at the end" | Bugs compound: a bug in slice 1 makes slices 2–5 wrong. Verify each slice. |
| "The ticket names the file, I'll just edit it" | A ticket that sat for weeks names a codebase that no longer exists. Explore fresh; trust interfaces, not paths. |
| "Sunk effort means we should land the big batch" | Two days of unverified draft is not a reason to commit it whole; decompose it into verified slices — the effort survives as extracted pieces. |
| "Run it again to be sure" | A clean run on unchanged code adds nothing. Run again after edits, not as reassurance. |

## Red Flags

- More than ~100 lines written without running a test
- The full suite run after every slice (it belongs at the task's end), or never
- A task consumed by editing the exact paths a stale ticket named
- Multiple unrelated changes in one increment; uncommitted changes accumulating
- A tick without the Correctness + Quality gate
- Slicing an oversized task here instead of returning it to the planner
- Pushing past a red test to the next slice

## Verification

- [ ] Every increment was individually verified and committed; the project compiled throughout
- [ ] The repository's own commands were discovered and used; no redundant re-runs
- [ ] The full suite and build ran clean at the task's end
- [ ] The tick's DoD gate (Correctness + Quality) passed before the task was marked done
- [ ] Scope stayed inside the task; noticed-but-not-touched items were offered as tasks
- [ ] The feature works end-to-end as the task's behaviour statement describes

## Keeping the domain model current

When a term is resolved or a decision recorded while this skill runs, call the Skill tool for `domain-modeling` and update `CONTEXT.md` right there — it creates the file lazily and keeps it a glossary, not a spec. Do not batch terms for the end.
