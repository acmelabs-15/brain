# The integration options, priced — where the consult skills' capabilities should live

> **Analysis** · 2026-08-31 · status: current — PLAN-002 Part 3; the options for Part 4's
> decisions, none chosen here · brain SES-006 · rests on ANA-005 (the inventory and edge kinds)
> and ANA-006 (the collision matrix)

## Question

Given ANA-005's citation graph and ANA-006's matrix: should `domain-modeling` and
`codebase-design` stay separate skills — and if so where does each fit the lifecycle, what does
it look like, what changes anyway (Peter's framing) — or merge into one or several Addy
lifecycle skills, or demote to references? Plus the four cross-cutting collisions the matrix
found, each needing one home regardless of the structural choice.

## The pricing dimensions

Each option is priced on: **drift** (lines permanently forked from an upstream that still
updates); **routing** (descriptions changed — every change re-measured on the fixed tier per
PLAN-002's bar); **edges** (of ANA-005's 30, how many retarget); **disclosure** (body budgets;
the measured pointer weakness — plugin-kit's `progressive-disclosure.md`: a reference is reached
33–90% on the weaker tier, and always-loaded context measured 100% against 53–79% for in-skill
routing); **deletion test** (what breaks if the artifact vanishes).

## domain-modeling

### D1 — Keep it separate (first-class, per Peter's ask)

**Where it fits:** a cross-stage consult skill, not a stage. Its real positions in the measured
graph: the Define stage's terminus (interview-me, idea-refine, spec-driven-development,
to-spec and documentation-and-adrs all hand *to* it when a term or decision crystallises — the 9
active edges), and the standing vocabulary gate before any stage's exploration (the 18 passive
edges). In `using-agent-skills`' sequence it belongs beside step 8's "runs parallel with 7–9,
not after" pattern — a parallel track, entered whenever the model changes, like observability.

**What it looks like:** body unchanged (74 lines, well under budget); its description already
matches the artifact ("writing or editing a CONTEXT.md, recording or editing an ADR"). The one
description candidate worth measuring: adding the lifecycle-position words ("the glossary keeper
the other skills hand terms to").

**What changes even if it stays** (the collisions do not resolve themselves):
- The ADR offer rule needs one home (area A below).
- The 18 read-rule copies need an owner (area B below).
- `using-agent-skills`' tree gains it as the parallel track (one line; the tree today never names
  it — the hub is invisible in the map that routes to everything else).

**Price:** drift stays at today's 2 hunks; 0 edges retarget; routing untouched (or one measured
description change). Deletion test: 27 citers dangle — it passes overwhelmingly.

### D2 — Merge into documentation-and-adrs (one "project knowledge" skill)

Decisions and glossary as one recording surface. **Price:** forks an Addy skill permanently
(~75 body lines in, plus CONTEXT-FORMAT.md moving under it); the merged description must carry
both deliverables — the measured trigger-dilution class (`description-writing.md`: a description
matchable on two artifacts leaks); all 27 domain-modeling edges retarget to `brain:documentation-
and-adrs`; the active/consuming split (ANA-005 F1's deliberate negative) blurs — "update the
glossary inline" and "write an ADR" become one trigger surface. Deletion test on the merged
skill: passes, but the merged body is ~360 lines with two concerns.

### D3 — Demote to a reference (`references/domain-modeling.md`)

Matches Lineage A's consult-don't-execute character. **Price:** loses model invocation — the
description fires today on "discussing codebase terminology", and a reference fires never; all
9 active handoffs ("call the Skill tool for domain-modeling") become read-pointers, the
mechanism measured weakest (33–90% recall, tier-dependent); ADR-001's precedent cuts the other
way here — the folded reference was read in 0 runs, while this skill has 27 live citers.

## codebase-design

### C1 — Keep it separate (first-class)

**Where it fits:** the Build/Review stages' design consult — the head of the restructuring chain
(`codebase-design → improve-codebase-architecture → grilling → domain-modeling`,
`choosing-a-skill:41`), loaded first "because it is pure vocabulary and keeps every later
suggestion in the same words". It is a *vocabulary skill the same way domain-modeling is a
glossary skill* — the difference is its glossary is universal (design words) where
domain-modeling's is per-repo.

**What it looks like:** unchanged (117 lines + two references). **What changes even if it
stays:** the *boundary* seam (area C) — either `api-and-interface-design` and
`code-review-and-quality` adopt *seam*/*interface* (a ~6-line drift across two Addy skills, the
same class as the read-rule drift) or codebase-design's `_Avoid_: boundary` is scoped to the
Matt lineage and the divergence is accepted and written down; and `using-agent-skills`' tree
gains the chain (today it routes design work to api-and-interface-design only).

**Price:** drift stays at 1 hunk; 0 edges retarget. Deletion test: the Matt lineage's shared
vocabulary loses its definition file — the words keep circulating undefined.

### C2 — Merge into api-and-interface-design

One interface-design skill for both lineages. **Price:** forks the Addy skill by ~117 lines plus
two references; the Matt-lineage verbatim users (grilling, to-tickets, wayfinder,
implement-spec) come to cite an Addy skill for their own lineage's vocabulary; the two skills'
scopes differ genuinely (API/idempotency/RESTful mechanics vs seam placement and testability) —
a 480-line merged body against the 500-line budget.

### C3 — Demote to a reference (`references/deep-modules.md`)

It is nearly one already (a glossary plus principles). **Price:** loses "design or improve a
module's interface" auto-triggering; the chain's "load codebase-design first" becomes a
read-pointer; CONTEXT-MAP.md's context list rewrites. Cheaper than D3 (5 citers, not 27).

## The cross-cutting collisions (one home each, whatever the structure)

**A — when an ADR exists.** Options: (A1) the three tests are canonical — documentation-and-adrs
§ When to Write becomes examples introduced by "each of these usually passes the three tests"
plus a pointer (the `df0205b` pattern; ~8-line drift in one Addy skill; the conventions file
already cites only the three tests). (A2) Addy's list is canonical — domain-modeling's offer rule
retires (loses the strictness Peter's repos actually practice; every ADR here cites real
alternatives). (A3) scope them — the tests govern *offering* mid-flow, the list governs *what
qualifies* when asked — the matrix's misalignment then stays live at the boundary between skills.

**B — the 18 read-rule copies.** (B1) stay as copies — re-applied drift on every upstream sync,
but the plugin is self-contained for a user without Peter's `~/CLAUDE.md` (which already carries
the same rule in always-loaded context — the measured-strongest mechanism, and why the copies
are redundant on his machines). (B2) hoist to the plugin's own always-loaded surface — no such
surface exists for a plugin's *consumers*; a plugin cannot install into the host's context
(progressive-disclosure.md names this exact missing mechanism), so B2 is not currently buildable.
(B3) one shared reference with per-skill one-word pointers — weakest measured mechanism, and
swaps 2×18 lines of drift for 1×18 lines plus a file.

**C — *boundary* vs *seam*.** (C-i) the lifecycle adopts codebase-design's words where the
place-modules-meet sense is meant (~6 lines across `api-and-interface-design`,
`code-review-and-quality`; the spec template's "Boundaries" section keeps its name — it means
rule tiers, a different concept that would keep the word honest). (C-ii) accept the divergence
and write it into CONTEXT-MAP.md's collision rules (zero drift; the misalignment stays but is
mapped).

**D — the "grill me" claim.** (D-i) interview-me's description drops "grill me" (it keeps
"interview me", "are we sure"; grilling owns "grill" — a measured description change, one
skill). (D-ii) keep both and let `choosing-a-skill` arbitrate (zero drift; routing stays
ambiguous at the trigger layer where the router is not loaded).

## Refuted

- **"A merge is the only way to make the lifecycle vocabulary-aware"** — 18 of the 30 edges
  already do it as drift, and `~/CLAUDE.md` §1 does it in always-loaded context on Peter's
  machines; the mergers change ownership, not capability. [ANA-005 F4/F5; ~/CLAUDE.md §1]

## Unverifiable

- The trigger effects of any description change here (D1's candidate, D-i, a merged D2) —
  static until measured; PLAN-002 Part 5's bar requires the sweep for whichever lands.
- Whether upstream (Matt Pocock's repo) will keep updating these two skills — the drift price
  assumes it does; if upstream is dormant the fork cost falls toward zero.

## Consequences

Part 4 asks Peter, one at a time, in this order (structure before collisions, since D2/C2 would
dissolve some of A–D): 1. domain-modeling's structure (D1/D2/D3) · 2. codebase-design's
structure (C1/C2/C3) · 3. the ADR offer rule (A1/A2/A3) · 4. the read-rule copies (B1/B3; B2
noted as not buildable) · 5. *boundary* vs *seam* (C-i/C-ii) · 6. "grill me" (D-i/D-ii). The
spec-shape naming call (ANA-006) rides with question 2 or stands alone at the end.
