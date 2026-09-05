---
package: addy
path: evals/fixtures/security-and-hardening/webhook.test.js
type: file
bytes: 414
unit: inv-addy-11
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/security-and-hardening/webhook.test.js, sha256: 988ac8424130965fc6384b258d7e40a6be7751df9fa5c896d069395442c8534d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/security-and-hardening/webhook.test.js

## Purpose — required, verbatim
> "test('returns a bounded preview from a successful request', async () => {" — evals/fixtures/security-and-hardening/webhook.test.js:7
(no explicit purpose statement)

## Design intent — required
Unit test fixture accompanying `webhook.js` in the `security-and-hardening` evaluation suite. Tests the basic happy path of `previewWebhook` with a mocked fetch implementation returning HTTP 200 and body `'ok'`. Provides a baseline regression test that agents modifying `webhook.js` during security hardening must preserve.

## Phase — required
none

## Inputs — required
Imports `node:assert/strict`, `node:test`, and `./webhook` — evals/fixtures/security-and-hardening/webhook.test.js:3-5.

## Outputs — required
Executes test assertions verifying that `previewWebhook` resolves with `{ status: 200, body: 'ok' }` — evals/fixtures/security-and-hardening/webhook.test.js:12.

## Invokes — required
- file webhook — evals/fixtures/security-and-hardening/webhook.test.js:5

## Invoked by — required
none

## Concepts named — required, verbatim
- `previewWebhook` — evals/fixtures/security-and-hardening/webhook.test.js:5 — used here
- `node:test` — evals/fixtures/security-and-hardening/webhook.test.js:4 — used here
- `node:assert/strict` — evals/fixtures/security-and-hardening/webhook.test.js:3 — used here

## Structure
- Imports: assert, test, previewWebhook
- Test case: returns a bounded preview from a successful request

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/security-and-hardening/webhook.test.js`, language: JavaScript, lines: 14
- documented invocation: none (invoked via test runner)
- **executed:** yes
- actual command run: `bun test evals/fixtures/security-and-hardening/webhook.test.js`, abridged stdout: `1 pass\n0 fail\nRan 1 test across 1 file.`, **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none (exits non-zero via test runner on assertion error)
- for validators/gates: can it exit non-zero? yes, on assertion failure; does it fail on default branch? no, passes
- does the output match what the documentation claims? yes, passes test suite

## Defects — required
- script-bug — evals/fixtures/security-and-hardening/webhook.test.js:3: Uses CommonJS `require()`, which throws `ReferenceError: require is not defined in ES module scope` when executed with `node --test` under root package.json `"type": "module"`.

## Observations
Runs cleanly under `bun test` due to Bun's automatic CommonJS/ESM interop handling.

## Context cost
685 bytes (414 bytes for test file + 271 bytes for `webhook.js`), ~150 tokens.
