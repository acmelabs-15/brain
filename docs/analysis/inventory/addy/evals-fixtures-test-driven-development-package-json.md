---
package: addy
path: evals/fixtures/test-driven-development/package.json
type: config
bytes: 189
unit: inv-addy-11
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/test-driven-development/package.json, sha256: 46e0250dba3325f1abb7eeb24f4ce0df0529a8cea7646f73f3ba25f3695b86db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/test-driven-development/package.json

## Purpose — required, verbatim
> "Splits an amount in integer cents into fair shares." — evals/fixtures/test-driven-development/package.json:4
(no explicit purpose statement)

## Design intent — required
Package configuration fixture for the JavaScript `test-driven-development` evaluation suite (`evals/cases/test-driven-development.json`). Declares package metadata for the `split-payment` fixture project and defines the standard test execution script `"test": "node --test"`. Tests whether an agent inspects project configuration to identify and run the repository's native test command (`npm test`) before and after implementing bug fixes.

## Phase — required
none

## Inputs — required
Read by Node.js, npm, and eval runners.

## Outputs — required
Configuration definition for project scripts and package properties.

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `split-payment` — evals/fixtures/test-driven-development/package.json:2 — defined here
- `node --test` — evals/fixtures/test-driven-development/package.json:7 — used here

## Structure
- Package metadata: name, version, description, private
- Scripts: "test": "node --test"

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/test-driven-development/package.json`, language: JSON / npm script, lines: 10
- documented invocation: "node --test" — evals/fixtures/test-driven-development/package.json:7
- **executed:** yes
- actual command run: `npm test`, abridged stdout: `✔ splits an evenly divisible total into equal shares\n✔ a single participant receives the whole total\npass 2\nfail 0`, **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none
- for validators/gates: can it exit non-zero? yes, on test failure; does it fail on default branch? no, passes
- does the output match what the documentation claims? yes, runs node native test runner

## Defects — required
none

## Observations
Minimal zero-dependency package configuration utilizing Node's built-in test runner (`node --test`).

## Context cost
189 bytes, ~45 tokens.
