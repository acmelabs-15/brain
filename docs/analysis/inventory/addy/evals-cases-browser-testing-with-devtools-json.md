---
package: addy
path: evals/cases/browser-testing-with-devtools.json
type: config
bytes: 1455
unit: inv-addy-6
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/cases/browser-testing-with-devtools.json, sha256: 0d670cbe54814c4cc1dbc8eb8aa1d5233a2130493b85eb69488dd2e8e3c7f8bf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/cases/browser-testing-with-devtools.json

## Purpose — required, verbatim
> "skill_name": "browser-testing-with-devtools" — evals/cases/browser-testing-with-devtools.json:2

(no explicit purpose statement)

## Design intent — required
Defines routing and behavioral evaluation test cases for the `browser-testing-with-devtools` skill in the Addy eval harness. Specifies 3 positive trigger prompts for browser testing (checkout button failure, network inspection, form submission with localStorage verification), 2 negative prompts routing to spec-driven development and planning, and 1 execution evaluation verifying runtime browser investigation of an unresponsive form using browser console, network, and DOM observations.

## Phase — required
none

## Inputs — required
User prompts requesting browser inspection or automated testing, and fixture directory `evals/fixtures/browser-testing-with-devtools`.

## Outputs — required
Evaluation verdicts from `scripts/run-evals.js`.

## Invokes — required
- skill browser-testing-with-devtools — evals/cases/browser-testing-with-devtools.json:2
- skill spec-driven-development — evals/cases/browser-testing-with-devtools.json:21
- skill planning-and-task-breakdown — evals/cases/browser-testing-with-devtools.json:25

## Invoked by — required
orphan (loaded dynamically by eval runner scripts/run-evals.js based on skill name)

## Concepts named — required, verbatim
- `skill_name` — evals/cases/browser-testing-with-devtools.json:2 — used here
- `browser-testing-with-devtools` — evals/cases/browser-testing-with-devtools.json:2 — used here
- `trigger` — evals/cases/browser-testing-with-devtools.json:3 — defined here
- `positive` — evals/cases/browser-testing-with-devtools.json:4 — defined here
- `top_k` — evals/cases/browser-testing-with-devtools.json:7 — defined here
- `negative` — evals/cases/browser-testing-with-devtools.json:18 — defined here
- `owner` — evals/cases/browser-testing-with-devtools.json:21 — defined here
- `evals` — evals/cases/browser-testing-with-devtools.json:29 — defined here
- `expected_output` — evals/cases/browser-testing-with-devtools.json:33 — defined here
- `expectations` — evals/cases/browser-testing-with-devtools.json:37 — defined here

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
Explicitly tests that agent findings are grounded in observed runtime data (console, network, DOM) rather than static code reading alone, and requires distinguishing direct observations from inference.

## Context cost
1,455 bytes (~370 tokens). Loads nothing directly.
