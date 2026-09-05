---
package: addy
path: evals/fixtures/ci-cd-and-automation/src/slug.js
type: file
bytes: 93
unit: inv-addy-8
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/src/slug.js, sha256: 595429bcb045f7ec9d41e40b4ed4102e07a57240e7f2c333eaa794e2a9465ade}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/ci-cd-and-automation/src/slug.js

## Purpose — required, verbatim
> "exports.slugify = (value) => value.trim().toLowerCase().replace(/\s+/g, '-');" — evals/fixtures/ci-cd-and-automation/src/slug.js:3
(no explicit purpose statement)

## Design intent — required
Provides the source module for the `ci-cd-and-automation` evaluation fixture. It implements a single string transformation utility (`slugify`) that serves as the subject for both syntax linting (`node --check`) and automated testing (`node --test`) within candidate CI pipelines.

## Phase — required
addy:Ship

## Inputs — required
Function argument `value` (string to slugify).

## Outputs — required
Slugified string with leading/trailing whitespace removed, characters lowercased, and whitespace replaced by hyphens.

## Invokes — required
none

## Invoked by — required
- file slugify — evals/fixtures/ci-cd-and-automation/test/slug.test.js:5

## Concepts named — required, verbatim
- `slugify` — evals/fixtures/ci-cd-and-automation/src/slug.js:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Concise CommonJS module exporting a single helper function.

## Context cost
93 bytes (~23 tokens). Loads no external files directly.
