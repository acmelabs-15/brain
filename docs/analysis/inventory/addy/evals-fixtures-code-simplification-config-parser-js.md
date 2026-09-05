---
package: addy
path: evals/fixtures/code-simplification/config-parser.js
type: file
bytes: 1592
unit: inv-addy-9
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/code-simplification/config-parser.js, sha256: faa41a2c12ccdb8962fbf2ff9e374fcc1850494b0731596813a449c876e0d88f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/code-simplification/config-parser.js

## Purpose — required, verbatim
> "function parseConfig(lines) {" — evals/fixtures/code-simplification/config-parser.js:3
(no explicit purpose statement)

## Design intent — required
Evaluation fixture providing an overly complex, deeply nested implementation of an INI-style configuration file parser for testing the `code-simplification` skill. It parses lines into section-keyed objects, stripping comments and converting boolean, numeric, and quoted string values across up to six levels of nested conditionals. Without it, the evaluation suite would lack a realistic over-engineered parsing routine to test whether an agent can simplify control flow while preserving behavior verified by automated unit tests.

## Phase — required
none

## Inputs — required
Consumes argument `lines` (array of strings or nullable values) passed to `parseConfig` — evals/fixtures/code-simplification/config-parser.js:3.

## Outputs — required
Returns an object mapping section names to parsed key-value properties — evals/fixtures/code-simplification/config-parser.js:43.

## Invokes — required
none

## Invoked by — required
- file config-parser — evals/fixtures/code-simplification/config-parser.test.js:5

## Concepts named — required, verbatim
- `parseConfig` — evals/fixtures/code-simplification/config-parser.js:3 — defined here
- `lines` — evals/fixtures/code-simplification/config-parser.js:3 — defined here
- `section` — evals/fixtures/code-simplification/config-parser.js:5 — defined here
- `separator` — evals/fixtures/code-simplification/config-parser.js:20 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- other — evals/fixtures/code-simplification/config-parser.js:46: CommonJS export `module.exports` lacks ES module compatibility under packages declaring `"type": "module"`.

## Observations
Demonstrates extreme conditional nesting (loops, null checks, length checks, comment checks, bracket/separator checks, and value type checks) that an agent should simplify using early returns or modular helper functions.

## Context cost
1592 bytes, ~350 tokens.
