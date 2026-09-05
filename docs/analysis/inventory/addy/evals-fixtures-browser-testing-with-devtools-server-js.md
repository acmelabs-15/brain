---
package: addy
path: evals/fixtures/browser-testing-with-devtools/server.js
type: file
bytes: 511
unit: inv-addy-8
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/server.js, sha256: 0b35e5dbb0226bb26d69bd7a71c3c1575b1182f2c071e10e46c863533e1be1f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/browser-testing-with-devtools/server.js

## Purpose — required, verbatim
> "listening on http://127.0.0.1:4173" — evals/fixtures/browser-testing-with-devtools/server.js:15
(no explicit purpose statement)

## Design intent — required
Provides a minimal Node.js HTTP server fixture for the `browser-testing-with-devtools` evaluation scenario. It serves `index.html` on the root route and intentionally returns an HTTP 500 response with HTML payload (`<h1>database unavailable</h1>`) on `/api/signup` to simulate a broken backend service for browser debugging.

## Phase — required
addy:Verify

## Inputs — required
HTTP requests arriving on `127.0.0.1:4173`. Reads local file `index.html`.

## Outputs — required
HTTP responses: status 200 serving `index.html` or status 500 with HTML error text on `/api/signup`.

## Invokes — required
- file index.html — evals/fixtures/browser-testing-with-devtools/server.js:14

## Invoked by — required
- doc evals/fixtures/browser-testing-with-devtools/README.md — evals/fixtures/browser-testing-with-devtools/README.md:3

## Concepts named — required, verbatim
- `/api/signup` — evals/fixtures/browser-testing-with-devtools/server.js:8 — defined here
- `index.html` — evals/fixtures/browser-testing-with-devtools/server.js:14 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/browser-testing-with-devtools/server.js`, language: JavaScript (Node.js), lines: 16
- documented invocation: "node server.js" — evals/fixtures/browser-testing-with-devtools/README.md:3
- **executed:** yes
- actual command run: `node -e 'require("./server.js")'`, abridged stdout: `listening on http://127.0.0.1:4173`, **actual exit code:** 0
- documented exit codes: none documented vs. actual exit paths: runs server loop, no explicit `process.exit` call in code
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? Yes, starts HTTP server on port 4173 and returns 500 on `/api/signup`.

## Defects — required
none

## Observations
Uses standard library modules (`node:fs`, `node:http`, `node:path`) with zero external package dependencies.

## Context cost
511 bytes (~128 tokens). Loads `index.html` (869 bytes) dynamically, totaling 1,380 bytes (~345 tokens).
