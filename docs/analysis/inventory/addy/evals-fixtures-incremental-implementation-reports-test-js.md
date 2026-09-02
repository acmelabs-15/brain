---
package: addy
path: evals/fixtures/incremental-implementation/reports.test.js
type: file
bytes: 325
unit: inv-addy-2
---

# evals/fixtures/incremental-implementation/reports.test.js

## Purpose — required, verbatim
> "test('hides archived reports', () => {\n  assert.deepEqual(visibleReports([\n    { id: 1, archived: false },\n    { id: 2, archived: true },\n  ]), [{ id: 1, archived: false }]);\n});" — evals/fixtures/incremental-implementation/reports.test.js:7-12 (no explicit purpose statement)

## Design intent — required
Provides the initial regression test for `reports.js` in the `incremental-implementation` fixture repository (eval id: 1). It verifies that existing report filtering behavior (`visibleReports` hiding archived records) works properly and ensures that subsequent incremental additions of CSV export logic do not regress existing functionality.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Imports `visibleReports` from `./reports` (`evals/fixtures/incremental-implementation/reports.js:5`).

## Outputs — required
- Test execution status via `node:test`.

## Invokes — required
- file `evals/fixtures/incremental-implementation/reports.js` — evals/fixtures/incremental-implementation/reports.test.js:5

## Invoked by — required
- config `evals/cases/incremental-implementation.json` — evals/cases/incremental-implementation.json:34-36
- script `scripts/run-evals.js` — scripts/run-evals.js:389-398

## Concepts named — required, verbatim
- `visibleReports` — evals/fixtures/incremental-implementation/reports.test.js:5 — used here

## Structure
- `require('node:assert/strict')` — line 3
- `require('node:test')` — line 4
- `require('./reports')` — line 5
- `test('hides archived reports', ...)` — line 7

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/incremental-implementation/reports.test.js`, language: JavaScript (Node.js test runner), lines: 13
- documented invocation: `node --test`
- **executed:** yes
- actual command run: `bun -e "const { visibleReports } = require('./sources/addy/evals/fixtures/incremental-implementation/reports.js'); const assert = require('node:assert/strict'); assert.deepEqual(visibleReports([{ id: 1, archived: false }, { id: 2, archived: true }]), [{ id: 1, archived: false }]); console.log('PASS');"`
- abridged stdout: `PASS`
- **actual exit code:** `0`
- documented exit codes vs actual: test execution completes without error, exiting 0.
- for validators/gates: passes on initial fixture state.
- does output match documentation: Yes, confirms report filtering passes.

## Defects — required
none

## Observations
Guards the baseline behavior of the existing codebase. The eval expectations require that this test continues to pass as new slices and tests are added.

## Context cost
325 bytes (~85 tokens) file size. Loaded as part of `evals/fixtures/incremental-implementation/` (781 bytes total, ~195 tokens).
