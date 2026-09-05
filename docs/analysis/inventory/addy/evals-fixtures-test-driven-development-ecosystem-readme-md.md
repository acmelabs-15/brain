---
package: addy
path: evals/fixtures/test-driven-development-ecosystem/README.md
type: doc
bytes: 131
unit: inv-addy-11
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development-ecosystem/README.md, sha256: 547759129cbf421b53d506be5caab15baa4d3a13210798983abfeadb24f642a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development-ecosystem/README.md

## Purpose — required, verbatim
> "Small Python ledger utilities. No dependencies beyond the standard library." — evals/fixtures/test-driven-development-ecosystem/README.md:3

## Design intent — required
Provides the project documentation fixture for the Python ledger fixture ecosystem. It documents the purpose of the package and specifies the project's native test command (`python3 -m unittest`). This tests whether an agent discovers and respects repository-specific test runners rather than defaulting to Node/npm commands when practicing TDD in polyglot environments.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config test-driven-development-ecosystem — evals/cases/test-driven-development.json:62

## Concepts named — required, verbatim
- `Ledger` — evals/fixtures/test-driven-development-ecosystem/README.md:1 — defined here
- `python3 -m unittest` — evals/fixtures/test-driven-development-ecosystem/README.md:8 — used here

## Structure
- `# Ledger` — evals/fixtures/test-driven-development-ecosystem/README.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Tested via `python3 -m unittest` in directory, executing 3 tests in 0.000s with exit code 0.

## Context cost
131 bytes, ~33 tokens.
