---
package: addy
path: evals/cases/deprecation-and-migration.json
type: config
bytes: 1257
unit: inv-addy-6
aliases: []
memo_inputs:
  - {path: evals/cases/deprecation-and-migration.json, sha256: 9ee13965566161b30f3bf73f4d8d6f9e243f910f4d661d9f0835902714ecc6ec}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/deprecation-and-migration.json

## Purpose — required, verbatim
> "deprecation-and-migration" — evals/cases/deprecation-and-migration.json:2
*(no explicit purpose statement; JSON evaluation case configuration)*

## Design intent — required
Defines trigger routing benchmarks and behavioral evaluation expectations for the `deprecation-and-migration` skill within `scripts/run-evals.js`. It verifies positive intent mapping (sunsetting public APIs, legacy system migration without consumer breakage, and safe feature retirement), negative routing boundaries (directing flaky CI test diagnosis to `ci-cd-and-automation`), and execution quality. The execution eval requires staged deprecation plans featuring advance consumer communication timelines, compatibility windows with usage monitoring, and removal gated on measured adoption rather than calendar dates alone.

## Phase — required
addy:Ship

## Inputs — required
Target skill definition `skills/deprecation-and-migration/SKILL.md`, test prompts, and test fixture `evals/fixtures/deprecation-and-migration/`.

## Outputs — required
Routing rank metrics, cosine similarity scores, and execution verification reports produced by `scripts/run-evals.js`.

## Invokes — required
- skill deprecation-and-migration — evals/cases/deprecation-and-migration.json:2

## Invoked by — required
orphan

## Concepts named — required, verbatim
`skill_name` — evals/cases/deprecation-and-migration.json:2 — defined here
`trigger` — evals/cases/deprecation-and-migration.json:3 — defined here
`positive` — evals/cases/deprecation-and-migration.json:4 — defined here
`negative` — evals/cases/deprecation-and-migration.json:18 — defined here
`evals` — evals/cases/deprecation-and-migration.json:28 — defined here
`expected_output` — evals/cases/deprecation-and-migration.json:32 — defined here
`expectations` — evals/cases/deprecation-and-migration.json:36 — defined here

## Structure
- JSON object
- trigger (positive, negative)
- evals (id: 1, prompt, expected_output, files, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Negative triggers establish ownership boundaries with `ci-cd-and-automation` (line 24). Behavioral expectations enforce that final deprecation removal must be gated on measured metrics of remaining usage rather than calendar dates alone (line 39).

## Context cost
1257 bytes, ~314 tokens. Loads no external files.
