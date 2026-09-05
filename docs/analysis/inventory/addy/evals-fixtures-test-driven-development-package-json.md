---
package: addy
path: evals/fixtures/test-driven-development/package.json
type: config
bytes: 189
unit: inv-addy-11
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development/package.json, sha256: 46e0250dba3325f1abb7eeb24f4ce0df0529a8cea7646f73f3ba25f3695b86db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/test-driven-development/package.json

## Purpose — required, verbatim
> "\"description\": \"Splits an amount in integer cents into fair shares.\"," — evals/fixtures/test-driven-development/package.json:4
(no explicit purpose statement)

## Design intent — required
Defines project metadata and scripts for the `split-payment` fixture used in `test-driven-development` evaluations. It declares a zero-dependency package running tests via Node's native runner (`node --test`), providing the execution contract that an agent running TDD must invoke (`npm test`) to verify regressions and test additions.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config test-driven-development — evals/cases/test-driven-development.json:35

## Concepts named — required, verbatim
- `split-payment` — evals/fixtures/test-driven-development/package.json:2 — defined here
- `test` — evals/fixtures/test-driven-development/package.json:7 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Because this `package.json` does not declare `"type": "module"`, Node treats `.js` files within this directory as CommonJS, allowing `node --test` to run without ESM/CommonJS collision. Running `npm test` executes `node --test`, passing 2 existing tests with exit code 0.

## Context cost
189 bytes, ~47 tokens.
