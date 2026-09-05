---
package: addy
path: evals/fixtures/security-and-hardening/webhook.test.js
type: file
bytes: 414
unit: inv-addy-11
aliases: []
memo_inputs:
  - {path: evals/fixtures/security-and-hardening/webhook.test.js, sha256: 988ac8424130965fc6384b258d7e40a6be7751df9fa5c896d069395442c8534d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/security-and-hardening/webhook.test.js

## Purpose — required, verbatim
> "test('returns a bounded preview from a successful request', async () => {" — evals/fixtures/security-and-hardening/webhook.test.js:7
(no explicit purpose statement)

## Design intent — required
Provides a unit test for `previewWebhook` using Node.js built-in test runner (`node:test`) and assertion library (`node:assert/strict`). It verifies the happy path where a mocked fetch returns status 200 and a short text response, establishing a baseline regression test that should continue passing when an agent hardens `previewWebhook`.

## Phase — required
none

## Inputs — required
- `evals/fixtures/security-and-hardening/webhook.js` — imported via `./webhook` at line 5

## Outputs — required
- Test assertions via `node:assert/strict` (evals/fixtures/security-and-hardening/webhook.test.js:3)

## Invokes — required
- file ./webhook — evals/fixtures/security-and-hardening/webhook.test.js:5

## Invoked by — required
- config security-and-hardening — evals/cases/security-and-hardening.json:35

## Concepts named — required, verbatim
- `assert` — evals/fixtures/security-and-hardening/webhook.test.js:3 — used here
- `test` — evals/fixtures/security-and-hardening/webhook.test.js:4 — used here
- `previewWebhook` — evals/fixtures/security-and-hardening/webhook.test.js:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · evals/fixtures/security-and-hardening/webhook.test.js:3 · Uses CommonJS `require()` without a co-located package.json, causing direct `node --test` execution to fail under ancestor ESM package.json roots (`ReferenceError: require is not defined in ES module scope`).

## Observations
Tests execute cleanly using Bun (`bun test webhook.test.js`), passing 1 test. In Node, executing requires an explicit CommonJS boundary.

## Context cost
414 bytes (~104 tokens). Loads `webhook.js` (271 bytes). Total: 685 bytes (~172 tokens).
