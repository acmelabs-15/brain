---
package: addy
path: evals/fixtures/browser-testing-with-devtools/index.html
type: file
bytes: 869
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/index.html, sha256: 1e5fbf6fa6ce365eec1ddd0e1a21fc0b7f76a8506fc3119c6059a4d192defc06}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/browser-testing-with-devtools/index.html

## Purpose — required, verbatim
> "<form id="signup-form">" — evals/fixtures/browser-testing-with-devtools/index.html:5 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides the frontend user interface fixture containing an HTML signup form and client-side JavaScript fetch logic for the `browser-testing-with-devtools` evaluation. The client script submits form data to `/api/signup` and calls `response.json()` without checking `response.ok`, causing an uncaught runtime syntax error when the backend responds with HTML error status 500. This tests the agent's ability to diagnose silent UI failures using Chrome DevTools runtime inspection (console, network, DOM).

## Phase — required
`addy:BUILD`

## Inputs — required
- User input email value entered into `#email` input element (evals/fixtures/browser-testing-with-devtools/index.html:6,13)

## Outputs — required
- Dispatches HTTP POST request with JSON payload `{ email }` to `/api/signup` (evals/fixtures/browser-testing-with-devtools/index.html:14-18)
- Mutates text content of `#status` element with result message on successful JSON parse (evals/fixtures/browser-testing-with-devtools/index.html:20)

## Invokes — required
- HTTP POST endpoint `/api/signup` — evals/fixtures/browser-testing-with-devtools/index.html:14

## Invoked by — required
orphan

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
