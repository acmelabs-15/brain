---
package: addy
name: Request coalescing
slug: request-coalescing
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

# Request coalescing

## Definition — verbatim
> "One recompute, N waiters. Prevents a hot key's expiry from delivering the full concurrent load to the origin:" — references/performance-checklist.md:156

## Also called — verbatim
"stampede protection" — references/performance-checklist.md:154

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 154 | defines | Defined with an in-flight promise map code pattern to coalesce concurrent cache misses. |

## Consumes
Concurrent queries targeting identical expiring or missing cache keys.

## Produces
A shared pending in-flight promise distributed across all waiting callers.

## When applied
When multiple concurrent requests demand the same uncached or expired key.

## Sub-concepts
none

## Part of
caching-strategies, stampede-protection

## Implementation status
clean

## Design notes
Request coalescing collapses concurrent queries for identical cache keys into a single in-flight origin fetch, returning the same pending promise to all waiting callers. Without request coalescing, a popular cached item expiring under high concurrency creates a cache stampede that overwhelms the database or origin service.
