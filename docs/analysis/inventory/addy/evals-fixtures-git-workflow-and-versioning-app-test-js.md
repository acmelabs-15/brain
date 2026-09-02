---
package: addy
path: evals/fixtures/git-workflow-and-versioning/app.test.js
type: file
bytes: 228
unit: inv-addy-2
---

# evals/fixtures/git-workflow-and-versioning/app.test.js

## Purpose — required, verbatim
> "test('totals item prices', () => {\n  assert.equal(total([{ price: 1 }, { price: 2 }]), 3);\n});" — evals/fixtures/git-workflow-and-versioning/app.test.js:7-9 (no explicit purpose statement)

## Design intent — required
Provides the automated regression unit test verifying the `total` pricing function in `app.js` using `node:test` and `node:assert/strict`. It ensures that git patch applications and versioning operations preserve core functional correctness.

## Phase — required
`addy:TEST`

## Inputs — required
- Imports `total` from `./app` — evals/fixtures/git-workflow-and-versioning/app.test.js:5
- Sample item pricing array: `[{ price: 1 }, { price: 2 }]` — evals/fixtures/git-workflow-and-versioning/app.test.js:8

## Outputs — required
- Test assertion verdicts (asserts equality to 3) — evals/fixtures/git-workflow-and-versioning/app.test.js:8

## Invokes — required
- file `evals/fixtures/git-workflow-and-versioning/app.js` — evals/fixtures/git-workflow-and-versioning/app.test.js:5

## Invoked by — required
- config `evals/cases/git-workflow-and-versioning.json` — evals/cases/git-workflow-and-versioning.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `node:assert/strict` — evals/fixtures/git-workflow-and-versioning/app.test.js:3 — used here
- `node:test` — evals/fixtures/git-workflow-and-versioning/app.test.js:4 — used here
- `total` — evals/fixtures/git-workflow-and-versioning/app.test.js:5 — used here

## Structure
- `test('totals item prices')` — line 7

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/git-workflow-and-versioning/app.test.js`, language: JavaScript (`node:test`), lines: 10
- documented invocation: none in file (invoked via `node --test` or `bun test`)
- **executed:** yes
- actual command run: `bun test app.test.js`, actual exit code: `0`
- stdout:
  ```
  bun test v1.4.0 (34cbb9a40)

  app.test.js:
  (pass) totals item prices [1.44ms]

   1 pass
   0 fail
  Ran 1 test across 1 file. [16.00ms]
  ```
- documented exit codes vs. actual exit paths: `node:test` exits 0 on passing assertions, exits non-zero on assertion failure.
- for validators/gates: N/A
- does output match documentation: Yes, 1 unit test passes cleanly against `app.js`.

## Defects — required
none

## Observations
Concise unit test validating the baseline state of `app.js`.

## Context cost
228 bytes (~57 tokens). Combined with `app.js` (129 bytes) and `.eval/working-tree.patch` (571 bytes), total fixture size is 928 bytes (~232 tokens).
