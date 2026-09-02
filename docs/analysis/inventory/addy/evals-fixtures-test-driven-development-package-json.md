---
package: addy
path: evals/fixtures/test-driven-development/package.json
type: config
bytes: 189
unit: inv-addy-2
---

# evals/fixtures/test-driven-development/package.json

## Purpose — required, verbatim
> "{\n  \"name\": \"split-payment\",\n  \"version\": \"1.2.0\",\n  \"description\": \"Splits an amount in integer cents into fair shares.\",\n  \"private\": true,\n  \"scripts\": {\n    \"test\": \"node --test\"\n  }\n}" — evals/fixtures/test-driven-development/package.json:1-9 (no explicit purpose statement)

## Design intent — required
Defines package metadata and the test runner script (`"test": "node --test"`) for the `split-payment` fixture project, enabling standard toolchain execution (`npm test`) without external dependencies during TDD evaluation.

## Phase — required
`addy:VERIFY`

## Inputs — required
- none

## Outputs — required
- Configures the npm lifecycle script `"test": "node --test"`.

## Invokes — required
none

## Invoked by — required
- doc `evals/fixtures/test-driven-development/README.md` — evals/fixtures/test-driven-development/README.md:27
- config `evals/cases/test-driven-development.json` — evals/cases/test-driven-development.json:34-36, 48-50
- script `scripts/run-evals.js` — scripts/run-evals.js:389-398

## Concepts named — required, verbatim
- `split-payment` — evals/fixtures/test-driven-development/package.json:2 — defined here
- `node --test` — evals/fixtures/test-driven-development/package.json:7 — used here

## Structure
- `name` — line 2
- `version` — line 3
- `description` — line 4
- `private` — line 5
- `scripts` — line 6
  - `test` — line 7

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/test-driven-development/package.json`, language: JSON / npm script, lines: 10
- documented invocation: `npm test` — evals/fixtures/test-driven-development/README.md:27
- **executed:** yes
- actual command run: `npm test` (in `sources/addy/evals/fixtures/test-driven-development`)
- abridged stdout: `✔ splits an evenly divisible total into equal shares (1.759916ms)\n✔ a single participant receives the whole total (0.076458ms)\nℹ tests 2\nℹ suites 0\nℹ pass 2\nℹ fail 0`
- **actual exit code:** `0`
- documented exit codes vs actual: delegates to `node --test`, exiting 0 on success.
- for validators/gates: not a validator; executes test runner.
- does output match documentation: Yes, successfully triggers `node --test`.

## Defects — required
none

## Observations
Zero-dependency package configuration using native Node.js test runner capabilities (`node:test`).

## Context cost
189 bytes (~50 tokens) file size. Loaded as part of `evals/fixtures/test-driven-development/` (1,949 bytes total, ~490 tokens).
