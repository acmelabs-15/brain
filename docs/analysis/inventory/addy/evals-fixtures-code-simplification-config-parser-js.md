---
package: addy
path: evals/fixtures/code-simplification/config-parser.js
type: file
bytes: 1592
unit: inv-addy-9
aliases: []
memo_inputs:
  - {path: evals/fixtures/code-simplification/config-parser.js, sha256: faa41a2c12ccdb8962fbf2ff9e374fcc1850494b0731596813a449c876e0d88f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/code-simplification/config-parser.js

## Purpose — required, verbatim
> "function parseConfig(lines) {" — evals/fixtures/code-simplification/config-parser.js:3
(no explicit purpose statement)

## Design intent — required
Provides an overly nested, procedural INI-style configuration file parser implementation fixture for testing the `code-simplification` skill evaluation. It processes an array of lines into sectioned key-value mappings with basic type coercion (booleans, numbers, quoted strings, comments `#` and `;`). The heavy indentation nesting (up to 7 levels deep) serves as a benchmark target for behavior-preserving code simplification.

## Phase — required
none

## Inputs — required
`lines` array passed to `parseConfig(lines)` (evals/fixtures/code-simplification/config-parser.js:3).

## Outputs — required
`result` object with parsed sections and key-value pairs returned by `parseConfig(lines)` (evals/fixtures/code-simplification/config-parser.js:43).

## Invokes — required
none

## Invoked by — required
- file config-parser — evals/fixtures/code-simplification/config-parser.test.js:5
- config code-simplification — evals/cases/code-simplification.json:34

## Concepts named — required, verbatim
- `parseConfig` — evals/fixtures/code-simplification/config-parser.js:3 — defined here
- `section` — evals/fixtures/code-simplification/config-parser.js:5 — defined here
- `separator` — evals/fixtures/code-simplification/config-parser.js:20 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Demonstrates deeply nested control flow (7 levels: loop, checks for defined/trimmed lines, comment filtering `#`/`;`, section header matching `[...]`, key-value delimiter detection `=`, and nested scalar type coercions for `'true'`, `'false'`, numbers, and quoted strings).

## Context cost
1592 bytes, ~398 tokens.
