---
package: addy
path: evals/cases/code-review-and-quality.json
type: config
bytes: 1374
unit: inv-addy-1
---

# evals/cases/code-review-and-quality.json

## Purpose — required, verbatim
> "Review the provided diff that adds a user-search endpoint. Deliver a structured review." — evals/cases/code-review-and-quality.json:32 (no explicit purpose statement)

## Design intent — required
Defines routing triggers and evaluation rubric expectations to benchmark the `code-review-and-quality` skill within Addy's skill evaluation harness. Solves the problem of verifying skill retrieval accuracy and output quality by testing whether pull request and code review prompts correctly route to the skill (top_k <= 3) while deployment and TDD prompts are rejected to designated owners, and scoring generated reviews against multi-axis coverage (correctness, readability, architecture, security, performance), taxonomy severity labeling, security of user inputs, and prioritization of high-leverage findings.

## Phase — required
none

## Inputs — required
- Evaluation fixture directory `evals/fixtures/code-review-and-quality` — `evals/cases/code-review-and-quality.json:35`
- Positive trigger prompts — `evals/cases/code-review-and-quality.json:6,10,14`
- Negative trigger prompts with owners — `evals/cases/code-review-and-quality.json:20,24`
- Behavioral evaluation prompt — `evals/cases/code-review-and-quality.json:32`

## Outputs — required
- Evaluation routing ranking score and behavioral rubric grading result evaluated by `scripts/run-evals.js` against expectations (`evals/cases/code-review-and-quality.json:38-41`)

## Invokes — required
- fixture `evals/fixtures/code-review-and-quality` — evals/cases/code-review-and-quality.json:35
- skill `shipping-and-launch` — evals/cases/code-review-and-quality.json:21
- skill `test-driven-development` — evals/cases/code-review-and-quality.json:25
- skill `code-review-and-quality` — evals/cases/code-review-and-quality.json:2

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `code-review-and-quality` — evals/cases/code-review-and-quality.json:2 — used here
- `top_k` — evals/cases/code-review-and-quality.json:7 — used here
- `shipping-and-launch` — evals/cases/code-review-and-quality.json:21 — used here
- `test-driven-development` — evals/cases/code-review-and-quality.json:25 — used here
- `correctness` — evals/cases/code-review-and-quality.json:38 — used here
- `readability` — evals/cases/code-review-and-quality.json:38 — used here
- `architecture` — evals/cases/code-review-and-quality.json:38 — used here
- `security` — evals/cases/code-review-and-quality.json:38 — used here
- `performance` — evals/cases/code-review-and-quality.json:38 — used here
- `severity-labelled findings` — evals/cases/code-review-and-quality.json:33 — used here
- `high-leverage findings` — evals/cases/code-review-and-quality.json:41 — used here

## Structure
- `skill_name` (line 2)
- `trigger` (lines 3-28)
  - `positive` (lines 4-17)
  - `negative` (lines 18-27)
- `evals` (lines 29-44)
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
Standard execution evaluation case requiring fixture `evals/fixtures/code-review-and-quality`. Enforces 5-axis code review methodology and taxonomy-based severity labeling.

## Context cost
1,374 bytes (approx. 345 tokens).
