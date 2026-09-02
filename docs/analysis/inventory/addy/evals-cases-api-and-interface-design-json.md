---
package: addy
path: evals/cases/api-and-interface-design.json
type: config
bytes: 1494
unit: inv-addy-1
---

# evals/cases/api-and-interface-design.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"api-and-interface-design\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"Design a REST endpoint for creating invoices, including error responses and versioning\",\n        \"top_k\": 3\n      }," — evals/cases/api-and-interface-design.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the `api-and-interface-design` skill. It verifies routing on REST design, public module interfaces, and service contracts; ensures negative routing to `debugging-and-error-recovery` and `frontend-ui-engineering`; and grades endpoint contract generation for a URL shortener service requiring uniform error shapes with status codes, boundary input validation for URLs, compatibility/versioning strategies, and strict adherence to stated requirements without hallucinated extras against fixture `evals/fixtures/api-and-interface-design/service-brief.md`.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"Design a REST endpoint for creating invoices, including error responses and versioning"` — evals/cases/api-and-interface-design.json:6
  - `"What should the public interface of this payments module expose to other teams?"` — evals/cases/api-and-interface-design.json:10
  - `"Help me define the contract between the frontend and the orders service"` — evals/cases/api-and-interface-design.json:14
  - `"My unit test is failing with a null pointer exception"` — evals/cases/api-and-interface-design.json:20
  - `"Make this landing page responsive on mobile"` — evals/cases/api-and-interface-design.json:24
- Behavioral eval prompt: `"Design the public API for a URL-shortening service: create, resolve, stats. Produce the endpoint contracts."` — evals/cases/api-and-interface-design.json:32
- Fixture files in `evals/fixtures/api-and-interface-design/` (`service-brief.md`) — evals/cases/api-and-interface-design.json:35

## Outputs — required
- Behavioral evaluation grading result: `evals/results/api-and-interface-design.eval-1.grading.json` (produced by `scripts/run-evals.js` when executed under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `api-and-interface-design` — evals/cases/api-and-interface-design.json:2
- skill `debugging-and-error-recovery` — evals/cases/api-and-interface-design.json:21
- skill `frontend-ui-engineering` — evals/cases/api-and-interface-design.json:25
- fixture `api-and-interface-design` — evals/cases/api-and-interface-design.json:35

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `api-and-interface-design` — evals/cases/api-and-interface-design.json:2 — used here
- `REST endpoint` — evals/cases/api-and-interface-design.json:6 — used here
- `error responses` — evals/cases/api-and-interface-design.json:6, 38 — used here
- `versioning` — evals/cases/api-and-interface-design.json:6, 40 — used here
- `public interface` — evals/cases/api-and-interface-design.json:10 — used here
- `contract` — evals/cases/api-and-interface-design.json:14 — used here
- `debugging-and-error-recovery` — evals/cases/api-and-interface-design.json:21 — used here
- `frontend-ui-engineering` — evals/cases/api-and-interface-design.json:25 — used here
- `endpoint contracts` — evals/cases/api-and-interface-design.json:33 — used here
- `error shape` — evals/cases/api-and-interface-design.json:38 — used here
- `input validation` — evals/cases/api-and-interface-design.json:39 — used here
- `compatibility strategy` — evals/cases/api-and-interface-design.json:40 — used here

## Structure
- `skill_name` — line 2
- `trigger` — line 3
  - `positive` — line 4
  - `negative` — line 18
- `evals` — line 29
  - `id: 1` — line 30

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The eval expectations require input validation at trust boundaries, explicit error models (status codes and consistent body envelopes) rather than happy-path-only design, and explicitly penalize inventing unstated requirements beyond the provided service brief (`evals/fixtures/api-and-interface-design/service-brief.md`, 693 bytes).

## Context cost
1,494 bytes (~375 tokens) file size. When loaded with fixture `evals/fixtures/api-and-interface-design/service-brief.md` (693 bytes), total context cost is 2,187 bytes (~550 tokens).
