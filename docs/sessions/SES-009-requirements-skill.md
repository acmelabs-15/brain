# 2026-08-31 14:39 · The requirements skill — PLAN-005 Part 2

- Goal: PLAN-005 Part 2 — the requirements skill under its merit-chosen new name (ADR-006 D4): the template pool (six areas, capability map, assumptions block, success-criteria reframing, seam sketch, Implementation/Testing Decisions, Out of Scope, Plans table), interview intake via interview-me and no-interview synthesis intake, publication per the issue-tracker resolution order; spec-driven-development and to-spec to pointer stubs; /brain:spec repointed; the CONTEXT-MAP spec row. Plus the eval-corpus adoption (Peter's pointer) as the part's first commit. Acceptance: name and description trigger-measured before the body lands, both old trigger sets covered at or above old rates, a headless render producing a PRD skeleton with a Plans table, validators green.
- Status: done
- Plan: PLAN-005 · part 2
- Outcome: PLAN-005 Part 2 done (`91d572f` the corpus adoption, `9b2baf8` the skill): writing-specs live with a measured description strictly better in aggregate than the baseline (18/20 vs 16/20, negatives perfect), the two source skills retired to stubs, the command and map current, the behavioral contract checked in with fixtures, and the one measurement limit (the installed old description's competition) named, probe-verified and scheduled for re-measurement at the reinstall. Next: Part 3, the planner rebuild, in a fresh session.

## Narrative

Opened for PLAN-005 Part 2 right after SES-008 closed. First move: Peter's eval-corpus pointer folded into the bar (`91d572f`), then Task 1 — the name chosen by the merit test (`writing-specs`: gerund + object, "spec" the invocation word in both corpora's phrasings; `to-spec` is typed-only so the measurable baseline is `spec-driven-development` alone) and its description measured before any body lands.

## Changes (one entry per commit, in order)

### 2026-08-31 · docs(plan): the eval corpus adopted into PLAN-005's bar — Addy's cases/fixtures seed the remaining trigger sets and behavioral evals.json files (Peter's pointer); interview-me gains its behavioral case file; Part 2 in progress (SES-009) · 91d572f

- Summary: Peter pointed at the Addy eval corpus mid-run; it lands in PLAN-005's bar: the remaining parts' trigger sets draw positives and negatives from `evals/cases/<name>.json` (independent phrasings, not our descriptions), and every rebuilt skill ships a behavioral `evals/evals.json` in skill-creator's schema (+kind) with fixtures adapted where they fit — portal-brief to the requirements skill's capability-map case, notifications-spec to the planner, reports/plan and the sunk-cost scenario to implement, pagination and time-pressure to diagnosing-bugs. interview-me gets its behavioral file now: two dialogue cases (intent and artifact) carrying the merged skill's expectations, the decree first among them. Behavioral cases are the checked-in contract; running them stays manual until a runner lands.
- Why: Peter, 2026-08-31 ("They could be useful in creating the cases and fixtures for the new evals"); the corpus's three-tier README read in full, the seven relevant case files and fixtures read.
- Files:
  - `docs/plan/PLAN-005-lifecycle-composition-implementation.md` (+9/−2) — the bar's eval-material paragraph; Part 2 in progress (SES-009)
  - `skills/interview-me/evals/evals.json` (+32/−0) — two dialogue cases with provenance

### 2026-08-31 · feat(writing-specs): the requirements skill — one template pool (six areas, capability map, assumptions block, seam sketch, Implementation/Testing Decisions, Out of Scope, Plans table), interview and synthesis intakes, two renderings by the resolution order; spec-driven-development and to-spec retire to stubs, /brain:spec repoints, the map's spec row dissolves the collision; description measured cand2 18/20 vs baseline 16/20 (two rows held down by the installed old description — probe-verified, Part 8 re-checks), render produced a PRD with Plans table in docs/plan (PLAN-005 Part 2) · 9b2baf8

- Summary: writing-specs is the requirements skill (PRD-002 requirement 3): one template pool — objective, user stories, success criteria, tech/commands/structure/style, Implementation Decisions (no file paths; the prototype-snippet exception), Testing Strategy, three-tier Boundaries, Out of Scope, Open Questions, the Plans table — behind two intakes (hand fog to interview-me; pure synthesis for a settled conversation, no re-interviewing) and two renderings by the issue-tracker resolution order (repo PRD or tracker spec with ready-for-agent). The capability-map scope check, assumptions block and seam sketch are kept verbatim in mechanism. spec-driven-development and to-spec are stubs; /brain:spec repoints; CONTEXT-MAP's spec row names the two renderings. Description iterated under measurement: cand1 16/20 refuted (negatives fixed but synthesis and PRD rows weak), cand2 18/20 accepted — negatives 10/10 including the planner row old sdd falsely claimed at 1.00; the two remaining zeros carry near-verbatim vocabulary and a live probe showed the installed old spec-driven-development description winning the consult, so they re-measure after the reinstall (Part 8 Task 3). Render: a PRD landed in docs/plan by the resolution order with Plans table and Out of Scope. Also recorded: the installed-copy warning in the sweep logs floors pull metrics, not the trigger verdicts used here or in Part 1 (the three Part 1 sweeps discriminated 21/16/18, impossible off one shared surface).
- Why: PLAN-005 Part 2 Tasks 1–2 (ADR-006 D4's rename; ANA-009's S2 pool; the corpus-seeded eval set).
- Files:
  - `CONTEXT-MAP.md` (+6/−0) — the spec word: one artifact, two renderings
  - `commands/spec.md` (+4/−4) — repointed to writing-specs; synthesis intake named
  - `docs/plan/PLAN-005-lifecycle-composition-implementation.md` (+1/−1) — Part 8 Task 3 gains the post-reinstall re-sweep
  - `skills/spec-driven-development/SKILL.md` (+3/−259) — retired to a pointer stub
  - `skills/to-spec/SKILL.md` (+2/−76) — retired to a pointer stub
  - `skills/writing-specs/SKILL.md` (+199/−0) — the skill: intakes, scope check, assumptions, seams, the template pool, publication, handoffs, checks
  - `skills/writing-specs/evals/evals.json` (+45/−0) — three behavioral cases (billing, decomposition, synthesis) with provenance
  - `skills/writing-specs/evals/fixtures/writing-specs-decomposition/portal-brief.md` (+22/−0) — the capability-map fixture, adapted from the corpus
  - `skills/writing-specs/evals/fixtures/writing-specs/billing-brief.md` (+16/−0) — the billing fixture, adapted from the corpus
  - `skills/writing-specs/evals/results/trigger/name-1/cand2.sonnet.envelope.json` (+394/−0) — the sweeps of record (cand1 refuted, cand2 accepted, the baseline; envelopes carry conditions)
  - `skills/writing-specs/evals/results/trigger/name-1/cand2.sonnet.json` (+191/−0) — the sweeps of record (cand1 refuted, cand2 accepted, the baseline; envelopes carry conditions)
  - `skills/writing-specs/evals/results/trigger/name-1/cand2.sonnet.log` (+1/−0) — the sweeps of record (cand1 refuted, cand2 accepted, the baseline; envelopes carry conditions)
  - `skills/writing-specs/evals/results/trigger/name-1/old-sdd.sonnet.envelope.json` (+395/−0) — the sweeps of record (cand1 refuted, cand2 accepted, the baseline; envelopes carry conditions)
  - `skills/writing-specs/evals/results/trigger/name-1/old-sdd.sonnet.json` (+191/−0) — the sweeps of record (cand1 refuted, cand2 accepted, the baseline; envelopes carry conditions)
  - `skills/writing-specs/evals/results/trigger/name-1/old-sdd.sonnet.log` (+3/−0) — the sweeps of record (cand1 refuted, cand2 accepted, the baseline; envelopes carry conditions)
  - `skills/writing-specs/evals/results/trigger/name-1/writing-specs.sonnet.envelope.json` (+394/−0) — the sweeps of record (cand1 refuted, cand2 accepted, the baseline; envelopes carry conditions)
  - `skills/writing-specs/evals/results/trigger/name-1/writing-specs.sonnet.json` (+191/−0) — the sweeps of record (cand1 refuted, cand2 accepted, the baseline; envelopes carry conditions)
  - `skills/writing-specs/evals/results/trigger/name-1/writing-specs.sonnet.log` (+1/−0) — the sweeps of record (cand1 refuted, cand2 accepted, the baseline; envelopes carry conditions)
  - `skills/writing-specs/evals/trigger-eval.json` (+22/−0) — 10 positives (both lineages' phrasings) + 10 hard negatives
