# The Build stage across both lineages — the overlap map for implement, implement-spec, incremental-implementation and /brain:build

> **Analysis** · 2026-08-31 · status: current — PLAN-004 Part 2 · brain SES-007 · rests on
> ANA-008 (comparanda, the freshness dial), ANA-009 (S3's two renderings), the PLAN-003 Part 4
> round (the DoD tiers wired into /brain:build) · authorship note: `implement-spec` is Matt's
> (`matt-pocock-skills/skills/in-progress/`), `incremental-implementation` is Addy's

## Question

Given PLAN-004's roster: where do the Build-stage surfaces overlap, do the same thing
differently, or compose differently — at the grain of sections and mechanisms (Peter,
2026-08-31, the initial-prompt shape scoped to the implement skills).

## The four surfaces

- **`implement`** (Matt, 16 lines): read the spec/tickets, `/tdd` at pre-agreed seams,
  typecheck regularly, single test files regularly, full suite once at the end, `/code-review`,
  commit (`implement:11-17`). The whole loop in six sentences; everything else is delegated.
- **`implement-spec`** (Matt, § Steps): a whole spec to one PR — the tickets are a task graph
  with a **frontier**; implementer subagents in their own worktrees and branches, run in the
  background for maximum concurrency; merger subagents fold each into the PR branch; the
  frontier refills as tickets close; `/code-review` on the PR branch at the end, fixes in one
  implementer; worktree cleanup (steps 1–9). Communication is context pointers, never restated
  content.
- **`incremental-implementation`** (Addy, 256 lines): the increment cycle
  (implement→test→verify→commit→next, `:23-44`), three slicing strategies (`:46-89`), six rules
  (`:91-183`), the agent-direction prompt (`:185`), the checklist in the repository's own
  commands (`:201`), rationalizations and red flags, and the DoD as the final gate (`:249`).
- **`/brain:build`** (command): the default per-task loop — AC → context → RED → GREEN → suite
  → build → commit → tick-citing-sha into the docs(session) commit (`build.md:18-25`, ADR-022)
  — and `auto`: require a spec, clean baseline, plan from `tasks/plan.md` (or find an existing
  one), the single unambiguous-affirmative checkpoint, dependency order with one commit per
  task, stop conditions naming `debugging-and-error-recovery` and `doubt-driven-development`,
  the closing summary (`build.md:32-47`).

Orbit: `test-driven-development`, `debugging-and-error-recovery` (Addy) and `diagnosing-bugs`
(Matt), `doubt-driven-development`, `definition-of-done`, `triage/AGENT-BRIEF.md`,
`testing-patterns`. Drift from upstream across the roster: only the ledgered read-rule hunks
and `incremental-implementation:251`'s DoD pointer path (`skills/LOCAL-CHANGES.md`).

## The overlap map

| Function | Addy side | Matt side | Class |
| --- | --- | --- | --- |
| The execution loop | the increment cycle (`incremental-implementation:23-44`); `/brain:build`'s 8 steps (`build.md:18-25`) | `implement:11-17` — the same loop in six sentences | **same-differently** — three grains of one loop (doctrine / command / minimal) |
| TDD | the skill embedded: RED→GREEN→REFACTOR (`test-driven-development:40-96`), Prove-It (`:98`), Discover the Stack First (`:26`) | "Use /tdd where possible, **at pre-agreed seams**" (`implement:11`) — the seams agreed upstream in to-spec's seam sketch (`to-spec:17-19`) | **composed-differently** — skill-in-loop vs pointer plus an upstream agreement |
| Concurrency | none — `/build auto` is one session, dependency order, one commit per task for clean rollback (`build.md:41`) | implementer subagents in worktrees, background, merger subagents, frontier refill (`implement-spec` steps 4–6) | **unique-to-Matt** — see the orchestration section below |
| What is consumed | a spec at known paths + `tasks/plan.md` (`build.md:32-34`); "a task breakdown" (`incremental-implementation:16`) | "a spec or set of tickets" (`implement:7`); a task graph with blocking edges (`implement-spec:11`) | **same-differently** — the S3 seam: one work model, two renderings (ANA-009) |
| Slicing | in-stage: vertical preferred, contract-first, risk-first (`incremental-implementation:46-89`) | upstream: to-tickets' tracer bullets and prefactoring (`to-tickets:25-38`) | **composed-differently** — the same doctrine placed in different stages |
| Scope discipline | Rule 0.5, "noticed but not touching" with the offer to file tasks (`incremental-implementation:117-135`) | upstream: AGENT-BRIEF's "Explicit scope boundaries" (`AGENT-BRIEF.md`) | **same-differently** — in-stage rule vs contract clause |
| Simplicity gate | Rule 0 with the staff-engineer checks (`incremental-implementation:93-115`) | none in-stage | **unique-to-Addy** |
| Landing the work | commit-centric (`build.md:24`); feature flags for incomplete work and rollback-friendly increments (`incremental-implementation:149-183`) | PR-centric: draft PR closing the spec issue, merger subagents, ready-for-review, cleanup (`implement-spec` steps 3, 5, 8–9) | **composed-differently** — flags-on-main vs one-PR-per-spec |
| The failure path | `debugging-and-error-recovery`: stop-the-line (`:23`), the six-step triage (`:38-172`), error-specific patterns (`:174`), error output as untrusted data (`:274`) | `diagnosing-bugs`: **the feedback loop is the skill** (`:18`), ten ways to build one (`:24`), tight/red-capable completion criterion (`:57`), 3–5 ranked falsifiable hypotheses (`:88`), tagged instrumentation (`:100`), fix only at a correct seam (`:114`) | **same-differently** — the deepest pairing in the stage: breadth of triage vs depth of loop-construction; `/build` cites only the Addy one (`build.md:43`) |
| In-flight adversarial check | `doubt-driven-development`: CLAIM/EXTRACT/DOUBT/RECONCILE/STOP (`:51-193`), fresh-context reviewer without the CLAIM (`:87`), the cross-model offer (`:117`); `/build auto` routes high-risk tasks to it (`build.md:45`) | none in-stage — grilling is upstream and HITL | **unique-to-Addy** |
| End-of-run verification | the closing summary (`build.md:47`); DoD Ship-readiness wants human review (`definition-of-done.md:47-52`) | both implement skills end with `/code-review` (`implement:15`, `implement-spec` step 7) | **same-differently**, plus the shared gap: nothing re-reads the spec — the converge gap the PLAN-003 round already resolved (DoD tiers + plan-close converge) |
| The session record | the tick-cites-sha into docs(session) (`build.md:25,41`, ADR-022) | none | **unique-to-brain** |
| Repo's-own-commands | Discover the Stack First (`test-driven-development:26-38`); the checklist names the repo's commands and bans redundant re-runs (`incremental-implementation:201-213`) | "typecheck regularly" with no discovery machinery (`implement:13`) | **same-differently** |
| Untrusted content | error output and browser content as data, never instructions (`debugging-and-error-recovery:274`, `test-driven-development:339`) | Redact every secret before showing output (`diagnosing-bugs:12`) | **same-differently** — adjacent safety rules for different threats |

## Depth: the loop, step by step

| Step | `/brain:build` default | increment cycle | `implement` |
| --- | --- | --- | --- |
| Read the AC | step 1 | via the task | via the ticket |
| Load context | step 2 | — | read spec/tickets (step 1) |
| RED | step 3 | "write a test if none exists" (`:37` — weaker) | via /tdd |
| GREEN | step 4 | step 1 of the cycle | via /tdd |
| Regression suite | step 5 | step 2 | single files regularly, full suite once at the end |
| Build/typecheck | step 6 | checklist (`:201`) | "typecheck regularly" |
| Commit | step 7 | step 4 | last line |
| Record | step 8: tick cites the sha | — | — |
| Review | — (a later stage) | — | `/code-review` before done |

The three grains never contradict; each drops steps another carries. Only `/brain:build` records;
only `implement` reviews in-stage; only the increment cycle names slicing and the six rules.

## Depth: what gates exist today, against the DoD tiers

| DoD tier (`definition-of-done.md:53-58`) | Gated today by |
| --- | --- |
| Per task — Correctness + Quality | Correctness: `/build` steps 3–6, the increment checklist, TDD's verification. **Quality (`:28-35`): no surface names it at the tick** — lint/format ride the checklist, intent-revealing naming and no-dead-code ride nothing |
| Per feature — Integration + Documentation | **nothing** — `incremental-implementation:249` points at the DoD as "the final gate" without the tier; no checkpoint names Integration or Documentation |
| Per release — the full checklist | `shipping-and-launch` (out of this plan's scope) |

This is the measured shape of the gap the PLAN-003 round decided to close: the tiers exist in
the reference and in no skill's steps.

## Depth: concurrency against the orchestration law

`orchestration-patterns.md:5`: "the user (or a slash command) is the orchestrator. Personas do
not invoke other personas." `:80`: in Pattern 4 "there is no orchestrator agent — the user IS
the orchestrator." `:170`: parallel fan-out requires multiple Agent calls in one turn. `:145`:
subagents cannot spawn subagents, so the anti-patterns cannot be built by accident.

`implement-spec` is a main-session fan-out — implementer subagents from the driving session —
which the law permits; its worktrees give each implementer isolation in space. `/build auto`
achieves safety by sequence in time: one commit per task, any point a clean rollback
(`build.md:41`). The two honor the same law with opposite geometry, and neither cites the
other's trade: `implement-spec` never says what a failed merger does to the rollback story;
`/build auto` never says what concurrency would buy on a wide frontier.

## Comparanda

ANA-008 carries the external facts; they are not restated here. Superpowers' executing-plans
sits at the immediate-horizon end of the freshness dial (exact paths, 2–5-minute tasks);
spec-kit's `implement` is gated by its `tasks` artifact and followed by `converge` — the shape
the PLAN-003 round adopted via the DoD tiers.

## Refuted

- **"`incremental-implementation` and `/brain:build` are duplicates"** — the command is the
  per-task loop plus the session record plus the auto orchestration; the skill is the slicing
  doctrine plus the six rules. They share only the loop's middle (the step table above).
- **"Matt's side lacks a debugging discipline"** — `diagnosing-bugs` is the counterpart, and
  deeper than the Addy skill on loop-construction; it was missing from the initial roster and
  was added during Part 1.

## Unverifiable

- Whether `implement-spec`'s worktree fan-out runs as written under current Claude Code
  subagent semantics — not executed here; ANA-011 must not assume it.
- Upstream dormancy (the drift price assumption, as in ANA-007).

## Consequences

Part 3 (ANA-011) composes from this map: three grains of one loop to unify without losing any
side's unique steps; concurrency as a mode, not a fork of the stage; the failure-path pairing
as the richest merge candidate; the DoD tiers landing where this note shows nothing gates
today; AGENT-BRIEF durability and the freshness dial governing what the stage consumes from S3.
