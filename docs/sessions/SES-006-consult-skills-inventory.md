# 2026-08-31 10:29 · The consult skills inventoried — PLAN-002 Part 1

- Goal: PLAN-002 Part 1 — `domain-modeling` and `codebase-design` read in full (every file, the `agents/` subdirectories included), their capability inventories with file:line cites, their lineage and drift against `~/Dev/reference/matt-pocock-skills`, and the measured citation graph over `skills/`, `commands/`, `agents/` and `references/` — written up as ANA-005 with Refuted and Unverifiable sections.
- Status: in progress
- Plan: PLAN-002 · part 1
- Outcome: _(fill in)_

## Narrative

Started 2026-08-31 right after PLAN-002 was founded (`824ed34`; SES-005 stays in progress — PLAN-001 Part 5's remaining decisions wait on this plan, marked there). The method is the plan's: one evaluator, full reads, no edits to anything evaluated before Part 4's ADR.

Parts 1 and 2 ran in this one session as one continuous read — a deliberate deviation from
one-session-per-part, recorded here rather than splitting an evaluation mid-stream; the parts'
status lines cite this session with their closing shas. Mid-Part-2 Peter added the evaluation the
plan had not named: whether keeping each consult skill separate actually makes sense, and if so
where it fits the lifecycle, what it looks like, and how it changes — written into Part 3 Task 1
verbatim; ANA-007 gives keep-separate first-class depth. A fact worth carrying into Part 3:
`~/CLAUDE.md` §1 already states the read-the-glossary rule in always-loaded context, so the 18
per-skill copies are redundant on Peter's machines and load-bearing only for plugin portability.

## Changes (one entry per commit, in order)

### 2026-08-31 · docs(analysis): ANA-005 — the consult skills inventoried: capabilities with cites, drift small and enumerable (and exactly where the integration already half-exists as local edges), the citation graph with its three edge kinds (PLAN-002 Part 1 Tasks 1–3) · b8c5f99

- Summary: ANA-005 lands PLAN-002 Part 1: the two consult skills' capability tables with file:line cites; drift measured by `diff -r` against `~/Dev/reference/matt-pocock-skills` (codebase-design one hunk — the local read rule; domain-modeling the ADR-location deference plus `df0205b`'s pointer); the citation graph with its three edge kinds — 18 passive read-rule edges, 9 active handoffs, 3 ownership statements — and the finding that every consult-to-lifecycle connection is locally authored drift, none upstream design.
- Why: PLAN-002 Part 1 Tasks 1–3 — the inventory the Part 2 matrix and Part 3 options need; Peter's premise that codebase-design leans heavily on domain-modeling's CONTEXT files is confirmed for the shipped copies and refuted as an upstream design fact (the lean is two lines we authored).
- Files:
  - `docs/analysis/ANA-005-consult-skills-inventory.md` (+124/−0) — the analysis: F1–F5, one refuted premise, the unverifiable read-rule compliance, consequences for Parts 2–3
  - `docs/analysis/README.md` (+1/−0) — ANA-005's index row

### 2026-08-31 · docs(analysis): ANA-006 — the Addy lifecycle inventoried: the map, the per-skill concept table, the collision matrix (ADR offer rules misaligned; boundary vs seam; grill-me claimed twice; the glossary gap); two suspected duplicates refuted (PLAN-002 Part 2 Tasks 1–3) · b827926

- Summary: ANA-006 lands PLAN-002 Part 2: the lifecycle map (typed spine and model-side tree), the per-skill concept table for the rows that carry contested concepts, and the collision matrix — the ADR offer rules genuinely misalign (Addy's any-one-suffices list against domain-modeling's all-three tests), *boundary* is the lifecycle's most-used design word and codebase-design's forbidden one, "grill me" is claimed by two lineages' triggers, the glossary is a gap the 18 read-rule drift lines bolt on; and two of PLAN-001 Part 5 Task 2's suspected duplicates are refuted (the ticket shape has one declared home; the plan shape has declared precedence).
- Why: PLAN-002 Part 2 Tasks 1–3 — all 24 Addy skills, the 8 commands and choosing-a-skill read to their last lines this conversation; the matrix is what Part 3's options price and Part 4's decisions resolve.
- Files:
  - `docs/analysis/ANA-006-addy-lifecycle-inventory.md` (+99/−0) — the map, the table, the ten-row collision matrix with verdicts, two refuted beliefs, the four decision areas for Part 3
  - `docs/analysis/README.md` (+1/−0) — ANA-006's index row
