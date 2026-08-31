# Plan: Define and Plan across both lineages — the overlap mapped, the best parts composed

> Status: in progress · Peter, 2026-08-31 ("identify where they overlap, where they don't or they do
> the same things differently, how they compose things differently … then what
> features/functionality is most important to have for the define and plan parts of the
> lifecycle — pulling from both — and … pull the parts from each that make the most sense … and
> compose them into a new set of skills") · serves
> [PRD-001](PRD-001-session-log-and-rehydration.md) requirement 12's one-toolset goal (no
> numbered requirement — see Open questions) · the composition decision is Part 4's, not this
> plan's

## Overview

Both lineages built the same Define → Plan pipeline twice. Addy's: interview-me / idea-refine →
spec-driven-development (which produces the PRD in this docs system) → planning-and-task-breakdown
(tasks with acceptance criteria, optionally into an external tracker). Matt's: grill-with-docs /
wayfinder / research → to-spec (the tracker-published requirements-plus-plan) → to-tickets
(tickets with blocking edges). Peter's stage tables (2026-08-31, in his words) are the frame.
The overlap is real at the task/ticket grain — Addy's task template and Matt's ticket template
are one artifact in two renderings — and the differences split into: the same thing done
differently, capabilities one side lacks, and different composition styles (monolithic phase
skills with defer-to-canonical pointers vs small skills that call each other and subagents).

This plan finishes the evidence (the Matt collection read in full — ANA-006 already holds the
Addy side), maps the overlap (ANA-008), derives what Define and Plan most need and composes the
best parts — at the granularity of sections and mechanisms, never whole-skill-vs-whole-skill —
into a proposed new skill set compatible with the rest of brain (ANA-009), then takes Peter's
decisions into an ADR and implements them.

Method, carried over from PLAN-002 and still in force: one evaluator, full reads, no sampling;
no edit to any evaluated skill before the ADR; upstream drift priced (a composed skill is a
deliberate fork, ledgered by git); every description change measured before it lands.

## Decisions it relies on

- [ADR-005](../decisions/ADR-005-consult-skills-integration.md) — the consult skills stay; the
  decrees (one question at a time, `brain:ask-user-question` first) bind every interrogation
  design here; decision 6's merged interrogation skill is composed *with* this plan's synthesis,
  not before it; the spec-shape question is this plan's to answer properly.
- [ADR-001](../decisions/ADR-001-rehydration-belongs-to-the-plan.md) /
  [ADR-004](../decisions/ADR-004-the-session-tool-writes-no-glossary.md) — the docs system the
  composition must plug into: PRD → plan → parts with status lines → session log;
  `/brain:plan PLAN-NNN` § Continuing a plan; `domain-modeling` owns the glossary.
- Peter's stage mapping and his four most-important references (`definition-of-done`,
  `orchestration-patterns`, `performance-checklist`, `testing-patterns`) — inputs, verbatim.
- Peter's hedged preference for *phase* over *part* ("I think (I think)") — an open decision this
  plan prices, never assumes (the session-log glossary defines **Plan part** with *phase* on its
  `_Avoid_` line; the tool writes and parses the status-line grammar; every existing plan uses
  parts).

## Parts

### Dependencies between the parts

```text
Part 1 (the Matt side completed, the upstream diffs) ──> Part 2 (ANA-008, the overlap) ──> Part 3 (ANA-009, the synthesis) ──> Part 4 (decisions, ADR) ──> Part 5 (implementation)
```

### Part 1: the evidence completed

> Status: done (session SES-007, `5cc6185` — the evidence's durable record is ANA-008's cites)

- [x] Task 1 (2026-08-31): the Matt skills not yet read in full, read to their last lines with every bundled
  file: `wayfinder`, `to-tickets`, `triage`, `implement`, `code-review`, `diagnosing-bugs`,
  `wait-what`, `loop-me`, `resolving-merge-conflicts`, `writing-for-agents`,
  `setup-ts-deep-modules`, `improve-codebase-architecture` (+ `HTML-REPORT.md`). Acceptance:
  each named file read in full; per-skill rows in the ANA-008 working notes with file:line cites.
- [x] Task 2 (2026-08-31): Peter's four references read in full (`references/definition-of-done.md`,
  `orchestration-patterns.md`, `performance-checklist.md`, `testing-patterns.md`) and their role
  in a composed Define/Plan stated. Acceptance: read in full, cited.
- [x] Task 3 (2026-08-31; the original's `### Phase N:` headings and separate `### Checkpoint:` sections quoted in ANA-008; Matt drift 0–8 lines each, all ledgered local edits): the upstream diffs that bear on the synthesis — brain's
  `planning-and-task-breakdown` against the Addy original (the phase→part drift, ADR-022's 37
  lines) and any Matt-side drift in the Part 1 skills. Acceptance: each diff enumerated;
  the original's Task List / phase wording quoted for the phase-vs-part decision.
- [x] Checkpoint (2026-08-31): every file on the list read in full; the record is ANA-008.

### Part 2: the overlap analysis (ANA-008)

> Status: done (session SES-007, `5cc6185`)

- [x] Task 1 (2026-08-31, `5cc6185`): ANA-008 — Peter's stage tables as the frame; the full-lifecycle overlap map (both
  collections), with Define and Plan at depth; each cell classed **same-differently** /
  **unique-to-one** / **composed-differently**, with file:line cites both sides; the
  task-vs-ticket grain compared field by field; the composition-style contrast (monolithic
  phases + canonical pointers vs small composing skills + subagents + tracker medium) stated
  with examples. A short external-comparanda section from a bounded web pass (GitHub spec-kit's
  specify→plan→tasks flow; superpowers' brainstorm/plan skills), each fact cited. Acceptance:
  every claim cites file:line or a URL; Refuted and Unverifiable sections present; saved as
  `docs/analysis/ANA-008-…md` with its index row.
- [x] Checkpoint (2026-08-31): ANA-008 committed (`5cc6185`); the entry logged in the docs(session) commit carrying these ticks.

### Part 3: the synthesis (ANA-009)

> Status: in progress (session SES-007)

- [ ] Task 1: ANA-009 — three layers: (a) what Define and Plan most need — the functionality
  ranking derived from both packages, brain's docs system, the decrees and the measured record;
  (b) the granular selection — the parts of skills chosen from each side with provenance and the
  reason each wins (sections and mechanisms, as big or small as fits); (c) the composition — the
  proposed new skill set with per-skill purpose, description draft, body outline, how each uses
  the rest of brain (`ask-user-question` first, `domain-modeling` handoffs, the read-rule
  injection, `/brain:plan` § Continuing, the session log, `research`, `wayfinder` where it
  stands), the commands that front it, and the migration story for the skills it absorbs or
  retires. Open decisions listed for Part 4, each priced — including **phase vs part** with its
  full ripple (glossary `_Avoid_`, the tool's status-line grammar and parser, every existing
  plan, `/brain:plan`'s walk). No verdict anywhere in the note. Acceptance: every selected part
  carries provenance; every open decision carries its price; saved as
  `docs/analysis/ANA-009-…md` with its index row.
- [ ] Checkpoint: ANA-009 committed and its entry logged.

### Part 4: the decisions and the ADR

> Status: planned

- [ ] Task 1: the decisions — Peter's, `ask-user-question`, one at a time, ANA-009's options
  verbatim with one recommendation each.
- [ ] Task 2: the ADR; supersessions named (ADR-005 decision 6's shape may be refined here;
  PLAN-001 Part 5 shape 2 resolves here).
- [ ] Checkpoint: ADR accepted; PLAN-001, PLAN-002 and this plan consistent.

### Part 5: implementation

> Status: planned — tasks written at Part 4's close, shaped by the ADR; the bar is PLAN-002
> Part 5's, unchanged: `bun test`, typecheck, `bun run validate`, plugin-kit's validator over
> every touched skill, measured triggering for every description change, a headless render for
> every changed procedure, the session ritual throughout, coordinated with PLAN-001 Part 6's
> sweep so each file is edited once.

## Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| The synthesis quietly becomes whole-skill-vs-whole-skill | the granular ask lost | ANA-009's acceptance: every selected part carries provenance at section/mechanism grain |
| A composed skill breaks brain's own flows (`/brain:plan`, the session ritual, the injection) | the daily door regresses | the compatibility mapping is a required ANA-009 layer; Part 5 renders every changed procedure headless |
| phase-vs-part assumed instead of decided | glossary, tool and every plan churn twice | it is an open decision with its ripple priced; nothing renames before Part 4 |
| Two big analyses drift apart from ANA-005/006/007 | contradictory record | ANA-008/009 cite the earlier notes rather than restating them |

## Open questions

- Does PRD-001 gain a requirement for the composed Define/Plan set — Peter's, at Part 4.
- *phase* vs *part* — Peter's, at Part 4, with the ripple priced in ANA-009.
- Whether `wayfinder` joins the composed set or stays the bigger-than-one-session outrider —
  ANA-009 prices both.
