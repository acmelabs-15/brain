---
package: addy
name: previewWebhook
slug: previewwebhook
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/security-and-hardening/webhook.js, sha256: a01e4b7a1dd5cc23b1fd16581be5ba094f3d277cac5c159c3ad4dc813b32e041}
  - {path: evals/fixtures/security-and-hardening/webhook.test.js, sha256: 988ac8424130965fc6384b258d7e40a6be7751df9fa5c896d069395442c8534d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# previewWebhook

## Definition — verbatim
(used, not defined)
> "async function previewWebhook(url, fetchImpl = fetch) {" — evals/fixtures/security-and-hardening/webhook.js:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/security-and-hardening/webhook.js | 3 | defined here | Defined as an asynchronous function providing webhook preview fetching in an eval fixture. |
| evals/fixtures/security-and-hardening/webhook.test.js | 5 | used here | Imported and invoked in a unit test verifying response status and body handling. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other, script-bug

## Design notes
Code-level JavaScript function identifier in an evaluation fixture rather than a software development lifecycle concept.
