---
package: addy
path: evals/fixtures/code-simplification/config-parser.js
type: file
bytes: 1592
unit: inv-addy-2
---

# evals/fixtures/code-simplification/config-parser.js

## Purpose — required, verbatim
> "function parseConfig(lines) {\n  const result = {};\n  let section = 'default';\n  result[section] = {};\n  for (let i = 0; i < lines.length; i++) {" — evals/fixtures/code-simplification/config-parser.js:3-7 (no explicit purpose statement)

## Design intent — required
Serves as an overly complex, deeply nested, imperative implementation of a configuration file parser used as the input fixture for the `code-simplification` eval. It demonstrates anti-patterns like deep conditional nesting (up to 7 levels), manual character indexing, and verbose type parsing heuristics that an agent running the `code-simplification` skill is evaluated on refactoring into concise, idiomatic code while preserving existing test suite behavior.

## Phase — required
`addy:BUILD`

## Inputs — required
- `lines`: Array of raw strings/values representing lines of a configuration file — evals/fixtures/code-simplification/config-parser.js:3

## Outputs — required
- Returns nested JavaScript object mapping section names to key-value pairs (with boolean, numeric, quoted string, or raw string values) — evals/fixtures/code-simplification/config-parser.js:43

## Invokes — required
none

## Invoked by — required
- file `evals/fixtures/code-simplification/config-parser.test.js` — evals/fixtures/code-simplification/config-parser.test.js:5
- config `evals/cases/code-simplification.json` — evals/cases/code-simplification.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `parseConfig` — evals/fixtures/code-simplification/config-parser.js:3 — defined here

## Structure
- `parseConfig(lines)` — line 3
- `module.exports` — line 46

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The implementation features extreme cyclomatic complexity and deeply nested branches, making it an ideal benchmark case for automated code simplification.

## Context cost
1,592 bytes (~398 tokens). When loaded with test file `config-parser.test.js` (452 bytes), total fixture context cost is 2,044 bytes (~511 tokens).
