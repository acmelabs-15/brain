# Plan: the consult skills and the Addy lifecycle — evaluate deeply, then integrate deliberately

> Status: planned · Peter, 2026-08-31 ("a deep comprehensive evaluation of both domain-modeling
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

> Status: planned

- [ ] Task 1: `domain-modeling` read in full — every file under `skills/domain-modeling/`
  (`SKILL.md`, `ADR-FORMAT.md`, `CONTEXT-FORMAT.md`, anything else the directory holds). The
  capability inventory: what it defines (glossary ownership, term resolution, the ADR offer rule),
  what it produces, what it reads, its lineage and its drift from any reference checkout under
  `~/Dev/reference/`. Acceptance: a capability table where every row cites file:line.
- [ ] Task 2: `codebase-design` likewise — the deep-modules vocabulary as a defined term set, its
  dependency on domain-modeling's CONTEXT files, its own workflows. Same acceptance.
- [ ] Task 3: the citation graph, measured — a grep over `skills/`, `commands/`, `agents/`,
  `references/` for `domain-modeling`, `codebase-design`, `CONTEXT.md`, `CONTEXT-MAP.md` and the
  deep-modules terms; every edge with direction and count. Acceptance: the graph in ANA-005 with
  the grep beside it; Refuted and Unverifiable sections present.
- [ ] Checkpoint: ANA-005 committed with its index row and its entry logged (SES-NNN per the
  part's status line).

### Part 2: the Addy lifecycle, inventoried

> Status: planned

- [ ] Task 1: the lifecycle map — the 8 commands (`/brain:plan`, `build`, `spec`, `test`,
  `review`, `ship`, `webperf`, `code-simplify`) and `choosing-a-skill`'s routing read in full;
  the stage graph (what hands to what, which skills each stage fires). Acceptance: the map with
  every edge cited.
- [ ] Task 2: the 24 Addy skills read in full, one row each: lifecycle stage, artifacts consumed
  and produced, the concept definitions the skill carries (decision records, glossary or
  vocabulary guidance, design terms, output templates), the local CONTEXT.md-read drift line
  where present, and overlap flags against ANA-005's inventory. Acceptance: every skill's row
  cites file:line; every file read to its last line.
- [ ] Task 3: the collision matrix — concept × every home × what each home says, including
  PLAN-001 Part 5's two open shapes (the spec template: `spec-driven-development` vs `to-spec`;
  the ticket shape: `to-tickets` vs `references/issue-tracker.md`). Acceptance: each cell cites
  file:line; alignments and misalignments stated plainly.
- [ ] Checkpoint: ANA-006 committed with its index row and its entry logged.

### Part 3: the integration options

> Status: planned

- [ ] Task 1: ANA-007 — the options, each priced and none chosen: keep-separate with one-home
  pointers (the `df0205b` pattern generalized); merge into a single skill; distribute into
  several lifecycle skills; demote either consult skill to a reference. Each priced against:
  upstream drift, triggering and routing (description collisions, static analysis — a
  `measure-triggering.ts` sweep only where the static case is genuinely unclear), body budgets
  and disclosure economics, the deletion test, and Peter's daily flows. Acceptance: every cost
  stated in measurable terms with its source; no verdict anywhere in the note.
- [ ] Checkpoint: ANA-007 committed with its index row and its entry logged.

### Part 4: the decisions and the ADR

> Status: planned

- [ ] Task 1: the decisions — Peter's, `ask-user-question`, one at a time, ANA-007's options
  verbatim with one recommendation each.
- [ ] Task 2: the ADR (ADR-005, or several if the decisions split cleanly) — context, decision,
  alternatives rejected, consequences; any clause it supersedes named (including `df0205b`'s
  arrangement if the decision changes it).
- [ ] Task 3: the plans reconciled — PLAN-001 Part 5 Tasks 2–3 ticked citing the ADR; this plan's
  Part 5 gains its implementation tasks from the ADR's consequences.
- [ ] Checkpoint: the ADR accepted; both plans consistent; grep for the old arrangement returns
  history only.

### Part 5: implementation

> Status: planned — its tasks are written at Part 4's close, shaped by the ADR; the bar below is
> fixed now so the tasks inherit it

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
