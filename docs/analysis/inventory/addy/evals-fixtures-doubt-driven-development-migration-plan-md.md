---
package: addy
path: evals/fixtures/doubt-driven-development/migration-plan.md
type: doc
bytes: 672
unit: inv-addy-2
---

# evals/fixtures/doubt-driven-development/migration-plan.md

## Purpose — required, verbatim
> "# Customer identifier migration\n\nPlan: replace integer customer IDs with UUIDs in a single maintenance window." — evals/fixtures/doubt-driven-development/migration-plan.md:1-3 (no explicit purpose statement)

## Design intent — required
Provides an unverified, high-risk database migration plan fixture for evaluating the `doubt-driven-development` skill. It contains hazardous unvalidated assumptions (automatic foreign key recreation, unverified row count, unproven execution duration, unverified rollback safety, unverified external system persistence) without rehearsal, row count verification, dependency inventory, restore timing, or rollback testing, evaluating whether an agent applies critical skepticism and demands proof before executing irreversible operations.

## Phase — required
`addy:PLAN`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config `evals/cases/doubt-driven-development.json` (via fixture directory reference) — evals/cases/doubt-driven-development.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `Customer identifier migration` — evals/fixtures/doubt-driven-development/migration-plan.md:1 — defined here
- `maintenance window` — evals/fixtures/doubt-driven-development/migration-plan.md:3 — used here
- `ALTER TABLE` — evals/fixtures/doubt-driven-development/migration-plan.md:6 — used here
- `CASCADE` — evals/fixtures/doubt-driven-development/migration-plan.md:6 — used here
- `foreign keys` — evals/fixtures/doubt-driven-development/migration-plan.md:12 — used here
- `rollback protection` — evals/fixtures/doubt-driven-development/migration-plan.md:15 — used here
- `rehearsal` — evals/fixtures/doubt-driven-development/migration-plan.md:18 — used here
- `dependency inventory` — evals/fixtures/doubt-driven-development/migration-plan.md:18 — used here
- `restore timing` — evals/fixtures/doubt-driven-development/migration-plan.md:18 — used here
- `rollback test` — evals/fixtures/doubt-driven-development/migration-plan.md:18-19 — used here

## Structure
- `# Customer identifier migration` — line 1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Exemplifies dangerous operational overconfidence (e.g. running `ALTER TABLE customers DROP COLUMN id CASCADE` without testing downstream constraint drops or staging rehearsal). It serves as a benchmark for testing an agent's ability to challenge assumptions and mandate verification gates.

## Context cost
672 bytes (~168 tokens).
