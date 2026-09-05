---
package: addy
path: evals/fixtures/performance-optimization/products.js
type: file
bytes: 393
unit: inv-addy-10
aliases: []
memo_inputs:
  - {path: evals/fixtures/performance-optimization/products.js, sha256: 3402692abfff62500188905d1f0ba47527b2675e21e8bc7f2d9ccb169fadb140}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/performance-optimization/products.js

## Purpose — required, verbatim
> "function renderProducts(products) {" — evals/fixtures/performance-optimization/products.js:3
(no explicit purpose statement)

## Design intent — required
Provides an unoptimized product list renderer that contains a deliberate O(N^2 log N) performance bottleneck by re-sorting the entire product array and calling `findIndex` inside the loop for every single product. In the `performance-optimization` evaluation fixture, it represents the target for profiling, identifying algorithmic inefficiency, and refactoring to pre-calculated rankings.

## Phase — required
none

## Inputs — required
Array `products` of product objects with `id`, `name`, and `sales` properties (line 3, 6–9).

## Outputs — required
Returns an HTML unordered list string `<ul>...</ul>` (line 11).

## Invokes — required
none

## Invoked by — required
- file renderProducts — evals/fixtures/performance-optimization/benchmark.js:4
- config performance-optimization — evals/cases/performance-optimization.json:43

## Concepts named — required, verbatim
- `renderProducts` — evals/fixtures/performance-optimization/products.js:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · evals/fixtures/performance-optimization/products.js:6-8 · deliberate quadratic sort inside the product loop causing slow rendering on large lists.

## Observations
Clear educational fixture illustrating the difference between sorting once upfront versus repeatedly sorting inside an iteration loop.

## Context cost
393 bytes, ~98 tokens.
