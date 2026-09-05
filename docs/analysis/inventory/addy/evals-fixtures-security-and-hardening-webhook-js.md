---
package: addy
path: evals/fixtures/security-and-hardening/webhook.js
type: file
bytes: 271
unit: inv-addy-11
aliases: []
memo_inputs:
  - {path: evals/fixtures/security-and-hardening/webhook.js, sha256: a01e4b7a1dd5cc23b1fd16581be5ba094f3d277cac5c159c3ad4dc813b32e041}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/security-and-hardening/webhook.js

## Purpose — required, verbatim
> "async function previewWebhook(url, fetchImpl = fetch) {" — evals/fixtures/security-and-hardening/webhook.js:3
(no explicit purpose statement)

## Design intent — required
Serves as an insecure target implementation fixture for evaluating the `security-and-hardening` skill. It implements a webhook preview utility that fetches a user-supplied URL with `{ redirect: 'follow' }` and reads up to 2048 bytes of the response without URL validation, host filtering, or private IP blocking. This provides an evaluation benchmark to test whether an agent identifies Server-Side Request Forgery (SSRF) vulnerabilities across trust boundaries and hardens the code using allowlisting, private IP blocking, and redirect restrictions.

## Phase — required
none

## Inputs — required
- Arguments: `url` (string, target webhook URL to fetch), `fetchImpl` (optional fetch implementation, defaults to global `fetch`) — evals/fixtures/security-and-hardening/webhook.js:3

## Outputs — required
- Object containing HTTP `status` (number) and `body` (string, sliced to first 2048 characters) — evals/fixtures/security-and-hardening/webhook.js:5-8

## Invokes — required
none

## Invoked by — required
- file webhook — evals/fixtures/security-and-hardening/webhook.test.js:5
- config security-and-hardening — evals/cases/security-and-hardening.json:35

## Concepts named — required, verbatim
- `previewWebhook` — evals/fixtures/security-and-hardening/webhook.js:3 — defined here
- `fetch` — evals/fixtures/security-and-hardening/webhook.js:3 — used here
- `redirect` — evals/fixtures/security-and-hardening/webhook.js:4 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · evals/fixtures/security-and-hardening/webhook.js:4 · Vulnerable by design to SSRF as it fetches user-supplied URLs and follows redirects without address validation or private IP blocking.
- `other` · evals/fixtures/security-and-hardening/webhook.js:11 · Uses CommonJS module export syntax (`module.exports`) without a local package.json designating `"type": "commonjs"`, causing module resolution failures when executed under Node with ancestor ESM configuration.

## Observations
The fixture is deliberately unhardened to serve as the evaluation target in `evals/cases/security-and-hardening.json:32-42`, which expects hardening with allowlisting, private-IP blocking, and redirect restrictions (`redirect: 'error'`).

## Context cost
271 bytes, ~68 tokens.
