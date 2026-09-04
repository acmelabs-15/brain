---
package: addy
path: evals/cases/using-agent-skills.json
type: config
bytes: 1218
unit: inv-addy-6
memo_inputs:
  - {path: evals/cases/using-agent-skills.json, sha256: 19a914ca18cc5881fb1f89eb4e16b2ccdfb7cbd4e26db03f598a7819b3b80f2f}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/cases/using-agent-skills.json

## Purpose — required, verbatim
> "A user asks: 'the login page is broken after yesterday's deploy'. Decide which skill applies and why." — evals/cases/using-agent-skills.json:31 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the meta-skill `using-agent-skills`. It evaluates routing accuracy on meta-routing prompts (determining which skill or workflow applies to a piece of work, routing requests across the skill pack); tests negative routing against `debugging-and-error-recovery` and accessibility/UI prompts; and evaluates the behavioral decision tree of the meta-skill against an incident scenario (`evals/fixtures/using-agent-skills/incident.md`) to verify that the agent navigates the meta-skill's routing tree systematically, provides concrete rationale from routing logic rather than heuristic guessing, and surfaces underlying assumptions according to core operating behaviors.

## Phase — required
none

## Inputs — required
- User trigger queries for rank evaluation:
  - "Which skill should I use for this task?" — evals/cases/using-agent-skills.json:6
  - "How do I decide which workflow applies to this piece of work?" — evals/cases/using-agent-skills.json:10
  - "Route this request to the right skill in the pack" — evals/cases/using-agent-skills.json:14
  - "Debug the null pointer crash in checkout" — evals/cases/using-agent-skills.json:20
  - "Make the modal accessible for keyboard users" — evals/cases/using-agent-skills.json:24
- Behavioral eval prompt:
  - "A user asks: 'the login page is broken after yesterday's deploy'. Decide which skill applies and why." — evals/cases/using-agent-skills.json:31
- Fixture directory in `evals/fixtures/using-agent-skills/` (`incident.md`)

## Outputs — required
- Behavioral evaluation grading result: `evals/results/using-agent-skills.eval-1.grading.json` (produced by `scripts/run-evals.js` under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill using-agent-skills — evals/cases/using-agent-skills.json:2
- skill debugging-and-error-recovery — evals/cases/using-agent-skills.json:21
- file using-agent-skills — evals/cases/using-agent-skills.json:34

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `using-agent-skills` — evals/cases/using-agent-skills.json:2 — used here
- `top_k` — evals/cases/using-agent-skills.json:7 — used here
- `debugging-and-error-recovery` — evals/cases/using-agent-skills.json:21 — used here
- `decision tree` — evals/cases/using-agent-skills.json:32, 37 — used here
- `meta-skill` — evals/cases/using-agent-skills.json:37 — used here
- `routing logic` — evals/cases/using-agent-skills.json:38 — used here
- `core operating behaviors` — evals/cases/using-agent-skills.json:39 — used here

## Structure
- `skill_name` (line 2)
- `trigger` (lines 3-27)
  - `positive` (lines 4-17)
  - `negative` (lines 18-26)
- `evals` (lines 28-43)
  - `id: 1` (lines 29-42)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Evaluates the pack's dispatch mechanism (`using-agent-skills`), testing whether the meta-skill correctly navigates its internal decision tree when presented with an ambiguous incident ("login page is broken after deploy"), requiring justification referencing routing rules and surfaced assumptions.

## Context cost
1218 bytes (~305 tokens).
