---
package: addy
path: evals/cases/deprecation-and-migration.json
type: config
bytes: 1257
unit: inv-addy-1
---

# evals/cases/deprecation-and-migration.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"deprecation-and-migration\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"We are sunsetting the v1 API, plan the deprecation\",\n        \"top_k\": 3\n      }," — evals/cases/deprecation-and-migration.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the `deprecation-and-migration` skill. It tests positive trigger routing for API sunsetting, auth migrations, and old feature removal; ensures negative routing away from UI features and flaky CI diagnostics; and evaluates the generation of a staged deprecation plan requiring advance consumer communications, a compatibility window with active telemetry, and removal gated on measured adoption rather than arbitrary calendar dates against fixture `evals/fixtures/deprecation-and-migration/api-inventory.md`.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"We are sunsetting the v1 API, plan the deprecation"` — evals/cases/deprecation-and-migration.json:6
  - `"Migrate users off the legacy auth system without breaking them"` — evals/cases/deprecation-and-migration.json:10
  - `"How do I remove this old feature safely for existing users?"` — evals/cases/deprecation-and-migration.json:14
  - `"Add dark mode to the settings page"` — evals/cases/deprecation-and-migration.json:20
  - `"Why is this test flaky on CI?"` — evals/cases/deprecation-and-migration.json:23
- Behavioral eval prompt: `"Plan the deprecation of a public v1 REST API with 200 external consumers, replaced by v2."` — evals/cases/deprecation-and-migration.json:31
- Fixture files in `evals/fixtures/deprecation-and-migration/` (`api-inventory.md`) — evals/cases/deprecation-and-migration.json:34

## Outputs — required
- Behavioral evaluation grading result: `evals/results/deprecation-and-migration.eval-1.grading.json` (produced by `scripts/run-evals.js` when executed under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `deprecation-and-migration` — evals/cases/deprecation-and-migration.json:2
- skill `ci-cd-and-automation` — evals/cases/deprecation-and-migration.json:24
- fixture `deprecation-and-migration` — evals/cases/deprecation-and-migration.json:34

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `deprecation-and-migration` — evals/cases/deprecation-and-migration.json:2 — used here
- `sunsetting` — evals/cases/deprecation-and-migration.json:6 — used here
- `migration` — evals/cases/deprecation-and-migration.json:10 — used here
- `ci-cd-and-automation` — evals/cases/deprecation-and-migration.json:24 — used here
- `staged deprecation plan` — evals/cases/deprecation-and-migration.json:32 — used here
- `compatibility window` — evals/cases/deprecation-and-migration.json:32, 38 — used here
- `removal criteria` — evals/cases/deprecation-and-migration.json:32 — used here
- `migration window` — evals/cases/deprecation-and-migration.json:38 — used here

## Structure
- `skill_name` — line 2
- `trigger` — line 3
  - `positive` — line 4
  - `negative` — line 18
- `evals` — line 28
  - `id: 1` — line 29

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The eval rubric enforces a core lifecycle rule: feature/API removal must be gated on measured migration/adoption telemetry rather than arbitrary calendar dates alone. Fixture `api-inventory.md` is 504 bytes.

## Context cost
1,257 bytes (~315 tokens) file size. When loaded with fixture `evals/fixtures/deprecation-and-migration/api-inventory.md` (504 bytes), total context cost is 1,761 bytes (~440 tokens).
