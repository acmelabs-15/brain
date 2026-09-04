---
package: addy
path: evals/fixtures/incremental-implementation/reports.js
type: file
bytes: 145
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/incremental-implementation/reports.js, sha256: ed12bb1a30d213047df1f353e71e679598b8dac175f713e104cf19ee36cc35ba}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/incremental-implementation/reports.js

## Purpose — required, verbatim
> "'use strict';" — evals/fixtures/incremental-implementation/reports.js:1 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Implements the baseline report filtering function (`visibleReports`) for the `incremental-implementation` fixture project (eval id: 1). It provides the existing codebase foundation to which CSV formatting and export features are incrementally added following `tasks/plan.md`.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Arguments to `visibleReports(reports)`:
  - `reports`: array of report objects with an `archived` boolean property.

## Outputs — required
- Exported CommonJS function `visibleReports(reports)` returning the subset of unarchived reports.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `visibleReports` — evals/fixtures/incremental-implementation/reports.js:3 — defined here

## Structure
- `function visibleReports(reports)` — line 3
- `module.exports = { visibleReports }` — line 7

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/incremental-implementation/reports.js`, language: JavaScript (CommonJS), lines: 8
- documented invocation: none (imported by `reports.test.js`)
- **executed:** yes
- actual command run: `bun -e "const { visibleReports } = require('./sources/addy/evals/fixtures/incremental-implementation/reports.js'); const res = visibleReports([{ id: 1, archived: false }, { id: 2, archived: true }]); console.log(res);"`
- abridged stdout: `[ { id: 1, archived: false } ]`
- **actual exit code:** `0`
- documented exit codes vs actual: none documented; returns filtered array.
- for validators/gates: not a validator or gate.
- does output match documentation: Yes, correctly returns only non-archived report items.

## Defects — required
none

## Observations
Simple CommonJS module representing the pre-feature baseline.

## Context cost
145 bytes (~40 tokens) file size. Loaded as part of `evals/fixtures/incremental-implementation/` (781 bytes total, ~195 tokens).
