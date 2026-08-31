# 2026-08-31 10:29 · The consult skills inventoried — PLAN-002 Part 1

- Goal: PLAN-002 Part 1 — `domain-modeling` and `codebase-design` read in full (every file, the `agents/` subdirectories included), their capability inventories with file:line cites, their lineage and drift against `~/Dev/reference/matt-pocock-skills`, and the measured citation graph over `skills/`, `commands/`, `agents/` and `references/` — written up as ANA-005 with Refuted and Unverifiable sections.
- Status: in progress
- Plan: PLAN-002 · part 1
- Outcome: _(fill in)_

## Narrative

Started 2026-08-31 right after PLAN-002 was founded (`824ed34`; SES-005 stays in progress — PLAN-001 Part 5's remaining decisions wait on this plan, marked there). The method is the plan's: one evaluator, full reads, no edits to anything evaluated before Part 4's ADR.

## Changes (one entry per commit, in order)

### 2026-08-31 · docs(analysis): ANA-005 — the consult skills inventoried: capabilities with cites, drift small and enumerable (and exactly where the integration already half-exists as local edges), the citation graph with its three edge kinds (PLAN-002 Part 1 Tasks 1–3) · b8c5f99

- Summary: ANA-005 lands PLAN-002 Part 1: the two consult skills' capability tables with file:line cites; drift measured by `diff -r` against `~/Dev/reference/matt-pocock-skills` (codebase-design one hunk — the local read rule; domain-modeling the ADR-location deference plus `df0205b`'s pointer); the citation graph with its three edge kinds — 18 passive read-rule edges, 9 active handoffs, 3 ownership statements — and the finding that every consult-to-lifecycle connection is locally authored drift, none upstream design.
- Why: PLAN-002 Part 1 Tasks 1–3 — the inventory the Part 2 matrix and Part 3 options need; Peter's premise that codebase-design leans heavily on domain-modeling's CONTEXT files is confirmed for the shipped copies and refuted as an upstream design fact (the lean is two lines we authored).
- Files:
  - `docs/analysis/ANA-005-consult-skills-inventory.md` (+124/−0) — the analysis: F1–F5, one refuted premise, the unverifiable read-rule compliance, consequences for Parts 2–3
  - `docs/analysis/README.md` (+1/−0) — ANA-005's index row
