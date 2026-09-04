---
package: addy
path: evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch
type: file
bytes: 571
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch, sha256: 35ee3634734174e83b65560960f64de82b7d08d22dd55e1a196f58837cd507d8}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch

## Purpose — required, verbatim
> "diff --git a/git-workflow-and-versioning/app.js b/git-workflow-and-versioning/app.js" — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1 (no explicit purpose statement)

## Design intent — required
Provides a git unified diff patch file used by the eval runner (`scripts/run-evals.js`) to set up an uncommitted working tree change on `app.js`. The patch refactors `total` to use a helper `sumPrices` with `Math.round` and introduces an `exportCsv` function, creating a multi-concern working tree change to test an agent's ability to inspect, selectively stage, stash, or create atomic commits under the `git-workflow-and-versioning` skill.

## Phase — required
none

## Inputs — required
- Applies to `app.js` in the working tree (evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1)

## Outputs — required
- Mutates `app.js` with new functions `sumPrices` and `exportCsv` and updated `total` implementation (evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:8-21)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `git-workflow-and-versioning/app.js` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1 — used here
- `sumPrices` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:8 — defined here
- `total` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:12 — defined here
- `exportCsv` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:17 — defined here

## Structure
- Unified diff header (lines 1-4)
- Replacement hunk for `app.js` (lines 5-22)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Verified clean applicability with `git apply --check git-workflow-and-versioning/.eval/working-tree.patch` against `app.js`.

## Context cost
571 bytes (~143 tokens).
