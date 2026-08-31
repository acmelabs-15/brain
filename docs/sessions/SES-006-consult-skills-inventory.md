# 2026-08-31 10:29 · The consult skills inventoried — PLAN-002 Part 1

- Goal: PLAN-002 Part 1 — `domain-modeling` and `codebase-design` read in full (every file, the `agents/` subdirectories included), their capability inventories with file:line cites, their lineage and drift against `~/Dev/reference/matt-pocock-skills`, and the measured citation graph over `skills/`, `commands/`, `agents/` and `references/` — written up as ANA-005 with Refuted and Unverifiable sections.
- Status: done
- Plan: PLAN-002 · part 1
- Outcome: PLAN-002 Parts 1–4 done in this one session (the deviation recorded in the Narrative). Delivered: ANA-005 (`b8c5f99` — the consult skills' inventories, drift, and the 30-edge citation graph), ANA-006 (`b827926` — the Addy lifecycle map and collision matrix, two duplicates refuted), ANA-007 (`545f48e` — the priced options), and ADR-005 (`7b0afc0` — six decisions with Peter through seven ask-user-question rounds, three of them designed in the round itself; his two decrees; three measurements: `@` in SKILL.md bodies attaches nothing, a plugin SessionStart hook's stdout injects, `!`-cat inlines deterministically with the grant). PLAN-003 founded from his redirect (`ef6ae3b`). Verified: every evaluated file read to its last line; the measurements ran headless with read tools disallowed and streams captured. Not done, by design: PLAN-002 Part 5 (implementation; Task 5 waits on PLAN-003); the spec-shape call, superseded into PLAN-003.

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

Part 4 ran as seven question rounds, and the round itself did design work: decisions 1–2
(both consult skills stay) as recommended; decision 3 re-derived on merits after Peter's
/wait-what — "we should be making the best decision, even if that decision does mean more work"
— which produced the A4 synthesis neither incumbent rule stated; decision 4 evolved through his
`@`-syntax question into three measurements (`@` in skill bodies attaches nothing; a plugin
SessionStart hook injects; `!`-cat inlines deterministically with the grant) and his pointed-at
mechanism won; decision 5 through his scoping question — CONTEXT-MAP.md already does per-context
word scoping, so the map row beat both the ban and the free-for-all; decision 6 flipped by his
two decrees (one at a time always; ask-user-question first), which removed the cadence
contradiction that had justified keeping interview-me and grilling apart — M1, one interrogation
skill. The seventh question (the spec shape) he redirected rather than answered: the Define/Plan
overlap is bigger than one keep-or-delete call — his stage tables for both lineages, the
task-vs-ticket grain, and the ask for a granular cross-package synthesis became PLAN-003
(`ef6ae3b`), which also takes ADR-005 decision 6's implementation. ADR-005 landed (`7b0afc0`),
the plans reconciled (PLAN-002 Part 4 done, Part 5's tasks written from the ADR; PLAN-001 Part 5
Task 2 resolved), and this session closes here — PLAN-003's evidence work opens its own.

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

### 2026-08-31 · docs(analysis): ANA-007 — the integration options priced, none chosen: keep-separate at first-class depth (lifecycle position, shape, what changes anyway), the mergers and demotions with drift/routing/edges/disclosure prices, the four cross-cutting collisions, the Part 4 question order (PLAN-002 Part 3 Task 1) · 545f48e

- Summary: ANA-007 prices the options and chooses nothing: keep-separate at first-class depth for both consult skills — domain-modeling as the cross-stage vocabulary keeper the Define stage hands to (a parallel track, like observability in the 16-step sequence), codebase-design as the Build/Review design consult heading the restructuring chain — beside the mergers (permanent forks, trigger dilution, 27 or 5 edges retargeting) and the reference demotions (the measured-weakest mechanism); the four cross-cutting collisions each get their own option set (the ADR offer rule, the 18 read-rule copies, boundary vs seam, the grill-me claim), and the Part 4 question order is fixed — structure before collisions.
- Why: PLAN-002 Part 3 Task 1, with Peter's mid-Part-2 addition honoured verbatim: the keep-separate option evaluated fully — where each skill fits, what it looks like, what changes even if it stays — not listed as a default.
- Files:
  - `docs/analysis/ANA-007-consult-skills-integration-options.md` (+152/−0) — the pricing dimensions, D1–D3, C1–C3, collisions A–D with options, one refuted belief, the question order
  - `docs/analysis/README.md` (+1/−0) — ANA-007's index row

### 2026-08-31 · docs(decisions): ADR-005 — the consult skills stay; the ADR rule synthesized; the read rule injected from one home (the measured @-null and !-injection facts recorded); boundary scoped by the map; one interrogation skill under the decrees, implementation after PLAN-003 (PLAN-002 Part 4) · 7b0afc0

- Summary: ADR-005 records PLAN-002 Part 4: the consult skills stay separate; the ADR rule synthesized (a real trade-off AND the choice would surprise or be re-litigated; reversal cost sets urgency, never eligibility); the read-the-glossary rule gets one home delivered by deterministic `!`-cat injection; *boundary* scoped by CONTEXT-MAP.md; one interrogation skill under Peter's two decrees (one question at a time always; `brain:ask-user-question` first), its implementation sequenced after PLAN-003; the three measurements recorded (`@` in SKILL.md bodies attaches nothing on 2.1.251; a plugin SessionStart hook's stdout injects; `!`-cat inlines with the `Bash(cat:*)` grant); the spec-shape question superseded by Peter's redirect.
- Why: PLAN-002 Part 4 Task 2. Three of the six decisions emerged in the round itself, past ANA-007's options — the A4 rule after Peter's "best decision, not the incumbent" /wait-what, the injection mechanism after his `@`-syntax question forced the measurements, the M1 merge after his decrees removed the cadence contradiction.
- Files:
  - `docs/decisions/ADR-005-consult-skills-integration.md` (+109/−0) — the decision: status with supersessions, the measurements, the six decisions, alternatives, consequences
  - `docs/decisions/README.md` (+1/−0) — ADR-005's index row (reattached to the table after landing below it)

### 2026-08-31 · docs(plan): PLAN-003 — Define and Plan across both lineages: the Matt collection completed, the overlap mapped (ANA-008), the best parts composed at section grain into a new skill set (ANA-009), decided by ADR; Peter's stage tables the frame, phase-vs-part an open priced decision · ef6ae3b

- Summary: PLAN-003 exists — Define and Plan across both lineages: Part 1 completes the Matt-side evidence (the ~12 unread skills, Peter's four most-important references, the upstream diffs including planning-and-task-breakdown's phase→part drift); Part 2 maps the overlap with his stage tables as the frame (ANA-008, external comparanda spec-kit and superpowers); Part 3 composes the best parts at section grain into a proposed new skill set compatible with brain (ANA-009, phase-vs-part priced as an open decision); Parts 4–5 his decisions and the implementation.
- Why: Peter, 2026-08-31, correcting the spec-shape framing (the task/ticket grain overlaps substantially) and asking for the deep cross-package evaluation and a granular synthesis — "pull the parts from each that make the most sense … and compose them into a new set of skills" — with his process: think, plan, cut tasks, then begin.
- Files:
  - `docs/plan/PLAN-003-define-plan-synthesis.md` (+143/−0) — the plan: five parts, the method carried from PLAN-002, risks including the whole-skill-vs-granular drift
  - `docs/plan/PRD-001-session-log-and-rehydration.md` (+2/−1) — PLAN-003's Plans row; PLAN-002's row updated to Parts 1–4 done
  - `docs/plan/README.md` (+2/−1) — both index rows
