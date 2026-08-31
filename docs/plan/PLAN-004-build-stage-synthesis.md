# Plan: the Build stage across both lineages — implement, implement-spec and incremental-implementation, the best parts composed

> Status: in progress · Peter, 2026-08-31 ("do the exact same thing you just did for the define
> and plan lifecycle phases … scoped specifically to matts implement skill, addys implement-spec
> and incremental-implementation skills (if there are any other skills that should be part of
> this that I missed point them out to me). Maybe the … definition-of-done.md should be included
> in this somehow as well") · serves [PRD-001](PRD-001-session-log-and-rehydration.md)
> requirement 12's one-toolset goal · this is the plan ANA-009's open decision 6 asked for
> (the execution-stage unification, "record for a later plan") · authorship corrected during
> scoping: **implement-spec is Matt's** (`matt-pocock-skills/skills/in-progress/`), not Addy's;
> incremental-implementation is the Addy one

## Overview

The Build stage was built three times. Matt's `implement` (16 lines: TDD at pre-agreed seams,
typecheck regularly, /code-review at the end, commit) and `implement-spec` (frontier of tickets,
implementer subagents in worktrees, merger subagents, one PR per spec) sit at two scales of the
same composing style. Addy's `incremental-implementation` (256 lines: the increment cycle,
three slicing strategies, six rules, rationalizations, DoD as the final gate) is the checklist
phase skill. Around them: `/brain:build` (the command — per-task RED→GREEN→commit→tick loop and
the `auto` mode), `test-driven-development` and `debugging-and-error-recovery` (both cited by
the loop), `doubt-driven-development` (the in-flight adversarial check), and the references —
`definition-of-done` above all, whose three application tiers (per task / per feature / per
release) PLAN-003's decision round already chose to wire into `/brain:build` explicitly.

Two standing decisions from that round shape this plan: the DoD tiers land in `/brain:build`
(task tick gates Correctness+Quality; part checkpoint gates Integration+Documentation; plan
close gets the converge re-read with the full checklist as the floor), and **the references are
artifacts of the synthesis, not fixed inputs** — they are updated to the composed set's words
(Peter, 2026-08-31: "should be updated to fit whatever new set of skills we come up with").

Roster beyond Peter's three, pointed out per his ask — **in scope**: `test-driven-development`
(the loop /build embeds; the Prove-It pattern), `debugging-and-error-recovery` (the loop's
failure path), `doubt-driven-development` (the high-risk path /build auto cites), the
`/brain:build` and `/brain:test` commands, `triage`'s AGENT-BRIEF (the ticket contract the
implement skills consume), `diagnosing-bugs` (Matt's failure-path counterpart to the Addy
debugging skill — spotted and added during Part 1), and the references `definition-of-done`
and `testing-patterns`.
**Flagged and excluded**: `source-driven-development` (orthogonal evidence discipline, callable
from any stage), `code-review` / `code-review-and-quality` / `code-simplification` (the Review
stage — a later plan), `git-workflow-and-versioning` (cross-cutting), `loop-me` (workflow
specs, not implementation), `shipping-and-launch` + `performance-checklist` (Release stage).

Method, unchanged from PLAN-002/003: one evaluator, full reads, no sampling; no edit to any
evaluated skill before the ADR; drift priced; every description change measured; the granularity
is sections and mechanisms, never whole-skill-vs-whole-skill.

## Decisions it relies on

- [ADR-005](../decisions/ADR-005-consult-skills-integration.md) — the decrees; the read-rule
  injection all composed skills inherit.
- PLAN-003's decision round (2026-08-31, recorded in its coming ADR): S3's two renderings
  (plan-doc parts, tickets with blocking edges) are what the Build stage consumes; the DoD
  tiers wired into `/brain:build`; the references-as-artifacts rule; *part* stays the plan
  unit's word (decided on delegation, evidence in the round).
- [ADR-001](../decisions/ADR-001-rehydration-belongs-to-the-plan.md) — `/brain:build` step 8's
  tick-cites-sha rule and the session ritual the Build stage already carries.

## Parts

### Dependencies between the parts

```text
Part 1 (evidence) ──> Part 2 (ANA-010, the overlap) ──> Part 3 (ANA-011, the synthesis) ──> Part 4 (decisions, ADR — joint with PLAN-003's) ──> Part 5 (implementation)
```

### Part 1: the evidence completed

> Status: done (session SES-007, `0ab0694` — the durable record is ANA-010's cites)

- [x] Task 1 (2026-08-31): the in-scope roster read in full — `implement`, `implement-spec` (+ their
  `agents/openai.yaml`), `incremental-implementation`, `test-driven-development`,
  `doubt-driven-development`, `debugging-and-error-recovery`, `commands/build.md`,
  `commands/test.md`, `references/definition-of-done.md`, `references/testing-patterns.md`,
  `triage`'s AGENT-BRIEF, `diagnosing-bugs`; upstream diffs for the three named skills enumerated. Acceptance:
  every file read to its last line; the diffs enumerated; recorded as ANA-010 cites.
- [x] Checkpoint (2026-08-31): every roster file read to its last line; drift verified by diff — only the ledgered read-rule hunks and `incremental-implementation:251`'s DoD pointer path.

### Part 2: the overlap analysis (ANA-010)

> Status: done (session SES-007, `0ab0694`)

- [x] Task 1 (2026-08-31, `0ab0694`): ANA-010 — the Build-stage overlap map: the four-way triangle (`/brain:build` ·
  `implement` · `implement-spec` · `incremental-implementation`) cell by cell, each classed
  same-differently / unique-to-one / composed-differently with file:line cites; the DoD-tier
  mapping against what each skill actually gates today; the seam with S3's renderings (which
  rendering each consumes); the subagent-concurrency contrast (implement-spec's worktree fan-out
  vs /build auto's single-session sequence) against `orchestration-patterns.md`; superpowers'
  executing-plans and spec-kit's implement/converge as comparanda (ANA-008 carries the base
  facts — cite, do not restate). Acceptance: every claim cites file:line or ANA-008; Refuted
  and Unverifiable sections present; saved as `docs/analysis/ANA-010-…md` with its index row.
- [x] Checkpoint (2026-08-31): ANA-010 committed (`0ab0694`); the entry logged in the docs(session) commit carrying these ticks.

### Part 3: the synthesis (ANA-011)

> Status: in progress (session SES-007)

- [ ] Task 1: ANA-011 — the same three layers as ANA-009: (a) what Build most needs, ranked;
  (b) the granular parts chosen from each side with provenance and the reason each wins;
  (c) the composition — how the Build surface is shaped (one skill, a skill+command pair, or
  the command alone; the sequential and the concurrent execution modes; where TDD, debugging
  and doubt hook in; how it consumes S3's two renderings; the DoD tiers as the gates), plus
  **the reference updates named concretely** (definition-of-done rewritten to name brain's
  structures — task tick / part checkpoint / plan-close converge — and which other references
  join). Open decisions for Part 4, each priced. No verdict anywhere. Acceptance: every
  selected part carries provenance; every open decision carries its price; saved as
  `docs/analysis/ANA-011-…md` with its index row.
- [ ] Checkpoint: ANA-011 committed and its entry logged.

### Part 4: the decisions and the ADR

> Status: planned

- [ ] Task 1: the decisions — Peter's, `ask-user-question`, one at a time, ANA-011's options
  verbatim with one recommendation each; the deferred PRD-home question (PLAN-003's) is asked
  here once, covering the whole composed program.
- [ ] Task 2: the ADR — one ADR covering PLAN-003's and this plan's rounds (the Define/Plan/Build
  composition), supersessions named (ADR-005 decision 6's shape; ANA-009's decision 6).
- [ ] Checkpoint: ADR accepted; PLAN-001, PLAN-002, PLAN-003 and this plan consistent.

### Part 5: implementation

> Status: planned — tasks written at Part 4's close, shaped by the ADR; the bar is PLAN-002
> Part 5's, unchanged, plus: the reference updates land with the skills that cite them, and
> every changed command gets a headless render; coordinated with PLAN-003 Part 5 and PLAN-001
> Part 6's sweep so each file is edited once.

## Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| The synthesis regresses `/brain:build`'s session-ritual steps (tick-cites-sha, docs(session)) | the record breaks | the compatibility mapping is a required ANA-011 layer; ADR-001/022 rules named in acceptance |
| Whole-skill-vs-whole-skill creep | the granular ask lost | same acceptance as ANA-009: provenance at section/mechanism grain |
| Reference updates drift from the skills that cite them | two vocabularies again | Part 5 lands each reference with its citing skills in one edit |
| The Review-stage boundary blurs (code-review pulled in) | scope creep | the roster's excluded list is explicit; Review is a later plan |

## Open questions

- Where the Build surface lives (skill, command, or pair) — ANA-011 prices, Part 4 decides.
- Whether `implement-spec`'s concurrent mode survives as a mode of the composed skill or stays
  a separate skill — ANA-011 prices both.
- The PRD home for the whole composed program — deferred from PLAN-003, asked once at Part 4.
