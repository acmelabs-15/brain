---
package: addy
path: evals/fixtures/performance-optimization/products.js
type: file
bytes: 393
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/performance-optimization/products.js, sha256: 3402692abfff62500188905d1f0ba47527b2675e21e8bc7f2d9ccb169fadb140}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/performance-optimization/products.js

## Purpose — required, verbatim
> "function renderProducts(products) {" — evals/fixtures/performance-optimization/products.js:3 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides an intentionally inefficient HTML rendering implementation with an O(N^2 log N) computational bottleneck (re-cloning and sorting the entire products collection inside each loop iteration) as the unoptimized input fixture for the `performance-optimization` eval. It serves as a benchmark for testing an agent's ability to identify computational hot spots and optimize algorithmic efficiency.

## Phase — required
`addy:BUILD`

## Inputs — required
- `products`: Array of product objects (`{ id, name, sales }`) passed to `renderProducts(products)` (evals/fixtures/performance-optimization/products.js:3)

## Outputs — required
- Returns HTML string containing ranked unordered list (`<ul><li data-rank="...">...</li>...</ul>`) (evals/fixtures/performance-optimization/products.js:11)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `renderProducts` — evals/fixtures/performance-optimization/products.js:3 — defined here

## Structure
- `renderProducts(products)` — line 3
- `module.exports` — line 14

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The O(N^2 log N) bottleneck can be easily precomputed once in O(N log N) before rendering, reducing execution time from ~60ms down to <1ms for 1,000 items.

## Context cost
393 bytes (~98 tokens). When combined with `benchmark.js` (464 bytes), total fixture context cost is 857 bytes (~214 tokens).
