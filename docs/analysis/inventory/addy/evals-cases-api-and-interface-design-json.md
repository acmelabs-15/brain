---
package: addy
path: evals/cases/api-and-interface-design.json
type: config
bytes: 1494
unit: inv-addy-6
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/cases/api-and-interface-design.json, sha256: b297745de905b4b40845551acb19c4f91e66141cb1231fda1b760f5abfb157a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/cases/api-and-interface-design.json

## Purpose — required, verbatim
> "api-and-interface-design" — evals/cases/api-and-interface-design.json:2
*(no explicit purpose statement; JSON evaluation case configuration)*

## Design intent — required
Defines the trigger routing benchmarks and behavioral evaluation expectations for the `api-and-interface-design` skill. Used by `scripts/run-evals.js`, it tests positive intent mapping (such as REST endpoint design, module boundaries, and frontend-backend contracts), negative triggering boundaries (preventing false activation on debugging or frontend tasks), and execution quality (checking error shape semantics, input boundary validation, and versioning). Without this file, automated testing cannot verify that the agent reliably activates and adheres to interface design standards.

## Phase — required
addy:Build

## Inputs — required
Evaluated skill definition `skills/api-and-interface-design/SKILL.md`, test prompts, and test fixture `evals/fixtures/api-and-interface-design/`.

## Outputs — required
Routing rank metrics, cosine similarity scores, and expectation verification verdicts produced by `scripts/run-evals.js`.

## Invokes — required
- skill api-and-interface-design — evals/cases/api-and-interface-design.json:2

## Invoked by — required
orphan

## Concepts named — required, verbatim
`skill_name` — evals/cases/api-and-interface-design.json:2 — defined here
`trigger` — evals/cases/api-and-interface-design.json:3 — defined here
`positive` — evals/cases/api-and-interface-design.json:4 — defined here
`negative` — evals/cases/api-and-interface-design.json:18 — defined here
`evals` — evals/cases/api-and-interface-design.json:29 — defined here
`expected_output` — evals/cases/api-and-interface-design.json:33 — defined here
`expectations` — evals/cases/api-and-interface-design.json:37 — defined here

## Structure
- JSON object
- trigger (positive, negative)
- evals (id: 1, prompt, expected_output, files, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines negative trigger ownership mapping routing prompts to `debugging-and-error-recovery` (line 21) and `frontend-ui-engineering` (line 25). The execution eval checks that error responses are explicit and consistent, rather than only testing happy paths.

## Context cost
1494 bytes, ~374 tokens. Loads no external files.
