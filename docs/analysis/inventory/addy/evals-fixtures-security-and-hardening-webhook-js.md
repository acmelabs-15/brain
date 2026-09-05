---
package: addy
path: evals/fixtures/security-and-hardening/webhook.js
type: file
bytes: 271
unit: inv-addy-11
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/security-and-hardening/webhook.js, sha256: a01e4b7a1dd5cc23b1fd16581be5ba094f3d277cac5c159c3ad4dc813b32e041}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/security-and-hardening/webhook.js

## Purpose — required, verbatim
> "async function previewWebhook(url, fetchImpl = fetch) {" — evals/fixtures/security-and-hardening/webhook.js:3
(no explicit purpose statement)

## Design intent — required
Evaluation fixture providing an intentionally vulnerable webhook preview function for testing the `security-and-hardening` skill. It performs an unvalidated server-side HTTP request following redirects to a user-supplied URL without SSRF protection, IP filtering, or allowlisting, returning an abridged response body. Without it, the evaluation runner would lack a concrete target to verify whether an agent properly identifies trust boundaries, blocks SSRF against internal and reserved IP addresses, and implements safe URL fetching controls.

## Phase — required
none

## Inputs — required
Consumes arguments `url` (string target URL) and optional `fetchImpl` (fetch function, defaults to global `fetch`) — evals/fixtures/security-and-hardening/webhook.js:3.

## Outputs — required
Returns an object containing HTTP `status` code and truncated `body` text sliced to 2048 characters — evals/fixtures/security-and-hardening/webhook.js:5-8.

## Invokes — required
none

## Invoked by — required
- file webhook — evals/fixtures/security-and-hardening/webhook.test.js:5

## Concepts named — required, verbatim
- `previewWebhook` — evals/fixtures/security-and-hardening/webhook.js:3 — defined here
- `fetchImpl` — evals/fixtures/security-and-hardening/webhook.js:3 — defined here
- `redirect` — evals/fixtures/security-and-hardening/webhook.js:4 — used here

## Structure
- Function definition: `previewWebhook` — evals/fixtures/security-and-hardening/webhook.js:3
- Export: `module.exports` — evals/fixtures/security-and-hardening/webhook.js:11

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- other — evals/fixtures/security-and-hardening/webhook.js:4: Intentionally vulnerable to SSRF by following redirects to arbitrary URLs without IP allowlisting or private range blocking for evaluation testing.
- other — evals/fixtures/security-and-hardening/webhook.js:11: Uses CommonJS `module.exports` which exports an empty object when imported as ES module under root package.json `"type": "module"`.

## Observations
Truncates response bodies to 2048 characters via `.slice(0, 2048)` to limit preview payload size.

## Context cost
271 bytes, ~60 tokens.
