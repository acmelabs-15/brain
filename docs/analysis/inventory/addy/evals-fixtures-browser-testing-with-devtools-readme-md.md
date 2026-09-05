---
package: addy
path: evals/fixtures/browser-testing-with-devtools/README.md
type: doc
bytes: 186
unit: inv-addy-8
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/README.md, sha256: 62cef5542b63ce4fbd36230bf56d5ce96a641858e153d577124fca0991adae76}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/fixtures/browser-testing-with-devtools/README.md

## Purpose — required, verbatim
> "Run `node server.js`, open `http://127.0.0.1:4173`, enter an email, and submit the form. The report should be based on runtime console, network, and DOM evidence." — evals/fixtures/browser-testing-with-devtools/README.md:3-5
(no explicit purpose statement)

## Design intent — required
Documents step-by-step reproduction and verification instructions for the `browser-testing-with-devtools` fixture. It instructs the evaluator or agent to start the local test server, load the test page, submit the form, and synthesize a diagnostic report based on runtime browser evidence across console, network, and DOM inspections.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- script server.js — evals/fixtures/browser-testing-with-devtools/README.md:3

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Signup reproduction` — evals/fixtures/browser-testing-with-devtools/README.md:1 — defined here
- `node server.js` — evals/fixtures/browser-testing-with-devtools/README.md:3 — used here

## Structure
- `# Signup reproduction` — evals/fixtures/browser-testing-with-devtools/README.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Concise instructions directing the agent to ground all conclusions in runtime evidence rather than static code inspection alone: `"The report should be based on runtime console, network, and DOM evidence."` (evals/fixtures/browser-testing-with-devtools/README.md:4-5).

## Context cost
186 bytes, ~47 tokens.
