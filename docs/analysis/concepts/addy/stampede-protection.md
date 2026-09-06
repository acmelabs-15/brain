---
package: addy
name: stampede protection
slug: stampede-protection
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/performance-checklist.md, sha256: 40f564d1e62341e277c01ba42c42d95264b9ef3b8e5a23249dc6e121a7e70067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# stampede protection

## Definition — verbatim
> "Every miss hits the origin, so it needs stampede protection" — references/performance-checklist.md:141

## Also called — verbatim
"Request coalescing (stampede protection)" — references/performance-checklist.md:154

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 141 | defines | Identified as a necessary safeguard for cache-aside architectures against origin load surges on cache misses. |

## Consumes
High-traffic caching layers subject to concurrent key expirations or invalidations.

## Produces
Architectural safeguards (coalescing, locking, background revalidation) mitigating origin overload.

## When applied
When hot cache keys expire or when using cache-aside patterns under concurrent loads.

## Sub-concepts
request-coalescing, stale-while-revalidate

## Part of
caching-strategies

## Implementation status
clean

## Design notes
Stampede protection is the umbrella architectural safeguard preventing a cache invalidation on a hot key from flooding origin services with concurrent recomputations. Addy notes that naive cache-aside implementations are particularly vulnerable, requiring mitigations such as in-flight promise deduplication, distributed locking, or serving stale data during background revalidation.
