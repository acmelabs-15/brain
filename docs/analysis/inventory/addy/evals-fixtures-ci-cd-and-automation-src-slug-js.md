---
package: addy
path: evals/fixtures/ci-cd-and-automation/src/slug.js
type: file
bytes: 93
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/src/slug.js, sha256: 595429bcb045f7ec9d41e40b4ed4102e07a57240e7f2c333eaa794e2a9465ade}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/fixtures/ci-cd-and-automation/src/slug.js

## Purpose — required, verbatim
> "exports.slugify = (value)" — evals/fixtures/ci-cd-and-automation/src/slug.js:3

(no explicit purpose statement)

## Design intent — required
Minimal JavaScript implementation module that provides a string slugification function. Serves as the source code target for automated syntax linting (`node --check src/slug.js`) and unit testing in the `ci-cd-and-automation` eval fixture project.

## Phase — required
none

## Inputs — required
String input parameter `value` passed to `slugify` function at evals/fixtures/ci-cd-and-automation/src/slug.js:3.

## Outputs — required
Returns a slugified string (whitespace replaced with hyphens, trimmed, and lowercased) at evals/fixtures/ci-cd-and-automation/src/slug.js:3. Exports `slugify` on `exports` object at evals/fixtures/ci-cd-and-automation/src/slug.js:3.

## Invokes — required
none

## Invoked by — required
- config package.json — evals/fixtures/ci-cd-and-automation/package.json:5
- "../src/slug" — evals/fixtures/ci-cd-and-automation/test/slug.test.js:5
- "ci-cd-and-automation" — evals/cases/ci-cd-and-automation.json:35

## Concepts named — required, verbatim
- `slugify` — evals/fixtures/ci-cd-and-automation/src/slug.js:3 — defined here

## Structure
- Strict mode pragma — evals/fixtures/ci-cd-and-automation/src/slug.js:1
- `slugify` function assignment to `exports.slugify` — evals/fixtures/ci-cd-and-automation/src/slug.js:3

## Scripts — required if type is script or the skill ships scripts
- path: evals/fixtures/ci-cd-and-automation/src/slug.js, language: JavaScript (Node.js CommonJS), lines: 4
- documented invocation: `node --check src/slug.js` (evals/fixtures/ci-cd-and-automation/package.json:5)
- **executed:** yes
- actual command run: `node --check src/slug.js` (cwd: `sources/addy/evals/fixtures/ci-cd-and-automation`)
- actual stdout: none (syntax validation succeeded silently)
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none
- for validators/gates: not a validator or gate
- does the output match what the documentation claims: yes, passes syntax check cleanly

## Defects — required
none

## Observations
Simple string manipulation helper designed as a lightweight target for CI verification.

## Context cost
93 bytes, ~25 tokens.
