---
package: addy
path: evals/fixtures/browser-testing-with-devtools/server.js
type: script
bytes: 511
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/server.js, sha256: 0b35e5dbb0226bb26d69bd7a71c3c1575b1182f2c071e10e46c863533e1be1f6}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/browser-testing-with-devtools/server.js

## Purpose — required, verbatim
> "res.end(fs.readFileSync(path.join(__dirname, 'index.html')));" — evals/fixtures/browser-testing-with-devtools/server.js:14
(no explicit purpose statement)

## Design intent — required
Serves as an HTTP server fixture for the `browser-testing-with-devtools` evaluation suite. It hosts `index.html` on `http://127.0.0.1:4173` and intentionally simulates a backend failure by returning an HTTP 500 error (`<h1>database unavailable</h1>`) for `/api/signup` requests, establishing the live backend endpoint required to evaluate an agent's ability to diagnose network and console errors via DevTools.

## Phase — required
none

## Inputs — required
Incoming HTTP network requests on `127.0.0.1:4173`. Reads local file `index.html` via `fs.readFileSync` (line 14).

## Outputs — required
- HTTP 500 text/html response with body <h1>database unavailable</h1> — evals/fixtures/browser-testing-with-devtools/server.js:10 for `req.url === '/api/signup'`
- HTTP 200 text/html response serving `index.html` content for other routes
- Console log message: listening on http://127.0.0.1:4173 — evals/fixtures/browser-testing-with-devtools/server.js:15

## Invokes — required
- file index.html — evals/fixtures/browser-testing-with-devtools/server.js:14

## Invoked by — required
- doc README.md — evals/fixtures/browser-testing-with-devtools/README.md:3

## Concepts named — required, verbatim
- `database unavailable` — evals/fixtures/browser-testing-with-devtools/server.js:10 — defined here
- `index.html` — evals/fixtures/browser-testing-with-devtools/server.js:14 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `evals/fixtures/browser-testing-with-devtools/server.js`, JavaScript (Node.js CommonJS), 16 lines
- documented invocation: "Run `node server.js`, open `http://127.0.0.1:4173`, enter an email, and submit" — evals/fixtures/browser-testing-with-devtools/README.md:3
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**: `bun sources/addy/evals/fixtures/browser-testing-with-devtools/server.js`, stdout `listening on http://127.0.0.1:4173`, actual exit code: 0 (server launched successfully in background, served HTTP 200 on `/` and HTTP 500 on `/api/signup`, terminated cleanly via SIGTERM). Direct execution via `node server.js` failed with exit code 1 due to ancestor package ESM module configuration.
- documented exit codes vs. actual exit paths in code: none documented; code contains zero `process.exit()` or exit calls, running an event loop server indefinitely.
- for validators/gates: not a validator or gate (HTTP server test fixture).
- does the output match what the documentation claims? Yes, logs `listening on http://127.0.0.1:4173` and serves traffic on port 4173.

## Defects — required
- `script-bug` · `evals/fixtures/browser-testing-with-devtools/server.js:3` · Uses CommonJS `require()` without a local `package.json` declaring `"type": "commonjs"`; in projects where an enclosing package.json declares `"type": "module"`, running `node server.js` fails with `ReferenceError: require is not defined in ES module scope`.

## Observations
The server route check only inspects `req.url === '/api/signup'`, returning 500 regardless of whether the HTTP verb is GET, POST, or OPTIONS.

## Context cost
511 bytes + 869 bytes (`index.html`) = 1380 bytes, ~345 tokens.
