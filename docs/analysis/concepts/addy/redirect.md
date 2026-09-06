---
package: addy
name: redirect
slug: redirect
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

# redirect

## Definition — verbatim
(used, not defined)
> "const response = await fetchImpl(url, { redirect: 'follow' });" — evals/fixtures/security-and-hardening/webhook.js:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/security-and-hardening/webhook.js | 4 | references | Option property passed to fetchImpl instructing it to follow redirects |

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
defects: other (evals/fixtures/security-and-hardening/webhook.js is intentionally vulnerable to SSRF by following redirects without validation)

## Design notes
Property key passed in fetch options to control HTTP redirect handling; it is a networking configuration option rather than a development lifecycle concept.
