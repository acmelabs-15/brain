---
package: addy
path: evals/cases/using-agent-skills.json
type: config
bytes: 1218
unit: inv-addy-2
---

# evals/cases/using-agent-skills.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"using-agent-skills\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"Which skill should I use for this task?\",\n        \"top_k\": 3\n      }," — evals/cases/using-agent-skills.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the meta-skill `using-agent-skills`. It evaluates routing accuracy on meta-routing prompts (determining which skill or workflow applies to a piece of work, routing requests across the skill pack); tests negative routing against `debugging-and-error-recovery` and accessibility/UI prompts; and evaluates the behavioral decision tree of the meta-skill against an incident scenario (`evals/fixtures/using-agent-skills/incident.md`) to verify that the agent navigates the meta-skill's routing tree systematically, provides concrete rationale from routing logic rather than heuristic guessing, and surfaces underlying assumptions according to core operating behaviors.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"Which skill should I use for this task?"` — evals/cases/using-agent-skills.json:6
  - `"How do I decide which workflow applies to this piece of work?"` — evals/cases/using-agent-skills.json:10
  - `"Route this request to the right skill in the pack"` — evals/cases/using-agent-skills.json:14
  - `"Debug the null pointer crash in checkout"` — evals/cases/using-agent-skills.json:20
  - `"Make the modal accessible for keyboard users"` — evals/cases/using-agent-skills.json:24
- Behavioral eval prompt: `"A user asks: 'the login page is broken after yesterday's deploy'. Decide which skill applies and why."` — evals/cases/using-agent-skills.json:31
- Fixture directory in `evals/fixtures/using-agent-skills/` (`incident.md`) — evals/cases/using-agent-skills.json:34

## Outputs — required
- Behavioral evaluation grading result: `evals/results/using-agent-skills.eval-1.grading.json` (produced by `scripts/run-evals.js` under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `using-agent-skills` — evals/cases/using-agent-skills.json:2
- skill `debugging-and-error-recovery` — evals/cases/using-agent-skills.json:21
- fixture `using-agent-skills` — evals/cases/using-agent-skills.json:34

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `using-agent-skills` — evals/cases/using-agent-skills.json:2 — used here
- `debugging-and-error-recovery` — evals/cases/using-agent-skills.json:21 — used here
- `decision tree` — evals/cases/using-agent-skills.json:32, 37 — used here
- `meta-skill` — evals/cases/using-agent-skills.json:37 — used here
- `routing logic` — evals/cases/using-agent-skills.json:38 — used here
- `core operating behaviors` — evals/cases/using-agent-skills.json:39 — used here

## Structure
- `skill_name` — line 2
- `trigger` — line 3
  - `positive` — line 4
  - `negative` — line 18
- `evals` — line 28
  - `id: 1` — line 30

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Evaluates the pack's dispatch mechanism (`using-agent-skills`), testing whether the meta-skill correctly navigates its internal decision tree when presented with an ambiguous incident ("login page is broken after deploy"), requiring justification referencing routing rules and surfaced assumptions.

## Context cost
1,218 bytes (~305 tokens) file size. When loaded with fixture `evals/fixtures/using-agent-skills/incident.md` (321 bytes), total context cost is 1,539 bytes (~385 tokens).
