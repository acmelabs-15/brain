---
package: addy
path: evals/cases/test-driven-development.json
type: config
bytes: 3981
unit: inv-addy-1
---

# evals/cases/test-driven-development.json

## Purpose — required, verbatim
> "Finance filed the reconciliation bug written up in BUG.md. Fix it." — evals/cases/test-driven-development.json:32 (no explicit purpose statement)

## Design intent — required
Defines rigorous routing triggers and multi-scenario evaluation rubrics for the `test-driven-development` skill in the evaluation harness. Solves the problem of verifying whether agents strictly adhere to test-first methodology under realistic conditions, including standard bug reproduction (the Prove-It pattern), intense social/authority pressure (resisting a tech lead's demand to ship an unverified one-liner hotfix), and cross-ecosystem adaptability (identifying a Python/unittest repository and using native commands instead of Node tooling). Scores execution on showing a failing test before source code changes, satisfying fairness domain invariants across shares, and running native repository test suites.

## Phase — required
none

## Inputs — required
- Evaluation fixture directories:
  - `evals/fixtures/test-driven-development` — `evals/cases/test-driven-development.json:35,49`
  - `evals/fixtures/test-driven-development-ecosystem` — `evals/cases/test-driven-development.json:62`
- Bug report fixture `BUG.md` — `evals/cases/test-driven-development.json:32`
- Positive trigger prompts — `evals/cases/test-driven-development.json:6,10,14`
- Negative trigger prompts with owners — `evals/cases/test-driven-development.json:20,24`
- Behavioral evaluation prompts:
  - Scenario 1 (Lost-cent bug reproduction) — `evals/cases/test-driven-development.json:32`
  - Scenario 2 (Hotfix authority pressure) — `evals/cases/test-driven-development.json:46`
  - Scenario 3 (Ecosystem awareness & Python ledger) — `evals/cases/test-driven-development.json:59`

## Outputs — required
- Evaluation routing ranking score and behavioral rubric grading results across three test scenarios evaluated by `scripts/run-evals.js` against expectations (`evals/cases/test-driven-development.json:37-42, 51-55, 64-70`)

## Invokes — required
- fixture `evals/fixtures/test-driven-development` — evals/cases/test-driven-development.json:35
- fixture `evals/fixtures/test-driven-development-ecosystem` — evals/cases/test-driven-development.json:62
- skill `documentation-and-adrs` — evals/cases/test-driven-development.json:21
- skill `using-agent-skills` — evals/cases/test-driven-development.json:25
- skill `test-driven-development` — evals/cases/test-driven-development.json:2

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:38

## Concepts named — required, verbatim
- `test-driven-development` — evals/cases/test-driven-development.json:2 — used here
- `top_k` — evals/cases/test-driven-development.json:7 — used here
- `red-green-refactor` — evals/cases/test-driven-development.json:10 — used here
- `documentation-and-adrs` — evals/cases/test-driven-development.json:21 — used here
- `using-agent-skills` — evals/cases/test-driven-development.json:25 — used here
- `BUG.md` — evals/cases/test-driven-development.json:32 — used here
- `fairness invariant` — evals/cases/test-driven-development.json:33 — used here
- `splitCents` — evals/cases/test-driven-development.json:39 — used here
- `test-first` — evals/cases/test-driven-development.json:59 — used here

## Structure
- `skill_name` (line 2)
- `trigger` (lines 3-28)
  - `positive` (lines 4-17)
  - `negative` (lines 18-27)
- `evals` (lines 29-73)
  - `evals[0]` (id 1, lines 30-43)
  - `evals[1]` (id 2, lines 44-56)
  - `evals[2]` (id 3, lines 57-71)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains three distinct, high-leverage evaluation scenarios. Scenario 2 is a key adversarial pressure test (verifying that the agent resists explicit human authority pressure to skip test-first discipline), while Scenario 3 tests multi-language stack awareness.

## Context cost
3,981 bytes (approx. 995 tokens).
