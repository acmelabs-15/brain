# The two consult skills, inventoried — domain-modeling and codebase-design

> **Analysis** · 2026-08-31 · status: current — PLAN-002 Part 1; feeds the Part 2 matrix and the
> Part 3 options · brain SES-006

## Question

What exactly do `domain-modeling` and `codebase-design` define, produce, read and depend on; what
is their lineage and drift; and who cites them, with what kind of edge — the inventory the
integration decision needs (PLAN-002 Parts 3–4).

## What was read

Every file under `skills/domain-modeling/` (`SKILL.md` 74 lines, `ADR-FORMAT.md`,
`CONTEXT-FORMAT.md`, `agents/openai.yaml`) and `skills/codebase-design/` (`SKILL.md` 117 lines,
`DEEPENING.md`, `DESIGN-IT-TWICE.md`, `agents/openai.yaml`), to the last line; the upstream
copies under `~/Dev/reference/matt-pocock-skills/skills/engineering/` (`diff -r` both);
`skills/LOCAL-CHANGES.md` (frozen at the copy); the greps in § The citation graph.

## Findings

### F1. domain-modeling is the *active* glossary-and-decisions discipline, with an explicit negative

Capabilities, each with its home:

| Capability | Where | What it says |
| --- | --- | --- |
| Challenge terms against the glossary | `SKILL.md:44-46` | conflicts called out immediately |
| Sharpen fuzzy language to a canonical term | `SKILL.md:48-50` | propose the precise word |
| Stress-test with concrete scenarios | `SKILL.md:52-54` | edge cases force precise boundaries |
| Cross-reference the code | `SKILL.md:56-58` | surface code-vs-claim contradictions |
| Update `CONTEXT.md` inline, never batched | `SKILL.md:60-64` | glossary only, no implementation detail |
| The glossary format | `CONTEXT-FORMAT.md` | term + tight definition + `_Avoid_` line; opinionated; project-specific terms only; single vs multi-context with `CONTEXT-MAP.md`; lazy creation |
| Offer ADRs sparingly — the three tests | `SKILL.md:66-74` | hard to reverse · surprising · real trade-off; all three or skip |
| The ADR shape | `ADR-FORMAT.md` | since `df0205b` a pointer at `documentation-and-adrs` § ADR Template; location deference and numbering stay |

The intro carries a deliberate negative (`SKILL.md:8`): merely *reading* `CONTEXT.md` "is not
this skill … a one-line habit any skill can do. This skill is for when you're changing the model,
not just consuming it." The consuming half was later distributed into other skills as local drift
— F4.

### F2. codebase-design is a term set first, a workflow second

`SKILL.md` defines eight terms exactly (Module, Interface, Implementation, Depth, Seam, Adapter,
Leverage, Locality — `SKILL.md:16-30`), each with an `_Avoid_` list in the same shape
`CONTEXT-FORMAT.md` prescribes for a glossary; then deep-vs-shallow, four principles (the
deletion test among them, `SKILL.md:64-67`), testability rules, a Relationships section and
Rejected framings (`SKILL.md:107-111` — including *boundary*, avoided for colliding with DDD's
bounded context). Two references: `DEEPENING.md` (four dependency categories, seam discipline,
replace-don't-layer testing) and `DESIGN-IT-TWICE.md` (a parallel-subagent interface-exploration
pattern whose briefs carry "both SKILL.md vocabulary and CONTEXT.md vocabulary",
`DESIGN-IT-TWICE.md:30`). It is itself a mini-CONTEXT.md for design vocabulary — the same
term-plus-`_Avoid_` shape, held in a skill body rather than a repo glossary.

### F3. Drift from upstream is small and enumerable — and it is where the integration already lives

`diff -r` against `~/Dev/reference/matt-pocock-skills/skills/engineering/`:

- `codebase-design`: **one hunk** — the two-line read rule (read `CONTEXT.md`/`CONTEXT-MAP.md`
  and the ADRs first; gaps go to `/domain-modeling`). Upstream `codebase-design` never mentions
  `domain-modeling` at all.
- `domain-modeling`: the ADR-location deference (three hunks, 2026-08-30 — `LOCAL-CHANGES.md:11`)
  and `df0205b`'s template pointer (2026-08-31). Nothing else.

`LOCAL-CHANGES.md:9-16` is the provenance: on 2026-08-30 the read rule was added to sixteen
skills, the "route to domain-modeling when a term is resolved" closing section to five, and the
agents' "Project vocabulary" section to two — all local edits, none upstream.

### F4. The citation graph — domain-modeling is a hub; the edges are three kinds

Measured by grep over `skills/`, `commands/`, `agents/`, `references/` (evals excluded):

- **Passive read-rule edges (18)** — the identical two-line rule at the top of sixteen skills
  (Addy's `test-driven-development`, `planning-and-task-breakdown`, `spec-driven-development`,
  `api-and-interface-design`, `incremental-implementation`, `code-review-and-quality`,
  `debugging-and-error-recovery`, `deprecation-and-migration`, `doubt-driven-development`,
  `research`, `interview-me`* …; Matt's `implement`, `implement-spec`, `code-review`, `to-spec`,
  `to-tickets`, `codebase-design`) and the two agents (`code-reviewer.md:106`,
  `test-engineer.md:99`). Every one is local drift, not upstream design.
- **Active handoff edges (9)** — "call the Skill tool for `domain-modeling`":
  `documentation-and-adrs:292`, `spec-driven-development:263`, `to-spec:81`, `interview-me:229`,
  `idea-refine:182`, `improve-codebase-architecture:66`, `wayfinder:79,111`, `triage:76`,
  `grill-with-docs:7` (and `grill-me:9` points at grill-with-docs for exactly this). Both
  lineages hand off to it.
- **Ownership statements (3)** — the session skill (`SKILL.md:21,66` and its `CONTEXT.md:7`,
  ADR-004: `CONTEXT.md` is domain-modeling's) and `references/project-docs-conventions.md`
  (owner rule, defaults table row).

`codebase-design`'s in-edges are fewer and different: `choosing-a-skill` routes a chain
(**codebase-design → improve-codebase-architecture → grilling → domain-modeling**,
`choosing-a-skill:41,62`), `improve-codebase-architecture` and `setup-ts-deep-modules` consume
it, and the *vocabulary itself* diffuses without attribution into `grilling`, `to-tickets`,
`wayfinder` and `writing-for-agents` (the deep-module terms used verbatim — CONTEXT-MAP.md
already names this sharing).

### F5. What this means for the integration question, stated as facts

The integration half-exists as drift: 25+ edges connect the lifecycle to `domain-modeling`, all
added locally on 2026-08-30. `domain-modeling` is the hub every recording flow returns to;
`codebase-design` is a vocabulary spine for the Matt lineage plus one Addy-side consumer chain.
The upstream skills know nothing of each other — every connection is ours, currently expressed
as N copies of two boilerplate lines rather than as an owned mechanism. The Part 3 options are
therefore about *where those edges should live* (per-file lines, a shared reference, a merged
body, the always-loaded context) as much as about merging skill bodies.

## Refuted

- **"codebase-design leans heavily on domain-modeling's CONTEXT-MAP.md/CONTEXT.md" as an
  upstream design fact** — upstream `codebase-design` never references `domain-modeling` or the
  CONTEXT files; the lean is our own two added lines plus one brief-composition line in
  `DESIGN-IT-TWICE.md:30`. The lean is real in the shipped copies, but it is drift we authored,
  which changes what "integrating" would formalize. [diff -r, F3]

## Unverifiable

- Whether the passive read-rule lines are actually followed in real runs — no measured
  disclosure run covers these skills (the plugin's eval redo is PLAN-001 Part 6 Task 2); the
  edges are asserted from text, not from transcripts.

## Consequences

- PLAN-002 Part 2's matrix starts from F4's edge list; Part 3 must price *edge ownership*
  (N boilerplate copies vs one home) alongside body mergers, and F1's active/consuming split is
  the natural cut line any option has to respect.
