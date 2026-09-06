---
package: addy
name: bfcache
slug: bfcache
kind: technique
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# bfcache

## Definition — verbatim
> "- [ ] No `unload` event handlers and no `Cache-Control: no-store` on HTML responses — preserves back/forward cache (bfcache) eligibility" — references/performance-checklist.md:85

## Also called — verbatim
`back/forward cache` — references/performance-checklist.md:85

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 85 | used here | Criterion in the frontend checklist mandating avoidance of unload handlers and no-store headers to ensure back/forward cache eligibility |

## Consumes
Complete in-memory snapshot of the web page state and DOM

## Produces
Instantaneous navigation restoration when users navigate backward or forward

## When applied
When architecting page lifecycle handlers, navigation routing, and HTTP caching headers

## Sub-concepts
none

## Part of
frontend-checklist

## Implementation status
clean

## Design notes
The browser back/forward cache that preserves full in-memory page snapshots for instant back/forward navigation. Addy mandates eliminating `unload` listeners and avoiding `Cache-Control: no-store` on HTML documents to keep pages eligible for bfcache.
