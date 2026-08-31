# 2026-08-31 13:06 · The Define/Plan evidence completed — PLAN-003 Part 1

- Goal: PLAN-003 Parts 1–3 — the Matt collection read to its last line (the twelve remaining skills with every bundled file), Peter's four most-important references, and the upstream diffs (the phase→part drift quoted verbatim); then ANA-008 (the cross-package overlap at Define/Plan depth with external comparanda) and ANA-009 (the granular synthesis composed into a proposed new skill set), his decisions to follow in Part 4.
- Status: in progress
- Plan: PLAN-003 · part 1
- Outcome: _(fill in)_

## Narrative

Started 2026-08-31 right after SES-006 closed (PLAN-002 Parts 1–4 done). Peter's big ask is the plan's Status quote; his stage tables are the frame, and his correction stands first: the task/ticket grain overlaps substantially — the earlier "only tracker-side requirements" framing undersold it. The reading ran in this conversation: the twelve Matt skills, triage's two references, improve-codebase-architecture's report reference, the four Addy references, orchestration-patterns in full.

## Changes (one entry per commit, in order)

### 2026-08-31 · docs(analysis): ANA-008 — Define and Plan across both lineages: the overlap map in Peter's stage frame, the requirements dimensions, the task/ticket grain field by field, the composition contrast, spec-kit and superpowers as comparanda (PLAN-003 Part 2 Task 1) · 5cc6185

- Summary: ANA-008 lands PLAN-003 Parts 1–2: the full-lifecycle overlap map in Peter's stage frame (same-differently / unique / composed-differently, cites both sides), Define and Plan at depth — the requirements dimensions between spec-driven-development and to-spec, and the task/ticket grain field by field confirming his correction (one artifact, two renderings) — the composition contrast (sequential phase pipeline vs composing skills with the tracker as shared state; cross-lineage composition already present), and the comparanda: spec-kit's gated specify→plan→tasks→converge, superpowers' 2–5-minute exact-path tasks, with the paths clash resolved by horizon length.
- Why: PLAN-003 Part 2 Task 1, on Part 1's completed evidence (the twelve Matt skills and bundled files, the four references, the upstream diffs — the original planning skill's `### Phase N:` wording quoted for the phase-vs-part decision).
- Files:
  - `docs/analysis/ANA-008-define-plan-overlap.md` (+173/−0) — the map, the depth tables, the composition contrast, the comparanda, two refuted framings
  - `docs/analysis/README.md` (+1/−0) — ANA-008's index row

### 2026-08-31 · docs(analysis): ANA-009 — the Define/Plan synthesis: eight ranked functions, the granular parts from each lineage with provenance, the composed set (S1 interrogation, S2 requirements with two renderings, S3 decomposition with § Continuing a plan intact), six open decisions priced (PLAN-003 Part 3) · 164c926

- Summary: ANA-009 lands PLAN-003 Part 3 — the synthesis: the eight functions Define and Plan most need, ranked; the granular parts chosen from each lineage with file:line provenance and the reason each wins (never whole-skill-vs-whole-skill); and the composed set — S1 the interrogation skill (ADR-005's merge composed, intent and artifact modes), S2 the requirements skill (one template pool, PRD and tracker renderings — dissolving the "spec" collision structurally), S3 the decomposition skill (one work model, plan-doc and ticket renderings, § Continuing a plan verbatim), the outriders and the compatibility mapping. Six open decisions priced for Part 4, phase-vs-part first with its full ripple. No verdict anywhere in the note.
- Why: PLAN-003 Part 3 Task 1 — deliverable two of Peter's 2026-08-31 ask ("pull the parts from each that make the most sense … and compose them into a new set of skills"), built on ANA-008's grain.
- Files:
  - `docs/analysis/ANA-009-define-plan-composition.md` (+160/−0) — the ranking, the provenance table, the S1–S3 composition, the six priced decisions
  - `docs/analysis/README.md` (+1/−0) — ANA-009's index row

### 2026-08-31 · docs(plan): PLAN-004 — the Build stage synthesized the same way (implement, implement-spec, incremental-implementation, /brain:build, the DoD tiers; references are artifacts of the synthesis); PLAN-003 Part 4 decisions 1–5 recorded, PRD-home and ADR deferred to PLAN-004 Part 4; PRD-001 Plans rows · f1b9f38

- Summary: Peter extended the synthesis to the Build stage mid-decision-round and reframed the references as artifacts of the synthesis ("should be updated to fit whatever new set of skills we come up with"). PLAN-004 mirrors PLAN-003's five parts for `implement` (Matt), `implement-spec` (Matt — authorship corrected, it lives in matt-pocock-skills/skills/in-progress/, not Addy's), `incremental-implementation` (Addy), `/brain:build`, and the DoD tiers; the roster names the adjacent skills pointed out per his ask (TDD, debugging-and-error-recovery, doubt-driven-development, /brain:test, triage's AGENT-BRIEF, testing-patterns) and the excluded ones with reasons. PLAN-003 Part 4 records decisions 1–5 as settled (part stays; idea-refine standalone + two wayfinder transfers; issue-tracker resolution order; rename the spec writer only; DoD tiers with converge as the plan-level tier) and defers the PRD-home question and the ADR to PLAN-004 Part 4 so the composed program is decided and recorded once.
- Why: Peter, 2026-08-31: "do the exact same thing you just did for the define and plan lifecycle phases … scoped specifically to matts implement skill, addys implement-spec and incremental-implementation skills"; ANA-009's open decision 6 asked for exactly this plan.
- Files:
  - `docs/plan/PLAN-003-define-plan-synthesis.md` (+11/−2) — Part 4 in progress with the five settled decisions; the deferral; open questions updated (wayfinder settled, decision 6 → PLAN-004)
  - `docs/plan/PLAN-004-build-stage-synthesis.md` (+141/−0) — the Build-stage plan: five parts, the roster in and out, the references-as-artifacts rule, ANA-010/011 acceptance
  - `docs/plan/PRD-001-session-log-and-rehydration.md` (+2/−1) — PLAN-003's row updated; PLAN-004's row added under requirement 12's umbrella

### 2026-08-31 · docs(analysis): ANA-010 — the Build-stage overlap map: three grains of one loop, worktree-isolation vs sequence under one orchestration law, the failure-path pairing, the ungated DoD tiers, the S3 seam; diagnosing-bugs added to PLAN-004's roster (PLAN-004 Part 2) · 0ab0694

- Summary: ANA-010 lands PLAN-004 Parts 1–2: the four Build surfaces mapped cell by cell (fourteen functions classed same-differently / unique / composed-differently, every cell cited) — three grains of one execution loop that never contradict; concurrency as opposite geometry under one orchestration law (implement-spec's worktree isolation in space vs /build auto's sequence in time, neither citing the other's trade); the failure-path pairing as the stage's deepest same-differently (Addy's triage breadth vs diagnosing-bugs' feedback-loop depth, /build citing only the Addy side); the DoD tier table showing Quality and the whole per-feature tier gated by nothing today; the S3 consumption seam. Drift verified by diff: only the ledgered hunks. diagnosing-bugs added to the roster — the counterpart the initial scoping missed.
- Why: PLAN-004 Part 2 Task 1, on Part 1's completed reads; Peter's re-sent ask with the initial-prompt reference confirmed the shape (overlap map first, synthesis second).
- Files:
  - `docs/analysis/ANA-010-build-stage-overlap.md` (+129/−0) — the four surfaces, the overlap map, the loop step table, the DoD-tier gap table, the orchestration contrast, two refuted framings
  - `docs/analysis/README.md` (+1/−0) — ANA-010's index row
  - `docs/plan/PLAN-004-build-stage-synthesis.md` (+4/−2) — diagnosing-bugs added to the roster and Part 1's read list

### 2026-08-31 · docs(analysis): ANA-011 — the Build synthesis: eight ranked functions, eighteen parts with provenance, the composed shape (S4 + /brain:build modes + the merged loop-first debugging skill + the DoD rewritten to brain's structures), five open decisions priced (PLAN-004 Part 3) · b3aa66b

- Summary: ANA-011 lands PLAN-004 Part 3 — the Build synthesis: eight ranked functions (the recording loop as spine; the DoD tiers as real gates against ANA-010's nothing-gates-them table; S3's both renderings consumed under the AGENT-BRIEF contract; loop-first debugging; bounded doubt; code-point discipline; concurrency with its safety story; the repo's own commands), eighteen granular parts each with file:line provenance and the reason it wins, and the composed shape — S4 the implementation skill, /brain:build keeping step 8 verbatim and gaining aligned artifact discovery and a possible concurrent mode, the merged loop-first debugging skill, implement and implement-spec retiring to stubs, definition-of-done rewritten to name the tick / the part checkpoint / the plan-close converge. Slicing deliberately left in S3 (one home). Five open decisions priced, the deferred PRD-home question among them. No verdict anywhere.
- Why: PLAN-004 Part 3 Task 1 — deliverable two of Peter's Build-stage ask, built on ANA-010's map.
- Files:
  - `docs/analysis/ANA-011-build-stage-composition.md` (+147/−0) — the ranking, the eighteen-part provenance table, the composed shape, the reference updates named, the five priced decisions
  - `docs/analysis/README.md` (+1/−0) — ANA-011's index row

### 2026-08-31 · docs(plan): PRD-002 — the composed lifecycle set's contract: ten requirements for the rebuilt Define/Plan/Build skills, the promise, the bar, the boundaries; PRD-001's Plans rows repoint to it · e849bcb

- Summary: PRD-002 is the composed program's contract — ten requirements: the interrogation skill's two modes and decrees, idea-refine standing, the requirements skill's pool and two renderings, the planner's union template with § Continuing a plan verbatim, the merged `implement`, /brain:build with the DoD tier gates and the verify-first concurrent mode, the merged `diagnosing-bugs`, references-as-artifacts, the standing bar, the unchanged outriders — with the promise, boundaries (Review/Release out), success criteria and non-goals.
- Why: PLAN-004 Part 4's last decision — Peter: "lets go with your recommendation" on writing the program its own contract rather than stretching PRD-001.
- Files:
  - `docs/plan/PRD-001-session-log-and-rehydration.md` (+2/−2) — PLAN-003/004 rows repoint to PRD-002
  - `docs/plan/PRD-002-lifecycle-composition.md` (+112/−0) — the contract

### 2026-08-31 · docs(adr): ADR-006 — the composed lifecycle set: the eight decisions of both Part 4 rounds with alternatives and riders; refines ADR-005 decision 6, resolves the spec-shape and PRD-home questions; PRD-002 is the contract · d9f9f48

- Summary: ADR-006 records both rounds' eight decisions with alternatives and riders: D1 part stays (delegated, decided on merit); D2 idea-refine standalone plus the two wayfinder transfers; D3 the resolution order; D4 the merit-test names — interview-me and planning-and-task-breakdown keep theirs, the spec writer renamed at implementation, `implement` and `diagnosing-bugs` the merge homes, retired skills always pointer stubs; D5 the DoD tiers as /brain:build's gates with plan-close converge, references as artifacts; D6 concurrency a /build mode behind verify-first with the deps-graph frontier rendered as Claude Code tasks; D7 discovery aligned; D8 PRD-002 the contract. Refines ADR-005 decision 6; resolves PLAN-001 Part 5 shape 2.
- Why: PLAN-003 and PLAN-004 Part 4 Task 2 — one ADR for both rounds so the program is recorded once.
- Files:
  - `docs/decisions/ADR-006-the-composed-lifecycle-set.md` (+95/−0) — the eight decisions
  - `docs/decisions/README.md` (+1/−0) — ADR-006's index row

### 2026-08-31 · docs(plan): PLAN-005 — one implementation plan for PRD-002 (eight parts, dependency-ordered, the standing bar); PLAN-003 and PLAN-004 close (Parts 1–4 done, Part 5s superseded into PLAN-005); PLAN-002 Task 5 absorbed; the PRD tables follow · 8c1f519

- Summary: Peter's call ("Should this just receive a brand new plan document?") — yes on merit: PLAN-005 is one implementation plan serving PRD-002, eight parts in dependency order (S1 interrogation → S2 requirements → S3 planner → implement → /brain:build gates → verify-first/concurrent → references and routing closure; diagnosing-bugs parallel), the standing bar in its preamble, one session per part. It replaces the Part 5s that were scattered across four plans: PLAN-003 and PLAN-004 close (Parts 1–4 done, `d9f9f48`; Part 5s superseded pointers), PLAN-002 Part 5 Task 5 is absorbed into PLAN-005 Part 1, PLAN-001 Part 6's sweep stays where it is and runs last.
- Why: the PRD → plan grammar — PRD-002 exists, so its implementation gets its own plan instead of a four-way "each file edited once" coordination.
- Files:
  - `docs/plan/PLAN-002-consult-skills-integration.md` (+5/−4) — Task 5 absorbed into PLAN-005 Part 1
  - `docs/plan/PLAN-003-define-plan-synthesis.md` (+16/−16) — done; Part 4 ticked (`d9f9f48`); Part 5 superseded; serves PRD-002
  - `docs/plan/PLAN-004-build-stage-synthesis.md` (+19/−18) — done; Part 4 ticked with the five decisions; Part 5 superseded; open questions settled
  - `docs/plan/PLAN-005-lifecycle-composition-implementation.md` (+153/−0) — the eight parts and the bar
  - `docs/plan/PRD-001-session-log-and-rehydration.md` (+2/−2) — the two rows' status cells
  - `docs/plan/PRD-002-lifecycle-composition.md` (+3/−2) — the Plans table: both plans done, PLAN-005 added
