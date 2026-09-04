---
package: addy
path: evals/fixtures/ci-cd-and-automation/src/slug.js
type: file
bytes: 93
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/src/slug.js, sha256: 595429bcb045f7ec9d41e40b4ed4102e07a57240e7f2c333eaa794e2a9465ade}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/ci-cd-and-automation/src/slug.js

## Purpose — required, verbatim
> "exports.slugify" — evals/fixtures/ci-cd-and-automation/src/slug.js:3 (no explicit purpose statement)

## Design intent — required
Provides a minimal string slugification utility function that trims, lowercases, and replaces whitespace with hyphens. Acts as the target source code for the CI/CD evaluation fixture to be linted, tested, and integrated into a CI pipeline.

## Phase — required
none

## Inputs — required
- String `value` — `evals/fixtures/ci-cd-and-automation/src/slug.js:3`

## Outputs — required
- Exports `slugify` function via CommonJS `exports` — `evals/fixtures/ci-cd-and-automation/src/slug.js:3`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `slugify` — evals/fixtures/ci-cd-and-automation/src/slug.js:3 — defined here

## Structure
- Strict mode (line 1)
- Exported arrow function `slugify` (line 3)

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/ci-cd-and-automation/src/slug.js`, language: JavaScript (Node/Bun), lines: 4
- documented invocation: `node --check src/slug.js` (`evals/fixtures/ci-cd-and-automation/package.json:5`)
- **executed:** yes
- actual command run: `node --check src/slug.js` (in `sources/addy/evals/fixtures/ci-cd-and-automation`)
- actual exit code: `0`, stdout: (empty)
- documented exit codes: none vs actual exit paths: default script completion (code 0)
- does the output match what the documentation claims?: yes, syntax is valid

## Defects — required
none

## Observations
Single-expression utility function in CommonJS format.

## Context cost
93 bytes (approx. 23 tokens).
