# Dispatch for Reviewer 2 (inv-addy-15)

## Objective
Independent adversarial review of the deliverables produced for unit `inv-addy-15` in Phase 1 (Inventory Extraction).

## Deliverables Under Review
1. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-frontend-ui-engineering-skill-md.md`
2. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-shipping-and-launch-skill-md.md`
3. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md`
4. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md`
5. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/inventory/addy/_units/inv-addy-15.md`
6. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/analysis/manifest/addy.md`
7. `/Users/peterkloss/Dev/ACMElabs/brain-v2/docs/plan/STATE.md`

## Review Standards
- Adversarially inspect for what was missed or got wrong:
  - Check whether any required fields are empty or improperly formatted.
  - Verify line numbers for verbatim citations against source files.
  - Verify that scripts and exit codes in `floor-guard.md` are accurately documented.
  - Verify that the defect section includes the critical defects discovered (untracked files dropped due to exit code 1 handling, deleted test files bypassing the guard via `v/null` slice, deleted constraint bullets omitted, documentation drift).
  - Verify that manifest rows and STATE.md arithmetic match reality.
- Run: `bun scripts/synthesis/coverage.ts` and `bun scripts/synthesis/glossary-lint.ts`.

Save your review report to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_15_2/report.md` and handoff report with verdict (APPROVE or REQUEST_CHANGES) to `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/reviewer_inv_addy_15_2/handoff.md`.
Notify parent via `send_message`.
