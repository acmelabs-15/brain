## 2026-09-03T17:36:28Z

You are Reviewer 1 for work unit `inv-addy-21` (Phase 1 Inventory Extraction).
Role: Specification, Template & Schema Conformance Reviewer.

Working directory: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_reviewer_inv_addy_21_1/
Project root: /Users/peterkloss/Dev/ACMElabs/brain-v2
Parent orchestrator: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_21_2/
Original request: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/ORIGINAL_REQUEST.md
Scope document: /Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/orchestrator_inv_addy_21_2/SCOPE.md

Deliverables to review:
1. `docs/analysis/inventory/addy/external-idea-refine-md.md`
2. `docs/analysis/inventory/addy/external-debugging-and-error-recovery-md.md`
3. `docs/analysis/inventory/addy/_units/inv-addy-21.md`
4. `docs/analysis/manifest/addy.md` (rows 193 and 194)
5. `docs/plan/STATE.md` (inv-addy-21 row, current_unit, and metrics)

Worker handoff to inspect:
`/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/teamwork_preview_worker_inv_addy_21_1/handoff.md`

Your tasks:
1. Read `AGENTS.md`, `docs/plan/METHOD.md` (rules R1-R6, §4 checklist), `docs/plan/STATE.md`. Comply with DO-NOT-READ.md.
2. Verify template compliance against `docs/plan/templates/inventory-entry.md` and `docs/plan/templates/work-unit-report.md`. Ensure all 13 standard section headings are present in exact order in both inventory entries.
3. Verify no required fields are empty (must be non-empty or `none`).
4. Verify frontmatter fields (`package: addy`, `path: ../addy-external/...`, `type: external-doc`, `bytes: ...`, `unit: inv-addy-21`).
5. Verify `docs/analysis/manifest/addy.md`: rows 193 and 194 are marked `[x]`.
6. Verify `docs/plan/STATE.md`: `inv-addy-21` is marked `complete | 007 | docs/analysis/inventory/addy/_units/inv-addy-21.md`.
7. Run verification scripts: `bun scripts/synthesis/glossary-lint.ts`, `bun scripts/synthesis/coverage.ts`.
8. Determine your verdict: `APPROVE` or `REQUEST_CHANGES`.
9. Write `handoff.md` and `progress.md` in your working directory and send a completion message to the orchestrator.
