---
package: addy
path: evals/fixtures/incremental-implementation-pressure/draft-export.js
type: file
bytes: 552
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/incremental-implementation-pressure/draft-export.js, sha256: 3b53d3b84815075de1671ea3d38d6e8f15b223b972615ecc7bc13439a80e373a}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/incremental-implementation-pressure/draft-export.js

## Purpose — required, verbatim
> "async function exportReports(reports, setStatus, analytics) {" — evals/fixtures/incremental-implementation-pressure/draft-export.js:3 (no explicit purpose statement)

## Design intent — required
Provides a monolithic, multi-layer, untested draft implementation of CSV report exporting as a fixture for evaluation. It combines CSV data formatting, DOM manipulation, blob creation, browser download triggering, UI status management, and analytics tracking in a single function, providing concrete code that an agent being evaluated must decompose into separate, testable vertical slices.

## Phase — required
none

## Inputs — required
- `reports` array of report objects — `evals/fixtures/incremental-implementation-pressure/draft-export.js:3`
- `setStatus` status callback — `evals/fixtures/incremental-implementation-pressure/draft-export.js:3`
- `analytics` telemetry tracker — `evals/fixtures/incremental-implementation-pressure/draft-export.js:3`
- Browser globals `Blob`, `document`, `URL` — `evals/fixtures/incremental-implementation-pressure/draft-export.js:6-8`

## Outputs — required
- Exports `exportReports` via CommonJS `module.exports` — `evals/fixtures/incremental-implementation-pressure/draft-export.js:17`
- DOM anchor element download trigger side effect — `evals/fixtures/incremental-implementation-pressure/draft-export.js:7-12`
- Telemetry event `report_exported` — `evals/fixtures/incremental-implementation-pressure/draft-export.js:13`
- Status state updates (`working`, `done`) — `evals/fixtures/incremental-implementation-pressure/draft-export.js:4,14`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `exportReports` — evals/fixtures/incremental-implementation-pressure/draft-export.js:3 — defined here
- `Blob` — evals/fixtures/incremental-implementation-pressure/draft-export.js:6 — used here
- `URL.createObjectURL` — evals/fixtures/incremental-implementation-pressure/draft-export.js:8 — used here
- `report_exported` — evals/fixtures/incremental-implementation-pressure/draft-export.js:13 — used here

## Structure
- Function definition `exportReports` (lines 3-15)
- CommonJS module export (line 17)

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/incremental-implementation-pressure/draft-export.js`, language: JavaScript (Node/Bun), lines: 18
- documented invocation: none
- **executed:** yes
- actual command run: `bun sources/addy/evals/fixtures/incremental-implementation-pressure/draft-export.js`
- actual exit code: `0`, stdout: (empty)
- documented exit codes: none vs actual exit paths: clean execution without error (code 0)
- does the output match what the documentation claims?: yes, module exports `exportReports` function cleanly

## Defects — required
none

## Observations
Intentionally couples data transformation, DOM manipulation, state management, and telemetry into a single monolithic 18-line function to test agent decomposition capabilities.

## Context cost
552 bytes (approx. 138 tokens).
