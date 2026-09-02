---
package: addy
path: evals/cases/debugging-and-error-recovery.json
type: config
bytes: 2078
unit: inv-addy-2
---

# evals/cases/debugging-and-error-recovery.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"debugging-and-error-recovery\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"The app crashes with a TypeError when I click save, help me find the root cause\",\n        \"top_k\": 3\n      }," — evals/cases/debugging-and-error-recovery.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the `debugging-and-error-recovery` skill. It evaluates routing on runtime exceptions (TypeErrors), intermittent production 500 errors, and broken regression tests; routes negatively away from `documentation-and-adrs` and `code-simplification`; and grades two behavioral scenarios against fixture `evals/fixtures/debugging-and-error-recovery/`: (1) investigating an off-by-one pagination test failure requiring reproduction before patching, root cause identification, a regression test, and a minimal fix; and (2) handling urgent production pressure where stakeholder demands for speculative patches must not bypass reproduction, evidence gathering, cause localization, and regression testing.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"The app crashes with a TypeError when I click save, help me find the root cause"` — evals/cases/debugging-and-error-recovery.json:6
  - `"The API is throwing intermittent 500 errors in production, help me find the root cause"` — evals/cases/debugging-and-error-recovery.json:10
  - `"This test passed yesterday and fails today, figure out what broke"` — evals/cases/debugging-and-error-recovery.json:14
  - `"Write the API documentation for the orders service"` — evals/cases/debugging-and-error-recovery.json:20
  - `"Simplify this working function for readability"` — evals/cases/debugging-and-error-recovery.json:24
- Behavioral eval prompt 1: `"A test that passed yesterday now fails with an off-by-one error in pagination. Find and fix the root cause."` — evals/cases/debugging-and-error-recovery.json:32
- Behavioral eval prompt 2: `"Production checkout is failing and a stakeholder demands an immediate pagination patch without reproduction. Respond under time pressure."` — evals/cases/debugging-and-error-recovery.json:46
- Fixtures in `evals/fixtures/debugging-and-error-recovery/` (`pagination.js`, `pagination.test.js`, `time-pressure.md`) — evals/cases/debugging-and-error-recovery.json:35, 49

## Outputs — required
- Behavioral evaluation grading results: `evals/results/debugging-and-error-recovery.eval-1.grading.json`, `evals/results/debugging-and-error-recovery.eval-2.grading.json` (produced by `scripts/run-evals.js` under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `debugging-and-error-recovery` — evals/cases/debugging-and-error-recovery.json:2
- skill `documentation-and-adrs` — evals/cases/debugging-and-error-recovery.json:21
- skill `code-simplification` — evals/cases/debugging-and-error-recovery.json:25
- fixture `debugging-and-error-recovery` — evals/cases/debugging-and-error-recovery.json:35, 49

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `debugging-and-error-recovery` — evals/cases/debugging-and-error-recovery.json:2 — used here
- `root cause` — evals/cases/debugging-and-error-recovery.json:6, 10, 33, 39, 47 — used here
- `documentation-and-adrs` — evals/cases/debugging-and-error-recovery.json:21 — used here
- `code-simplification` — evals/cases/debugging-and-error-recovery.json:25 — used here
- `regression test` — evals/cases/debugging-and-error-recovery.json:40, 47, 54 — used here
- `reproduction` — evals/cases/debugging-and-error-recovery.json:46, 52 — used here
- `evidence gathering` — evals/cases/debugging-and-error-recovery.json:52 — used here
- `speculative patch` — evals/cases/debugging-and-error-recovery.json:53 — used here

## Structure
- `skill_name` — line 2
- `trigger` — line 3
  - `positive` — line 4
  - `negative` — line 18
- `evals` — line 29
  - `id: 1` — line 30
  - `id: 2` — line 44

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Features two behavioral evaluations. In particular, eval 2 specifically tests defense against urgency and authority pressure ("time pressure"), asserting that the agent must maintain disciplined investigation (reproduction and evidence gathering) rather than applying speculative patches demanded by stakeholders.

## Context cost
2,078 bytes (~520 tokens) file size. When loaded with fixtures (`pagination.js` 172 bytes, `pagination.test.js` 290 bytes, `time-pressure.md` 276 bytes, ~738 bytes total), total context cost is 2,816 bytes (~704 tokens).
