---
package: addy
path: evals/cases/git-workflow-and-versioning.json
type: config
bytes: 1272
unit: inv-addy-7
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/cases/git-workflow-and-versioning.json, sha256: d89f00dcf6164edc74e721272259db4423c9ea59dd73aecd6202194aeb716a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/cases/git-workflow-and-versioning.json

## Purpose — required, verbatim
> "git-workflow-and-versioning" — evals/cases/git-workflow-and-versioning.json:2 (no explicit purpose statement)

## Design intent — required
Defines test fixtures and trigger expectations for evaluating agent skill routing and behavioral adherence for `git-workflow-and-versioning`. It tests trigger routing for atomic commits, conflict resolution, versioning/tagging, and pull requests, routes integration testing prompts to test-driven-development, and tests execution against a messy working tree fixture requiring refactor, fix, and feature changes to be decomposed into separate atomic, working commits with imperative messages.

## Phase — required
addy:Ship

## Inputs — required
Evaluation test configurations comprising positive trigger prompts with top_k ranking thresholds, negative trigger prompts routing to `test-driven-development`, and a behavioral eval scenario with prompt, expected output, fixture reference (`git-workflow-and-versioning`), and assertion expectations.

## Outputs — required
Test case definitions consumed by `sources/addy/scripts/run-evals.js` for Tier 2 trigger ranking validation and Tier 3 behavioral grading against workspace git repository histories.

## Invokes — required
- skill git-workflow-and-versioning — evals/cases/git-workflow-and-versioning.json:2
- skill test-driven-development — evals/cases/git-workflow-and-versioning.json:28

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `atomic commits` — evals/cases/git-workflow-and-versioning.json:6 — used here
- `feature branch` — evals/cases/git-workflow-and-versioning.json:10 — used here
- `pull request` — evals/cases/git-workflow-and-versioning.json:18 — used here

## Structure
JSON object defining:
- `skill_name`: target skill identifier string
- `trigger`: object containing `positive` and `negative` prompt arrays for trigger routing evaluation
- `evals`: array containing behavioral evaluation cases with `id`, `prompt`, `expected_output`, `files`, and `expectations`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The behavioral expectations explicitly check that refactoring, bug fixes, and feature additions are not squashed together into a monolithic commit, and that every intermediate commit leaves the tree green. Evaluated in CI via Tier 2 trigger tests (`bun sources/addy/scripts/run-evals.js`).

## Context cost
1272 bytes (approx. 318 tokens). Standalone config file loaded only during evaluation passes.
