---
package: addy
path: evals/fixtures/git-workflow-and-versioning/app.js
type: file
bytes: 129
unit: inv-addy-2
---

# evals/fixtures/git-workflow-and-versioning/app.js

## Purpose — required, verbatim
> "function total(items) {\n  return items.reduce((sum, item) => sum + item.price, 0);\n}" — evals/fixtures/git-workflow-and-versioning/app.js:3-5 (no explicit purpose statement)

## Design intent — required
Provides the initial baseline JavaScript source file containing a single `total` pricing function for the `git-workflow-and-versioning` evaluation. It serves as the target file for working tree modifications and patch testing.

## Phase — required
`addy:BUILD`

## Inputs — required
- `items`: Array of objects with numeric `.price` properties passed to `total(items)` — evals/fixtures/git-workflow-and-versioning/app.js:3-4

## Outputs — required
- Returns numeric sum of all item prices — evals/fixtures/git-workflow-and-versioning/app.js:4

## Invokes — required
none

## Invoked by — required
- file `evals/fixtures/git-workflow-and-versioning/app.test.js` — evals/fixtures/git-workflow-and-versioning/app.test.js:5
- file `evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1
- config `evals/cases/git-workflow-and-versioning.json` — evals/cases/git-workflow-and-versioning.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:169

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
