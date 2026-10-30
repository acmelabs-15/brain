---
name: using-brain
description: Routes a piece of work to the brain skill that fits it: the stateful interview, the main flow from idea to ship, the prototype detour and the vocabulary layer. Use at session start, when resuming work, when unsure which skill or command applies, or at a stage boundary to choose continue, clear, handoff, sub-agent or compact. Names setup-brain as the once-per-repo precondition.
---

# Using brain

## Overview

brain's skills are engineering workflows organized by lifecycle stage: define, plan, build, verify, review and ship. Each skill encodes a process that senior engineers follow. This meta-skill routes the work at hand to the right one.

Most work travels one **main flow**: idea to ship. A **vocabulary layer** runs underneath every skill. The rest is standalone.

## Precondition

Run setup-brain once per repo, before the first flow. It writes `docs/agents/workspace.md`, `docs/agents/capabilities.md`, `docs/agents/domain.md` and the `docs/STATUS.md` seed, and for Codex the plain-talk and protocol blocks. Running it again is safe, and `--check` reports drift without writing.

## Skill Discovery

When a task arrives, identify the situation and apply the corresponding skill:

```
Task arrives
    │
    ├── First brain skill in this repo? ────→ setup-brain (once per repo)
    ├── Starting or resuming a session? ────→ status (the protocol's session start, `brain status`)
    │
    │   MAIN FLOW: idea → ship
    ├── Don't know what you want, or too big for one session? → interview-me (a stateful map)
    │   ├── A question needs a runnable answer? → prototype (a prototype row)
    │   └── A research row on the frontier? ───→ source-driven-development (in the researcher agent)
    ├── Have a rough concept, need variants? → idea-refine (in an interview, it resolves ideate rows)
    ├── New project/feature/change? ──→ spec-driven-development
    ├── No quality bar written down? ──→ constraint-driven-development
    ├── Have a spec, need tasks? ──────→ planning-and-task-breakdown
    ├── Implementing code? ────────────→ incremental-implementation
    │   ├── UI work? ─────────────────→ frontend-ui-engineering
    │   ├── API work? ────────────────→ api-and-interface-design
    │   ├── A module's shape or seam? → codebase-design
    │   ├── Need better context? ─────→ context-engineering
    │   ├── Need doc-verified code? ───→ source-driven-development
    │   └── Stakes high / unfamiliar code? ──→ doubt-driven-development
    ├── Writing/running tests? ────────→ test-driven-development
    │   └── Browser-based? ───────────→ browser-testing-with-devtools
    ├── Something broke? ──────────────→ debugging-and-error-recovery
    ├── Reviewing code? ───────────────→ code-review-and-quality
    │   ├── Too complex? ─────────────→ code-simplification
    │   ├── Security concerns? ───────→ security-and-hardening
    │   └── Performance concerns? ────→ performance-optimization
    ├── Committing/branching? ─────────→ git-workflow-and-versioning
    ├── CI/CD pipeline work? ──────────→ ci-cd-and-automation
    ├── Deprecating/migrating? ────────→ deprecation-and-migration
    ├── Recording a decision? ─────────→ domain-modeling (a DEC file through `brain new-doc`)
    ├── Writing a README or API docs? ─→ documentation-and-adrs
    ├── Adding logs/metrics/alerts? ───→ observability-and-instrumentation
    ├── Deploying/launching? ──────────→ shipping-and-launch
    │
    │   VOCABULARY LAYER: underneath every skill
    ├── A fuzzy or overloaded domain term? ───→ domain-modeling
    ├── A message that did not land? ─────────→ wait-what
    ├── Writing a skill, AGENTS.md, CLAUDE.md? → writing-for-agents
    │
    └── A decision that is the user's, in any skill → ask-user-question
```

### Every decision

A decision that is the user's goes through the host's user-question tool, one question per call. Call the Skill tool with "ask-user-question" to compose it. Small reversible choices stay with you: decide them and state the reason.

### The interview

interview-me is always stateful. In a repo it keeps the map in `docs/ideas/IDEA-NNN-<slug>.md`, which `brain new-doc IDEA` creates. Each row of the map is one question of one of three types:

- a decide row, which the user resolves;
- a research row, which a sub-agent resolves by finding facts and citing their sources;
- a do row, which the agent or the user resolves by doing work that a later decision needs.

Each decision goes to a DEC file the moment the user makes it, each finding to a RES file, and each new term to `GLOSSARY.md`. After every resolved row, interview-me works out the map again and writes it to disk. Only the main session writes the map. A session ends only between rows, and the next session resumes from the idea's `status` and the frontier of its map.

A research row runs in a sub-agent: the `researcher` agent on Claude Code, the general-purpose agent on the other hosts. Its brief is in interview-me's `RESEARCH.md`, and its method is source-driven-development.

With no repo (a plan, a design, a piece of writing) the map lives in the conversation, and the agent says so. Facts are your job: look them up, and put only decisions to the user.

### The prototype detour

Some questions need a runnable answer: a state model, business logic, a UI you have to see. Such a question is a prototype row in the map. Run prototype to answer it with throwaway code. The user's pick becomes a DEC file that links the prototype's branch. Run handoff out and back only when the prototype lives in another directory or harness. Reach for prototype any time a design question is hard to settle on paper.

### The vocabulary layer

Domain words come from `GLOSSARY.md` through `docs/agents/domain.md`. A concept the glossary lacks is a gap to note for domain-modeling, the skill that sharpens a fuzzy term, resolves an overloaded word and records each decision as a DEC file, whose three tests set its kind. codebase-design is the deep-module vocabulary (module, interface, depth, seam) for designing a module's shape; test-driven-development and code-review-and-quality speak it. wait-what is the repair for a message that did not land: the agent re-pitches it in plain words from the glossary, mid-conversation, inside any skill.

## Stage Boundaries

The files carry the work, not the window. Each of these is on disk the moment it exists:

- the map, which interview-me writes again after every row;
- a DEC file for each decision, and a RES file for each finding;
- the spec, which spec-driven-development writes from the map and those records;
- the plan's rows and `docs/STATUS.md`, which the build updates after every task.

So a session may end between two rows or after any completed task, when the context budget runs low (context-engineering). The next session reads the files and resumes.

At a stage boundary, and between two tasks of a build, choose one of five moves in this order: continue, clear, handoff, sub-agent, compact. The first yes wins. Continue costs nothing and loses nothing, so rule it out first. Compact is the default at the bottom of the tree, not the first reach. Inside a row or a task, continue or split the rest into sub-agents. The ordered tree, the five questions and the reasoning behind each are in `../../references/brain/stage-boundaries.md`.

The smart zone is the window (about 150k tokens on current models) in which the model still reasons sharply. When a session nears its end, finish the row or task in hand, check that its result is on disk, and make the move at that boundary.

## Core Operating Behaviors

These behaviors apply at all times, across all skills. They are non-negotiable.

### 1. Surface Assumptions

Before implementing anything non-trivial, explicitly state your assumptions:

```
ASSUMPTIONS I'M MAKING:
1. [assumption about requirements]
2. [assumption about architecture]
3. [assumption about scope]
```

Then end with one question through the question tool: do these hold, or which one is wrong? Wait for the answer.

Don't silently fill in ambiguous requirements. The most common failure mode is making wrong assumptions and running with them unchecked. Surface uncertainty early; it is cheaper than rework.

### 2. Manage Confusion Actively

When you encounter inconsistencies, conflicting requirements, or unclear specifications:

1. **STOP.** Do not proceed with a guess.
2. Name the specific confusion.
3. Inspect first: the spec, the code, the tests, the glossary. Facts are your job, and most confusion clears here.
4. Ask only the trade-off that inspection left open, one question through the question tool.
5. Wait for the answer before continuing.

**Bad:** Silently picking one interpretation and hoping it's right.
**Good:** "The spec says X, the code does Y, and no test covers it. Which takes precedence?"

### 3. Push Back When Warranted

You are not a yes-machine. When an approach has clear problems:

- Point out the issue directly
- Explain the concrete downside (quantify when possible: "this adds ~200ms latency", not "this might be slower")
- Propose an alternative
- Accept the human's decision if they override with full information

Sycophancy is a failure mode. "Of course!" followed by implementing a bad idea helps no one. Honest technical disagreement is more valuable than false agreement.

### 4. Enforce Simplicity

Your natural tendency is to overcomplicate. Actively resist it.

Before finishing any implementation, ask:
- Can this be done in fewer lines?
- Are these abstractions earning their complexity?
- Would a staff engineer look at this and say "why didn't you just..."?

If you build 1000 lines and 100 would suffice, you have failed. Prefer the boring, obvious solution. Cleverness is expensive.

### 5. Maintain Scope Discipline

Touch only what you're asked to touch.

Do NOT:
- Remove comments you don't understand
- "Clean up" code orthogonal to the task
- Refactor adjacent systems as a side effect
- Delete code that seems unused without explicit approval
- Add features not in the spec because they "seem useful"

Your job is surgical precision, not unsolicited renovation.

### 6. Verify, Don't Assume

Every skill includes a verification step. A task is not complete until verification passes. "Seems right" is never sufficient: there must be evidence (passing tests, build output, runtime data).

Per-skill verification is the local check. The project-wide bar that applies to *every* change, regardless of which skill is active, is the Definition of Done: tests pass, no regressions, behavior verified at runtime, docs updated. See `../../references/definition-of-done.md`. It complements each task's acceptance criteria rather than replacing them.

### 7. Record As You Go

Write each result to disk the moment it exists: a DEC file when the user decides, the finding in its RES file when it is confirmed, and the row update right after. A session can end at any boundary, and the next session knows only what the files hold.

## Failure Modes to Avoid

These are the subtle errors that look like productivity but create problems:

1. Making wrong assumptions without checking
2. Not managing your own confusion: plowing ahead when lost
3. Not surfacing inconsistencies you notice
4. Not presenting tradeoffs on non-obvious decisions
5. Being sycophantic ("Of course!") to approaches with clear problems
6. Overcomplicating code and APIs
7. Modifying code or comments orthogonal to the task
8. Removing things you don't fully understand
9. Building without a spec because "it's obvious"
10. Skipping verification because "it looks right"

## Skill Rules

1. **If a task matches a skill, you MUST invoke it.** Check before you start work. When there is even a 1% chance that a skill applies, load it before your first action, and follow it. Skills encode processes that prevent common mistakes, and a skill that turns out not to fit costs one read. Each of these thoughts means that a skill is about to be skipped. When you catch one, load the skill:

   | Thought | Reality |
   |---|---|
   | "This is too small for a skill" | A small change is where a stale pattern or a skipped check slips in. The skill is short to read; the mistake is not short to find. |
   | "I can just quickly implement this" | The skill holds the steps you would otherwise rebuild from memory, or skip. Loading it is the quick path. |
   | "I'll gather context first" | The skill says which context to gather and how. Load it, then explore. |

2. **Skills are workflows, not suggestions.** Follow the steps in order. Don't skip verification steps.

3. **Multiple skills can apply.** A feature implementation might involve `idea-refine` → `spec-driven-development` → `planning-and-task-breakdown` → `incremental-implementation` → `test-driven-development` → `code-review-and-quality` → `code-simplification` → `shipping-and-launch` in sequence.

4. **When what is wanted is unclear, start with interview-me; when it is clear, start with the spec.** A non-trivial task with no spec starts in one of the two: interview-me charts the map, and spec-driven-development writes the spec from it.

## Lifecycle Sequence

A feature travels the six stages in order. The files carry it from each stage to the next, so each line says what the stage leaves on disk. Folder paths come from `docs/agents/workspace.md`.

1. Define: the map in `docs/ideas/IDEA-NNN-<slug>.md`, a DEC file for each decision from the first question on, a RES file for each finding, then `spec.md` in `docs/specs/SPEC-NNN-<slug>/`.
2. Plan: the rows of `tasks/plan.md` and the blocks of `tasks/todo.md`, in the spec folder.
3. Build: one commit per task, and the task's row resolved in `plan.md`.
4. Verify: a feedback loop that goes red on the bug, then the fix and its regression test.
5. Review: one ranked list of findings and one verdict.
6. Ship: the release, with its monitoring and its rollback plan.

Not every task needs every stage. A bug fix might need only debugging-and-error-recovery, test-driven-development and code-review-and-quality.

spec-driven-development numbers its own stages 0 to 4, and they span three lifecycle stages. Its Stages 0 and 1 (scope check, specify) are the define stage. Its Stages 2 and 3 (plan, tasks) are the plan stage, where planning-and-task-breakdown is the canonical source. Its Stage 4 (implement) is the build stage, which incremental-implementation and test-driven-development carry.

### The combined skills and their commands

Eight skills carry the stages and keep addy's names: interview-me, spec-driven-development, planning-and-task-breakdown, incremental-implementation, test-driven-development, debugging-and-error-recovery, code-review-and-quality and this one. The skill is the discipline on every host. On the hosts that have commands, the command is the entry point and calls the skill.

| Stage | Skill | Claude Code command | Gemini CLI command | Codex, Antigravity |
|---|---|---|---|---|
| Define | interview-me, spec-driven-development | `spec` | `/spec` | the skill by name |
| Plan | planning-and-task-breakdown | `plan` | `/planning` | the skill by name |
| Build | incremental-implementation, test-driven-development | `build` | `/build` | the skill by name |
| Verify | debugging-and-error-recovery | `test` | `/test` | the skill by name |
| Review | code-review-and-quality | `review` | `/review` | the skill by name |
| Ship | shipping-and-launch | `ship` | `/ship` | the skill by name |
| Any | status | the skill, shown as `/brain:status` | `/status` | the skill by name |

In Claude Code every command sits under the plugin prefix: type `/brain`, a colon and the command name. Claude Code shows a plugin skill as a command too, so the status skill is `/brain:status`. Gemini CLI reads the TOML files in `commands/` and names each command after its file. Codex has no slash commands: invoke the skill with a dollar sign, `$spec-driven-development`. Antigravity lists the skills under the plugin prefix, the way Claude Code lists the commands. `constraints`, `webperf` and `code-simplify` are the same commands on both hosts. On a host with no session-start hook, status is how the user or the agent gets the state of the work.

## Quick Reference

| Stage | Skill | One-Line Summary |
|-------|-------|-----------------|
| Setup | setup-brain | The workspace, capabilities and domain files and the `STATUS.md` seed, once per repo; `--check` reports drift |
| Any | status | Where the work stands in five lines: stage, last step, next step, red items, decisions waiting on the user |
| Define | interview-me | A stateful map across sessions, one question per row, until the destination is clear |
| Define | idea-refine | Refine ideas through structured divergent and convergent thinking; resolves ideate rows |
| Define | prototype | Throwaway code that answers one design question, as a prototype row in the map |
| Define | spec-driven-development | Requirements and acceptance criteria before code, in the spec folder |
| Define | constraint-driven-development | The quality bar as a written contract in `CONSTRAINTS.md`, and a diff that keeps it |
| Plan | planning-and-task-breakdown | Decompose into small, verifiable tasks: plan rows and todo blocks |
| Build | incremental-implementation | Thin vertical slices, test each before expanding |
| Build | source-driven-development | Verify against official docs before implementing; the method of every research row |
| Build | doubt-driven-development | Adversarial fresh-context review of every non-trivial decision |
| Build | context-engineering | Right context at the right time |
| Build | codebase-design | Deep modules: much behaviour behind a small interface at a clean seam |
| Build | frontend-ui-engineering | Production-quality UI with accessibility |
| Build | api-and-interface-design | Stable interfaces with clear contracts |
| Verify | test-driven-development | Failing test first, then make it pass |
| Verify | browser-testing-with-devtools | Chrome DevTools MCP for runtime verification |
| Verify | debugging-and-error-recovery | Reproduce → localize → fix → guard |
| Review | code-review-and-quality | Five-axis review with quality gates |
| Review | code-simplification | Preserve behavior while reducing unnecessary complexity |
| Review | security-and-hardening | OWASP prevention, input validation, least privilege |
| Review | performance-optimization | Measure first, optimize only what matters |
| Ship | git-workflow-and-versioning | Atomic commits, clean history |
| Ship | ci-cd-and-automation | Automated quality gates on every change |
| Ship | deprecation-and-migration | Remove old systems and migrate users safely |
| Ship | documentation-and-adrs | Docs that record the why; each decision goes to a DEC file |
| Ship | observability-and-instrumentation | Structured logs, RED metrics, traces, symptom-based alerts |
| Ship | shipping-and-launch | Pre-launch checklist, monitoring, rollback plan |
| Any | ask-user-question | One decision per call through the host's user-question tool |
| Any | handoff | A portable file that seeds a session in a new harness, directory or colleague's hands |
| Any | domain-modeling | Glossary terms and DEC files: sharpen a term, resolve an overloaded word, record a decision |
| Any | wait-what | Re-pitch a message that did not land, in the glossary's words |
| Any | writing-for-agents | How to write a skill, an AGENTS.md or a pointed-at doc |
