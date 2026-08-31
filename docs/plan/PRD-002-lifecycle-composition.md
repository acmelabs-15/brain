# PRD-002: The composed lifecycle set — Define, Plan and Build rebuilt from both lineages' best parts

> Status: accepted · Peter, 2026-08-31 ("lets go with your recommendation" — the program gets
> its own contract) · decided in the PLAN-003 and PLAN-004 Part 4 rounds; the record is
> [ADR-006](../decisions/ADR-006-the-composed-lifecycle-set.md) · evidence: ANA-008–011

## Objective — what, why, for whom

One toolset for Define → Plan → Build, composed from the granular best parts of both skill
lineages (Addy Osmani's phase skills, Matt Pocock's composing skills) — never whole-skill-vs-
whole-skill — compatible with the brain docs system (PRD → plan → parts → session log) and the
session record. For Peter and every repo that installs brain.

## The promise — the user-visible contract

A vague idea becomes a confirmed intent (the interrogation skill), a requirements document in
the repo's own convention (the requirements skill), a plan of parts whose tasks render as a
plan doc or as tickets with native blocking edges (the planner), and implemented work whose
every task, part and plan is gated by the Definition of Done's three tiers (the implement
skill and `/brain:build`) — with the session log recording every step and `/brain:plan
PLAN-NNN` rehydrating any conversation into the middle of it, unchanged.

## Requirements

1. **The interrogation skill** (rebuilt in place as `interview-me`): two modes — intent
   (hypothesis + confidence, want-vs-should-want, restate + explicit-yes) and artifact (the
   design tree, frontier ordering, facts via subagents, a recommendation attached); its first
   line calls the Skill tool for `brain:ask-user-question`; one question at a time; the
   prototype move and the fog-or-ticket sharpness test (from `wayfinder`); `grilling` retires
   to a pointer stub; `grill-me` / `grill-with-docs` retarget.
2. **`idea-refine` stays standalone** — the divergence outrider with its one-pager
   deliverable; it gains the decrees; the interrogation skill hands vague asks to it.
3. **The requirements skill** (a new name replacing `spec-driven-development`, chosen by the
   merit test and trigger-measured): one template pool — the six areas, the capability map,
   the assumptions block, success-criteria reframing, the seam sketch, Implementation and
   Testing Decisions, Out of Scope, the Plans table; two intake modes (interview via the
   interrogation skill; no-interview synthesis); publishes per the issue-tracker resolution
   order (the repo PRD in `docs/plan/`, or the tracker requirements doc with
   `ready-for-agent`); `to-spec` retires to a pointer stub; `/brain:spec` fronts it.
4. **The planner** (rebuilt in place as `planning-and-task-breakdown`): one work model — a
   plan of **parts** (the word stays) holding tasks with What / AC / Verification / Blocked-by;
   both sizing rulers; vertical/tracer doctrine with prefactoring and expand–contract;
   checkpoints; the quiz-the-user approval round; the freshness dial stated per plan; renders
   the plan doc plus todo items, or per-ticket files / native tracker issues with blocking
   links; **§ Continuing a plan verbatim**; `to-tickets` retires to a pointer stub.
5. **The implement skill** (merged under the name `implement`): the discipline rules
   (simplicity, scope, safe landing), the working rhythm (typecheck regularly, single test
   files regularly, the full suite once at the end), TDD at pre-agreed seams, stack discovery
   with the no-redundant-rerun rule, the DoD tier gates, the plan/ticket consumption contract
   (AGENT-BRIEF durability, the freshness dial), and the slicing escape citing the planner;
   `incremental-implementation` retires to a pointer stub.
6. **`/brain:build`**: the 8-step loop with step 8 (tick-cites-sha) verbatim; the DoD tiers as
   gates — the task tick gates Correctness + Quality, the part checkpoint gates Integration +
   Documentation, the plan close runs the converge re-read (full checklist as floor, misses
   appended as tasks, then the Review-stage handoff); artifact discovery per the resolution
   order (`docs/plan/` PRD/PLAN first, today's known paths as fallbacks); a **concurrent
   mode** (implement-spec's worktree fan-out; the frontier derived from the deps graph at both
   grains, rendered as Claude Code tasks with native dependencies) landing only behind the
   verify-first task; `implement-spec` retires to a pointer stub after.
7. **The debugging skill** (merged under the name `diagnosing-bugs`): the loop-first spine
   (tight red-capable feedback loop, minimise, ranked falsifiable hypotheses, correct-seam
   regression, tagged instrumentation, Redact) with the Addy skill's stop-the-line entry,
   triage trees, untrusted-error rule and safe fallbacks folded in;
   `debugging-and-error-recovery` retires to a pointer stub; `/brain:build`'s failure step
   retargets.
8. **References are artifacts of the synthesis**: `definition-of-done.md` § How to Apply names
   brain's structures — per task = the tick in `/brain:build` step 8, per feature = the plan
   part's checkpoint, per release = the plan-close converge plus `shipping-and-launch` — and
   its skill list names the composed set.
9. **The standing bar**: every new or changed description trigger-measured on the fixed tier
   against its old rate; every changed procedure headless-rendered; the session ritual, status
   lines, ticks and `/brain:plan PLAN-NNN` behavior unchanged; retired skills stay pointer
   stubs until PLAN-001 Part 6 retires sources; each file edited once across the
   implementation parts.
10. **Unchanged in role**: `research`, `wayfinder`, `triage`, `test-driven-development` (+
    `/brain:test`), `doubt-driven-development`, `domain-modeling` and its handoffs, the
    read-rule injection (ADR-005), `choosing-a-skill` as the router.

## Boundaries

The Review and Release stages (`code-review*`, `code-simplification`, `shipping-and-launch`,
`performance-checklist`) are out of this contract — a later plan, entered through the same
method. `source-driven-development`, `git-workflow-and-versioning` and `loop-me` stand as they
are.

## Success criteria

- `/brain:plan PLAN-NNN` renders its brief unchanged in a scratch repo after the rebuild.
- Every measured description meets or beats its old trigger rate with hard negatives declined.
- `session check` green on every commit of the implementation; `bun test`, typecheck,
  `bun run validate`, plugin-kit's validator green at every checkpoint.
- A cold conversation can walk PRD-002 → PLAN-003/004 → parts → sessions without this
  conversation's context.

## Non-goals

- Executing the concurrent fan-out before its verify-first task passes.
- Renaming *part* (decided: it stays), or any docs-system grammar change.
- Upstream contribution of the merged skills (a deliberate fork, ledgered by git).

## Open questions

- The requirements skill's new name — chosen and measured at implementation (ADR-006 D4).
- Whether agent teams consume Claude Code task dependencies as assumed — the verify-first task
  answers it (ADR-006 D6).

## Plans

| Plan | Serves | Status |
| --- | --- | --- |
| [PLAN-003-define-plan-synthesis.md](PLAN-003-define-plan-synthesis.md) | requirements 1–4, 9–10: the evidence, analyses and decisions | done (SES-007, `d9f9f48`) |
| [PLAN-004-build-stage-synthesis.md](PLAN-004-build-stage-synthesis.md) | requirements 5–9: the evidence, analyses and decisions | done (SES-007, `d9f9f48`) |
| [PLAN-005-lifecycle-composition-implementation.md](PLAN-005-lifecycle-composition-implementation.md) | requirements 1–10: the build-out, eight parts in dependency order | planned |
