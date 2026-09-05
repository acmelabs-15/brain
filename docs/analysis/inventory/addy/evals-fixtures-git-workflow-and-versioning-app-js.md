---
package: addy
path: evals/fixtures/git-workflow-and-versioning/app.js
type: file
bytes: 129
unit: inv-addy-10
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/git-workflow-and-versioning/app.js, sha256: 7b3e1eaff08d25c39557d329089eb6667164853747f60acbfd8379a30803369f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/git-workflow-and-versioning/app.js

## Purpose — required, verbatim
> "function total(items) {" — evals/fixtures/git-workflow-and-versioning/app.js:3 (no explicit purpose statement)

## Design intent — required
Provides a minimal baseline application module exporting a `total` calculation function that sums item prices. Used as an evaluation fixture for the `git-workflow-and-versioning` eval case, where a dirty working tree mixing refactoring, bug fixing, and new features must be decomposed into atomic commits. Without this baseline file, the eval harness would lack a concrete code target against which git staging and commit workflows can be executed and tested.

## Phase — required
none

## Inputs — required
Array of item objects each containing a numeric `price` property, passed as `items` to `total(items)` at evals/fixtures/git-workflow-and-versioning/app.js:3.

## Outputs — required
Exports CommonJS object `{ total }` at evals/fixtures/git-workflow-and-versioning/app.js:7. Returns numeric sum of item prices.

## Invokes — required
none

## Invoked by — required
- "const { total } = require('./app');" — evals/fixtures/git-workflow-and-versioning/app.test.js:5
- "git-workflow-and-versioning" — evals/cases/git-workflow-and-versioning.json:38

## Concepts named — required, verbatim
none

## Structure
- Function definition: `total` — evals/fixtures/git-workflow-and-versioning/app.js:3
- Module export: `module.exports = { total }` — evals/fixtures/git-workflow-and-versioning/app.js:7

## Scripts — required if type is script or the skill ships scripts
- path: evals/fixtures/git-workflow-and-versioning/app.js, language: JavaScript (CommonJS), lines: 8
- documented invocation: none (module intended to be required by tests or applications)
- **executed:** yes
- actual command run: `bun -e 'const { total } = require("./sources/addy/evals/fixtures/git-workflow-and-versioning/app.js"); console.log(total([{price: 10}, {price: 20}]));'`
- stdout: `30`
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none (does not exit process)
- for validators/gates: not a validator or gate
- does the output match what the documentation claims: yes, correctly computes sum of prices

## Defects — required
none

## Observations
The file uses CommonJS `module.exports`. When executed directly via modern Node.js in an ES module project context without a package boundary, it triggers an ES module scope error unless run via Bun or inside a CommonJS package scope.

## Context cost
129 bytes, ~30 tokens.
