---
package: addy
path: evals/cases/doubt-driven-development.json
type: config
bytes: 1274
unit: inv-addy-1
---

# evals/cases/doubt-driven-development.json

## Purpose — required, verbatim
> "Before running an irreversible data migration, subject the migration plan to adversarial review." — evals/cases/doubt-driven-development.json:30 (no explicit purpose statement)

## Design intent — required
Defines routing triggers and evaluation rubric expectations for the `doubt-driven-development` adversarial review skill within the evaluation harness. Solves the problem of ensuring engineering agents subject high-risk, irreversible, or uncertain architectural decisions to skeptical cross-examination by testing whether requests to stress-test high-stakes migrations, cross-examine auth changes, or review low-confidence logic trigger the skill (top_k <= 3) while formatting and changelog drafting prompts are rejected. Evaluates adversarial reviews on extracting and challenging non-trivial claims individually, actively testing rather than assuming correctness for key assumptions, and delivering a crisp go/stop verdict that explicitly separates verified claims from surviving doubts.

## Phase — required
none

## Inputs — required
- Evaluation fixture directory `evals/fixtures/doubt-driven-development` — `evals/cases/doubt-driven-development.json:33`
- Positive trigger prompts — `evals/cases/doubt-driven-development.json:6,10,14`
- Negative trigger prompts — `evals/cases/doubt-driven-development.json:20,23`
- Behavioral evaluation prompt — `evals/cases/doubt-driven-development.json:30`

## Outputs — required
- Evaluation routing ranking score and behavioral rubric grading result evaluated by `scripts/run-evals.js` against expectations (`evals/cases/doubt-driven-development.json:35-39`)

## Invokes — required
- fixture `evals/fixtures/doubt-driven-development` — evals/cases/doubt-driven-development.json:33
- skill `doubt-driven-development` — evals/cases/doubt-driven-development.json:2

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `doubt-driven-development` — evals/cases/doubt-driven-development.json:2 — used here
- `top_k` — evals/cases/doubt-driven-development.json:7 — used here
- `adversarially review` — evals/cases/doubt-driven-development.json:10 — used here
- `adversarial review` — evals/cases/doubt-driven-development.json:30 — used here
- `irreversible data migration` — evals/cases/doubt-driven-development.json:30 — used here
- `go or stop verdict` — evals/cases/doubt-driven-development.json:31 — used here
- `surviving doubts` — evals/cases/doubt-driven-development.json:38 — used here

## Structure
- `skill_name` (line 2)
- `trigger` (lines 3-26)
  - `positive` (lines 4-17)
  - `negative` (lines 18-25)
- `evals` (lines 27-41)
  - `evals[0].id` (line 29)
  - `evals[0].prompt` (line 30)
  - `evals[0].expected_output` (line 31)
  - `evals[0].files` (lines 32-34)
  - `evals[0].expectations` (lines 35-39)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Standard execution evaluation case requiring fixture `evals/fixtures/doubt-driven-development`. Negative trigger prompts omit `owner` field, which is supported by the evaluation runner's optional owner-matching logic.

## Context cost
1,274 bytes (approx. 318 tokens).
