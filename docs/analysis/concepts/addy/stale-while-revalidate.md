---
package: addy
name: stale-while-revalidate
slug: stale-while-revalidate
kind: pattern
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

# stale-while-revalidate

## Definition — verbatim
(used, not defined)
> "For a shared cache, the same idea needs a distributed lock, or `stale-while-revalidate` so waiters serve the stale value instead of blocking." — references/performance-checklist.md:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 170 | references | Recommended for shared caches to serve existing stale data while refreshing asynchronously. |

## Consumes
Cached responses with allowable staleness windows and background revalidation mechanisms.

## Produces
Immediate responses to clients using cached data while initiating background revalidation.

## When applied
When clients request expiring cached data that can tolerate brief staleness to avoid origin blocking.

## Sub-concepts
none

## Part of
caching-strategies, stampede-protection

## Implementation status
clean

## Design notes
`stale-while-revalidate` is an asynchronous caching pattern where a cache serves existing cached data immediately to concurrent requests even if slightly expired, while asynchronously fetching fresh content from origin. This eliminates request latency spikes and prevents origin overload during cache refreshes, balancing data freshness against throughput and response time.
