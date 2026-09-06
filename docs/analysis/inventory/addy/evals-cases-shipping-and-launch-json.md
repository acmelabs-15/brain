---
package: addy
path: evals/cases/shipping-and-launch.json
type: config
bytes: 1816
unit: inv-addy-7
aliases: []
memo_inputs:
  - {path: evals/cases/shipping-and-launch.json, sha256: 951445b40249b014e0daab37343fdbd18e9bc54fd3b0b8f30d7260fda6931436}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/shipping-and-launch.json

## Purpose — required, verbatim
> "skill_name": "shipping-and-launch" — evals/cases/shipping-and-launch.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and execution evaluations for the `shipping-and-launch` skill in the Addy eval harness. Specifies 3 positive trigger prompts for pre-launch checklists, deployment prerequisites, and rollback planning (top_k=3), 2 negative prompts (routing to `idea-refine` and an unrouted performance distractor), and 2 execution evaluations: one testing standard go/no-go assessments with explicit rollback plans and monitoring verification, and one testing behavioral resistance to executive authority pressure when critical launch gates have failed.

## Phase — required
none

## Inputs — required
User prompts requesting pre-launch assessments or release decisions, and test fixture directory `evals/fixtures/shipping-and-launch`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js` assessing pre-launch checklist gates, rollback plans, and go/no-go verdicts.

## Invokes — required
- skill shipping-and-launch — evals/cases/shipping-and-launch.json:2
- skill idea-refine — evals/cases/shipping-and-launch.json:21

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/shipping-and-launch.json:2 — used here
- `shipping-and-launch` — evals/cases/shipping-and-launch.json:2 — used here
- `trigger` — evals/cases/shipping-and-launch.json:3 — defined here
- `positive` — evals/cases/shipping-and-launch.json:4 — defined here
- `top_k` — evals/cases/shipping-and-launch.json:7 — defined here
- `negative` — evals/cases/shipping-and-launch.json:18 — defined here
- `owner` — evals/cases/shipping-and-launch.json:21 — defined here
- `evals` — evals/cases/shipping-and-launch.json:28 — defined here
- `expected_output` — evals/cases/shipping-and-launch.json:32 — defined here
- `expectations` — evals/cases/shipping-and-launch.json:36 — defined here
- `pre-launch checklist` — evals/cases/shipping-and-launch.json:6 — used here
- `rollback plan` — evals/cases/shipping-and-launch.json:14 — used here
- `go or no-go verdict` — evals/cases/shipping-and-launch.json:32 — used here
- `blockers` — evals/cases/shipping-and-launch.json:32 — used here
- `acknowledged risks` — evals/cases/shipping-and-launch.json:32 — used here
- `GO` — evals/cases/shipping-and-launch.json:44 — used here
- `no-go` — evals/cases/shipping-and-launch.json:45 — used here
- `test gates` — evals/cases/shipping-and-launch.json:45 — used here
- `Authority pressure` — evals/cases/shipping-and-launch.json:50 — used here
- `launch gates` — evals/cases/shipping-and-launch.json:50 — used here

## Structure
JSON top-level keys:
- skill_name
- trigger (positive, negative)
- evals (id, prompt, expected_output, files, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configures trigger classification tests (including negative trigger owner `idea-refine` at line 21) and 2 execution eval cases. Case 1 enforces the requirement for an explicit rollback plan, monitoring readiness, and a clear go/no-go verdict before shipping. Case 2 evaluates behavioral fortitude under adversarial authority pressure (executive sponsor insisting on a GO despite failed checks), asserting that the agent holds the line, treats failed E2E tests as blockers, and lays out a remediation path rather than yielding to pressure.

## Context cost
1,816 bytes (~450 tokens). Loads nothing directly.
