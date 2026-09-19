---
name: using-brain
description: Routes a piece of work to the brain skill that fits it: the main flow from interview to ship, the triage and wayfinder on-ramps, the prototype detour and the vocabulary layer. Use at session start, when unsure which skill or command applies, or at a phase boundary to choose continue, clear, handoff, sub-agent or compact. Names setup-brain as the once-per-repo precondition.
---

# Using brain

## Overview

brain's skills are engineering workflows organized by development phase. Each skill encodes a process that senior engineers follow. This meta-skill routes the work at hand to the right one.

Most work travels one **main flow**: idea to ship. Two **on-ramps** merge onto it. A **vocabulary layer** runs underneath every skill. The rest is standalone.

## Precondition

Run setup-brain once per repo, before the first flow. It writes the plain-talk block and the domain docs layout that the other skills assume. Running it again is safe.

## Skill Discovery

When a task arrives, identify the situation and apply the corresponding skill:

```
Task arrives
    │
    ├── First brain skill in this repo? ────→ setup-brain (once per repo)
    │
    │   MAIN FLOW: idea → ship
    ├── Don't know what you want yet? ──────→ interview-me
    │   └── A question needs a runnable answer? → handoff → prototype → handoff (the detour)
    ├── Have a rough concept, need variants? → idea-refine
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
    ├── Writing docs/ADRs? ───────────→ documentation-and-adrs
    ├── Adding logs/metrics/alerts? ───→ observability-and-instrumentation
    ├── Deploying/launching? ─────────→ shipping-and-launch
    │
    │   ON-RAMPS: work that arrives, then merges onto the main flow
    ├── Issues or PRs you did not write? ─────→ triage → briefs for incremental-implementation
    ├── Too big for one session, way unclear? → wayfinder → map → spec-driven-development
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

In a repo, interview-me is stateful. It writes what it learns to `CONTEXT.md`, ADRs and `docs/intent/`, so later sessions inherit it. With no repo (a plan, a design, a piece of writing) the same interview runs stateless and saves nothing. Facts are your job: look them up, and put only decisions to the user.

### The prototype detour

Some questions need a runnable answer: a state model, business logic, a UI you have to see. Then detour. Run handoff out, open a fresh session against that file, run prototype to answer the question with throwaway code, then run handoff back and reference what you learned from the original thread. Reach for prototype any time a design question is hard to settle on paper.

### The on-ramps

triage is for issues and PRs the user did not write: bug reports, incoming feature requests, anything that arrives raw. It moves them through triage states and writes agent-ready briefs that incremental-implementation picks up later. Tasks that planning-and-task-breakdown wrote are already agent-ready, so do not triage them.

wayfinder is for an effort too big for one session, where the way to the destination is not visible yet. It charts a shared map of decision tickets and resolves them one per session. It produces decisions, not code. When the map clears it hands off to spec-driven-development, which collapses the decisions into a spec. An idea one session can hold goes to interview-me instead.

### The vocabulary layer

Domain words come from `CONTEXT.md` through `docs/agents/domain.md`. A concept the glossary lacks is a gap to note for domain-modeling, the skill that sharpens a fuzzy term, resolves an overloaded word and records a hard-to-reverse decision as an ADR. codebase-design is the deep-module vocabulary (module, interface, depth, seam) for designing a module's shape; test-driven-development and code-review-and-quality speak it. wait-what is the repair for a message that did not land: the agent re-pitches it in plain words from the glossary, mid-conversation, inside any skill.

## Phase Boundaries

A phase is a chunk of work inside a session: the interview, the spec, the plan, a task, the review. At the boundary between two phases choose one of five moves, in this order: continue, clear, handoff, sub-agent, compact. The first yes wins. Continue costs nothing and loses nothing, so rule it out first. Compact is the default at the bottom of the tree, not the first reach. Make the choice at a boundary; mid-phase, continue or split the rest into sub-agents. The ordered tree, the five questions and the reasoning behind each are in `../../references/brain/phase-boundaries.md`.

Two window rules:

- Keep define through plan in one unbroken window. The interview, the spec and the plan build on the same thinking, so compact or clear only after the plan is approved. Each task then starts in a clean context, working from the plan and the spec.
- The smart zone is the window (about 150k tokens on current models) in which the model still reasons sharply. When a session nears it before the plan is approved, do not push on degraded: compact at the nearest phase boundary with an instruction that names what comes next, and carry on.

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

1. **Check for an applicable skill before starting work.** Skills encode processes that prevent common mistakes.

2. **Skills are workflows, not suggestions.** Follow the steps in order. Don't skip verification steps.

3. **Multiple skills can apply.** A feature implementation might involve `idea-refine` → `spec-driven-development` → `planning-and-task-breakdown` → `incremental-implementation` → `test-driven-development` → `code-review-and-quality` → `code-simplification` → `shipping-and-launch` in sequence.

4. **When in doubt, start with a spec.** If the task is non-trivial and there's no spec, begin with `spec-driven-development`.

## Lifecycle Sequence

For a complete feature, the typical skill sequence is:

```
0.  setup-brain                 → Once per repo, before the first flow
1.  interview-me                → Extract what the user actually wants; stateful in a repo
2.  idea-refine                 → Refine vague ideas
3.  spec-driven-development     → Define what we're building, in SPEC.md or spec/
4.  planning-and-task-breakdown → Break into verifiable chunks, in tasks/plan.md and tasks/todo.md
    (keep 1 to 4 in one unbroken window; each task from 5 on starts in a clean context)
5.  context-engineering         → Load the right context
6.  source-driven-development   → Verify against official docs
7.  incremental-implementation  → Build slice by slice
8.  observability-and-instrumentation → Instrument as you build (runs parallel with 7-9, not after)
9.  doubt-driven-development    → Cross-examine non-trivial decisions in-flight
10. test-driven-development     → Prove each slice works
11. code-review-and-quality     → Review before merge
12. code-simplification         → Reduce unnecessary complexity while preserving behavior
13. git-workflow-and-versioning → Clean commit history
14. documentation-and-adrs      → Document decisions
15. deprecation-and-migration   → Retire old systems and move users safely when needed
16. shipping-and-launch         → Deploy safely
```

Not every task needs every skill. A bug fix might only need: `debugging-and-error-recovery` → `test-driven-development` → `code-review-and-quality`.

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

In Claude Code every command sits under the plugin prefix: type `/brain`, a colon and the command name. Gemini CLI reads the TOML files in `commands/` and names each command after its file. Codex has no slash commands: invoke the skill with a dollar sign, `$spec-driven-development`. Antigravity lists the skills under the plugin prefix, the way Claude Code lists the commands. `constraints`, `webperf` and `code-simplify` are the same commands on both hosts.

## Quick Reference

| Phase | Skill | One-Line Summary |
|-------|-------|-----------------|
| Setup | setup-brain | Plain-talk block and domain docs layout, once per repo |
| Define | interview-me | Surface what the user actually wants before any plan, spec, or code exists; stateful in a repo |
| Define | idea-refine | Refine ideas through structured divergent and convergent thinking |
| Define | prototype | Throwaway code that answers one design question, bridged by handoff |
| Define | spec-driven-development | Requirements and acceptance criteria before code |
| Plan | planning-and-task-breakdown | Decompose into small, verifiable tasks |
| On-ramp | triage | Issues and PRs the user did not write, moved to agent-ready briefs |
| On-ramp | wayfinder | A shared map of decision tickets for work too big for one session |
| Build | incremental-implementation | Thin vertical slices, test each before expanding |
| Build | source-driven-development | Verify against official docs before implementing |
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
| Ship | documentation-and-adrs | Document the why, not just the what |
| Ship | observability-and-instrumentation | Structured logs, RED metrics, traces, symptom-based alerts |
| Ship | shipping-and-launch | Pre-launch checklist, monitoring, rollback plan |
| Any | ask-user-question | One decision per call through the host's user-question tool |
| Any | handoff | A portable file that seeds a session in a new harness, directory or colleague's hands |
| Any | domain-modeling | Sharpen a term, resolve an overloaded word, record an ADR |
| Any | wait-what | Re-pitch a message that did not land, in the glossary's words |
| Any | writing-for-agents | How to write a skill, an AGENTS.md or a pointed-at doc |
