---
package: addy
path: evals/fixtures/performance-optimization/products.js
type: file
bytes: 393
unit: inv-addy-2
---

# evals/fixtures/performance-optimization/products.js

## Purpose — required, verbatim
> "function renderProducts(products) {\n  let html = '';\n  for (const product of products) {\n    const rank = [...products]\n      .sort((a, b) => b.sales - a.sales)\n      .findIndex((candidate) => candidate.id === product.id) + 1;\n    html += `<li data-rank=\"${rank}\">${product.name}: ${product.sales}</li>`;\n  }\n  return `<ul>${html}</ul>`;\n}" — evals/fixtures/performance-optimization/products.js:3-12 (no explicit purpose statement)

## Design intent — required
Provides an intentionally inefficient HTML rendering implementation with an O(N^2 log N) computational bottleneck (re-cloning and sorting the entire products collection inside each loop iteration) as the unoptimized input fixture for the `performance-optimization` eval. It serves as a benchmark for testing an agent's ability to identify computational hot spots and optimize algorithmic efficiency.

## Phase — required
`addy:BUILD`

## Inputs — required
- `products`: Array of product objects (`{ id, name, sales }`) passed to `renderProducts(products)` — evals/fixtures/performance-optimization/products.js:3

## Outputs — required
- Returns HTML string containing ranked unordered list (`<ul><li data-rank="...">...</li>...</ul>`) — evals/fixtures/performance-optimization/products.js:11

## Invokes — required
none

## Invoked by — required
- file `evals/fixtures/performance-optimization/benchmark.js` — evals/fixtures/performance-optimization/benchmark.js:4
- config `evals/cases/performance-optimization.json` — evals/cases/performance-optimization.json:34
- script `scripts/run-evals.js` — scripts/run-evals.js:169

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
