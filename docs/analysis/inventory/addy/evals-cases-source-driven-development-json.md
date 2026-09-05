---
package: addy
path: evals/cases/source-driven-development.json
type: config
bytes: 1287
unit: inv-addy-8
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/source-driven-development.json, sha256: df9c000800d1c7e3f46012ee7b6de07b67d1af8e98917921130cc3accc072464}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/source-driven-development.json

## Purpose — required, verbatim
> "An implementation grounded in official documentation with citations, flagging anything unverified" — evals/cases/source-driven-development.json:33
(no explicit purpose statement)

## Design intent — required
Defines routing and behavioral evaluation test cases for the `source-driven-development` skill. It supplies 3 positive trigger prompts for source verification, 2 negative trigger prompts routed to other skills, and 1 execution evaluation specifying expectations for grounding framework code in documentation.

## Phase — required
addy:Build

## Inputs — required
Consumed by `scripts/run-evals.js` during Tier 2 (trigger routing) and Tier 3 (behavioral execution) evaluations. For execution evaluation id 1, loads fixture files from `evals/fixtures/source-driven-development`.

## Outputs — required
Evaluated by `scripts/run-evals.js` to produce eval score results and pass/fail grading reports recorded in `evals/results/`.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `source-driven-development` — evals/cases/source-driven-development.json:2 — used here
- `ci-cd-and-automation` — evals/cases/source-driven-development.json:21 — used here
- `planning-and-task-breakdown` — evals/cases/source-driven-development.json:25 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains 3 positive triggers and 2 negative triggers with `owner` attributes, satisfying the minimum eval case requirements defined in `evals/README.md`.

## Context cost
1,287 bytes (~322 tokens). Loads no external files directly.
