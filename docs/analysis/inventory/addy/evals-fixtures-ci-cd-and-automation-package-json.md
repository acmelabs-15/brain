---
package: addy
path: evals/fixtures/ci-cd-and-automation/package.json
type: config
bytes: 132
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/package.json, sha256: 9e9e19c20f0c6da962c516816d89bad3dc6492e5b5a9c1051bfa8fe9d5b28be5}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/ci-cd-and-automation/package.json

## Purpose — required, verbatim
> "\"name\": \"ci-fixture\"," — evals/fixtures/ci-cd-and-automation/package.json:2 (no explicit purpose statement)

## Design intent — required
Defines project metadata and npm scripts (`lint` via `node --check` and `test` via `node --test`) for the CI fixture repository. Solves the problem of providing a minimal runnable Node project baseline that an agent can analyze to configure a CI/CD pipeline.

## Phase — required
none

## Inputs — required
none

## Outputs — required
- Configures npm scripts lint and test (evals/fixtures/ci-cd-and-automation/package.json:5-6)

## Invokes — required
- file src/slug.js — evals/fixtures/ci-cd-and-automation/package.json:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ci-fixture` — evals/fixtures/ci-cd-and-automation/package.json:2 — defined here
- `lint` — evals/fixtures/ci-cd-and-automation/package.json:5 — defined here
- `test` — evals/fixtures/ci-cd-and-automation/package.json:6 — defined here

## Structure
- JSON configuration object (lines 1-8)
  - `name`, `private` (lines 2-3)
  - `scripts` (lines 4-7)

## Scripts — required if type is script or the skill ships scripts
- path: `lint: node --check src/slug.js`, language: shell/Node, lines: 1
  - documented invocation: `npm run lint` (`evals/fixtures/ci-cd-and-automation/package.json:5`)
  - **executed:** yes
  - actual command run: `node --check src/slug.js` (in `sources/addy/evals/fixtures/ci-cd-and-automation`)
  - actual exit code: `0`, stdout: (empty)
  - documented exit codes: none vs actual exit paths: code 0 on clean syntax validation
  - does the output match what the documentation claims?: yes, checks syntax without error
- path: `test: node --test`, language: shell/Node, lines: 1
  - documented invocation: `npm test` (`evals/fixtures/ci-cd-and-automation/package.json:6`)
  - **executed:** yes
  - actual command run: `node --test` (in `sources/addy/evals/fixtures/ci-cd-and-automation`)
  - actual exit code: `0`, stdout: `✔ slugifies a title (0.40225ms)`
  - documented exit codes: none vs actual exit paths: code 0 on test pass
  - does the output match what the documentation claims?: yes, executes node:test suite and reports pass

## Defects — required
none

## Observations
Zero-dependency package configuration using native Node.js tooling (`node --check`, `node --test`).

## Context cost
132 bytes (approx. 33 tokens).
