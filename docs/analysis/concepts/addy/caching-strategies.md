---
package: addy
name: Caching Strategies
slug: caching-strategies
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

# Caching Strategies

## Definition — verbatim
> "The decision material (which layer, which invalidation strategy, what never to cache) lives in the `performance-optimization` skill. This section covers the read/write patterns and the checklist." — references/performance-checklist.md:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 11 | defines | Catalog of caching patterns (cache-aside, read-through, write-through, write-behind), negative caching, request coalescing, and validation checklist |

## Consumes
High-latency queries, expensive computations, distributed caches, read/write ratios

## Produces
Architectural selection of caching patterns, invalidation rules, and stampede defenses

## When applied
When designing or optimizing data retrieval pipelines to reduce backend load and response latency

## Sub-concepts
cache-aside, read-through, write-through, write-behind

## Part of
performance-checklist

## Implementation status
clean

## Design notes
A catalog and implementation guide for application caching patterns, detailing trade-offs between cache-aside, read-through, and write modes alongside critical protections like negative caching and stampede coalescing.
