---
package: addy
path: evals/fixtures/git-workflow-and-versioning/app.js
type: file
bytes: 129
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/git-workflow-and-versioning/app.js, sha256: 7b3e1eaff08d25c39557d329089eb6667164853747f60acbfd8379a30803369f}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/git-workflow-and-versioning/app.js

## Purpose — required, verbatim
> "function total(items) {" — evals/fixtures/git-workflow-and-versioning/app.js:3 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides the initial baseline JavaScript source file containing a single `total` pricing function for the `git-workflow-and-versioning` evaluation. It serves as the target file for working tree modifications and patch testing.

## Phase — required
`addy:BUILD`

## Inputs — required
- `items`: Array of objects with numeric `.price` properties passed to `total(items)` (evals/fixtures/git-workflow-and-versioning/app.js:3-4)

## Outputs — required
- Returns numeric sum of all item prices (evals/fixtures/git-workflow-and-versioning/app.js:4)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `total` — evals/fixtures/git-workflow-and-versioning/app.js:3 — defined here

## Structure
- `total(items)` — line 3
- `module.exports` — line 7

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Minimal 8-line baseline module designed for straightforward diffing and patching during git workflow evaluations.

## Context cost
129 bytes (~32 tokens). Combined with `app.test.js` (228 bytes) and patch (571 bytes), total fixture size is 928 bytes (~232 tokens).
