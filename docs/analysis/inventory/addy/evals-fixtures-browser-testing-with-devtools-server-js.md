---
package: addy
path: evals/fixtures/browser-testing-with-devtools/server.js
type: file
bytes: 511
unit: inv-addy-2
---

# evals/fixtures/browser-testing-with-devtools/server.js

## Purpose — required, verbatim
> "http.createServer((req, res) => {\n  if (req.url === '/api/signup') {\n    res.writeHead(500, { 'content-type': 'text/html' });\n    res.end('<h1>database unavailable</h1>');\n    return;\n  }\n  res.writeHead(200, { 'content-type': 'text/html' });\n  res.end(fs.readFileSync(path.join(__dirname, 'index.html')));\n}).listen(4173, '127.0.0.1', () => console.log('listening on http://127.0.0.1:4173'));" — evals/fixtures/browser-testing-with-devtools/server.js:7-15 (no explicit purpose statement)

## Design intent — required
Provides a lightweight Node.js HTTP server fixture for reproducing the browser signup failure scenario. It serves `index.html` on the root route and intentionally simulates a backend database outage on `/api/signup` by returning HTTP status 500 with an HTML payload (`<h1>database unavailable</h1>`), providing the local server runtime for DevTools debugging evaluations.

## Phase — required
`addy:TEST`

## Inputs — required
- Reads `index.html` via `fs.readFileSync` — evals/fixtures/browser-testing-with-devtools/server.js:14
- Inbound HTTP network requests on `http://127.0.0.1:4173` — evals/fixtures/browser-testing-with-devtools/server.js:7,15

## Outputs — required
- HTTP response with status 200 and HTML content for root path (`/`) — evals/fixtures/browser-testing-with-devtools/server.js:13-14
- HTTP response with status 500 and HTML body `'<h1>database unavailable</h1>'` for `/api/signup` — evals/fixtures/browser-testing-with-devtools/server.js:9-10
- Console log message `'listening on http://127.0.0.1:4173'` — evals/fixtures/browser-testing-with-devtools/server.js:15

## Invokes — required
- file `evals/fixtures/browser-testing-with-devtools/index.html` — evals/fixtures/browser-testing-with-devtools/server.js:14

## Invoked by — required
- doc `evals/fixtures/browser-testing-with-devtools/README.md` — evals/fixtures/browser-testing-with-devtools/README.md:3
- config `evals/cases/browser-testing-with-devtools.json` — evals/cases/browser-testing-with-devtools.json:35
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `node:http` — evals/fixtures/browser-testing-with-devtools/server.js:4 — used here
- `/api/signup` — evals/fixtures/browser-testing-with-devtools/server.js:8 — used here
- `index.html` — evals/fixtures/browser-testing-with-devtools/server.js:14 — used here

## Structure
- HTTP server request listener and routing — lines 7-15
- Server listener on port 4173 — line 15

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/browser-testing-with-devtools/server.js`, language: JavaScript (Node.js/Bun HTTP server), lines: 16
- documented invocation: `node server.js` (`README.md:3`)
- **executed:** yes
- actual command run: `bun run server.js` (backgrounded) followed by `curl -i http://127.0.0.1:4173/` and `curl -i -X POST http://127.0.0.1:4173/api/signup`, actual exit code: `0`
- stdout:
  ```
  listening on http://127.0.0.1:4173
  HTTP/1.1 200 OK (serves index.html)
  HTTP/1.1 500 Internal Server Error (<h1>database unavailable</h1>)
  ```
- documented exit codes vs. actual exit paths: runs continuously as a daemon until killed.
- for validators/gates: N/A
- does output match documentation: Yes, starts HTTP server on `http://127.0.0.1:4173` and serves routes as documented.

## Defects — required
none

## Observations
Simple, zero-dependency Node HTTP server implementation.

## Context cost
511 bytes (~128 tokens). Total fixture context cost with `index.html` and `README.md` is 1,566 bytes (~392 tokens).
