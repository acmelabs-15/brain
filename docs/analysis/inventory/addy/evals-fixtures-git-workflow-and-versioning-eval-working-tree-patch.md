---
package: addy
path: evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch
type: file
bytes: 571
unit: inv-addy-2
---

# evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch

## Purpose — required, verbatim
> "diff --git a/git-workflow-and-versioning/app.js b/git-workflow-and-versioning/app.js\n--- a/git-workflow-and-versioning/app.js\n+++ b/git-workflow-and-versioning/app.js" — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1-3 (no explicit purpose statement)

## Design intent — required
Provides a git unified diff patch file used by the eval runner (`scripts/run-evals.js`) to set up an uncommitted working tree change on `app.js`. The patch refactors `total` to use a helper `sumPrices` with `Math.round` and introduces an `exportCsv` function, creating a multi-concern working tree change to test an agent's ability to inspect, selectively stage, stash, or create atomic commits under the `git-workflow-and-versioning` skill.

## Phase — required
`addy:SHIP`

## Inputs — required
- Applies to `evals/fixtures/git-workflow-and-versioning/app.js` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1

## Outputs — required
- Mutates `app.js` with new functions `sumPrices` and `exportCsv` and updated `total` implementation — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:8-21

## Invokes — required
- file `evals/fixtures/git-workflow-and-versioning/app.js` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1

## Invoked by — required
- config `evals/cases/git-workflow-and-versioning.json` — evals/cases/git-workflow-and-versioning.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `git-workflow-and-versioning/app.js` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1 — used here
- `sumPrices` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:8 — defined here
- `total` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:12 — defined here
- `exportCsv` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:17 — defined here

## Structure
- Unified diff header — lines 1-4
- Replacement hunk for `app.js` — lines 5-22

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Verified clean applicability with `git apply --check git-workflow-and-versioning/.eval/working-tree.patch` against `app.js`.

## Context cost
571 bytes (~143 tokens).
