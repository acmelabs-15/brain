---
package: addy
path: evals/fixtures/browser-testing-with-devtools/README.md
type: doc
bytes: 186
unit: inv-addy-8
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/README.md, sha256: 62cef5542b63ce4fbd36230bf56d5ce96a641858e153d577124fca0991adae76}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/browser-testing-with-devtools/README.md

## Purpose — required, verbatim
> "Signup reproduction" — evals/fixtures/browser-testing-with-devtools/README.md:1

## Design intent — required
Provides reproduction instructions for the `browser-testing-with-devtools` evaluation scenario. It directs the evaluator to start `server.js`, load the frontend in a browser, submit the form, and ground their findings in console, network, and DOM runtime evidence.

## Phase — required
addy:Verify

## Inputs — required
Read by the model during the evaluation run defined in `evals/cases/browser-testing-with-devtools.json`.

## Outputs — required
none

## Invokes — required
- file server.js — evals/fixtures/browser-testing-with-devtools/README.md:3

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Signup reproduction` — evals/fixtures/browser-testing-with-devtools/README.md:1 — defined here
- `DOM` — evals/fixtures/browser-testing-with-devtools/README.md:4 — used here

## Structure
- `# Signup reproduction` — evals/fixtures/browser-testing-with-devtools/README.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Concise instructions mandating runtime evidence collection over static code inspection.

## Context cost
186 bytes (~47 tokens). Loads no external files directly.
