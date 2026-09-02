---
package: addy
path: evals/fixtures/test-driven-development-ecosystem/README.md
type: doc
bytes: 131
unit: inv-addy-2
---

# evals/fixtures/test-driven-development-ecosystem/README.md

## Purpose — required, verbatim
> "# Ledger\n\nSmall Python ledger utilities. No dependencies beyond the standard library." — evals/fixtures/test-driven-development-ecosystem/README.md:1-3 (no explicit purpose statement)

## Design intent — required
Provides brief documentation and test execution instructions for the Python ledger fixture, specifying the standard library test command `python3 -m unittest`.

## Phase — required
`addy:TEST`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config `evals/cases/test-driven-development.json` — evals/cases/test-driven-development.json:71
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `Ledger` — evals/fixtures/test-driven-development-ecosystem/README.md:1 — defined here
- `python3 -m unittest` — evals/fixtures/test-driven-development-ecosystem/README.md:8 — used here

## Structure
- `# Ledger` — line 1
- `Run the tests:` — line 5

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Concise instructions directing execution through standard library `unittest` with zero third-party dependencies.

## Context cost
131 bytes (~33 tokens).
