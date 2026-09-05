---
package: addy
path: evals/fixtures/ci-cd-and-automation/package.json
type: config
bytes: 132
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/package.json, sha256: 9e9e19c20f0c6da962c516816d89bad3dc6492e5b5a9c1051bfa8fe9d5b28be5}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/ci-cd-and-automation/package.json

## Purpose — required, verbatim
> "\"name\": \"ci-fixture\"," — evals/fixtures/ci-cd-and-automation/package.json:2
(no explicit purpose statement)

## Design intent — required
Defines project configuration and scripts for the `ci-cd-and-automation` evaluation fixture. It provides standard lifecycle script declarations for linting and testing using Node built-in tools (`node --check` and `node --test`), establishing a minimal dependency-free target project to test CI/CD pipeline automation skills.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- file slug.js — evals/fixtures/ci-cd-and-automation/package.json:5

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ci-fixture` — evals/fixtures/ci-cd-and-automation/package.json:2 — defined here
- `lint` — evals/fixtures/ci-cd-and-automation/package.json:5 — defined here
- `test` — evals/fixtures/ci-cd-and-automation/package.json:6 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Defines two native Node scripts without external dependencies: `"lint": "node --check src/slug.js"` (evals/fixtures/ci-cd-and-automation/package.json:5) and `"test": "node --test"` (evals/fixtures/ci-cd-and-automation/package.json:6).

## Context cost
132 bytes, ~33 tokens.
