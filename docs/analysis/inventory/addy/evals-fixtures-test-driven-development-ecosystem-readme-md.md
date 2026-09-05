---
package: addy
path: evals/fixtures/test-driven-development-ecosystem/README.md
type: doc
bytes: 131
unit: inv-addy-11
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development-ecosystem/README.md, sha256: 547759129cbf421b53d506be5caab15baa4d3a13210798983abfeadb24f642a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/test-driven-development-ecosystem/README.md

## Purpose — required, verbatim
> "Small Python ledger utilities. No dependencies beyond the standard library." — evals/fixtures/test-driven-development-ecosystem/README.md:3

## Design intent — required
Project documentation fixture for the Python ecosystem TDD evaluation (`evals/cases/test-driven-development.json` eval id 3). Documents the project description and standard library test runner command (`python3 -m unittest`). Tests whether an agent consults repository documentation to identify the project's native tooling and test runner rather than defaulting to JavaScript or generic test tooling.

## Phase — required
none

## Inputs — required
Read by developers and eval agents working in the fixture directory.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Ledger` — evals/fixtures/test-driven-development-ecosystem/README.md:1 — defined here
- `unittest` — evals/fixtures/test-driven-development-ecosystem/README.md:8 — used here

## Structure
- `# Ledger` — evals/fixtures/test-driven-development-ecosystem/README.md:1

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/test-driven-development-ecosystem/README.md`, language: bash / python, lines: 10
- documented invocation: "python3 -m unittest" — evals/fixtures/test-driven-development-ecosystem/README.md:8
- **executed:** yes
- actual command run: `python3 -m unittest`, abridged stdout: `Ran 3 tests in 0.000s\n\nOK`, **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none
- for validators/gates: can it exit non-zero? yes, on test failure; does it fail on default branch? no, passes
- does the output match what the documentation claims? yes, runs tests via unittest

## Defects — required
none

## Observations
Succinct 10-line README providing exact test execution command.

## Context cost
131 bytes, ~30 tokens.
