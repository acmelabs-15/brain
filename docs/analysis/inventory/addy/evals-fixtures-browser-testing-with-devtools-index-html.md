---
package: addy
path: evals/fixtures/browser-testing-with-devtools/index.html
type: file
bytes: 869
unit: inv-addy-2
---

# evals/fixtures/browser-testing-with-devtools/index.html

## Purpose — required, verbatim
> "<form id=\"signup-form\">\n      <label>Email <input id=\"email\" name=\"email\" type=\"email\" required></label>\n      <button type=\"submit\">Create account</button>\n    </form>" — evals/fixtures/browser-testing-with-devtools/index.html:5-8 (no explicit purpose statement)

## Design intent — required
Provides the frontend user interface fixture containing an HTML signup form and client-side JavaScript fetch logic for the `browser-testing-with-devtools` evaluation. The client script submits form data to `/api/signup` and calls `response.json()` without checking `response.ok`, causing an uncaught runtime syntax error when the backend responds with HTML error status 500. This tests the agent's ability to diagnose silent UI failures using Chrome DevTools runtime inspection (console, network, DOM).

## Phase — required
`addy:BUILD`

## Inputs — required
- User input email value entered into `#email` input element — evals/fixtures/browser-testing-with-devtools/index.html:6,13

## Outputs — required
- Dispatches HTTP POST request with JSON payload `{ email }` to `/api/signup` — evals/fixtures/browser-testing-with-devtools/index.html:14-18
- Mutates text content of `#status` element with result message on successful JSON parse — evals/fixtures/browser-testing-with-devtools/index.html:20

## Invokes — required
- HTTP POST endpoint `/api/signup` — evals/fixtures/browser-testing-with-devtools/index.html:14

## Invoked by — required
- file `evals/fixtures/browser-testing-with-devtools/server.js` — evals/fixtures/browser-testing-with-devtools/server.js:14
- config `evals/cases/browser-testing-with-devtools.json` — evals/cases/browser-testing-with-devtools.json:35
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `signup-form` — evals/fixtures/browser-testing-with-devtools/index.html:5 — defined here
- `aria-live` — evals/fixtures/browser-testing-with-devtools/index.html:9 — used here
- `fetch` — evals/fixtures/browser-testing-with-devtools/index.html:14 — used here
- `/api/signup` — evals/fixtures/browser-testing-with-devtools/index.html:14 — used here

## Structure
- HTML structure (`<!doctype html>`, `<head>`, `<body>`) — lines 1-4
- Form element and accessible status paragraph — lines 5-9
- Client-side event listener script — lines 10-22

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The absence of HTTP response status validation (`if (!response.ok)`) before calling `response.json()` causes an unhandled rejection when the server returns a 500 HTML error. This leaves the user interface completely unresponsive without visual feedback, creating a realistic debugging reproduction target.

## Context cost
869 bytes (~217 tokens). Total fixture context cost with `server.js` (511 bytes) and `README.md` (186 bytes) is 1,566 bytes (~392 tokens).
