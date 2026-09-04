---
package: addy
path: evals/fixtures/security-and-hardening/webhook.js
type: file
bytes: 271
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/security-and-hardening/webhook.js, sha256: a01e4b7a1dd5cc23b1fd16581be5ba094f3d277cac5c159c3ad4dc813b32e041}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/security-and-hardening/webhook.js

## Purpose — required, verbatim
> "async function previewWebhook(url, fetchImpl = fetch) {" — evals/fixtures/security-and-hardening/webhook.js:3 (no explicit purpose statement)

## Design intent — required
Provides a vulnerable webhook preview helper function that fetches an arbitrary user-supplied URL with redirect following enabled (`redirect: 'follow'`) and without URL scheme validation, IP address filtering (private network / loopback SSRF protection), or DNS rebinding safeguards. Used as the evaluation target fixture for the `security-and-hardening` skill to test vulnerability detection (SSRF) and secure remediation.

## Phase — required
none

## Inputs — required
- `url` webhook URL string — `evals/fixtures/security-and-hardening/webhook.js:3`
- `fetchImpl` optional fetch implementation function, defaulting to global `fetch` — `evals/fixtures/security-and-hardening/webhook.js:3`

## Outputs — required
- Exports `previewWebhook` function via CommonJS `module.exports` — `evals/fixtures/security-and-hardening/webhook.js:11`
- Returns response object with status and truncated body `{ status: response.status, body: (await response.text()).slice(0, 2048) }` — `evals/fixtures/security-and-hardening/webhook.js:5-8`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `previewWebhook` — evals/fixtures/security-and-hardening/webhook.js:3 — defined here
- `fetch` — evals/fixtures/security-and-hardening/webhook.js:3 — used here
- `redirect` — evals/fixtures/security-and-hardening/webhook.js:4 — used here

## Structure
- Strict mode (line 1)
- `previewWebhook` function definition (lines 3-9)
- CommonJS module export (line 11)

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/security-and-hardening/webhook.js`, language: JavaScript (Node/Bun), lines: 12
- documented invocation: none
- **executed:** yes
- actual command run: `bun sources/addy/evals/fixtures/security-and-hardening/webhook.js`
- actual exit code: `0`, stdout: (empty)
- documented exit codes: none vs actual exit paths: default script completion (code 0)
- does the output match what the documentation claims?: yes, module exports `previewWebhook` function cleanly

## Defects — required
none

## Observations
Intentionally vulnerable to Server-Side Request Forgery (SSRF) via unvalidated user-controlled URL fetch with redirect following enabled.

## Context cost
271 bytes (approx. 68 tokens).
