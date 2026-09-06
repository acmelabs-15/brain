---
package: addy
name: fetchImpl
slug: fetchimpl
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/security-and-hardening/webhook.js, sha256: a01e4b7a1dd5cc23b1fd16581be5ba094f3d277cac5c159c3ad4dc813b32e041}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# fetchImpl

## Definition — verbatim
(used, not defined)
> "async function previewWebhook(url, fetchImpl = fetch) {" — evals/fixtures/security-and-hardening/webhook.js:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/security-and-hardening/webhook.js | 3 | defines | Parameter definition for an injectable fetch implementation in previewWebhook |

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
defects: other (evals/fixtures/security-and-hardening/webhook.js is intentionally vulnerable to SSRF by following redirects without IP allowlisting, and uses CommonJS module.exports in an ESM package)

## Design notes
Parameter identifier for an injectable fetch implementation in an evaluation fixture to enable mock requests; it is a code variable rather than a development lifecycle concept.
