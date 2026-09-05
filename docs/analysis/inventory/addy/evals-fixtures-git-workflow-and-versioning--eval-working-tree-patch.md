---
package: addy
path: evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch
type: file
bytes: 571
unit: inv-addy-9
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch, sha256: 35ee3634734174e83b65560960f64de82b7d08d22dd55e1a196f58837cd507d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch

## Purpose — required, verbatim
> "diff --git a/git-workflow-and-versioning/app.js b/git-workflow-and-versioning/app.js" — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1
(no explicit purpose statement)

## Design intent — required
Evaluation fixture providing a git diff patch containing multiple mixed changes (a refactoring separating `sumPrices`, a precision rounding bug fix in `total`, and a new feature `exportCsv`) for testing the `git-workflow-and-versioning` skill (`evals/cases/git-workflow-and-versioning.json`). Without it, the evaluation would lack a tangible dirty working tree to test whether an agent can cleanly decompose mixed working tree modifications into atomic, well-described, standalone git commits.

## Phase — required
none

## Inputs — required
Unstaged changes against `git-workflow-and-versioning/app.js` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1.

## Outputs — required
Produces a unified diff patch — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1.

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `diff` — evals/fixtures/git-workflow-and-versioning/.eval/working-tree.patch:1 — defined here
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
A 22-line unified diff patch combining three distinct semantic changes: refactoring (`sumPrices`), bug fix (precision rounding to two decimals), and feature addition (`exportCsv`).

## Context cost
571 bytes, ~120 tokens.
