---
package: addy
path: evals/fixtures/performance-optimization/benchmark.js
type: file
bytes: 464
unit: inv-addy-10
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/performance-optimization/benchmark.js, sha256: 004ee6c26982cb0d905908ba41721bfc31e88ef0e9656cfabaf9c0b2bdd87d08}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/performance-optimization/benchmark.js

## Purpose — required, verbatim
> "const { renderProducts } = require('./products');" — evals/fixtures/performance-optimization/benchmark.js:4 (no explicit purpose statement)

## Design intent — required
Provides a micro-benchmark harness to measure rendering performance for 1,000 product items using `renderProducts(products)`. Uses `node:perf_hooks` to time execution and prints structured JSON with item count, rendered byte length, and elapsed milliseconds. Used in eval case #1 of `performance-optimization` to measure baseline performance before optimization and to verify improvement after bottleneck resolution.

## Phase — required
none

## Inputs — required
Requires `node:perf_hooks` at evals/fixtures/performance-optimization/benchmark.js:3 and `./products` at evals/fixtures/performance-optimization/benchmark.js:4. Synthesizes an array of 1,000 product objects with pseudo-random sales counts at evals/fixtures/performance-optimization/benchmark.js:6-10.

## Outputs — required
Prints structured JSON string to stdout: `{ products, bytes, elapsedMs }` at evals/fixtures/performance-optimization/benchmark.js:15.

## Invokes — required
- file ./products — evals/fixtures/performance-optimization/benchmark.js:4

## Invoked by — required
"performance-optimization" — evals/cases/performance-optimization.json:43

## Concepts named — required, verbatim
none

## Structure
- Import dependencies: `performance` and `renderProducts` — evals/fixtures/performance-optimization/benchmark.js:3-4
- Fixture data generation (1,000 items) — evals/fixtures/performance-optimization/benchmark.js:6-10
- Execution timing: `const start = performance.now();` — evals/fixtures/performance-optimization/benchmark.js:12
- Invocation: `const output = renderProducts(products);` — evals/fixtures/performance-optimization/benchmark.js:13
- Duration calculation and JSON output — evals/fixtures/performance-optimization/benchmark.js:14-15

## Scripts — required if type is script or the skill ships scripts
- path: evals/fixtures/performance-optimization/benchmark.js, language: JavaScript, lines: 16
- documented invocation: none (executable node/bun script)
- **executed:** yes
- actual command run: `bun sources/addy/evals/fixtures/performance-optimization/benchmark.js`
- stdout: `{"products":1000,"bytes":41678,"elapsedMs":60.846582999999995}`
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none (exits 0 on completion)
- for validators/gates: not a validator or gate
- does the output match what the documentation claims: yes, outputs valid JSON performance metrics

## Defects — required
none

## Observations
Clean, self-contained performance benchmark script providing objective timing measurements for eval verification.

## Context cost
464 bytes, ~100 tokens.
