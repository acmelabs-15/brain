---
package: addy
path: evals/fixtures/performance-optimization/benchmark.js
type: file
bytes: 464
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/performance-optimization/benchmark.js, sha256: 004ee6c26982cb0d905908ba41721bfc31e88ef0e9656cfabaf9c0b2bdd87d08}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/performance-optimization/benchmark.js

## Purpose — required, verbatim
> "const start = performance.now();" — evals/fixtures/performance-optimization/benchmark.js:12 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides an executable micro-benchmark harness using `node:perf_hooks` for measuring the execution duration and output payload size of `renderProducts` over 1,000 synthetic items. It supplies reproducible execution metrics to verify performance improvements during the `performance-optimization` eval.

## Phase — required
`addy:TEST`

## Inputs — required
- Imports `renderProducts` from `./products` (evals/fixtures/performance-optimization/benchmark.js:4)
- Generates 1,000 synthetic product objects (`{ id, name, sales }`) (evals/fixtures/performance-optimization/benchmark.js:6-10)

## Outputs — required
- Prints JSON measurement to stdout: `{"products":1000,"bytes":<length>,"elapsedMs":<ms>}` (evals/fixtures/performance-optimization/benchmark.js:15)

## Invokes — required
- file ./products — evals/fixtures/performance-optimization/benchmark.js:4

## Invoked by — required
orphan

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
