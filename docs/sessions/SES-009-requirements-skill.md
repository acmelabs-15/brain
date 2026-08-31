# 2026-08-31 14:39 · The requirements skill — PLAN-005 Part 2

- Goal: PLAN-005 Part 2 — the requirements skill under its merit-chosen new name (ADR-006 D4): the template pool (six areas, capability map, assumptions block, success-criteria reframing, seam sketch, Implementation/Testing Decisions, Out of Scope, Plans table), interview intake via interview-me and no-interview synthesis intake, publication per the issue-tracker resolution order; spec-driven-development and to-spec to pointer stubs; /brain:spec repointed; the CONTEXT-MAP spec row. Plus the eval-corpus adoption (Peter's pointer) as the part's first commit. Acceptance: name and description trigger-measured before the body lands, both old trigger sets covered at or above old rates, a headless render producing a PRD skeleton with a Plans table, validators green.
- Status: in progress
- Plan: PLAN-005 · part 2
- Outcome: _(fill in)_

## Narrative

Opened for PLAN-005 Part 2 right after SES-008 closed. First move: Peter's eval-corpus pointer folded into the bar (`91d572f`), then Task 1 — the name chosen by the merit test (`writing-specs`: gerund + object, "spec" the invocation word in both corpora's phrasings; `to-spec` is typed-only so the measurable baseline is `spec-driven-development` alone) and its description measured before any body lands.

## Changes (one entry per commit, in order)

### 2026-08-31 · docs(plan): the eval corpus adopted into PLAN-005's bar — Addy's cases/fixtures seed the remaining trigger sets and behavioral evals.json files (Peter's pointer); interview-me gains its behavioral case file; Part 2 in progress (SES-009) · 91d572f

- Summary: Peter pointed at the Addy eval corpus mid-run; it lands in PLAN-005's bar: the remaining parts' trigger sets draw positives and negatives from `evals/cases/<name>.json` (independent phrasings, not our descriptions), and every rebuilt skill ships a behavioral `evals/evals.json` in skill-creator's schema (+kind) with fixtures adapted where they fit — portal-brief to the requirements skill's capability-map case, notifications-spec to the planner, reports/plan and the sunk-cost scenario to implement, pagination and time-pressure to diagnosing-bugs. interview-me gets its behavioral file now: two dialogue cases (intent and artifact) carrying the merged skill's expectations, the decree first among them. Behavioral cases are the checked-in contract; running them stays manual until a runner lands.
- Why: Peter, 2026-08-31 ("They could be useful in creating the cases and fixtures for the new evals"); the corpus's three-tier README read in full, the seven relevant case files and fixtures read.
- Files:
  - `docs/plan/PLAN-005-lifecycle-composition-implementation.md` (+9/−2) — the bar's eval-material paragraph; Part 2 in progress (SES-009)
  - `skills/interview-me/evals/evals.json` (+32/−0) — two dialogue cases with provenance
