---
package: addy
path: evals/fixtures/ci-cd-and-automation/package.json
type: config
bytes: 132
unit: inv-addy-8
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/package.json, sha256: 9e9e19c20f0c6da962c516816d89bad3dc6492e5b5a9c1051bfa8fe9d5b28be5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/ci-cd-and-automation/package.json

## Purpose — required, verbatim
> "name": "ci-fixture" — evals/fixtures/ci-cd-and-automation/package.json:2
(no explicit purpose statement)

## Design intent — required
Provides package configuration and verification scripts for the Node.js project fixture used in `ci-cd-and-automation` evaluations. It defines two quality gates (`lint` using `node --check src/slug.js` and `test` using `node --test`) that an agent-generated CI workflow is expected to wire up, execute on pull requests, and use to gate merging.

## Phase — required
addy:Ship

## Inputs — required
Read by package managers (npm) and CI runners executing pipeline steps during evaluation.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ci-fixture` — evals/fixtures/ci-cd-and-automation/package.json:2 — defined here
- `lint` — evals/fixtures/ci-cd-and-automation/package.json:5 — defined here
- `test` — evals/fixtures/ci-cd-and-automation/package.json:6 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/ci-cd-and-automation/package.json`, language: JSON (npm scripts), lines: 9
- documented invocation: none documented; invoked via `npm run lint` and `npm test`
- **executed:** yes
- actual command run: `npm run lint && npm test`, abridged stdout: `node --check src/slug.js\nnode --test\n✔ slugifies a title`, **actual exit code:** 0
- documented exit codes: none documented vs. actual exit paths: returns 0 on success; non-zero if syntax check or test suite fails
- for validators/gates: both scripts function as quality gates that fail with non-zero exit code upon syntax or test failures
- does the output match what the documentation claims? Yes, runs lint checks and test assertions using Node built-ins.

## Defects — required
none

## Observations
Zero-dependency setup relying entirely on built-in Node.js functionality (`node --check` and `node --test`).

## Context cost
132 bytes (~33 tokens). Loads no external files directly.
