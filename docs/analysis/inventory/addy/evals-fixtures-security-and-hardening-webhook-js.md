---
package: addy
path: evals/fixtures/security-and-hardening/webhook.js
type: file
bytes: 271
unit: inv-addy-2
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
- file `evals/fixtures/security-and-hardening/webhook.test.js` — evals/fixtures/security-and-hardening/webhook.test.js:5
- config `evals/cases/security-and-hardening.json` — evals/cases/security-and-hardening.json:35
- script `scripts/run-evals.js` — scripts/run-evals.js:394

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
