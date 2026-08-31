# The Build-stage composition — what the stage most needs, the parts chosen from each lineage, and the shape they compose

> **Analysis** · 2026-08-31 · status: current — PLAN-004 Part 3; a proposal with open decisions
> for Part 4, no verdict locked here · brain SES-007 · rests on ANA-010 (the Build overlap map),
> ANA-009 (S3's renderings, the freshness dial), the PLAN-003 Part 4 round (the DoD tiers, the
> references-as-artifacts rule), ADR-005 (the read-rule injection)

## Question

Given ANA-010's map: what functionality matters most for the Build stage, which granular parts
of which surfaces carry each function best, and what shape do they compose into, compatible
with the rest of brain (Peter, 2026-08-31 — the initial-prompt shape scoped to implement).

## Layer (a) — what Build most needs, ranked

1. **One execution loop that records** — `/brain:build`'s 8 steps are the only surface where
   the work lands in the session record (tick-cites-sha, ADR-022); every composed shape must
   keep that spine intact.
2. **The DoD tiers as real gates** (decided, PLAN-003 round): the task tick gates Correctness +
   Quality; the part checkpoint gates Integration + Documentation; the plan close runs the
   converge re-read with the full checklist as the floor. ANA-010's tier table shows Quality
   and the whole per-feature tier gated by nothing today.
3. **Consuming S3's both renderings** — a plan of parts *and* a ticket frontier, under the
   AGENT-BRIEF durability contract and the freshness dial; `/build auto`'s current discovery
   ("SPEC.md at the repo root, docs/SPEC.md, or a file under spec/", `tasks/plan.md`) predates
   the docs system and misses `docs/plan/PRD-NNN`/`PLAN-NNN` entirely.
4. **A failure path that builds a loop first** — the stage's deepest pooled strength:
   diagnosing-bugs' feedback-loop discipline joined with the Addy skill's triage breadth.
5. **In-flight doubt, bounded** — doubt-driven-development for the high-risk tasks `/build
   auto` already routes to it; never a per-keystroke habit.
6. **Discipline at the point of writing code** — simplicity first, scope discipline, safe
   landing (flags, defaults, rollback); the rules that keep an autonomous run boring.
7. **Concurrency as an opt-in mode with its safety story stated** — ANA-010: sequence-in-time
   and isolation-in-space honor the same law; a composed stage must say which applies when and
   what a failed merge does to the rollback story.
8. **The repo's own commands, discovered once, never re-run on unchanged code** — TDD's
   Discover the Stack First plus both sides' no-redundant-rerun rule.

## Layer (b) — the parts selected, with provenance

| Function | Part taken | From | Why it wins |
| --- | --- | --- | --- |
| The loop's spine | the 8 steps, tick-cites-sha, the docs(session) landing | `build.md:18-25` (ADR-022) | the only recording loop; measured working daily |
| Auto orchestration | clean baseline, existing-plan discovery, the single unambiguous-affirmative checkpoint, dependency order, one commit per task, the stop conditions, the closing summary | `build.md:32-47` | the only surface with a rollback guarantee and named stop conditions |
| Task-tick gate | Correctness + Quality sections confirmed at the tick | `definition-of-done.md:21-35,53` | the decided per-task tier; Quality is gated by nothing today (ANA-010) |
| Checkpoint gate | Integration + Documentation at each part's checkpoint | `definition-of-done.md:37-46,53` | the decided per-feature tier; gated by nothing today |
| Plan-close converge | re-read spec+plan against the built work, full checklist as floor, misses appended as tasks | PLAN-003 round; `definition-of-done.md:17-52`; spec-kit's converge (ANA-008) | closes the shared gap ANA-010's map shows in all three lineage surfaces |
| Working rhythm | typecheck regularly, single test files regularly, the full suite once at the end | `implement:13` | the cheapest true statement of test economy — the loop's step 5 refined |
| TDD hook | "/tdd where possible, **at pre-agreed seams**" | `implement:11` + `to-spec:17-19` | ties the stage to the seam sketch S2 already produces |
| Prove-It | reproduction test before any bug fix | `test-driven-development:98-144` | the one bug rule both /test and the failure path share |
| Stack discovery | Discover the Stack First; never a default command; no re-run on unchanged code | `test-driven-development:26-38`; `incremental-implementation:213` | prevents the npm-test-everywhere failure; both sides converge on the rerun ban |
| Simplicity gate | Rule 0 with the staff-engineer checks | `incremental-implementation:93-115` | the only in-stage guard against premature abstraction; twins ~/CLAUDE.md §5 |
| Scope discipline | Rule 0.5, "noticed but not touching" with the offer to file tasks | `incremental-implementation:117-135` | the only in-stage guard against drive-by refactors; feeds gap tasks the same way converge does |
| Safe landing | feature flags for incomplete work, safe defaults, rollback-friendly increments | `incremental-implementation:149-183` | the commit-centric mode's merge story |
| Concurrent mode | task-graph frontier, implementer subagents in worktrees, merger subagents, frontier refill, context-pointer communication, PR-centric landing with cleanup | `implement-spec` steps 1-9, `:13` | the only concurrency design in either lineage; legal under `orchestration-patterns.md:5,170` |
| Loop-first debugging | Phase 1 as *the* skill: ten loop constructions, the tight/red-capable completion criterion, minimise, 3-5 ranked falsifiable hypotheses shown to the user, tagged instrumentation, the correct-seam rule, cleanup greps | `diagnosing-bugs:18-135` | "build the right feedback loop and the bug is 90% fixed" — deeper than triage on the hard path |
| Triage breadth | stop-the-line; the error-specific triage trees; safe fallbacks; error output as untrusted data | `debugging-and-error-recovery:23,174-243,274` | the fast path for ordinary breakage, and the safety rule the Matt side lacks |
| Redaction | secrets redacted before any shown output or artifact | `diagnosing-bugs:12` | the safety rule the Addy side lacks |
| In-flight doubt | the CLAIM/EXTRACT/DOUBT/RECONCILE/STOP cycle, cross-model offer, the 3-cycle bound | `doubt-driven-development:51-193` | already wired: `build.md:45` routes high-risk tasks here |
| Consumption contract | durability over precision, behavioral-not-procedural, complete AC, explicit out-of-scope | `AGENT-BRIEF.md` | what the stage may assume about a ticket that sat for weeks |

Deliberately not taken in-stage: the slicing strategies (`incremental-implementation:46-89`) —
S3 owns slicing (ANA-009); the Build stage keeps only the escape ("a task too big for its
grain goes back to the planner"), citing S3's doctrine rather than carrying a copy (the
one-home rule, ADR-005 decision 4's precedent). The `/code-review` closing call
(`implement:15`, `implement-spec` step 7) stays a **handoff to the Review stage**, named at
the plan close beside converge, not evaluated here.

## Layer (c) — the composed shape

Working shape, every element priced as an open decision below — none locked here:

**S4 — the implementation skill** (rebuilt in place; home an open decision). One body carrying:
the discipline rules (simplicity, scope, safe landing), the working rhythm, the TDD hook at
pre-agreed seams, the stack-discovery rule, the DoD tier gates as its checklist sections, and
the S3-consumption contract (both renderings, AGENT-BRIEF durability, the freshness dial). It
is the doctrine `/brain:build` executes.

**`/brain:build`** stays the front: the 8-step loop (step 8 untouched), `auto`, and — an open
decision — a **concurrent mode** carrying implement-spec's frontier fan-out, with the safety
story stated per mode (sequential: one commit per task, clean rollback; concurrent: worktree
isolation, merger discipline, and what a failed merge does). Its artifact discovery aligns
with the docs system's resolution order (PRD/PLAN in `docs/plan/`, `tasks/plan.md` as the
fallback) — today's known-paths list misses the system of record entirely.

**The merged debugging skill** — the loop-first spine (`diagnosing-bugs` Phases 1-6) with the
Addy skill's stop-the-line entry, triage trees for the fast path, untrusted-error rule and
safe fallbacks folded in; Redact kept verbatim. One skill, one home; the loser becomes a
pointer stub; `/build`'s stop condition retargets. Name and home are Part 4's.

**Standing, unchanged in role**: `test-driven-development` (+ `/brain:test`,
`testing-patterns` as its companion), `doubt-driven-development`, `triage`/AGENT-BRIEF.
`implement` and `implement-spec` retire to pointer stubs once their parts land (the
`df0205b` pattern).

**The reference updates** (the references-are-artifacts decision, named concretely):
`definition-of-done.md` § How to Apply rewritten to name brain's structures — per task = the
tick in `/brain:build` step 8, per feature = the plan part's checkpoint, per release = the
plan close's converge plus `shipping-and-launch` — and its intro's skill list updated to the
composed names. `testing-patterns.md` unchanged (stack-specific companion, still accurate).
`orchestration-patterns.md` untouched by this stage (the fan-out it governs is already legal).

**Compatibility**: step 8 and the docs(session) landing verbatim; the stop conditions keep
naming the merged debugging skill and doubt-driven-development; the session ritual, status
lines and ticks unchanged; S1-S3 hand to S4 exactly where they hand to /build today;
choosing-a-skill and using-agent-skills rewrite their Build rows once, in PLAN-001 Part 6's
sweep. Every new description trigger-measured; every changed command headless-rendered
(PLAN-002 Part 5's bar).

## Open decisions for Part 4 (each priced; no verdict here)

1. **S4's home**: rebuild `incremental-implementation` in place (keeps its name, description
   and citers; the name says less than the job now does) vs a fresh name (citer edits — the
   skill has few — plus a trigger set from scratch). Either way `implement` retires to a stub.
2. **The concurrent mode's home**: a mode of `/build auto` (one surface; but implement-spec's
   worktree semantics are unverified here — ANA-010 Unverifiable — so it ships behind a
   verify-first task) vs `implement-spec` standing as its own skill (keeps
   disable-model-invocation and its 3 citers; two Build surfaces persist).
3. **The merged debugging skill's name**: `debugging-and-error-recovery` (Addy's name;
   `/build.md:43` and the lifecycle docs cite it; description already triggers on "tests
   fail, builds break") vs `diagnosing-bugs` (Matt's name; triggers on "diagnose/debug this",
   carries the loop-first identity). The loser's description words join the winner's; both
   trigger sets re-measured either way.
4. **`/build auto`'s artifact discovery**: align with the docs-system resolution order (the
   change: known-paths list gains `docs/plan/` PRD/PLAN and defers to the issue-tracker
   resolution order) vs leave as-is (zero churn; the system of record stays invisible to the
   command that executes it).
5. **The deferred PRD-home question** (from PLAN-003): where the whole composed program's
   promise lives — under PRD-001 requirement 12, as a new numbered requirement, or a new PRD.
   Asked once, here.

## Refuted

- **"Build needs one skill per lineage kept whole"** — the map shows three grains of one loop
  and complementary rule-sets; the union has no conflicting cell (ANA-010's fourteen rows).

## Unverifiable

- implement-spec's worktree fan-out under current subagent semantics — must be verified by a
  real run before any concurrent mode lands (carried from ANA-010).
- Whether the merged descriptions hold their triggers — measured only when written (Part 5).

## Consequences

Part 4 puts the five decisions to Peter, then the joint ADR (PLAN-003's and this plan's rounds
recorded once); Part 5 builds under the standing bar, coordinated with PLAN-003 Part 5 and
PLAN-001 Part 6 so each file is edited once.
