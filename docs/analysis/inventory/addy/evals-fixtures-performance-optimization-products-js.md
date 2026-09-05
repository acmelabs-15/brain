---
package: addy
path: evals/fixtures/performance-optimization/products.js
type: file
bytes: 393
unit: inv-addy-10
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/performance-optimization/products.js, sha256: 3402692abfff62500188905d1f0ba47527b2675e21e8bc7f2d9ccb169fadb140}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/performance-optimization/products.js

## Purpose — required, verbatim
> "function renderProducts(products) {" — evals/fixtures/performance-optimization/products.js:3 (no explicit purpose statement)

## Design intent — required
Provides an intentionally suboptimal HTML rendering implementation suffering from an O(N^2 log N) bottleneck: inside a loop over all products, it duplicates and sorts the full array and performs a linear findIndex to compute item sales rank. Serves as the optimization target in eval case #1 of `performance-optimization`, testing whether an agent can profile the execution, identify the repeated sort/search bottleneck, and optimize it (e.g. by sorting once beforehand) while preserving identical HTML output.

## Phase — required
none

## Inputs — required
Array of product objects with `id`, `name`, and `sales` properties passed as `products` to `renderProducts(products)` at evals/fixtures/performance-optimization/products.js:3.

## Outputs — required
Returns an HTML string wrapping an unordered list `<ul>...</ul>` with ranked list items at evals/fixtures/performance-optimization/products.js:11. Exports `module.exports = { renderProducts }` at evals/fixtures/performance-optimization/products.js:14.

## Invokes — required
none

## Invoked by — required
- "const { renderProducts } = require('./products');" — evals/fixtures/performance-optimization/benchmark.js:4
- "performance-optimization" — evals/cases/performance-optimization.json:43

## Concepts named — required, verbatim
none

## Structure
- Function definition: `renderProducts` — evals/fixtures/performance-optimization/products.js:3
- O(N^2 log N) iteration with inner copy, sort, and findIndex — evals/fixtures/performance-optimization/products.js:5-10
- HTML string return: `return \`<ul>\${html}</ul>\`;` — evals/fixtures/performance-optimization/products.js:11
- Module export: `module.exports = { renderProducts }` — evals/fixtures/performance-optimization/products.js:14

## Scripts — required if type is script or the skill ships scripts
- path: evals/fixtures/performance-optimization/products.js, language: JavaScript, lines: 15
- documented invocation: none (module function)
- **executed:** yes
- actual command run: `bun -e 'const { renderProducts } = require("./sources/addy/evals/fixtures/performance-optimization/products.js"); console.log(renderProducts([{id: 1, name: "Widget", sales: 100}]));'`
- stdout: `<ul><li data-rank="1">Widget: 100</li></ul>`
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none
- for validators/gates: not a validator or gate
- does the output match what the documentation claims: yes, renders ranked HTML list

## Defects — required
none

## Observations
Classic synthetic bottleneck fixture demonstrating redundant computation inside a tight loop: `[...products].sort(...).findIndex(...)` inside `for (const product of products)`.

## Context cost
393 bytes, ~90 tokens.
