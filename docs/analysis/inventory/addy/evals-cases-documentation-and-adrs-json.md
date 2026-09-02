---
package: addy
path: evals/cases/documentation-and-adrs.json
type: config
bytes: 1328
unit: inv-addy-1
---

# evals/cases/documentation-and-adrs.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"documentation-and-adrs\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"Write an ADR for choosing Postgres over MongoDB\",\n        \"top_k\": 3\n      }," — evals/cases/documentation-and-adrs.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the `documentation-and-adrs` skill. It verifies routing on queries about Architecture Decision Records (ADRs) and architectural documentation; negative routing to `debugging-and-error-recovery` and `security-and-hardening`; and evaluates the generation of a structured ADR for event sourcing capturing Context, Decision, Alternatives Considered, and Consequences with trade-offs and timeless language against fixture `evals/fixtures/documentation-and-adrs/decision-context.md`.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"Write an ADR for choosing Postgres over MongoDB"` — evals/cases/documentation-and-adrs.json:6
  - `"Document the architecture decision behind the queue design"` — evals/cases/documentation-and-adrs.json:10
  - `"Update the documentation for the new setup flow and record why it changed"` — evals/cases/documentation-and-adrs.json:14
  - `"Find the root cause of the memory leak in the worker"` — evals/cases/documentation-and-adrs.json:20
  - `"Harden the login endpoint against brute force attacks"` — evals/cases/documentation-and-adrs.json:24
- Behavioral eval prompt: `"Record the decision to adopt event sourcing for the orders service as an ADR."` — evals/cases/documentation-and-adrs.json:32
- Fixture files in `evals/fixtures/documentation-and-adrs/` (`decision-context.md`) — evals/cases/documentation-and-adrs.json:35

## Outputs — required
- Behavioral evaluation grading result: `evals/results/documentation-and-adrs.eval-1.grading.json` (produced by `scripts/run-evals.js` when executed under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `documentation-and-adrs` — evals/cases/documentation-and-adrs.json:2
- skill `debugging-and-error-recovery` — evals/cases/documentation-and-adrs.json:21
- skill `security-and-hardening` — evals/cases/documentation-and-adrs.json:25
- fixture `documentation-and-adrs` — evals/cases/documentation-and-adrs.json:35

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `documentation-and-adrs` — evals/cases/documentation-and-adrs.json:2 — used here
- `ADR` — evals/cases/documentation-and-adrs.json:6, 32, 33, 38 — used here
- `architecture decision` — evals/cases/documentation-and-adrs.json:10 — used here
- `debugging-and-error-recovery` — evals/cases/documentation-and-adrs.json:21 — used here
- `security-and-hardening` — evals/cases/documentation-and-adrs.json:25 — used here
- `event sourcing` — evals/cases/documentation-and-adrs.json:32 — used here
- `alternatives considered` — evals/cases/documentation-and-adrs.json:33, 38 — used here
- `consequences` — evals/cases/documentation-and-adrs.json:33, 38 — used here

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
The test assertions enforce standard ADR structural completeness (Context, Decision, Alternatives, Consequences), ensuring that trade-offs and rejected alternatives are explicitly recorded alongside the chosen architecture and written in timeless language. Fixture `decision-context.md` is 757 bytes.

## Context cost
1,328 bytes (~330 tokens) file size. When loaded with fixture `evals/fixtures/documentation-and-adrs/decision-context.md` (757 bytes), total context cost is 2,085 bytes (~520 tokens).
