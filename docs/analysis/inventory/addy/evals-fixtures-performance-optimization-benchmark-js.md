---
package: addy
path: evals/fixtures/performance-optimization/benchmark.js
type: file
bytes: 464
unit: inv-addy-2
---

# evals/fixtures/performance-optimization/benchmark.js

## Purpose — required, verbatim
> "const start = performance.now();\nconst output = renderProducts(products);\nconst elapsed = performance.now() - start;\nconsole.log(JSON.stringify({ products: products.length, bytes: output.length, elapsedMs: elapsed }));" — evals/fixtures/performance-optimization/benchmark.js:12-15 (no explicit purpose statement)

## Design intent — required
Provides an executable micro-benchmark harness using `node:perf_hooks` for measuring the execution duration and output payload size of `renderProducts` over 1,000 synthetic items. It supplies reproducible execution metrics to verify performance improvements during the `performance-optimization` eval.

## Phase — required
`addy:TEST`

## Inputs — required
- Imports `renderProducts` from `./products` — evals/fixtures/performance-optimization/benchmark.js:4
- Generates 1,000 synthetic product objects (`{ id, name, sales }`) — evals/fixtures/performance-optimization/benchmark.js:6-10

## Outputs — required
- Prints JSON measurement to stdout: `{"products":1000,"bytes":<length>,"elapsedMs":<ms>}` — evals/fixtures/performance-optimization/benchmark.js:15

## Invokes — required
- file `evals/fixtures/performance-optimization/products.js` — evals/fixtures/performance-optimization/benchmark.js:4

## Invoked by — required
- config `evals/cases/performance-optimization.json` — evals/cases/performance-optimization.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `node:perf_hooks` — evals/fixtures/performance-optimization/benchmark.js:3 — used here
- `renderProducts` — evals/fixtures/performance-optimization/benchmark.js:4 — used here
- `performance.now` — evals/fixtures/performance-optimization/benchmark.js:12 — used here

## Structure
- Dataset setup — lines 6-10
- Timing execution and logging — lines 12-15

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/performance-optimization/benchmark.js`, language: JavaScript (Node.js/Bun), lines: 16
- documented invocation: none in file (invoked via `node benchmark.js` or `bun run benchmark.js`)
- **executed:** yes
- actual command run: `bun run benchmark.js`, actual exit code: `0`
- stdout:
  ```
  {"products":1000,"bytes":41678,"elapsedMs":62.429083999999996}
  ```
- documented exit codes vs. actual exit paths: naturally exits with code 0.
- for validators/gates: N/A
- does output match documentation: Yes, outputs structured JSON with product count, byte size, and elapsed runtime.

## Defects — required
none

## Observations
Uses standard `performance.now()` from `node:perf_hooks` to output clean, machine-readable JSON metrics suitable for automated before/after evaluation.

## Context cost
464 bytes (~116 tokens). Total fixture cost with `products.js`: 857 bytes (~214 tokens).
