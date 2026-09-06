---
package: addy
name: Caching
slug: caching
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Caching

## Definition — verbatim
> "Cache what is expensive to produce and read far more often than it changes." — skills/performance-optimization/SKILL.md:319

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/performance-optimization/SKILL.md | 317 | defined here | Detailed as a multi-tier backend and edge strategy to store expensive computation results |

## Consumes
Read-heavy application operations, expensive database queries, static assets.

## Produces
In-process LRU caches, distributed cache layers (Redis), CDN edge caching rules, HTTP Cache-Control headers.

## When applied
When read operations significantly outnumber write operations and recomputing data introduces measurable latency.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean

## Design notes
Caching stores computation and query results across appropriate architectural tiers (in-process, distributed, edge) to reduce downstream latency and database load. Addy emphasizes that caching must be deliberate—pairing correct key design with explicit invalidation strategies (TTL, event-based, versioned keys) and stampede guards (stale-while-revalidate) to prevent correctness bugs and service outages.
