---
package: addy
path: evals/cases/source-driven-development.json
type: config
bytes: 1287
unit: inv-addy-1
---

# evals/cases/source-driven-development.json

## Purpose — required, verbatim
> "Implement session handling with the framework's recommended approach, citing sources." — evals/cases/source-driven-development.json:32 (no explicit purpose statement)

## Design intent — required
Defines routing triggers and evaluation rubric expectations for the `source-driven-development` skill within Addy's skill evaluation harness. Solves the problem of ensuring engineering agents ground implementation details and architectural choices in official documentation rather than unverified training assumptions or hallucinated APIs. Evaluates whether documentation verification and source-cited code requests trigger the skill (top_k <= 3) while routing CI/CD fixes and task breakdown away to their owner skills, and scores generated implementations on citing official documentation, explicitly flagging unverified assumptions, and avoiding deprecated patterns.

## Phase — required
none

## Inputs — required
- Evaluation fixture directory `evals/fixtures/source-driven-development` — `evals/cases/source-driven-development.json:35`
- Positive trigger prompts — `evals/cases/source-driven-development.json:6,10,14`
- Negative trigger prompts with owners — `evals/cases/source-driven-development.json:20,24`
- Behavioral evaluation prompt — `evals/cases/source-driven-development.json:32`

## Outputs — required
- Evaluation routing ranking score and behavioral rubric grading result evaluated by `scripts/run-evals.js` against expectations (`evals/cases/source-driven-development.json:38-40`)

## Invokes — required
- fixture `evals/fixtures/source-driven-development` — evals/cases/source-driven-development.json:35
- skill `ci-cd-and-automation` — evals/cases/source-driven-development.json:21
- skill `planning-and-task-breakdown` — evals/cases/source-driven-development.json:25
- skill `source-driven-development` — evals/cases/source-driven-development.json:2

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:38

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
1,287 bytes (approx. 322 tokens).
