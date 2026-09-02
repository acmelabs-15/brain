---
package: addy
path: evals/fixtures/security-and-hardening/webhook.test.js
type: file
bytes: 414
unit: inv-addy-2
---

# evals/fixtures/security-and-hardening/webhook.test.js

## Purpose — required, verbatim
> "test('returns a bounded preview from a successful request', async () => {" — evals/fixtures/security-and-hardening/webhook.test.js:7 (no explicit purpose statement)

## Design intent — required
Provides a basic unit test using `node:test` and `node:assert/strict` testing the happy-path behavior of `previewWebhook` with a mocked fetch implementation. Used to evaluate whether an agent enhances test coverage when hardening code against security vulnerabilities (such as SSRF attack vectors).

## Phase — required
none

## Inputs — required
- Imports `previewWebhook` from `./webhook` — `evals/fixtures/security-and-hardening/webhook.test.js:5`

## Outputs — required
- Test assertion results reported via test runner — `evals/fixtures/security-and-hardening/webhook.test.js:7-13`

## Invokes — required
- file `evals/fixtures/security-and-hardening/webhook.js` — evals/fixtures/security-and-hardening/webhook.test.js:5

## Invoked by — required
- config `evals/cases/security-and-hardening.json` — evals/cases/security-and-hardening.json:35
- script `scripts/run-evals.js` — scripts/run-evals.js:394

## Concepts named — required, verbatim
- `node:assert/strict` — evals/fixtures/security-and-hardening/webhook.test.js:3 — used here
- `node:test` — evals/fixtures/security-and-hardening/webhook.test.js:4 — used here
- `previewWebhook` — evals/fixtures/security-and-hardening/webhook.test.js:5 — used here

## Structure
- Strict mode and imports (lines 1-5)
- Unit test case `returns a bounded preview from a successful request` (lines 7-13)

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/security-and-hardening/webhook.test.js`, language: JavaScript (Node/Bun test), lines: 14
- documented invocation: none
- **executed:** yes
- actual command run: `bun test sources/addy/evals/fixtures/security-and-hardening/webhook.test.js`
- actual exit code: `0`, stdout: `(pass) returns a bounded preview from a successful request [1.44ms] \n 1 pass \n 0 fail`
- documented exit codes: none vs actual exit paths: code 0 on test pass with Bun test runner
- does the output match what the documentation claims?: yes, passes assertion for mock 200 response `{ status: 200, body: 'ok' }`

## Defects — required
none

## Observations
Tests standard bounded preview behavior. Passes under Bun test runner (`bun test`).

## Context cost
414 bytes (approx. 104 tokens). Plus imported `webhook.js` (271 bytes) = 685 bytes (~171 tokens).
