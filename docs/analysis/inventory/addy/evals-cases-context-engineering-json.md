---
package: addy
path: evals/cases/context-engineering.json
type: config
bytes: 1390
unit: inv-addy-1
---

# evals/cases/context-engineering.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"context-engineering\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"What context should I load into the agent before starting this refactor?\",\n        \"top_k\": 3\n      }," — evals/cases/context-engineering.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the `context-engineering` skill. It checks positive routing for agent context loading, quality degradation fixes, and rules files/packing setup; ensures negative routing to `test-driven-development` and `security-and-hardening`; and validates that the agent correctly diagnoses session degradation causes (context pollution, forgetting) and produces a concrete, task-scoped context loading plan against fixture `evals/fixtures/context-engineering/context-audit.md`.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"What context should I load into the agent before starting this refactor?"` — evals/cases/context-engineering.json:6
  - `"The model's output quality dropped mid-session, how do I fix its context?"` — evals/cases/context-engineering.json:10
  - `"Set up rules files and context packing for my repository"` — evals/cases/context-engineering.json:14
  - `"Write unit tests for the date parser"` — evals/cases/context-engineering.json:20
  - `"Harden this endpoint against SQL injection"` — evals/cases/context-engineering.json:24
- Behavioral eval prompt: `"An agent session has degraded: responses are generic and it keeps forgetting project conventions. Fix the context setup."` — evals/cases/context-engineering.json:32
- Fixture files in `evals/fixtures/context-engineering/` (`context-audit.md`) — evals/cases/context-engineering.json:35

## Outputs — required
- Behavioral evaluation grading result: `evals/results/context-engineering.eval-1.grading.json` (produced by `scripts/run-evals.js` when executed under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `context-engineering` — evals/cases/context-engineering.json:2
- skill `test-driven-development` — evals/cases/context-engineering.json:21
- skill `security-and-hardening` — evals/cases/context-engineering.json:25
- fixture `context-engineering` — evals/cases/context-engineering.json:35

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `context-engineering` — evals/cases/context-engineering.json:2 — used here
- `rules files` — evals/cases/context-engineering.json:14 — used here
- `context packing` — evals/cases/context-engineering.json:14 — used here
- `test-driven-development` — evals/cases/context-engineering.json:21 — used here
- `security-and-hardening` — evals/cases/context-engineering.json:25 — used here
- `task-scoped context` — evals/cases/context-engineering.json:33, 40 — used here

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
The test suite explicitly enforces that agents avoid indiscriminate full-repo context dumping, diagnosing context degradation causes specifically and producing a structured loading strategy (rules files, context packing, and scoping context strictly to the active task).

## Context cost
1,390 bytes (~350 tokens) file size. When loaded with fixture `evals/fixtures/context-engineering/context-audit.md` (653 bytes), total context cost is 2,043 bytes (~510 tokens).
