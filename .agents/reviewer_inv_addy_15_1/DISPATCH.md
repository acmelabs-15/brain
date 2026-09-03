# Dispatch for Reviewer 1 (inv-addy-15)

## Objective
Independent review of the deliverables produced for unit `inv-addy-15` in Phase 1 (Inventory Extraction).

## Deliverables Under Review
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-frontend-ui-engineering-skill-md.md`
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md`
3. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md`
4. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md`
5. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-15.md`
6. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md`
7. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md`

## Review Standards
- METHOD.md R1-R6:
  - R1: Full reads, no sampling.
  - R2: Evidence and scripts run (`path:line` citations verified).
  - R3: Verbatim in extraction (required verbatim fields checked against source text).
  - R4: One vocabulary from GLOSSARY.md (`addy:` prefixes).
  - R5: Defect is not dismissal (all known defects documented).
  - R6: Depth rule (exhaustive named concepts).
- Template compliance: check against `docs/plan/templates/inventory-entry.md` and `docs/plan/templates/work-unit-report.md`. No empty required fields.
- Run verification commands: `bun scripts/synthesis/coverage.ts`, `bun scripts/synthesis/glossary-lint.ts`.

Save your review report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_15_1/report.md` and handoff report with verdict (APPROVE or REQUEST_CHANGES) to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_15_1/handoff.md`.
Notify parent via `send_message`.
