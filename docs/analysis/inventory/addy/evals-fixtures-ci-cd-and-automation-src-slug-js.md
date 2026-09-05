---
package: addy
path: evals/fixtures/ci-cd-and-automation/src/slug.js
type: file
bytes: 93
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/src/slug.js, sha256: 595429bcb045f7ec9d41e40b4ed4102e07a57240e7f2c333eaa794e2a9465ade}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/ci-cd-and-automation/src/slug.js

## Purpose — required, verbatim
> "exports.slugify = (value) => value.trim().toLowerCase().replace(/\s+/g, '-');" — evals/fixtures/ci-cd-and-automation/src/slug.js:3
(no explicit purpose statement)

## Design intent — required
Provides a small utility implementation module for string slugification in the `ci-cd-and-automation` test fixture. It serves as the code target for the project's linting check and unit test suite.

## Phase — required
none

## Inputs — required
String argument `value` passed to `slugify(value)` (line 3).

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config package.json — evals/fixtures/ci-cd-and-automation/package.json:5
- file slug — evals/fixtures/ci-cd-and-automation/test/slug.test.js:5

## Concepts named — required, verbatim
- `slugify` — evals/fixtures/ci-cd-and-automation/src/slug.js:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Four-line utility module exporting `slugify` using CommonJS `exports`.

## Context cost
93 bytes, ~23 tokens.
