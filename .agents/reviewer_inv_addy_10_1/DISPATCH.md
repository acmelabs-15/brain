# Dispatch for Reviewer 1 (inv-addy-10)

## Objective
Independently review the work product for `inv-addy-10`:
- Deliverables in `docs/analysis/inventory/addy/`
- Work unit report in `docs/analysis/inventory/addy/_units/inv-addy-10.md`
- Manifest updates in `docs/analysis/manifest/addy.md`
- State updates in `docs/plan/STATE.md`

Check against METHOD.md R1-R6, checklist §4, and template schema requirements.
Report verdict (APPROVE or REQUEST_CHANGES) in handoff.md.

## 2026-09-03T05:26:30Z
You are Reviewer 1 for work unit inv-addy-10 in Phase 1 (Inventory Extraction).
Your working directory is: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_10_1
You MUST read /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md before starting work.

## Hard Rules (METHOD.md §3)
R1 — Full reads. Coverage is proven, not asserted.
R2 — Evidence, and scripts are run. Every claim names path:line.
R3 — Verbatim in extraction. Fields marked verbatim carry exact quotes.
R4 — One vocabulary, from the glossary (addy: prefixes).
R5 — Defect is not dismissal.
R6 — Depth rule. Named things get concept cards.

## Target Deliverables to Review
1. `docs/analysis/inventory/addy/scripts-run-evals-js.md`
2. `docs/analysis/inventory/addy/scripts-validate-commands-test-js.md`
3. `docs/analysis/inventory/addy/scripts-run-evals-test-js.md`
4. `docs/analysis/inventory/addy/scripts-validate-skills-js.md`
5. `docs/analysis/inventory/addy/_units/inv-addy-10.md`
6. Manifest check: `docs/analysis/manifest/addy.md` (rows 140-143 checked `[x]`)
7. State check: `docs/plan/STATE.md` (inv-addy-10 complete, rows count updated)

## Instructions
Check all deliverables against:
- METHOD.md §3 rules R1-R6
- §4 checklist (Existence, Execution, Doc drift, Internal consistency, Composition, Context cost, Design intent)
- Schema completeness: no empty required fields. Run `bun scripts/synthesis/coverage.ts`.
- Run `bun scripts/synthesis/glossary-lint.ts`.
Write your full review in `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_10_1/handoff.md`.
Explicitly state your verdict at the top: `APPROVE` or `REQUEST_CHANGES`.
Send a message back to orchestrator.
