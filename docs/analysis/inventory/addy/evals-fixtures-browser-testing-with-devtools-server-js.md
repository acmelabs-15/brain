---
package: addy
path: evals/fixtures/browser-testing-with-devtools/server.js
type: file
bytes: 511
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/server.js, sha256: 0b35e5dbb0226bb26d69bd7a71c3c1575b1182f2c071e10e46c863533e1be1f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/fixtures/browser-testing-with-devtools/server.js

## Purpose — required, verbatim
> "http.createServer((req, res) => {" — evals/fixtures/browser-testing-with-devtools/server.js:7

(no explicit purpose statement)

## Design intent — required
Lightweight HTTP server fixture for the `browser-testing-with-devtools` eval scenario. Binds to `127.0.0.1:4173`, serves `index.html` on root and general requests, and intentionally returns an HTTP 500 status with an HTML body (`<h1>database unavailable</h1>`) when `POST /api/signup` is called. Sets up the runtime error condition required to evaluate DevTools network and console inspection.

## Phase — required
none

## Inputs — required
HTTP requests on port 4173 at evals/fixtures/browser-testing-with-devtools/server.js:7, 15. Reads `index.html` from filesystem at evals/fixtures/browser-testing-with-devtools/server.js:14.

## Outputs — required
Logs `listening on http://127.0.0.1:4173` to stdout at evals/fixtures/browser-testing-with-devtools/server.js:15. Serves `index.html` markup for `GET /` and sends 500 HTML response for `POST /api/signup` at evals/fixtures/browser-testing-with-devtools/server.js:9-14.

## Invokes — required
- file index.html — evals/fixtures/browser-testing-with-devtools/server.js:14

## Invoked by — required
- doc README.md — evals/fixtures/browser-testing-with-devtools/README.md:3
- "browser-testing-with-devtools" — evals/cases/browser-testing-with-devtools.json:35

## Concepts named — required, verbatim
- `/api/signup` — evals/fixtures/browser-testing-with-devtools/server.js:8 — used here
- `database unavailable` — evals/fixtures/browser-testing-with-devtools/server.js:10 — used here
- `index.html` — evals/fixtures/browser-testing-with-devtools/server.js:14 — used here
- `http://127.0.0.1:4173` — evals/fixtures/browser-testing-with-devtools/server.js:15 — defined here

## Structure
- Module dependencies (`node:fs`, `node:http`, `node:path`) — evals/fixtures/browser-testing-with-devtools/server.js:3-5
- Request listener routing `/api/signup` to 500 and default to `index.html` — evals/fixtures/browser-testing-with-devtools/server.js:7-14
- HTTP listen on port 4173 with stdout logging — evals/fixtures/browser-testing-with-devtools/server.js:15

## Scripts — required if type is script or the skill ships scripts
- path: evals/fixtures/browser-testing-with-devtools/server.js, language: JavaScript (Node.js CommonJS), lines: 16
- documented invocation: `node server.js` (evals/fixtures/browser-testing-with-devtools/README.md:3)
- **executed:** yes
- actual command run: `bun -e 'const cp = require("child_process"); const child = cp.spawn("bun", ["server.js"], { cwd: "sources/addy/evals/fixtures/browser-testing-with-devtools" }); child.stdout.on("data", (d) => { console.log(d.toString().trim()); child.kill(); process.exit(0); });'`
- actual stdout: `listening on http://127.0.0.1:4173`
- **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none (runs continuously)
- for validators/gates: not a validator or gate
- does the output match what the documentation claims: yes, launches server on documented host and port 4173

## Defects — required
- `doc-drift` · line 3: uses CommonJS `require()` without a `package.json` declaring CommonJS; when executed with `node server.js` inside an ESM-configured repository (`package.json` `"type": "module"`), Node crashes with `ReferenceError: require is not defined in ES module scope`. Runs cleanly under Bun or with explicit CommonJS configuration.

## Observations
Zero-dependency mock server implementation built entirely with Node.js standard library modules (`node:fs`, `node:http`, `node:path`).

## Context cost
511 bytes, ~120 tokens. Loads `index.html` (869 bytes).
