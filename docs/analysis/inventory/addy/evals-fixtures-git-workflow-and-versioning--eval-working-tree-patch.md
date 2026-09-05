---
package: addy
path: evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch
type: file
bytes: 571
unit: inv-addy-9
aliases: []
memo_inputs:
  - {path: evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch, sha256: 35ee3634734174e83b65560960f64de82b7d08d22dd55e1a196f58837cd507d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch

## Purpose — required, verbatim
> "diff --git a/git-workflow-and-versioning/app.js b/git-workflow-and-versioning/app.js" — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1
(no explicit purpose statement)

## Design intent — required
Provides a unified diff patch fixture simulating an unstaged / uncommitted working tree change for the `git-workflow-and-versioning` skill eval. The diff modifies `app.js` by combining three separate logical concerns in one change: refactoring calculation helper logic (`sumPrices`), applying a rounding fix to `total`, and adding a new feature (`exportCsv`). Tests whether an agent splits entangled working tree changes into atomic, logical commits with clear imperative messages where each commit compiles and tests cleanly.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config git-workflow-and-versioning — evals/cases/git-workflow-and-versioning.json:38

## Concepts named — required, verbatim
- `sumPrices` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:8 — defined here
- `total` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:12 — defined here
- `exportCsv` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:17 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Patch file showing composite working tree modifications that conflate refactoring, bug fixing, and new feature implementation into a single change on `app.js`.

## Context cost
571 bytes, ~142 tokens.
