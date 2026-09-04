---
package: addy
path: evals/fixtures/doubt-driven-development/migration-plan.md
type: doc
bytes: 672
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/doubt-driven-development/migration-plan.md, sha256: 544a19cd5387e2cd5e4968ba722eba3395cd949b815508e06f2181ccbfc1cc94}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/doubt-driven-development/migration-plan.md

## Purpose — required, verbatim
> "Customer identifier migration" — evals/fixtures/doubt-driven-development/migration-plan.md:1 (no explicit purpose statement) (no explicit purpose statement)

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
orphan

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
