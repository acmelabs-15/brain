---
package: addy
path: evals/fixtures/security-and-hardening/webhook.test.js
type: file
bytes: 414
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/security-and-hardening/webhook.test.js, sha256: 988ac8424130965fc6384b258d7e40a6be7751df9fa5c896d069395442c8534d}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
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
- file ./webhook — evals/fixtures/security-and-hardening/webhook.test.js:5

## Invoked by — required
orphan

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
