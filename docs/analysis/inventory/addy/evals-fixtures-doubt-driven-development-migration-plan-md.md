---
package: addy
path: evals/fixtures/doubt-driven-development/migration-plan.md
type: doc
bytes: 672
unit: inv-addy-9
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/doubt-driven-development/migration-plan.md, sha256: 544a19cd5387e2cd5e4968ba722eba3395cd949b815508e06f2181ccbfc1cc94}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/doubt-driven-development/migration-plan.md

## Purpose — required, verbatim
> "Plan: replace integer customer IDs with UUIDs in a single maintenance window." — evals/fixtures/doubt-driven-development/migration-plan.md:3
(no explicit purpose statement)

## Design intent — required
Evaluation fixture containing an unverified, high-risk database migration plan for testing the `doubt-driven-development` skill (`evals/cases/doubt-driven-development.json`). It proposes replacing integer primary keys with UUIDs via destructive DDL (`ALTER TABLE customers DROP COLUMN id CASCADE`) backed only by five unverified claims from the author and zero attached rehearsals or recovery benchmarks. Without it, the evaluation suite could not test whether an agent systematically extracts claims, challenges high-consequence assumptions, demands empirical evidence, and issues a STOP verdict on dangerous operations.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Customer identifier migration` — evals/fixtures/doubt-driven-development/migration-plan.md:1 — defined here
- `Claims made by the author` — evals/fixtures/doubt-driven-development/migration-plan.md:10 — defined here
- `foreign keys` — evals/fixtures/doubt-driven-development/migration-plan.md:12 — used here
- `maintenance window` — evals/fixtures/doubt-driven-development/migration-plan.md:14 — used here
- `rollback` — evals/fixtures/doubt-driven-development/migration-plan.md:18 — used here

## Structure
- `# Customer identifier migration` — evals/fixtures/doubt-driven-development/migration-plan.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction — evals/fixtures/doubt-driven-development/migration-plan.md:6: Step 2 drops the primary key column with CASCADE, which destroys all referring foreign key constraints, contradicting the author's claim that foreign keys will be recreated automatically.

## Observations
A prime exemplar of plan fragility: zero row counts, untested restore times, destructive cascading DDL, and reliance on untested overnight backups.

## Context cost
672 bytes, ~150 tokens.
