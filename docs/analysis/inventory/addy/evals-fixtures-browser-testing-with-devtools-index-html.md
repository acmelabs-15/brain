---
package: addy
path: evals/fixtures/browser-testing-with-devtools/index.html
type: file
bytes: 869
unit: inv-addy-8
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/index.html, sha256: 1e5fbf6fa6ce365eec1ddd0e1a21fc0b7f76a8506fc3119c6059a4d192defc06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/browser-testing-with-devtools/index.html

## Purpose — required, verbatim
> "<title>Signup</title>" — evals/fixtures/browser-testing-with-devtools/index.html:3
(no explicit purpose statement)

## Design intent — required
Provides an HTML/JS frontend test fixture for the `browser-testing-with-devtools` skill evaluation. It renders an account signup form that sends a JSON POST to `/api/signup` on submit. Because the backend server returns an HTTP 500 HTML response, the client script's `response.json()` call throws an unhandled JSON parsing exception, leaving the user interface completely frozen with no status update. This tests whether an agent relies on browser runtime inspection (console error traces and network tab status) to diagnose user-reported bugs.

## Phase — required
addy:Verify

## Inputs — required
Rendered in a web browser when requested from `http://127.0.0.1:4173/` during evaluation.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- file index.html — evals/fixtures/browser-testing-with-devtools/server.js:14

## Concepts named — required, verbatim
- `signup-form` — evals/fixtures/browser-testing-with-devtools/index.html:5 — defined here
- `status` — evals/fixtures/browser-testing-with-devtools/index.html:9 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- script-bug: evals/fixtures/browser-testing-with-devtools/index.html:19 — Unhandled JSON parse error when server returns an HTML error page; intentional bug designed to test DevTools diagnostic capabilities.

## Observations
Uses semantic HTML form elements with `aria-live="polite"` on `#status`, but lacks error boundary logic for non-200 or non-JSON HTTP responses.

## Context cost
869 bytes (~217 tokens). Loads no external files directly.
