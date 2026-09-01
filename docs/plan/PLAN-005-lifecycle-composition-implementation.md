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
declined; every changed procedure headless-rendered in a scratch repo; a retired skill is
deleted in the same commit that lands its replacement, every live reference retargeted — no
stubs, no wrappers (ADR-007, superseding the stub rule this plan started with); after every
sweep and every render, `git status --short` lists no deletion (two `agents/openai.yaml` files
vanished during Parts 4–6 by a mechanism still unnamed: the sweep tool's cleanup and a
plugin-dir load were both tested and cleared — SES-012, SES-014); staging is by
named file only; the session ritual throughout; ADR-005's read-rule injection and the decrees inherited by every
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

> Status: done (session SES-009, `9b2baf8`)

- [x] Task 1 (2026-08-31): `writing-specs` (gerund + object; "spec" the invocation word in both
  corpora); the description measured before the body — cand2 18/20 vs the 16/20 baseline,
  negatives 10/10, two rows probe-verified as held down by the installed old description.
- [x] Task 2 (2026-08-31, `9b2baf8`): the skill (197 lines), both stubs, the command repoint,
  the map row; behavioral evals.json with adapted fixtures; render produced
  `docs/plan/PRD-001-…md` with Plans table and Out of Scope by the resolution order;
  validators green.
- [x] Checkpoint (2026-08-31): the bar — tests 29/29, typecheck, both validators, three sweeps
  (cand1 refuted, cand2 accepted), one probe, one render; the post-reinstall re-sweep rides
  Part 8 Task 3.

### Part 3: the planner rebuilt (PRD-002 requirement 4)

> Status: done (session SES-010, `724a2bc`)

- [x] Task 1 (2026-08-31, `724a2bc`): the union landed as additions (364 lines): tracer rules +
  prefactor, expand–contract, the second ruler, the freshness dial with the AGENT-BRIEF
  durability rules, Step 6 quiz round via brain:ask-user-question, the Task List Target
  resolved by the issue-tracker order with per-ticket files and native blocking links;
  to-tickets a stub. § Continuing a plan byte-identical (python compare vs HEAD); /brain:plan
  rendered the full brief in a scratch repo (all template lines; the walk caught the fixture's
  planted missing-sha as a Finding); description untouched — cand3's 10/10 · 13/13 hold by
  identity; behavioral evals.json + notifications-spec fixture checked in.
- [x] Checkpoint (2026-08-31): the bar — tests 29/29, typecheck, both validators, the
  byte-identity check, the render.

### Part 4: implement, the merged Build skill (PRD-002 requirement 5)

> Status: done (session SES-011, `7389aca`)

- [x] Task 1 (2026-08-31, `7389aca`): the merged `implement` (122 lines), model-invocable;
  incremental-implementation a stub; deprecation-and-migration's see-also retargeted (the
  router rows are Part 8's; commands/build.md is Part 6's, working through the stub meanwhile).
  Measured 15/20 against an all-zero baseline, negatives 10/10; the five sub-threshold rows
  probe-verified as the no-consult behavior class. Render quote-back green (injection, tick
  gate, cycle). bunfig's pathIgnorePatterns keeps eval fixtures out of the repo suite.
- [x] Checkpoint (2026-08-31): the bar — tests 29/29 (fixtures excluded at the cause),
  typecheck, both validators, two sweeps, two probes, one render.

### Part 5: diagnosing-bugs, the merged debugging skill (PRD-002 requirement 7)

> Status: done (session SES-012, `cc922d3`)

- [x] Task 1 (2026-08-31, `cc922d3`): the merged `diagnosing-bugs` (152 lines + triage-trees.md);
  the stub; four citers retargeted (/build's failure step is Part 6's, the routers Part 8's).
  Description iterated to cand3: 18/20, verdict-equal to Matt's old description (18/20 — the
  second baseline, missed at first and measured after a probe exposed it), above Addy's 16/20,
  negatives 10/10. Render quote-back green. Fixtures converted to ESM for the Bun-purity check.
- [x] Checkpoint (2026-08-31): the checks — tests 29/29, typecheck, both validators; and the
  validity sweep Peter asked for over every skill touched this session (`391af77`): 22/22 valid
  after idea-refine's ToCs and Bun port, triage's ToCs, wayfinder's placeholder.

### Part 6: /brain:build with the DoD gates (PRD-002 requirement 6, sequential modes)

> Status: done (session SES-013, `a6fef37`)

- [x] Task 1 (2026-08-31, `a6fef37`): the tier gates — the tick's gate folded into step 8 (its
  tick-cites-sha clause verbatim), the part's close, converge with the Review handoff.
- [x] Task 2 (2026-08-31, `a6fef37`): discovery by the resolution order (tracker doc → the
  docs/plan convention or CLAUDE.md → the known paths); invokes implement; fails into
  diagnosing-bugs; keeps doubt-driven-development.
- [x] Checkpoint (2026-08-31): the render in a scratch repo with a PRD, a PLAN and a session
  log — the resolution order walked in sequence, Task 1 named, the Correctness + Quality gate
  and converge stated; `bun run validate` and plugin-kit's command validator green.

### Part 7: the verify-first measurements, then the concurrent mode (PRD-002 requirement 6)

> Status: in progress (session SES-014)

- [x] Task 1 (2026-08-31, `a68b5b2`): ANA-012 — (a) worktree subagents live-verified on git's
  own state; (b) native task dependencies exist only in agent teams' shared task list
  (documented, behind `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`); (c) teams claim unblocked
  tasks themselves (documented, not executed here).
- [ ] Task 2 — **waits on Peter's landing call** (asked, dialog dismissed twice, still open:
  land the mode now with the experimental flag named, or hold it for a live team run):
  only where Task 1 is green — the concurrent mode lands in `/brain:build`
  (worktree implementers, mergers, one PR per spec, the deps-graph frontier); `implement-spec`
  is deleted in that commit. Where Task 1 fails, the ANA records what and why, the mode is
  dropped, and `implement-spec` is still deleted (its parts live in the ANA for a future run).
- [ ] Checkpoint: the bar; the ANA committed either way.

### Part 8: the references, the routing, the closure (PRD-002 requirements 8–10)

> Status: planned

- [ ] Task 1: `references/definition-of-done.md` § How to Apply rewritten to name the tick,
  the part checkpoint, and the plan-close converge; its skill list updated to the composed
  names; landed in one commit with nothing else touching it.
- [ ] Task 2: `choosing-a-skill` and `using-agent-skills` rewrite their Define/Plan/Build prose
  to the composed set (the name swaps landed with ADR-007; the lineage prose still describes
  the old chains); `CONTEXT-MAP.md` checked complete; no retired name anywhere live.
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

## Open questions (the cold-start list — Peter's, in his words)

- **Part 7 Task 2, the landing call**: land the concurrent mode now (its design maps onto
  documented machinery; the flag named in `/brain:build`; the first real team run is the
  verification at Part 8's checkpoint) — or hold it for a live team run first. My
  recommendation: land it, flag named.
- **wayfinder's fate**: keep it as the outrider for work bigger than one session (recorded in
  ADR-006 D2; my recommendation — its map with claiming and fog has no home elsewhere), or
  retire it into the planner (a map becomes a plan of decision tickets; the directory is
  deleted under ADR-007; a new part here).
- **The three lifecycle pages** (artifacts, private): the outline with three levels of
  disclosure — https://claude.ai/code/artifact/88a4bd9c-1a97-4227-a171-6bb8e7170f9a — is the
  one Peter's feedback shaped; the flow diagrams
  (https://claude.ai/code/artifact/46440e7d-5f86-4b34-b0a9-9c6c4e14380a) and the step-by-step
  trace (https://claude.ai/code/artifact/0485571a-4c06-4a33-9fe6-bcda0c1f756a) are its
  companions; `docs/brain-lifecycle.svg` is the still. Whether any page is saved into `docs/`
  is Part 8's closure call.
- **The interactive lifecycle map** (2026-09-01, SES-014's second stream): the outline's content
  rebuilt as an interactive flow diagram in the Vercel-docs idiom — a design canvas
  (https://claude.ai/code/artifact/f5e4791d-df1e-425c-a020-80b6dfacf371) and a full-page artifact
  built from the same source (https://claude.ai/code/artifact/339710f7-5d62-40a4-aac5-d2c9c3ec2f76).
  Source and build steps under `docs/lifecycle/` (its README is the handover). Define is the
  reference stage — Idea → interview-me (Needs refinement) → idea-refine / writing-specs (Several
  capabilities · Still fog) → the PLAN pill; INPUT / OUTPUT rows run through every stage's cards since
  2026-09-01 (the cards widened to 284, Build on three rows; the concurrent view waits on Task 2).
  Placement stays Part 8's call.
