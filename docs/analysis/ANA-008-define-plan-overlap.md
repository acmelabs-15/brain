# Define and Plan across both lineages — where they overlap, differ, and compose differently

> **Analysis** · 2026-08-31 · status: current — PLAN-003 Part 2; Peter's stage tables are the
> frame; feeds ANA-009's synthesis · brain SES-007 · completes ANA-005/006 (the Addy side and the
> consult skills were inventoried there; this note adds the Matt side and the cross-map)

## Question

Where do Addy's commands/skills and Matt's skills overlap, where does only one side have a
capability, where do they do the same thing differently, and how do they compose differently —
full lifecycle in breadth, Define and Plan at depth (Peter, 2026-08-31, with his correction: the
task/ticket grain overlaps substantially and the earlier "only tracker-side requirements"
framing undersold it).

## What was read

Every Matt skill not previously read, to its last line with bundled files: `wayfinder`,
`to-tickets`, `triage` (+ `AGENT-BRIEF.md`, `OUT-OF-SCOPE.md`), `implement`, `code-review`,
`diagnosing-bugs` (+ `scripts/hitl-loop.template.sh`), `wait-what`, `loop-me`,
`resolving-merge-conflicts`, `writing-for-agents`, `setup-ts-deep-modules`,
`improve-codebase-architecture` (+ `HTML-REPORT.md`); earlier this stream: `grilling`,
`grill-me`, `grill-with-docs`, `to-spec`, `implement-spec`, `research`, `codebase-design`,
`domain-modeling` (ANA-005) and all 24 Addy skills + 8 commands (ANA-006). Peter's four
references in full (`definition-of-done`, `orchestration-patterns`, `performance-checklist`,
`testing-patterns`). Upstream diffs: brain's `planning-and-task-breakdown` vs the Addy original;
`diff -r` of every Part-1 Matt skill vs `~/Dev/reference/matt-pocock-skills` (drift 0–8 lines
each, all local edits already ledgered — the read rule, tracker pointers, ADR-location). External
comparanda fetched: github/spec-kit, obra/superpowers.

## The two pipelines, in Peter's frame

| Stage | Addy | Matt |
| --- | --- | --- |
| Define — intake | `interview-me` (one-at-a-time, hypothesis+confidence), `idea-refine` (diverge/converge) | `grill-with-docs` → `grilling` + `domain-modeling`; `wayfinder` for work bigger than one session; `research` for cited facts |
| Define — requirements | `spec-driven-development` (the repo spec; the PRD in this docs system) | `to-spec` (tracker-published requirements + plan sketch, no interview) |
| Plan — decomposition | `planning-and-task-breakdown` (tasks; optionally tracker items) | `to-tickets` (tracer-bullet tickets, blocking edges) |
| Plan — execution handoff | `/brain:build` (single-agent TDD loop; `auto` mode) | `implement` (single), `implement-spec` (task-graph, worktree subagents, merger agents) |

## The full-lifecycle overlap map

Class per row: **same-differently** (both do it, differently) / **unique** (one side only) /
**composed-differently** (the capability exists via composition rather than a skill).

| Capability | Addy | Matt | Class |
| --- | --- | --- | --- |
| Intent interrogation | `interview-me` | `grilling` (+wrappers) | same-differently — merged by ADR-005 decision 6 under the decrees |
| Idea divergence (lenses, Not-Doing list) | `idea-refine:71-138` | — | unique-Addy |
| Requirements doc | `spec-driven-development` (repo file) | `to-spec` (tracker) | same-differently — depth table below |
| Cited primary-source research | — (`source-driven-development` is Build-stage doc-verification, a different job) | `research` | unique-Matt |
| Bigger-than-one-session planning | — | `wayfinder` (map of decision tickets, fog of war, HITL/AFK types) | unique-Matt |
| Task/ticket decomposition | `planning-and-task-breakdown` | `to-tickets` | same-differently — the grain table below |
| Multi-agent execution of a plan | `/brain:build auto` (one agent, serial) | `implement-spec:19-37` (frontier concurrency, worktrees, merger subagents) | same-differently |
| TDD | `test-driven-development` | — (`implement:11` says "Use /tdd where possible") | composed-differently — Matt composes Addy's |
| Diagnosis | `debugging-and-error-recovery` (triage checklists) | `diagnosing-bugs` (loop-first discipline, phase gate) | same-differently — router already prefers the loop for hard bugs (`choosing-a-skill:69-95`) |
| Review | `code-review-and-quality` (five axes) | `code-review` (two axes, parallel subagents, smell baseline) | same-differently — router-mapped (`choosing-a-skill:220-224`) |
| Issue lifecycle / triage | — | `triage` (+`AGENT-BRIEF.md`, `OUT-OF-SCOPE.md`) | unique-Matt |
| Comms repair | — | `wait-what` | unique-Matt |
| Merge conflicts | — | `resolving-merge-conflicts` | unique-Matt |
| Recurring-process design | — | `loop-me` | unique-Matt |
| Agent-doc authoring | — | `writing-for-agents` | unique-Matt |
| Boundary enforcement tooling | — | `setup-ts-deep-modules` | unique-Matt |
| Ship/CI/observability/perf/security/frontend/git checklists | seven Addy skills | — | unique-Addy |
| Meta-routing | `using-agent-skills` (inventory tree) | — (`choosing-a-skill` is local, the opinionated router over both) | same-differently |

## Define at depth

**Interrogation** — settled by ADR-005: interview-me's hypothesis+confidence, want-vs-should-want
listening, restate + explicit-yes gate merge with grilling's design tree, frontier *ordering*,
facts-found-by-subagents, recommendation-attached, one at a time via `brain:ask-user-question`.

**Requirements** — the real depth difference:

| Dimension | `spec-driven-development` | `to-spec` |
| --- | --- | --- |
| Mode | interview until concrete; gated phases (SPECIFY→PLAN→TASKS→IMPLEMENT, human review each, `:24-34`) | **no interview** — pure synthesis of the conversation already had (`:7`) |
| Artifact | repo file; six areas + success criteria + Plans table (`:117-155`); the PRD here | tracker doc: problem/solution/extensive user stories/implementation decisions/testing decisions/out of scope (`:23-77`) |
| Distinctive machinery | Phase 0 capability map with stable module ids and dependency direction (`:36-67`); the ASSUMPTIONS block (`:73-84`); "reframe vague asks as success criteria" (`:163-175`) | **seam sketch before writing** — codebase-design vocabulary inside a Define artifact, "the ideal number is one", checked with the user (`:17-19`); the prototype-snippet exception (`:57-59`); publishes labelled `ready-for-agent` |
| Staleness stance | living document, updated with scope (`:218-225`) | no file paths or code (they go stale), behavioral prose (`:57`) |

**The rest of Define**: `idea-refine` carries the only divergence machinery (seven lenses,
stress-test criteria, hidden-assumptions surfacing, the Not-Doing list `:71-138`); `research`
the only cited-primary-source skill; `wayfinder` the only shape for fog-of-war work — its
distinctive inventions: the destination named first, the map as index never store, decision
tickets typed research/prototype/grilling/task with HITL/AFK split, claim-by-assignment,
one-ticket-per-session (`wayfinder:7-128`).

## Plan at depth — the task/ticket grain, field by field

Peter's correction verified: these are one artifact in two renderings.

| Field | Addy task (`planning-and-task-breakdown:85-106`) | Matt ticket (`to-tickets:71-105`) |
| --- | --- | --- |
| What | **Description** (one paragraph) | **What to build** (end-to-end behaviour, user's perspective) |
| Done-ness | **Acceptance criteria** checklist | **Acceptance criteria** checklist |
| Verification | explicit section: tests/build/manual commands | folded into AC |
| Ordering | **Dependencies:** task numbers | **Blocked by:** — same concept; published as *native tracker blocking links* where the tracker has them (`:65`) |
| Sizing | XS–XL table, ~5-file cap, break-down heuristics (`:127-143`) | "sized to fit a single fresh context window" (`:35`) |
| Slicing doctrine | vertical slices, good/bad example (`:59-79`) | tracer bullets — same doctrine plus: demoable on its own, prefactor first (`:25`), and the **wide-refactor expand–contract exception** (`:42`) |
| Medium | plan doc (`tasks/plan.md` or `docs/plan/`) + task-list target (todo.md or tracker items per task) | one file per ticket (`.scratch/<slug>/issues/`) or one tracker issue per ticket |
| Approval | human reviews the whole plan (`:337-345`) | "quiz the user" on granularity and edges, iterate (`:44-58`) |

**Unique to Addy's Plan stage**: the plan *document* itself (architecture decisions, risks,
open questions — the thing "that doesn't map onto tracker issues", `:147`); checkpoints as
first-class items; the sizing table; and brain's own drift — parts with status lines and
§ Continuing a plan (the rehydration walk), which exist nowhere upstream (the original uses
`### Phase N:` headings with a separate `### Checkpoint:` section and no status lines — the
verbatim wording for the phase-vs-part decision). **Unique to Matt's**: blocking edges as native
tracker links (frontier visible in the tracker UI), the expand–contract pattern for wide
refactors, prefactoring as a named step, the frontier as the *execution* interface
(`implement-spec` runs implementer subagents across it in worktrees with merger subagents), and
`ready-for-agent` labelling that makes tickets agent-grabbable by construction.

## How they compose differently

- **Addy**: a user-driven sequential pipeline of monolithic phase skills
  (`orchestration-patterns` Pattern 4 — "the user IS the orchestrator"; anti-pattern C forbids
  automating it); skills defer to a canonical sibling by pointer (`spec-driven-development:188,204`);
  most skills are checklists to consult (`choosing-a-skill:148-153`).
- **Matt**: small skills that *call each other by name* and spawn subagents — grilling →
  domain-modeling; wayfinder → research subagents in parallel; implement-spec → implementer/
  merger subagents in worktrees; the **tracker is the shared state** between skills and sessions
  (ids, blocking edges, labels), where Addy's shared state is repo files; the do-skills are
  typed-only (`disable-model-invocation`), the consult skills auto-trigger.
- **Cross-lineage composition already exists**: `implement` invokes `/tdd` and `/code-review`
  (`implement:11,15`); the local drift wired both lineages to `domain-modeling` (ANA-005 F4);
  `to-spec` sketches seams in `codebase-design`'s vocabulary.

## External comparanda (bounded web pass, 2026-08-31)

- **github/spec-kit**: `/speckit.constitution` → `.specify` → `/speckit.specify` (requirements,
  the what/why) → `/speckit.plan` (tech strategy) → `/speckit.tasks` → `/speckit.implement` →
  `/speckit.converge` (validate code against spec/plan/tasks, append gap tasks); artifacts under
  `.specify/`, each phase gating the next. Addy's gated SPECIFY→PLAN→TASKS→IMPLEMENT is this
  shape; brain's PRD→PLAN→parts adds what spec-kit lacks — the session log and the rehydration
  walk. `converge` has no equivalent in either lineage (the nearest is the Definition of Done as
  a static gate). [github.com/github/spec-kit]
- **obra/superpowers**: brainstorming (design doc, chunked Q&A) → writing-plans (tasks of 2–5
  minutes each, **exact file paths and complete code**, per-task verification) → executing-plans
  (per-task subagents, two-stage review: spec compliance then code quality). Its exact-paths rule
  is the direct opposite of Matt's no-paths durability rule (`to-tickets:107`,
  `AGENT-BRIEF.md:15-17`) — and horizon length explains both: superpowers' tasks execute
  immediately (paths cannot go stale), Matt's tickets may sit for weeks (paths will). A composed
  set should make task-freshness an explicit dial, not pick a side. [github.com/obra/superpowers]

## Refuted

- **"Matt's chain is the only tracker-side flow"** (my earlier framing, corrected by Peter) —
  `planning-and-task-breakdown:157` publishes *tasks* as tracker items with linked dependencies
  when a project designates a tracker; only the *requirements* doc is tracker-side solely in
  Matt's chain. The Plan-stage tracker flow is both-sided.
- **"Matt lacks the Define/Plan stages because he has no /spec or /plan commands"** — the stages
  exist as composing skills; only the typed spine is Addy-derived, and the 8 commands are local
  renderings anyway (ANA-006).

## Unverifiable

- Trigger-layer competition between the two Define entries is static analysis only (the do-skills
  are typed-only, so most collisions cannot occur by auto-trigger; `interview-me` vs the merged
  interrogation skill's description is the one measured surface, already gated by ADR-005).
- Which flow fits which of Peter's repos (docs-tree vs tracker-driven) is his to state at
  ANA-009's decisions.

## Consequences

ANA-009 ranks the capabilities and selects granular parts. The strongest candidates this map
surfaces: the merged interrogation skill (ADR-005) fed by idea-refine's divergence lenses;
requirements machinery pooled from both (capability map + assumptions block + success-criteria
reframing + seam sketch + out-of-scope + Plans table); one decomposition skill carrying both
renderings (plan-doc parts *and* ticket/tracker output with native blocking edges, sizing from
both, expand–contract, prefactoring, checkpoints, § Continuing a plan intact); wayfinder and
research standing as the fog-of-war and evidence outriders; the freshness dial from the
superpowers contrast; spec-kit's `converge` as a candidate gap-filler backed by the Definition
of Done.
