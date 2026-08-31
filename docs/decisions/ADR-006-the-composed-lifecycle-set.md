# ADR-006: The composed lifecycle set — Define, Plan and Build rebuilt from both lineages' best parts

> Status: accepted · 2026-08-31 · decided by Peter in two `ask-user-question` rounds (PLAN-003
> Part 4, PLAN-004 Part 4), one question at a time · evidence: ANA-008 (Define/Plan overlap),
> ANA-009 (Define/Plan composition), ANA-010 (Build overlap), ANA-011 (Build composition) ·
> the contract these decisions serve is [PRD-002](../plan/PRD-002-lifecycle-composition.md) ·
> refines ADR-005 decision 6 (the interrogation merge's shape is now settled here); resolves
> PLAN-001 Part 5's shape-2 question (the spec shape dissolves into one skill with two
> renderings); ANA-009's open decision 6 became PLAN-004 and is decided here

## Context

Both lineages built Define → Plan → Build in parallel: Addy's monolithic phase skills with
checklists, Matt's small composing skills with the tracker as shared state. The overlap is
real at every grain the analyses measured — one loop in three grains, one task/ticket artifact
in two renderings, complementary rule-sets with no conflicting cell. Peter's standing rules
for the rounds: the best decision, never the incumbent or the cheap one; the merit test for a
name — *does it say the merged job in the words you would invoke it with*; one question at a
time through `brain:ask-user-question`.

## Decisions

**D1 — the plan unit's word stays `part`** (delegated: "whatever word is the best"; decided on
merit). *stage* is taken by Peter's lifecycle grain; *phase* claims a temporal sequence the
record contradicts (PLAN-001 Part 5 on hold while Part 6 is planned); the glossary already
lists *phase*, *step*, *milestone* under `_Avoid_`; zero churn. Reverses if plan units ever
become strictly sequential by rule. Alternatives rejected: rename to *phase* (the upstream
heading word, Peter's withdrawn hedge); *phase* forward-only (mixed live vocabulary — the
failure the glossary exists to prevent).

**D2 — `idea-refine` stays standalone**; the interrogation skill hands vague asks to it (the
edge `interview-me:182` already carries). It gains the decrees. Riders from `wayfinder`, both
into the interrogation skill: the **prototype move** (a cheap reactable artifact when the
question is "how should it look/behave") and the **fog-or-ticket sharpness test** (park what
you cannot yet phrase precisely; ask only what you can). `wayfinder` itself stays the
bigger-than-one-session outrider. Alternatives rejected: absorb (trigger dilution — one
description firing on "interview me" and "ideate"); copy the lenses (two drifting homes — the
failure ADR-005 decision 4 removed).

**D3 — rendering selection is the existing resolution order** (`~/.claude/references/
issue-tracker.md`: repo tracker doc → evident convention, a populated `docs/plan/` PRD/PLAN
series included → default, ask only when genuinely open). Decided on evidence, not asked: the
mechanism exists and four skills already consult it. Changes course only if the no-convention
default should become the docs system — a one-line edit to that reference.

**D4 — the names, by the merit test.** `interview-me` and `planning-and-task-breakdown` keep
their names (each says its merged job in invocation words). `spec-driven-development` is
renamed — it names a methodology while the merged skill writes requirements and develops
nothing; the new name is chosen and trigger-measured at implementation. The merged
implementation skill is **`implement`** (the job's own verb; Matt's 16-line skill retires into
the merge, freeing the name); `incremental-implementation` retires to a pointer stub — it
names one method inside the job, the same mismatch. The merged debugging skill is
**`diagnosing-bugs`** (one job in the words said aloud; its loop-first spine is the merged
identity); `debugging-and-error-recovery` retires to a pointer stub — a two-concept "and"
name. Every retired skill becomes a pointer stub, never a live duplicate (two skills claiming
one trigger space route unpredictably). Alternatives rejected: keep-all-names (cost-anchored —
Peter struck the framing twice); rename-all (the surviving names already pass the test).

**D5 — the Definition of Done's tiers become real gates in `/brain:build`** (Peter's reading
of § How to Apply, confirmed against the reference): the task tick gates Correctness +
Quality; the plan part's checkpoint gates Integration + Documentation; the plan close runs
**converge** — re-read the spec and plan against the built work, the full checklist as the
floor, every miss appended to the plan as a task, then the Review-stage handoff. ANA-010
measured the gap: Quality and the whole per-feature tier are gated by nothing today. And the
**references are artifacts of the synthesis**: `definition-of-done.md` is rewritten to name
these structures; the same rule applies to any reference the composed set leans on.
Alternative rejected: a single end-of-plan check only (the weaker shape the tiers replace).

**D6 — concurrency is a mode of `/brain:build`**, not a second surface: implement-spec's
worktree fan-out (implementer subagents in worktrees, mergers, one PR per spec), with the
frontier derived from the deps graph at both grains — parts and their tasks both declare
dependencies — rendered as Claude Code tasks with native dependencies (Peter's rider). It
lands only behind a **verify-first task** (the worktree semantics and the
agent-teams-consume-task-deps claim are unverified). Alternative rejected: implement-spec
standing alone (two Build surfaces claiming one job — the split D4 just removed).

**D7 — `/build auto`'s artifact discovery aligns with the resolution order** (decided on
evidence): its known-paths list predates the docs system and cannot see `docs/plan/`
PRD/PLAN — the executor must read what the planner writes; the order's fallbacks keep
no-convention repos working.

**D8 — the program's contract is [PRD-002](../plan/PRD-002-lifecycle-composition.md)** ("lets
go with your recommendation"): three stages and five plans of work earn their own requirements
document; PRD-001 stays the session system's. Alternatives rejected: requirement 13 in PRD-001
(scope stretch in the contract itself); no contract (the promise scattered across analyses).

## Consequences

- PLAN-003 Part 5 and PLAN-004 Part 5 carry the implementation, written at this ADR;
  PLAN-002 Part 5 Task 5 (the interrogation skill) merges into the S1 build; PLAN-001 Part 6's
  sweep retires the superseded sources last — each file edited once.
- The standing bar throughout: descriptions trigger-measured against their old rates,
  procedures headless-rendered, the session ritual untouched, `session check` green.
- The deferred spec-shape and PRD-home questions are closed; ADR-005 decision 6's
  "implementation after PLAN-003" clause is discharged by D2/D4's shape.
