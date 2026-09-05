---
package: addy
path: evals/fixtures/performance-optimization/benchmark.js
type: file
bytes: 464
unit: inv-addy-10
aliases: []
memo_inputs:
  - {path: evals/fixtures/performance-optimization/benchmark.js, sha256: 004ee6c26982cb0d905908ba41721bfc31e88ef0e9656cfabaf9c0b2bdd87d08}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/performance-optimization/benchmark.js

## Purpose — required, verbatim
> "console.log(JSON.stringify({ products: products.length, bytes: output.length, elapsedMs: elapsed }));" — evals/fixtures/performance-optimization/benchmark.js:15
(no explicit purpose statement)

## Design intent — required
Executes a synthetic performance benchmark generating 1000 products, rendering them with `renderProducts`, timing execution with `node:perf_hooks`, and printing JSON benchmark results. Serves as the measurement harness for establishing performance baselines and verifying optimizations in the `performance-optimization` eval.

## Phase — required
none

## Inputs — required
Loads `renderProducts` from `./products` (line 4); generates synthetic array of 1000 product objects (lines 6–10).

## Outputs — required
Prints JSON string containing product count, output byte length, and elapsed milliseconds to stdout (line 15).

## Invokes — required
- file renderProducts — evals/fixtures/performance-optimization/products.js:3

## Invoked by — required
- config performance-optimization — evals/cases/performance-optimization.json:43

## Concepts named — required, verbatim
- `renderProducts` — evals/fixtures/performance-optimization/benchmark.js:4 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
For each script:
- path, language, lines: `evals/fixtures/performance-optimization/benchmark.js`, JavaScript (Node/Bun), 16 lines
- documented invocation: none (executed via `bun evals/fixtures/performance-optimization/benchmark.js` or `node`)
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: `bun sources/addy/evals/fixtures/performance-optimization/benchmark.js`, `{"products":1000,"bytes":41678,"elapsedMs":86.21520899999999}`, exit 0
- documented exit codes vs actual exit paths in code: none documented; implicit exit 0 on completion
- for validators/gates: not a validator/gate
- does the output match what the documentation claims: yes, measures execution time and prints JSON performance metrics

## Defects — required
none

## Observations
Runnable benchmark harness providing an empirical performance measurement baseline for 1000 products.

## Context cost
857 bytes (464 bytes benchmark + 393 bytes products.js), ~214 tokens.
