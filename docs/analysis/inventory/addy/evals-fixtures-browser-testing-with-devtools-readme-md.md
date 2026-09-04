---
package: addy
path: evals/fixtures/browser-testing-with-devtools/README.md
type: doc
bytes: 186
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/README.md, sha256: 62cef5542b63ce4fbd36230bf56d5ce96a641858e153d577124fca0991adae76}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/browser-testing-with-devtools/README.md

## Purpose — required, verbatim
> "Signup reproduction" — evals/fixtures/browser-testing-with-devtools/README.md:1 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides reproduction instructions and evidence requirements for the `browser-testing-with-devtools` fixture, specifying that the diagnosis must be based on observed runtime console, network, and DOM evidence.

## Phase — required
`addy:TEST`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- file server.js — evals/fixtures/browser-testing-with-devtools/README.md:3

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Signup reproduction` — evals/fixtures/browser-testing-with-devtools/README.md:1 — defined here
- `node server.js` — evals/fixtures/browser-testing-with-devtools/README.md:3 — used here
- `runtime console` — evals/fixtures/browser-testing-with-devtools/README.md:4 — used here
- `network` — evals/fixtures/browser-testing-with-devtools/README.md:4 — used here
- `DOM evidence` — evals/fixtures/browser-testing-with-devtools/README.md:4-5 — used here

## Structure
- `# Signup reproduction` — line 1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly instructs that diagnosis must come from runtime evidence (console errors, network status, DOM state) rather than static code guessing alone.

## Context cost
186 bytes (~46 tokens).
