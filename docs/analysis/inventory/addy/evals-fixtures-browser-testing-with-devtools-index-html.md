---
package: addy
path: evals/fixtures/browser-testing-with-devtools/index.html
type: file
bytes: 869
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/index.html, sha256: 1e5fbf6fa6ce365eec1ddd0e1a21fc0b7f76a8506fc3119c6059a4d192defc06}
method_sha: 647767d85acc14e391fbbf69d54d8543f31a0497dc52121aaf5997e1c6065f5f
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/browser-testing-with-devtools/index.html

## Purpose — required, verbatim
> "<form id=\"signup-form\">" — evals/fixtures/browser-testing-with-devtools/index.html:5
(no explicit purpose statement)

## Design intent — required
Provides the HTML form and client-side JavaScript for the `browser-testing-with-devtools` evaluation fixture. It implements an asynchronous signup form that sends an email payload via fetch to `/api/signup` and parses JSON into a polite live region, providing an in-browser runtime environment where unexpected server errors trigger real console and network inspection targets for DevTools testing agents.

## Phase — required
none

## Inputs — required
User input entered into `<input id="email" name="email" type="email" required>` — evals/fixtures/browser-testing-with-devtools/index.html:6

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- file server.js — evals/fixtures/browser-testing-with-devtools/server.js:14

## Concepts named — required, verbatim
- `signup-form` — evals/fixtures/browser-testing-with-devtools/index.html:5 — defined here
- `aria-live` — evals/fixtures/browser-testing-with-devtools/index.html:9 — used here
- `fetch` — evals/fixtures/browser-testing-with-devtools/index.html:14 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
When submitted, the client-side event listener dispatches a fetch request (`method: 'POST'` at line 15) to `/api/signup` and immediately invokes `await response.json()` (line 19) without verifying `response.ok`. When coupled with `server.js` returning an HTML 500 error page, this produces an uncaught SyntaxError in the browser console.

## Context cost
869 bytes, ~217 tokens.
