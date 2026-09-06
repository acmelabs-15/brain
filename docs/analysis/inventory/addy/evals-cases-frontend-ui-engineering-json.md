---
package: addy
path: evals/cases/frontend-ui-engineering.json
type: config
bytes: 1430
unit: inv-addy-7
aliases: []
memo_inputs:
  - {path: evals/cases/frontend-ui-engineering.json, sha256: ae0d255641d13fe5c8d06b35a12bb388b76a24a4f2dc9d6d801d359753b28f40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/cases/frontend-ui-engineering.json

## Purpose — required, verbatim
> "skill_name": "frontend-ui-engineering" — evals/cases/frontend-ui-engineering.json:2

(no explicit purpose statement)

## Design intent — required
Defines eval triggers and behavioral assertions for the `frontend-ui-engineering` skill in the Addy eval harness. Specifies 5 positive trigger prompts covering responsive design, WCAG compliance, accessible modal/dropdown components, and component state refactoring (with top_k thresholds 1 and 3), 2 negative prompts (routing to performance optimization, and a generic release tagging distractor), and 1 execution evaluation verifying that a design-system component implements keyboard interaction, focus management, semantic ARIA roles, and deliberate state management.

## Phase — required
none

## Inputs — required
User prompts requesting UI components, responsive layout, or accessibility, and test fixture directory `evals/fixtures/frontend-ui-engineering`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js` (trigger ranking scores and UI component accessibility/state assertions).

## Invokes — required
- skill frontend-ui-engineering — evals/cases/frontend-ui-engineering.json:2
- skill performance-optimization — evals/cases/frontend-ui-engineering.json:29

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/frontend-ui-engineering.json:2 — used here
- `frontend-ui-engineering` — evals/cases/frontend-ui-engineering.json:2 — used here
- `trigger` — evals/cases/frontend-ui-engineering.json:3 — defined here
- `positive` — evals/cases/frontend-ui-engineering.json:4 — defined here
- `top_k` — evals/cases/frontend-ui-engineering.json:7 — defined here
- `negative` — evals/cases/frontend-ui-engineering.json:26 — defined here
- `owner` — evals/cases/frontend-ui-engineering.json:29 — defined here
- `evals` — evals/cases/frontend-ui-engineering.json:36 — defined here
- `expected_output` — evals/cases/frontend-ui-engineering.json:40 — defined here
- `expectations` — evals/cases/frontend-ui-engineering.json:44 — defined here
- `WCAG compliant` — evals/cases/frontend-ui-engineering.json:6 — used here
- `focus management` — evals/cases/frontend-ui-engineering.json:45 — used here
- `ARIA roles` — evals/cases/frontend-ui-engineering.json:46 — used here
- `semantic elements` — evals/cases/frontend-ui-engineering.json:46 — used here

## Structure
JSON top-level keys:
- skill_name
- trigger (positive, negative)
- evals (id, prompt, expected_output, files, expectations)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines 5 positive triggers, including two with strict `top_k: 1` requirements (lines 7, 15: WCAG compliance and responsive pricing page). Features one negative trigger routing to `performance-optimization` (line 29) and one unrouted distractor (`Tag and publish the release`, line 32). Verifies UI component implementation against accessibility and state standards.

## Context cost
1,430 bytes (~360 tokens). Loads nothing directly.
