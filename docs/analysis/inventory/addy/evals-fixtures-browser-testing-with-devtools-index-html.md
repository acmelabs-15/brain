---
package: addy
path: evals/fixtures/browser-testing-with-devtools/index.html
type: file
bytes: 869
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/browser-testing-with-devtools/index.html, sha256: 1e5fbf6fa6ce365eec1ddd0e1a21fc0b7f76a8506fc3119c6059a4d192defc06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/fixtures/browser-testing-with-devtools/index.html

## Purpose — required, verbatim
> "<!doctype html>" — evals/fixtures/browser-testing-with-devtools/index.html:1

(no explicit purpose statement)

## Design intent — required
HTML document fixture implementing a signup form with email input, submit button, live status container (`aria-live="polite"`), and an inline submit event listener. Serves as the reproduction subject for eval #1 of `browser-testing-with-devtools` (`evals/cases/browser-testing-with-devtools.json`). Submitting the form fails silently in the UI because the server responds with a 500 HTML error page, causing `response.json()` to throw an uncaught `SyntaxError` in the browser console. Tests whether an agent diagnoses issues by inspecting runtime browser evidence (DevTools console and network tabs) rather than reading code alone.

## Phase — required
none

## Inputs — required
User input into `#email` input field at evals/fixtures/browser-testing-with-devtools/index.html:6.

## Outputs — required
Dispatches POST request to `/api/signup` at evals/fixtures/browser-testing-with-devtools/index.html:14-18. Intended to update `#status` element at evals/fixtures/browser-testing-with-devtools/index.html:20.

## Invokes — required
none

## Invoked by — required
- file server.js — evals/fixtures/browser-testing-with-devtools/server.js:14
- "browser-testing-with-devtools" — evals/cases/browser-testing-with-devtools.json:35

## Concepts named — required, verbatim
- `Signup` — evals/fixtures/browser-testing-with-devtools/index.html:3 — defined here
- `signup-form` — evals/fixtures/browser-testing-with-devtools/index.html:5 — defined here
- `Create account` — evals/fixtures/browser-testing-with-devtools/index.html:7 — defined here
- `status` — evals/fixtures/browser-testing-with-devtools/index.html:9 — defined here
- `aria-live` — evals/fixtures/browser-testing-with-devtools/index.html:9 — used here
- `/api/signup` — evals/fixtures/browser-testing-with-devtools/index.html:14 — used here

## Structure
- HTML doctype, head and title (`Signup`) — evals/fixtures/browser-testing-with-devtools/index.html:1-3
- Form `#signup-form` with email input and submit button — evals/fixtures/browser-testing-with-devtools/index.html:5-8
- Status display `#status` with aria-live="polite" — evals/fixtures/browser-testing-with-devtools/index.html:9
- Inline script handling submit event, fetch POST, and response parsing — evals/fixtures/browser-testing-with-devtools/index.html:10-22

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `script-bug` · line 19: `const result = await response.json();` unconditionally calls `.json()` without verifying `response.ok` or HTTP status, throwing an uncaught SyntaxError in the console when `server.js` returns 500 HTML.

## Observations
Intentionally structured to produce a silent failure in the user interface (no status message or visible error banner) while generating explicit error artifacts in Chrome DevTools: HTTP 500 in the Network panel and an unhandled Promise rejection (`SyntaxError: Unexpected token '<'`) in the Console panel.

## Context cost
869 bytes, ~200 tokens. Served by `server.js` on `GET /`.
