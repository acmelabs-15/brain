---
package: addy
path: evals/cases/using-agent-skills.json
type: config
bytes: 1218
unit: inv-addy-8
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/using-agent-skills.json, sha256: 19a914ca18cc5881fb1f89eb4e16b2ccdfb7cbd4e26db03f598a7819b3b80f2f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/using-agent-skills.json

## Purpose — required, verbatim
> "Correct routing through the decision tree with the chosen skill and rationale" — evals/cases/using-agent-skills.json:32
(no explicit purpose statement)

## Design intent — required
Defines routing and behavioral evaluation test cases for the meta-skill `using-agent-skills`. It specifies 3 positive trigger prompts for skill routing, 2 negative trigger prompts (one routed to `debugging-and-error-recovery` and one unassigned frontend accessibility prompt), and 1 execution eval testing decision-tree navigation and rationale generation when routing an incoming user issue.

## Phase — required
none

## Inputs — required
Consumed by `scripts/run-evals.js` during Tier 2 (trigger routing) and Tier 3 (behavioral execution) evaluations. For eval id 1, loads fixtures from `evals/fixtures/using-agent-skills`.

## Outputs — required
Evaluated by `scripts/run-evals.js` to produce eval score results and pass/fail grading reports recorded in `evals/results/`.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `using-agent-skills` — evals/cases/using-agent-skills.json:2 — used here
- `debugging-and-error-recovery` — evals/cases/using-agent-skills.json:21 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift: evals/cases/using-agent-skills.json:24 — Negative trigger "Make the modal accessible for keyboard users" omits the owner field (expected "frontend-ui-engineering"), unlike other negative trigger entries.

## Observations
The file evaluates meta-routing through the pack's decision tree rather than code generation in a specific development phase.

## Context cost
1,218 bytes (~305 tokens). Loads no external files directly.
