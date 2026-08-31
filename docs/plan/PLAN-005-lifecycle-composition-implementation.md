# Plan: building the composed lifecycle set — the implementation of PRD-002

> Status: planned · Peter, 2026-08-31 ("Should this just receive a brand new plan document?" —
> yes: one implementation plan serving [PRD-002](PRD-002-lifecycle-composition.md), replacing
> the Part 5s of [PLAN-003](PLAN-003-define-plan-synthesis.md) and
> [PLAN-004](PLAN-004-build-stage-synthesis.md) and absorbing PLAN-002 Part 5 Task 5) · the
> decisions are [ADR-006](../decisions/ADR-006-the-composed-lifecycle-set.md)'s; the evidence
> is ANA-008–011 · one session per part

## Overview

Eight parts build PRD-002's ten requirements in dependency order: the three Define/Plan skills
(interrogation, requirements, planner), the two Build merges (implement, diagnosing-bugs), the
command (`/brain:build` with the DoD tier gates), the verify-first measurements that gate the
concurrent mode, and the reference rewrite. PLAN-001 Part 6's retirement sweep runs after this
plan and is not duplicated here.

**The standing bar, every part** (PLAN-002 Part 5's, unchanged): `bun test`, `bun run
typecheck`, `bun run validate`, plugin-kit's validator over every touched skill; every new or
changed description trigger-measured on the fixed tier against its old rate, hard negatives
declined; every changed procedure headless-rendered in a scratch repo; a retired skill becomes
a pointer stub in the same commit that lands its replacement (never a live duplicate); the
session ritual throughout; ADR-005's read-rule injection and the decrees inherited by every
rebuilt skill. Eval material (Peter, 2026-08-31): trigger positives and negatives draw on the
Addy corpus (`~/Dev/reference/addy-osmani-agent-skills/evals/cases/<name>.json`) beside the
Matt-side phrasings — independent wording, not copies of our descriptions; each rebuilt skill
also ships a behavioral case file `evals/evals.json` in skill-creator's schema (+`kind`), with
fixtures adapted from that corpus where they fit (portal-brief → the requirements skill's
capability-map case; notifications-spec → the planner; reports + tasks/plan.md and the
sunk-cost scenario → implement; pagination + time-pressure → diagnosing-bugs). The behavioral
cases are checked in as the graded contract; running them stays manual until a runner lands.

### Dependencies between the parts

```text
Part 1 (S1) ──> Part 2 (S2) ──> Part 3 (S3) ──> Part 4 (implement) ──> Part 6 (/brain:build) ──> Part 7 (verify-first, concurrent mode)
Part 5 (diagnosing-bugs) ────────────────────────────────────────────┘         └──> Part 8 (references, routing, closure)
```

### Part 1: the interrogation skill (PRD-002 requirements 1–2)

> Status: done (session SES-008, `9dfa271`)

- [x] Task 1 (2026-08-31, `9dfa271`): rebuild `interview-me` — intent and artifact modes behind a Step-0 fork; first
  line calls the Skill tool for `brain:ask-user-question`; one question at a time; the
  prototype move and the fog-or-ticket test (ADR-006 D2's riders); the domain-modeling
  handoff; `grilling` becomes a pointer stub; `grill-me` and `grill-with-docs` retarget;
  `wayfinder`'s and `triage`'s grilling calls follow. Acceptance: a trigger set covering both
  old skills' phrases measured at or above the old rates; a headless render shows the first
  line firing; validators green. (This task is PLAN-002 Part 5 Task 5, absorbed.)
- [x] Task 2 (2026-08-31, `9dfa271`): `idea-refine` gains the decrees and the handoff edges;
  description unchanged, no re-measure needed.
- [x] Checkpoint (2026-08-31): the bar — tests 29/29, typecheck, both validators, three
  measured sweeps (21/22 vs 16 and 18), two headless renders (first-line decree observed;
  injection quoted back verbatim; artifact-mode.md read). Peter's mid-round corrections
  folded: the conditional-workflow pattern (his pointer), the grill-with-docs mention removed.

### Part 2: the requirements skill (PRD-002 requirement 3)

> Status: in progress (session SES-009)

- [ ] Task 1: the name — chosen by the merit test (says the job in invocation words), its
  trigger set written and measured before the body lands (ADR-006 D4).
- [ ] Task 2: the skill — the template pool (six areas, capability map, assumptions block,
  success-criteria reframing, seam sketch, Implementation/Testing Decisions, Out of Scope,
  Plans table); interview intake via Part 1's skill, no-interview synthesis intake; publication
  per the issue-tracker resolution order; `spec-driven-development` and `to-spec` become
  pointer stubs; `/brain:spec` repoints; `CONTEXT-MAP.md` gains the two-renderings "spec" row.
  Acceptance: both old trigger sets' phrases covered at or above old rates; headless render
  produces a PRD skeleton in a scratch repo with a Plans table; validators green.
- [ ] Checkpoint: the bar.

### Part 3: the planner rebuilt (PRD-002 requirement 4)

> Status: planned

- [ ] Task 1: `planning-and-task-breakdown` — the union task template (What / AC /
  Verification / Blocked-by), both sizing rulers, tracer/vertical doctrine with prefactoring
  and expand–contract, checkpoints, the quiz-the-user approval round, the freshness dial
  stated per plan, the extended task-list target (plan doc + todo items, or per-ticket files /
  native tracker issues with blocking links); `to-tickets` becomes a pointer stub.
  **§ Continuing a plan is carried byte-identical.** Acceptance: `diff` shows § Continuing a
  plan unchanged; `/brain:plan PLAN-NNN` headless brief unchanged in a scratch repo; the
  description holds cand3's measured rates (10/10, 13/13) or better; validators green.
- [ ] Checkpoint: the bar.

### Part 4: implement, the merged Build skill (PRD-002 requirement 5)

> Status: planned

- [ ] Task 1: the merged `implement` — the discipline rules (simplicity, scope, safe landing),
  the working rhythm, TDD at pre-agreed seams, stack discovery with the no-redundant-rerun
  rule, the DoD tier gates as its checklist sections, the plan/ticket consumption contract,
  the slicing escape citing the planner; `incremental-implementation` becomes a pointer stub;
  the 6 citing files retarget. Acceptance: a trigger set covering both old surfaces' phrases
  measured; model-invocable (the old `disable-model-invocation` dropped deliberately — the
  description now guards routing); render; validators green.
- [ ] Checkpoint: the bar.

### Part 5: diagnosing-bugs, the merged debugging skill (PRD-002 requirement 7)

> Status: planned

- [ ] Task 1: the merged `diagnosing-bugs` — the loop-first spine (Phases 1–6, Redact) with
  stop-the-line as the entry, the triage trees as the fast path, the untrusted-error rule and
  safe fallbacks folded in; `debugging-and-error-recovery` becomes a pointer stub; its 6
  citing files retarget (including `/brain:build`'s failure step, edited in Part 6).
  Acceptance: the merged description measured against both old trigger sets; render;
  validators green.
- [ ] Checkpoint: the bar.

### Part 6: /brain:build with the DoD gates (PRD-002 requirement 6, sequential modes)

> Status: planned

- [ ] Task 1: the tier gates — step 8's tick gates Correctness + Quality; the part checkpoint
  gates Integration + Documentation; the plan close runs converge (re-read spec and plan
  against the built work, full checklist as floor, misses appended as tasks, the Review-stage
  handoff named). Step 8's tick-cites-sha wording unchanged.
- [ ] Task 2: artifact discovery per the resolution order (`docs/plan/` PRD/PLAN first,
  today's known paths as fallbacks); the failure and high-risk steps retarget to
  `diagnosing-bugs` and keep `doubt-driven-development`.
- [ ] Checkpoint: a headless `/brain:build` render in a scratch repo with a `docs/plan/` plan
  shows discovery, one task's loop, and the converge step; the bar.

### Part 7: the verify-first measurements, then the concurrent mode (PRD-002 requirement 6)

> Status: planned

- [ ] Task 1: measure with strong oracles — (a) implementer subagents in git worktrees as
  implement-spec writes it, (b) Claude Code tasks carrying native dependencies as the
  frontier, (c) whether agent teams consume those dependencies (Peter's rider, unverified).
  Recorded as an ANA with the invocations and outputs.
- [ ] Task 2: only where Task 1 is green — the concurrent mode lands in `/brain:build`
  (worktree implementers, mergers, one PR per spec, the deps-graph frontier); `implement-spec`
  becomes a pointer stub. Where Task 1 fails, the ANA records what and why, the mode is
  dropped, and `implement-spec` still retires (its parts live in the ANA for a future run).
- [ ] Checkpoint: the bar; the ANA committed either way.

### Part 8: the references, the routing, the closure (PRD-002 requirements 8–10)

> Status: planned

- [ ] Task 1: `references/definition-of-done.md` § How to Apply rewritten to name the tick,
  the part checkpoint, and the plan-close converge; its skill list updated to the composed
  names; landed in one commit with nothing else touching it.
- [ ] Task 2: `choosing-a-skill` and `using-agent-skills` rewrite their Define/Plan/Build rows
  to the composed set; `CONTEXT-MAP.md` checked complete; each file edited once here and not
  again before PLAN-001 Part 6.
- [ ] Task 3 (includes: re-run writing-specs' trigger sweep post-reinstall — two rows were held down by the installed old spec-driven-development description competing in the catalog, verified by probe; they should recover once the stub is what's installed): the marketplace regenerate + reinstall checkpoint (the PLAN-001 Part 4
  procedure): a fresh conversation in a scratch repo walks PRD-002 → a plan → a part headless;
  Peter runs `/reload-plugins` in his open terminals.
- [ ] Checkpoint: PRD-002's success criteria checked line by line; PLAN-001 Part 6 unblocked.

## Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| A merged description loses a trigger the old skill held | routing regresses invisibly | every part's acceptance measures against both old sets |
| § Continuing a plan drifts in the rebuild | the daily door breaks | byte-identical diff in Part 3's acceptance |
| The concurrent mode lands unverified | /build breaks on real work | Part 7's ordering: measure first, land second, drop honestly |
| Two plans' Part 5s and this plan drift | contradictory record | PLAN-003/004 Part 5s are superseded pointers to this plan |
