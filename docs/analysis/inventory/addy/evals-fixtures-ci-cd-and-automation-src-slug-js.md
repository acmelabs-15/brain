---
package: addy
path: evals/fixtures/ci-cd-and-automation/src/slug.js
type: file
bytes: 93
unit: inv-addy-2
---

# evals/fixtures/ci-cd-and-automation/src/slug.js

## Purpose — required, verbatim
> "exports.slugify = (value) => value.trim().toLowerCase().replace(/\\s+/g, '-');" — evals/fixtures/ci-cd-and-automation/src/slug.js:3 (no explicit purpose statement)

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
- file `evals/fixtures/ci-cd-and-automation/test/slug.test.js` — evals/fixtures/ci-cd-and-automation/test/slug.test.js:5
- config `evals/fixtures/ci-cd-and-automation/package.json` — evals/fixtures/ci-cd-and-automation/package.json:5
- config `evals/cases/ci-cd-and-automation.json` — evals/cases/ci-cd-and-automation.json:35
- script `scripts/run-evals.js` — scripts/run-evals.js:394

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
