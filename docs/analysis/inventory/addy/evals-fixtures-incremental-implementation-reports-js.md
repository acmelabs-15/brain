---
package: addy
path: evals/fixtures/incremental-implementation/reports.js
type: file
bytes: 145
unit: inv-addy-10
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/incremental-implementation/reports.js, sha256: ed12bb1a30d213047df1f353e71e679598b8dac175f713e104cf19ee36cc35ba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/incremental-implementation/reports.js

## Purpose — required, verbatim
> "function visibleReports(reports) {" — evals/fixtures/incremental-implementation/reports.js:3 (no explicit purpose statement)

## Design intent — required
Provides the pre-existing baseline report filtering function (`visibleReports`) for the reports feature. Serves as the starting code in eval case #1 of `incremental-implementation`, where an agent is tasked with adding CSV export in small verified slices while preserving existing filtering behavior without regressions.

## Phase — required
none

## Inputs — required
Array of report objects with boolean `archived` properties passed as `reports` to `visibleReports(reports)` at evals/fixtures/incremental-implementation/reports.js:3.

## Outputs — required
Returns an array of unarchived reports filtered via `reports.filter((report) => !report.archived)` at evals/fixtures/incremental-implementation/reports.js:4. Exported via `module.exports = { visibleReports }` at evals/fixtures/incremental-implementation/reports.js:7.

## Invokes — required
none

## Invoked by — required
- "const { visibleReports } = require('./reports');" — evals/fixtures/incremental-implementation/reports.test.js:5
- "incremental-implementation" — evals/cases/incremental-implementation.json:35

## Concepts named — required, verbatim
none

## Structure
- Function definition: `visibleReports` — evals/fixtures/incremental-implementation/reports.js:3
- Filtering logic: `return reports.filter((report) => !report.archived);` — evals/fixtures/incremental-implementation/reports.js:4
- Module export: `module.exports = { visibleReports }` — evals/fixtures/incremental-implementation/reports.js:7

## Scripts — required if type is script or the skill ships scripts
- path: evals/fixtures/incremental-implementation/reports.js, language: JavaScript, lines: 8
- documented invocation: none (module function)
- **executed:** yes
- actual command run: `bun -e 'const { visibleReports } = require("./sources/addy/evals/fixtures/incremental-implementation/reports.js"); console.log(visibleReports([{id: 1, archived: false}, {id: 2, archived: true}]));'`
- stdout: `[ { id: 1, archived: false } ]`
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none
- for validators/gates: not a validator or gate
- does the output match what the documentation claims: yes, filters out archived reports

## Defects — required
none

## Observations
Simple, pure array filtering function serving as clean baseline application code for evaluation tasks.

## Context cost
145 bytes, ~35 tokens.
