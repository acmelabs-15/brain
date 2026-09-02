---
package: addy
path: evals/cases/idea-refine.json
type: config
bytes: 1269
unit: inv-addy-1
---

# evals/cases/idea-refine.json

## Purpose — required, verbatim
> "Refine this vague idea: 'some kind of tool that helps teams share knowledge better'." — evals/cases/idea-refine.json:33 (no explicit purpose statement)

## Design intent — required
Defines routing triggers and dialogue evaluation rubrics for the `idea-refine` ideation skill within the evaluation test harness. Solves the problem of evaluating collaborative feature shaping and MVP scoping by testing whether rough ideas, onboarding plan stress-tests, and ideation requests trigger the skill (top_k <= 3) while CI fixes and vulnerability audits route to their respective owners. Evaluates conversational responses on asking sharpening questions before converging, explicitly surfacing hidden assumptions, generating an explicit "Not Doing" list alongside MVP scope in a one-pager, and providing critical pushback against weak aspects of ideas rather than sycophantic agreement.

## Phase — required
none

## Inputs — required
- Positive trigger prompts — `evals/cases/idea-refine.json:6,10,14`
- Negative trigger prompts with owners — `evals/cases/idea-refine.json:20,24`
- Dialogue evaluation prompt — `evals/cases/idea-refine.json:33`

## Outputs — required
- Evaluation routing ranking score and multi-turn dialogue transcript grading result evaluated by `scripts/run-evals.js` against expectations (`evals/cases/idea-refine.json:35-40`)

## Invokes — required
- skill `ci-cd-and-automation` — evals/cases/idea-refine.json:21
- skill `security-and-hardening` — evals/cases/idea-refine.json:25
- skill `idea-refine` — evals/cases/idea-refine.json:2

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `idea-refine` — evals/cases/idea-refine.json:2 — used here
- `top_k` — evals/cases/idea-refine.json:7 — used here
- `ci-cd-and-automation` — evals/cases/idea-refine.json:21 — used here
- `security-and-hardening` — evals/cases/idea-refine.json:25 — used here
- `dialogue` — evals/cases/idea-refine.json:32 — used here
- `sharpening questions` — evals/cases/idea-refine.json:34 — used here
- `one-pager` — evals/cases/idea-refine.json:34 — used here
- `MVP scope` — evals/cases/idea-refine.json:34 — used here
- `Not Doing list` — evals/cases/idea-refine.json:34 — used here

## Structure
- `skill_name` (line 2)
- `trigger` (lines 3-28)
  - `positive` (lines 4-17)
  - `negative` (lines 18-27)
- `evals` (lines 29-43)
  - `evals[0].id` (line 31)
  - `evals[0].kind` (line 32)
  - `evals[0].prompt` (line 33)
  - `evals[0].expected_output` (line 34)
  - `evals[0].expectations` (lines 35-40)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures a dialogue-kind evaluation where the multi-turn conversational transcript is graded directly as the evaluation artifact. Features explicit anti-sycophancy rubric expectations ("The agent pushes back on weak aspects instead of only agreeing").

## Context cost
1,269 bytes (approx. 317 tokens).
