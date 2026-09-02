---
package: addy
path: evals/cases/ci-cd-and-automation.json
type: config
bytes: 1349
unit: inv-addy-1
---

# evals/cases/ci-cd-and-automation.json

## Purpose — required, verbatim
> "Create a CI pipeline for a Node project: install, lint, test on every PR, and block merge on failure." — evals/cases/ci-cd-and-automation.json:32 (no explicit purpose statement)

## Design intent — required
Defines routing triggers and evaluation rubric expectations for the `ci-cd-and-automation` skill in the evaluation test harness. Solves the problem of ensuring engineering agents configure robust CI/CD automation and quality gates by testing whether requests for pipeline setup, manual approval gates, and PR quality automation trigger the skill (top_k <= 3) while function refactoring and logging instrumentation route away to their owners. Evaluates workflow implementations on PR triggering, blocking pipeline execution on quality gate failures, logical step ordering with sane caching, and strict prevention of hardcoded secrets.

## Phase — required
none

## Inputs — required
- Evaluation fixture directory `evals/fixtures/ci-cd-and-automation` — `evals/cases/ci-cd-and-automation.json:35`
- Positive trigger prompts — `evals/cases/ci-cd-and-automation.json:6,10,14`
- Negative trigger prompts with owners — `evals/cases/ci-cd-and-automation.json:20,24`
- Behavioral evaluation prompt — `evals/cases/ci-cd-and-automation.json:32`

## Outputs — required
- Evaluation routing ranking score and behavioral rubric grading result evaluated by `scripts/run-evals.js` against expectations (`evals/cases/ci-cd-and-automation.json:38-41`)

## Invokes — required
- fixture `evals/fixtures/ci-cd-and-automation` — evals/cases/ci-cd-and-automation.json:35
- skill `code-simplification` — evals/cases/ci-cd-and-automation.json:21
- skill `observability-and-instrumentation` — evals/cases/ci-cd-and-automation.json:25
- skill `ci-cd-and-automation` — evals/cases/ci-cd-and-automation.json:2

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `ci-cd-and-automation` — evals/cases/ci-cd-and-automation.json:2 — used here
- `top_k` — evals/cases/ci-cd-and-automation.json:7 — used here
- `code-simplification` — evals/cases/ci-cd-and-automation.json:21 — used here
- `observability-and-instrumentation` — evals/cases/ci-cd-and-automation.json:25 — used here
- `manual approval gate` — evals/cases/ci-cd-and-automation.json:10 — used here
- `quality gates` — evals/cases/ci-cd-and-automation.json:14 — used here

## Structure
- `skill_name` (line 2)
- `trigger` (lines 3-28)
  - `positive` (lines 4-17)
  - `negative` (lines 18-27)
- `evals` (lines 29-45)
  - `evals[0].id` (line 31)
  - `evals[0].prompt` (line 32)
  - `evals[0].expected_output` (line 33)
  - `evals[0].files` (lines 34-36)
  - `evals[0].expectations` (lines 37-42)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Standard execution evaluation case requiring fixture `evals/fixtures/ci-cd-and-automation`. Tests that quality gate failures properly block pipeline execution and prevents secret exposure in CI YAML.

## Context cost
1,349 bytes (approx. 337 tokens).
