---
package: addy
path: evals/cases/source-driven-development.json
type: config
bytes: 1287
unit: inv-addy-6
memo_inputs:
  - {path: evals/cases/source-driven-development.json, sha256: df9c000800d1c7e3f46012ee7b6de07b67d1af8e98917921130cc3accc072464}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/source-driven-development.json

## Purpose — required, verbatim
> "Implement session handling with the framework's recommended approach, citing sources." — evals/cases/source-driven-development.json:32 (no explicit purpose statement)

## Design intent — required
Defines routing triggers and evaluation rubric expectations for the `source-driven-development` skill within Addy's skill evaluation harness. Solves the problem of ensuring engineering agents ground implementation details and architectural choices in official documentation rather than unverified training assumptions or hallucinated APIs. Evaluates whether documentation verification and source-cited code requests trigger the skill (top_k <= 3) while routing CI/CD fixes and task breakdown away to their owner skills, and scores generated implementations on citing official documentation, explicitly flagging unverified assumptions, and avoiding deprecated patterns.

## Phase — required
none

## Inputs — required
- Evaluation fixture directory `source-driven-development` referenced in `files` list (evals/cases/source-driven-development.json:35)
- Positive trigger prompts on framework docs verification and source-cited code (evals/cases/source-driven-development.json:6, 10, 14)
- Negative trigger prompts routing to `ci-cd-and-automation` and `planning-and-task-breakdown` (evals/cases/source-driven-development.json:20, 24)
- Behavioral evaluation prompt on implementing session handling with documentation citations (evals/cases/source-driven-development.json:32)

## Outputs — required
- Evaluation routing ranking score and behavioral rubric grading result evaluated by `scripts/run-evals.js` against expectations (evals/cases/source-driven-development.json:38-40)

## Invokes — required
- skill ci-cd-and-automation — evals/cases/source-driven-development.json:21
- skill planning-and-task-breakdown — evals/cases/source-driven-development.json:25
- file source-driven-development — evals/cases/source-driven-development.json:35

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `source-driven-development` — evals/cases/source-driven-development.json:2 — used here
- `top_k` — evals/cases/source-driven-development.json:7 — used here
- `ci-cd-and-automation` — evals/cases/source-driven-development.json:21 — used here
- `planning-and-task-breakdown` — evals/cases/source-driven-development.json:25 — used here
- `source-cited code` — evals/cases/source-driven-development.json:10 — used here
- `official documentation` — evals/cases/source-driven-development.json:38 — used here
- `unverified assumptions` — evals/cases/source-driven-development.json:39 — used here
- `deprecated patterns` — evals/cases/source-driven-development.json:40 — used here

## Structure
- `skill_name` (line 2)
- `trigger` (lines 3-28)
  - `positive` (lines 4-17)
  - `negative` (lines 18-27)
- `evals` (lines 29-43)
  - `evals[0].id` (line 31)
  - `evals[0].prompt` (line 32)
  - `evals[0].expected_output` (line 33)
  - `evals[0].files` (lines 34-36)
  - `evals[0].expectations` (lines 37-41)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Standard execution evaluation case requiring fixture `evals/fixtures/source-driven-development`. Enforces epistemic humility by requiring unverified assumptions to be explicitly flagged.

## Context cost
1287 bytes (~322 tokens).
