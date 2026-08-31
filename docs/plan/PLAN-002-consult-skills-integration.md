# Plan: the consult skills and the Addy lifecycle — evaluate deeply, then integrate deliberately

> Status: in progress · Peter, 2026-08-31 ("a deep comprehensive evaluation of both domain-modeling
> and codebase-design as well as … all of the addy osmani agent-skills commands/skills in the
> ACMElabs/brain plugin specifically evaluating for how to best integrate") · serves
> [PRD-001](PRD-001-session-log-and-rehydration.md) requirement 12's one-toolset goal (no numbered
> requirement — see Open questions) · the decision itself is Part 4's ADR, not this plan's

## Overview

The plugin carries three lineages in one namespace. Two consult skills sit beside the Addy Osmani
lifecycle: `domain-modeling` (owns a repo's `CONTEXT.md`/`CONTEXT-MAP.md`, carries the ADR offer
rule) and `codebase-design` (the deep-modules vocabulary — *seam*, *deep module*, *frontier* —
which the Matt Pocock lineage uses verbatim and which leans on domain-modeling's CONTEXT files).
PLAN-001 Part 5 Task 2's first shape decision (the ADR template, `df0205b`) surfaced Peter's
concern: the lifecycle likely defines the same concepts elsewhere, not fully aligned, and the
right end state may be integration — into one skill, into several, or separation with clean
one-home boundaries. This plan evaluates both sides in full, produces a measured collision matrix
and priced integration options, puts the decisions to Peter one at a time, and implements what he
picks. PLAN-001 Part 5's Task 2 (shapes 2–3) and Task 3 hand their evaluation and decisions here
and tick there citing this plan's ADR.

Method, decided up front:

- **One evaluator, full reads.** The collision matrix is only as good as the extraction's
  consistency; every evaluated file is read to its last line in one context, no subagent fan-out,
  no sampling.
- **Evidence → options → decisions → implementation.** Inventories as analyses (ANA), options
  surfaced with costs and no verdict, decisions Peter's by `ask-user-question` one at a time into
  an ADR, implementation shaped by the ADR. **No edit to any evaluated skill before the ADR**
  (`df0205b` stands; nothing else moves while being evaluated).
- **Upstream drift is a first-class cost.** The Addy skills sit 0–8 lines from their upstream by
  design (PLAN-001 Part 5 Task 3's measured premise); merging a consult skill *into* one converts
  pointer-sized drift into a permanent fork every upstream update pays for. Every option prices
  it, in both directions.

## Decisions it relies on

- [ADR-002](../decisions/ADR-002-brain-is-the-plugin-for-the-whole-toolset.md),
  [ADR-003](../decisions/ADR-003-the-session-skill-moves-now-with-its-history.md) — one plugin,
  `brain:` namespacing; git history as the drift record.
- `df0205b` — the ADR template's one home: the first instance of the pattern this plan
  generalizes or supersedes (Part 4 may fold it into a larger arrangement; until then it stands).
- PLAN-001 Part 6 Task 1 (the retirement sweep) — Part 5 here coordinates with it so every file
  is edited once.
- Peter's standing rules: decisions his via `ask-user-question`; read named files in full; verify
  or say unverified; fix the cause.

## Parts

### Dependencies between the parts

```text
Part 1 (the two consult skills, ANA-005) ──┐
                                           ├──> Part 3 (options, ANA-007) ──> Part 4 (decisions, ADR) ──> Part 5 (implementation)
Part 2 (the Addy lifecycle, ANA-006) ──────┘
Parts 1 and 2 are independent of each other; everything after is sequential.
```

### Part 1: the two consult skills, inventoried

> Status: done (session SES-006, `b8c5f99`)

- [x] Task 1 (2026-08-31, `b8c5f99`): `domain-modeling` read in full — every file under `skills/domain-modeling/`
  (`SKILL.md`, `ADR-FORMAT.md`, `CONTEXT-FORMAT.md`, anything else the directory holds). The
  capability inventory: what it defines (glossary ownership, term resolution, the ADR offer rule),
  what it produces, what it reads, its lineage and its drift from any reference checkout under
  `~/Dev/reference/`. Acceptance: a capability table where every row cites file:line.
- [x] Task 2 (2026-08-31, `b8c5f99`): `codebase-design` likewise — the deep-modules vocabulary as a defined term set, its
  dependency on domain-modeling's CONTEXT files, its own workflows. Same acceptance.
- [x] Task 3 (2026-08-31, `b8c5f99`): the citation graph, measured — a grep over `skills/`, `commands/`, `agents/`,
  `references/` for `domain-modeling`, `codebase-design`, `CONTEXT.md`, `CONTEXT-MAP.md` and the
  deep-modules terms; every edge with direction and count. Acceptance: the graph in ANA-005 with
  the grep beside it; Refuted and Unverifiable sections present.
- [x] Checkpoint (2026-08-31): ANA-005 committed with its index row (`b8c5f99`) and its entry
  logged (`1b503c4`).

### Part 2: the Addy lifecycle, inventoried

> Status: done (session SES-006, `b827926` — evaluated in Part 1's session, one continuous read; the deviation is in SES-006's Narrative)

- [x] Task 1 (2026-08-31, `b827926`): the lifecycle map — the 8 commands (`/brain:plan`, `build`, `spec`, `test`,
  `review`, `ship`, `webperf`, `code-simplify`) and `choosing-a-skill`'s routing read in full;
  the stage graph (what hands to what, which skills each stage fires). Acceptance: the map with
  every edge cited.
- [x] Task 2 (2026-08-31, `b827926`): the 24 Addy skills read in full, one row each: lifecycle stage, artifacts consumed
  and produced, the concept definitions the skill carries (decision records, glossary or
  vocabulary guidance, design terms, output templates), the local CONTEXT.md-read drift line
  where present, and overlap flags against ANA-005's inventory. Acceptance: every skill's row
  cites file:line; every file read to its last line.
- [x] Task 3 (2026-08-31, `b827926`): the collision matrix — concept × every home × what each home says, including
  PLAN-001 Part 5's two open shapes (the spec template: `spec-driven-development` vs `to-spec`;
  the ticket shape: `to-tickets` vs `references/issue-tracker.md`). Acceptance: each cell cites
  file:line; alignments and misalignments stated plainly.
- [x] Checkpoint (2026-08-31): ANA-006 committed with its index row (`b827926`); the entry logged in the docs(session) commit that carries these ticks.

### Part 3: the integration options

> Status: done (session SES-006, `545f48e`)

- [x] Task 1 (2026-08-31, `545f48e`): ANA-007 — the options, each priced and none chosen: keep-separate with one-home
  pointers (the `df0205b` pattern generalized); merge into a single skill; distribute into
  several lifecycle skills; demote either consult skill to a reference. Each priced against:
  upstream drift, triggering and routing (description collisions, static analysis — a
  `measure-triggering.ts` sweep only where the static case is genuinely unclear), body budgets
  and disclosure economics, the deletion test, and Peter's daily flows. The keep-separate option
  gets first-class depth, not a default's (Peter, 2026-08-31: "does it actually make sense just
  to keep it as a separate skill? And if so where does that skill fit into the life cycle, what
  does it look like, how does it change potentially") — for each consult skill: its place in the
  lifecycle map, the shape it takes (description, edges, who owns the read-rule lines), and what
  changes even if it stays. Acceptance: every cost
  stated in measurable terms with its source; no verdict anywhere in the note.
- [x] Checkpoint (2026-08-31): ANA-007 committed with its index row (`545f48e`); the entry logged in the docs(session) commit carrying these ticks.

### Part 4: the decisions and the ADR

> Status: done (session SES-006, `7b0afc0`)

- [x] Task 1 (2026-08-31): the decisions — Peter's, `ask-user-question`, one at a time; six made
  (three of them — the A4 rule, the `!`-injection mechanism, the M1 merge under his two decrees —
  emerged in the round itself, beyond ANA-007's options, through his /wait-what repairs and
  pushback); the seventh (the spec shape) superseded mid-round by his redirect into
  [PLAN-003](PLAN-003-define-plan-synthesis.md).
- [x] Task 2 (2026-08-31, `7b0afc0`): ADR-005 — the six decisions, the decrees, the three
  measurements (the `@` null, the `!`-injection, the hook path), the supersessions.
- [x] Task 3 (2026-08-31, with the docs(session) commit carrying these ticks): the plans
  reconciled — PLAN-001 Part 5 Task 2 resolved (shape 1 `df0205b`; shape 3 refuted, ANA-006;
  shape 2 → PLAN-003); this part's task list below written from ADR-005.
- [x] Checkpoint (2026-08-31): the ADR accepted and the plans consistent. Its third clause
  ("grep for the old arrangement returns history only") was mis-scoped at authoring — it
  describes implementation and moves to Part 5's checkpoint.

### Part 5: implementation

> Status: planned — written from ADR-005; Task 5 absorbed into
> [PLAN-005](PLAN-005-lifecycle-composition-implementation.md) Part 1 (ADR-006)

- [ ] Task 1: the read-rule injection — `references/read-the-glossary.md` created; the 16 skills'
  inline copies replaced by the `!`-cat line plus `allowed-tools: Bash(cat:*)`; the two agents'
  "Project vocabulary" sections decided and handled (agent bodies run no `!`); one headless
  render proving the injected text arrives. Acceptance: `grep` finds the rule's sentences only in
  the one reference file; every consuming skill renders with the rule inlined.
- [ ] Task 2: the ADR rule's one home — `domain-modeling` § Offer ADRs rewritten to ADR-005
  decision 3's rule; `documentation-and-adrs` § When to Write an ADR becomes worked examples plus
  the pointer. Acceptance: exactly one normative statement of the rule exists; both skills cite it.
- [ ] Task 3: `CONTEXT-MAP.md` collision rows — the *boundary* senses (decision 5); the "spec"
  row lands with PLAN-003's ADR, not before.
- [ ] Task 4: `using-agent-skills`' discovery tree names `domain-modeling` as the parallel
  vocabulary track and the `codebase-design` chain head. Acceptance: the tree routes to both.
- [x] Task 5 (2026-08-31, absorbed): the interrogation skill is
  [PLAN-005](PLAN-005-lifecycle-composition-implementation.md) Part 1 Task 1 — this plan does
  not build it twice.

> The bar below is fixed so the tasks inherit it

Verification bar for every implementation task: `bun test`, typecheck, `bun run validate`;
plugin-kit's validator over every touched skill; measured triggering (`measure-triggering.ts`,
full sweep on the fixed tier) wherever a description changed; a headless render wherever a body's
procedure changed; the session ritual throughout; coordinated with PLAN-001 Part 6 Task 1's sweep
so each file is edited once.

## Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Reading volume degrades the matrix's consistency | a wrong integration decision | one evaluator, full reads, every cell greppable; the checkpoint re-runs spot greps |
| Merging forks an Addy skill from upstream permanently | every future upstream update becomes a hand-merge | drift priced per option in Part 3; the byte-identical-references precedent from Part 5 Task 3's measured premise |
| Piecemeal edits while evaluating | churn, and the matrix measures a moving target | no edit to any evaluated skill before Part 4's ADR; `df0205b` is the one standing change |
| PLAN-001 Part 6's sweep edits the same files | double edits, conflicting anchors | Part 5 here lands before or with that sweep; both plans name the dependency |

## Open questions

- Does PRD-001 gain a requirement 13 (one aligned lifecycle vocabulary) — Peter's, at Part 4.
- Do the Matt-lineage execute skills (`grilling`, `to-tickets`, `wayfinder`, `implement-spec`,
  `diagnosing-bugs`) enter scope beyond citing the vocabulary — Part 3 may recommend it; Peter
  decides.
