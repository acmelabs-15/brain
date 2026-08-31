# The Define/Plan composition — what matters most, the parts chosen from each lineage, and the skill set they compose

> **Analysis** · 2026-08-31 · status: current — PLAN-003 Part 3; a proposal with open decisions
> for Part 4, no verdict locked here · brain SES-007 · rests on ANA-008 (the overlap map),
> ANA-005/006 (the inventories), ADR-005 (the decrees and the merged interrogation skill)

## Question

Given the overlap map: what functionality matters most for the Define and Plan stages, which
granular parts of which skills — sections and mechanisms, never whole-skill-vs-whole-skill —
carry each function best, and what new skill set do they compose into, compatible with the rest
of brain (Peter, 2026-08-31).

## Layer (a) — what Define and Plan most need, ranked

Derived from both packages, brain's docs system, ADR-005's decrees, and the measured record:

1. **One interrogation surface**, one question at a time through `brain:ask-user-question`
   (decree; ADR-005 decision 6) — everything in Define funnels through asking well.
2. **Requirements that land in the system of record** — the PRD with its Plans table is how
   every later conversation finds the work (ADR-001's walk starts there); a tracker-driven repo
   needs the same content to land as its tracker doc.
3. **One decomposition model with two renderings** — the plan document with parts and status
   lines (rehydration's spine) *and* agent-grabbable tickets with blocking edges (execution's
   interface). ANA-008 showed these are already one artifact in two renderings; the model should
   exist once.
4. **The rehydration walk preserved intact** — § Continuing a plan is brain's daily door
   (PLAN-001 Part 4, measured working); nothing in the composition may regress it.
5. **Decisions and terms captured as they crystallise** — the domain-modeling handoff (ANA-005's
   nine active edges) and the ADR rule (ADR-005 decision 3) wired into Define and Plan, not
   batched for the end.
6. **Evidence on demand and a shape for fog** — `research` (cited primary sources) and
   `wayfinder` (destination, map-as-index, decision tickets) as outriders the stages call.
7. **Verification as structure** — per-task acceptance criteria *plus* explicit verification
   commands, checkpoints between parts, and the Definition of Done as the standing floor;
   spec-kit's `converge` (validate the code against spec/plan/tasks, append gap tasks) names a
   gate neither lineage has.
8. **A freshness dial on task specs** — durable, path-free wording for tickets that may sit
   (Matt's rule), exact paths permitted when execution is immediate (superpowers' rule); horizon
   length decides, stated per plan rather than baked into the template.

## Layer (b) — the parts selected, with provenance

| Function | Part taken | From | Why it wins |
| --- | --- | --- | --- |
| Intent extraction | hypothesis + confidence number; want-vs-should-want probes; restate + explicit-yes gate; the 95% stop test | `interview-me:40-133` | the only machinery that catches "what they said" ≠ "what they want" |
| Structured interrogation of an artifact | the design tree; frontier *ordering* (ask only what's unblocked); facts found by subagents, never asked; a recommendation attached; done when the tree is visited | `grilling:6-28` | already merged by ADR-005; the ordering survives the one-at-a-time decree |
| Divergence when the idea is vague | the seven lenses; the painkiller/feasibility/differentiation stress-test; hidden-assumptions surfacing; the **Not-Doing list** | `idea-refine:71-138` | the only divergence machinery in either lineage; the Not-Doing list is Out-of-Scope's twin |
| Requirements skeleton | the six areas + success criteria; the **Plans table** | `spec-driven-development:117-155` (table is brain's drift) | the shape the docs system already consumes as the PRD |
| Multi-capability scoping | Phase 0 capability map (stable ids, dependency direction, build order, gated) | `spec-driven-development:36-67` | nothing else prevents the monolithic-spec failure |
| Assumption hygiene | the ASSUMPTIONS block ("correct me now or I proceed with these") | `spec-driven-development:73-84` | cheapest misunderstanding-surfacing mechanism on record |
| Vague-ask conversion | "reframe instructions as success criteria" | `spec-driven-development:163-175` | turns "make it faster" into testable targets |
| Design-aware requirements | the seam sketch before writing ("existing seams preferred, the ideal number is one", checked with the user) | `to-spec:17-19` | the one Define mechanism that consults `codebase-design` where it matters |
| Requirements without re-interviewing | the no-interview synthesis mode | `to-spec:7` | the conversation often *is* the interview; re-asking is ceremony |
| Decision-rich content rules | Implementation Decisions + Testing Decisions sections; the prototype-snippet exception; behavioral-not-procedural, no file paths | `to-spec:45-67`, `AGENT-BRIEF.md:9-37` | durability rules written from real staleness |
| Scope honesty | Out of Scope as a required section | `to-spec:69-71`, `interview-me:111` | "half of misalignment is silent disagreement about what is *not* being built" |
| Decomposition doctrine | dependency graph → vertical slices; the good/bad slicing example | `planning-and-task-breakdown:37-79` | the clearest statement of the shared doctrine |
| Slice quality bar | tracer-bullet rules: complete through every layer, demoable alone, sized to one fresh context window; **prefactor first** | `to-tickets:27-38,25` | sharper than the size table alone; "make the change easy, then make the easy change" |
| Wide-refactor escape | the expand–contract sequencing with batched migrations | `to-tickets:42` | the one honest answer to work vertical slicing cannot hold |
| Task/ticket template | What (end-to-end behaviour) + AC + **explicit Verification commands** + Blocked-by | fields pooled: `planning-and-task-breakdown:85-106` + `to-tickets:71-105` | each side lacks one of the other's fields |
| Sizing heuristics | the XS–XL table and break-down triggers *and* the fresh-context-window bound | both | two rulers agree more often than one |
| Ordering + risk | blockers-first, risk-first slicing, checkpoints every 2–3 tasks | `planning-and-task-breakdown:108-125`, `incremental-implementation` | checkpoints are where humans catch wrong direction |
| Granularity approval | the quiz-the-user round (granularity / edges / merge-split) | `to-tickets:44-58` | a structured approval beats "review the plan" |
| Publication | the task-list-target abstraction, extended: plan-doc parts + todo/tracker items, or per-ticket files / native tracker issues with **native blocking links** and `ready-for-agent` | `planning-and-task-breakdown:145-159` + `to-tickets:60-69` | one model, two renderings — ANA-008's central finding |
| Rehydration | § Continuing a plan, verbatim | brain's `planning-and-task-breakdown:215-323` | measured working; untouchable |
| Recording | the domain-modeling handoff sections; the ADR-005 offer rule | local drift + ADR-005 | the record is the point of the docs system |
| Standing floor | the Definition of Done as every plan's final gate | `references/definition-of-done.md` | Peter's own most-important list |
| Composition law | the user is the orchestrator; sequential slash pipeline; no orchestrator agent | `references/orchestration-patterns.md` Pattern 4, anti-pattern C | keeps human checkpoints where judgment matters |

## Layer (c) — the composed set

Three rebuilt skills, two outriders unchanged, the existing commands re-pointed. Everything
below inherits: the read-rule `!`-injection (ADR-005 d.4), the domain-modeling closing handoff,
descriptions trigger-swept before landing, brain's docs-system compatibility.

**S1 — the interrogation skill** (ADR-005 decision 6, composed here). Two modes behind a Step-0
fork: *intent* (no artifact yet: hypothesis+confidence, want-vs-should-want, the divergence
lenses when the ask is vague, restate + explicit-yes) and *artifact* (the design tree, frontier
ordering, facts via subagents, recommendation attached). First line calls
`brain:ask-user-question`; one question at a time throughout. `grilling` retires to a pointer;
`grill-me`/`grill-with-docs` retarget; `wayfinder`'s and `triage`'s grilling calls follow.

**S2 — the requirements skill.** One template pool: the six areas + capability map + assumptions
block + success-criteria reframing + seam sketch + Implementation/Testing Decisions + Out of
Scope + the Plans table. Two intake modes (interview via S1 when vague; to-spec's synthesis mode
when the conversation already settled it) and two publications (the repo PRD in `docs/plan/` —
the docs-system default — or the tracker requirements doc with `ready-for-agent`, per the repo's
declared style). Replaces `spec-driven-development` and `to-spec` (pointer stubs). Fronted by
`/brain:spec`. This dissolves the "spec" word collision structurally: one skill, two renderings,
the CONTEXT-MAP row shrinks to naming them.

**S3 — the decomposition skill.** One work model — a plan of parts (or phases; open decision 1)
holding tasks with What/AC/Verification/Blocked-by; sizing by both rulers; vertical/tracer
doctrine with prefactoring and expand–contract; checkpoints; the quiz-the-user approval round;
the freshness dial stated per plan; § Continuing a plan carried verbatim; the extended
task-list target renders the plan doc + todo/tracker items or per-ticket files / native tracker
issues with blocking links. Replaces `planning-and-task-breakdown` and `to-tickets` (pointer
stubs). Fronted by `/brain:plan` — both procedures (continue and create) as today.

**Outriders, unchanged in role**: `research` (called by S1's fact-finding and S2's evidence
needs); `wayfinder` (the fog-of-war shape above S2/S3, its ticket types intact — its "grilling"
calls become S1-artifact-mode calls). `triage`'s AGENT-BRIEF durability rules become the shared
wording standard for S3's durable rendering. Downstream stages are untouched now:
`/brain:build`, `implement`, `implement-spec` consume S3's renderings as they consume today's
(implement-spec pairs with the ticket rendering); a converge-style gate (open decision 5) would
land in `/brain:build`'s closing step backed by the Definition of Done.

**Compatibility mapping** (the "of course it works with brain" layer): the docs system's
PRD→PLAN→parts→sessions chain is S2/S3's primary rendering; `/brain:plan PLAN-NNN` behaves
identically; the session skill's status lines and ticks are unchanged unless decision 1 renames
the unit; `choosing-a-skill` and `using-agent-skills` rewrite their Define/Plan rows to S1–S3;
`CONTEXT-MAP.md` keeps the deep-modules and triage-roles contexts and gains the two-renderings
"spec" row; PLAN-001 Part 6's sweep then retires the superseded sources once.

**Migration and evidence**: each retired skill becomes a pointer stub (the `df0205b` pattern)
until Part 6 removes sources; every new description gets a fresh trigger set measured on the
fixed tier; each rebuilt body gets a headless render before landing (PLAN-002 Part 5's bar).

## Open decisions for Part 4 (each priced; no verdict here)

1. **phase vs part** (Peter's hedged preference for *phase*). Price of renaming: the session-log
   glossary (**Plan part**, `_Avoid_: phase`) and `skills/session/CONTEXT.md`; the tool's
   status-line grammar, parser and tests (`core.ts`, `cli.ts`); `SKILL.md` § The plan part's
   status line; § Continuing a plan's steps; every existing PLAN file here and in env-setup;
   ADR-022's lineage in env-setup; `project-docs-conventions.md`. Roughly a dozen files plus the
   tool plus two repos' live plans — mechanical but wide, and old sessions keep the old word as
   history. Price of keeping *part*: one line of divergence from the upstream original's wording
   and from Peter's instinct.
2. **S1's divergence scope**: absorb `idea-refine`'s lenses into S1's intent mode and retire the
   skill, or keep `idea-refine` standalone (its deliverable — the one-pager — differs; its
   save-on-confirm behavior is its own).
3. **Rendering selection for S2/S3**: how a repo declares docs-tree vs tracker style (a
   `CLAUDE.md` line, the tracker doc's existence, or asked once per repo).
4. **Naming and identity**: rebuild in place under the existing names (keeps
   `planning-and-task-breakdown`'s 30+ citers and the measured description; S2 keeps
   `spec-driven-development`'s name) vs new names for a new set (cleaner story, every citer and
   trigger set redone). The in-place option keeps ADR-005's and PLAN-001 Part 4's measured work
   intact.
5. **The converge gate**: add a validate-code-against-spec/plan step (spec-kit's `converge`,
   backed by the Definition of Done) to `/brain:build`'s close, or leave verification to the
   existing checkpoints and DoD.
6. **Execution-stage unification** (`/brain:build` vs `implement`/`implement-spec`) — surfaced by
   the map, deliberately out of this plan's scope; record for a later plan.

## Refuted

- **"Composing means choosing Addy's or Matt's Plan skill"** — the field-by-field grain shows a
  strict union is coherent: each side's template lacks fields the other has, and the two
  publication targets never conflicted (ANA-008's task/ticket table).

## Unverifiable

- Whether the merged S1–S3 descriptions hold their triggers — measured only when written
  (Part 5's bar); the freshness dial's effect on ticket staleness — observable only in use.

## Consequences

Part 4 puts the six decisions to Peter, then the ADR; Part 5 builds S1–S3 under the standing
bar; PLAN-002 Part 5 Task 5 (the interrogation skill) merges into S1's build; PLAN-001 Part 6
retires the superseded sources after.
