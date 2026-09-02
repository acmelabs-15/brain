---
package: addy
path: evals/fixtures/ci-cd-and-automation/package.json
type: config
bytes: 132
unit: inv-addy-2
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
- Configures npm scripts `lint` and `test` — `evals/fixtures/ci-cd-and-automation/package.json:5-6`

## Invokes — required
- file `evals/fixtures/ci-cd-and-automation/src/slug.js` — evals/fixtures/ci-cd-and-automation/package.json:5
- file `evals/fixtures/ci-cd-and-automation/test/slug.test.js` — evals/fixtures/ci-cd-and-automation/package.json:6

## Invoked by — required
- config `evals/cases/ci-cd-and-automation.json` — evals/cases/ci-cd-and-automation.json:35
- script `scripts/run-evals.js` — scripts/run-evals.js:394

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
