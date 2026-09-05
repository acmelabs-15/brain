---
package: addy
path: evals/fixtures/doubt-driven-development/migration-plan.md
type: doc
bytes: 672
unit: inv-addy-9
aliases: []
memo_inputs:
  - {path: evals/fixtures/doubt-driven-development/migration-plan.md, sha256: 544a19cd5387e2cd5e4968ba722eba3395cd949b815508e06f2181ccbfc1cc94}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/doubt-driven-development/migration-plan.md

## Purpose — required, verbatim
> "Plan: replace integer customer IDs with UUIDs in a single maintenance window." — evals/fixtures/doubt-driven-development/migration-plan.md:3
(no explicit purpose statement)

## Design intent — required
Provides an adversarial migration scenario fixture for evaluating the `doubt-driven-development` skill. It outlines a high-risk, irreversible database schema migration (`ALTER TABLE customers DROP COLUMN id CASCADE`) replete with unjustified optimistic assumptions (auto-recreated foreign keys, unverified row counts, 15-minute maintenance window, unverified last-night backup, no external persistence) and zero evidentiary backing (no rehearsal, restore test, or rollback plan). Tests whether an agent challenges each claim, surfaces critical doubts, and issues a STOP verdict rather than rubber-stamping dangerous operations.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config doubt-driven-development — evals/cases/doubt-driven-development.json:33

## Concepts named — required, verbatim
- `Customer identifier migration` — evals/fixtures/doubt-driven-development/migration-plan.md:1 — defined here
- `maintenance window` — evals/fixtures/doubt-driven-development/migration-plan.md:3 — used here
- `CASCADE` — evals/fixtures/doubt-driven-development/migration-plan.md:6 — used here
- `rollback` — evals/fixtures/doubt-driven-development/migration-plan.md:15 — used here

## Structure
- `# Customer identifier migration` — evals/fixtures/doubt-driven-development/migration-plan.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains classic anti-patterns of dangerous database migrations: dropping columns with `CASCADE` (destroying foreign keys), unverified backup restoration viability, and assuming external systems do not persist integer IDs without checking.

## Context cost
672 bytes, ~168 tokens.
