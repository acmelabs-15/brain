---
package: addy
path: evals/cases/interview-me.json
type: config
bytes: 1197
unit: inv-addy-1
---

# evals/cases/interview-me.json

## Purpose — required, verbatim
> "I want 'a better admin page'. Interview me before proposing anything." — evals/cases/interview-me.json:33 (no explicit purpose statement)

## Design intent — required
Defines routing triggers and dialogue evaluation rubric expectations for the `interview-me` requirements-discovery skill. Solves the problem of verifying interactive requirements gathering by testing whether user requests for interviews, grilling on fuzzy requirements, and one-question-at-a-time probing route to the skill (top_k <= 3) while test execution and staging deployments route to designated owners. Validates conversational quality on asking questions strictly one at a time without batching, refraining from premature solutioning, and identifying the root objective underlying vague requests.

## Phase — required
none

## Inputs — required
- Positive trigger prompts — `evals/cases/interview-me.json:6,10,14`
- Negative trigger prompts with owners — `evals/cases/interview-me.json:20,24`
- Dialogue evaluation prompt — `evals/cases/interview-me.json:33`

## Outputs — required
- Evaluation routing ranking score and multi-turn dialogue transcript grading result evaluated by `scripts/run-evals.js` against expectations (`evals/cases/interview-me.json:36-38`)

## Invokes — required
- skill `test-driven-development` — evals/cases/interview-me.json:21
- skill `shipping-and-launch` — evals/cases/interview-me.json:25
- skill `interview-me` — evals/cases/interview-me.json:2

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `interview-me` — evals/cases/interview-me.json:2 — used here
- `top_k` — evals/cases/interview-me.json:7 — used here
- `test-driven-development` — evals/cases/interview-me.json:21 — used here
- `shipping-and-launch` — evals/cases/interview-me.json:25 — used here
- `dialogue` — evals/cases/interview-me.json:32 — used here
- `one-question-at-a-time` — evals/cases/interview-me.json:34 — used here
- `validated requirements` — evals/cases/interview-me.json:34 — used here

## Structure
- `skill_name` (line 2)
- `trigger` (lines 3-28)
  - `positive` (lines 4-17)
  - `negative` (lines 18-27)
- `evals` (lines 29-42)
  - `evals[0].id` (line 31)
  - `evals[0].kind` (line 32)
  - `evals[0].prompt` (line 33)
  - `evals[0].expected_output` (line 34)
  - `evals[0].expectations` (lines 35-39)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures a dialogue-kind evaluation where the multi-turn conversational transcript is graded directly as the evaluation artifact without requiring on-disk workspace fixtures (`run-evals.js:241`).

## Context cost
1,197 bytes (approx. 299 tokens).
