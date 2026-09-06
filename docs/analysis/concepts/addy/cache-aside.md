---
package: addy
name: Cache-aside
slug: cache-aside
kind: pattern
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

# Cache-aside

## Definition — verbatim
> "| **Cache-aside** (lazy) | App checks cache, on miss reads origin and populates | Default choice; read-heavy, tolerant of a cold first hit | Every miss hits the origin, so it needs stampede protection |" — references/performance-checklist.md:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 141 | defines | Cataloged in the caching patterns table as the default lazy caching approach for read-heavy workloads |

## Consumes
Application-level cache layer (Redis, Memcached), origin database

## Produces
Lazy populated cache entries on demand

## When applied
When building read-heavy systems tolerant of cold start misses

## Sub-concepts
none

## Part of
caching-strategies

## Implementation status
clean

## Design notes
The default read caching pattern where application code checks the cache first, querying the primary datastore on cache miss and writing the result back to cache. It requires stampede protection on hot keys.
