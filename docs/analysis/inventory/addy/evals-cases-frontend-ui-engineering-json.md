---
package: addy
path: evals/cases/frontend-ui-engineering.json
type: config
bytes: 1430
unit: inv-addy-7
deprecated: false
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/cases/frontend-ui-engineering.json, sha256: ae0d255641d13fe5c8d06b35a12bb388b76a24a4f2dc9d6d801d359753b28f40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/cases/frontend-ui-engineering.json

## Purpose — required, verbatim
> "frontend-ui-engineering" — evals/cases/frontend-ui-engineering.json:2 (no explicit purpose statement)

## Design intent — required
Defines test fixtures and trigger expectations for evaluating agent skill routing and behavioral adherence for `frontend-ui-engineering`. It tests positive trigger routing for component architecture, responsive layout, state management, and WCAG accessibility standards, negative routing to prevent confusion with backend database query optimization, and evaluates through an execution fixture that UI components implement deliberate state management, semantic ARIA elements, and keyboard/focus management.

## Phase — required
addy:Build

## Inputs — required
Evaluation test configurations comprising positive trigger prompts with top_k ranking thresholds (1 and 3), negative trigger prompts with target owner `performance-optimization`, and a behavioral eval scenario with prompt, expected output, fixture reference (`frontend-ui-engineering`), and assertion expectations.

## Outputs — required
Test case definitions consumed by `sources/addy/scripts/run-evals.js` for Tier 2 trigger ranking validation and Tier 3 behavioral grading against workspace execution traces.

## Invokes — required
- skill frontend-ui-engineering — evals/cases/frontend-ui-engineering.json:2
- skill performance-optimization — evals/cases/frontend-ui-engineering.json:29

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `WCAG` — evals/cases/frontend-ui-engineering.json:6 — used here
- `state management` — evals/cases/frontend-ui-engineering.json:18 — used here
- `focus management` — evals/cases/frontend-ui-engineering.json:45 — used here
- `ARIA` — evals/cases/frontend-ui-engineering.json:46 — used here

## Structure
JSON object defining:
- `skill_name`: target skill identifier string
- `trigger`: object containing `positive` and `negative` prompt arrays for trigger routing evaluation
- `evals`: array containing behavioral evaluation cases with `id`, `prompt`, `expected_output`, `files`, and `expectations`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The behavioral expectations explicitly test that accessibility (keyboard navigation and focus management) and semantic HTML/ARIA are genuinely implemented rather than creating mouse-only UI prototypes. Evaluated in CI via Tier 2 trigger tests (`bun sources/addy/scripts/run-evals.js`).

## Context cost
1430 bytes (approx. 358 tokens). Standalone config file loaded only during evaluation passes.
