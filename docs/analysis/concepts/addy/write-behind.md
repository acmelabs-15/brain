---
package: addy
name: Write-behind
slug: write-behind
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

# Write-behind

## Definition — verbatim
> "| **Write-behind** (write-back) | Write hits cache, origin updated asynchronously | Write-heavy, and the origin is the bottleneck | Data loss window if the cache dies before the flush. Needs durability you can defend |" — references/performance-checklist.md:144

## Also called — verbatim
`write-back` — references/performance-checklist.md:144

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 144 | defined here | Cataloged in caching patterns table as an asynchronous write pattern for high-throughput write workloads |

## Consumes
High-throughput write events, queue/cache buffer

## Produces
Asynchronously flushed persistence to backing datastore

## When applied
When write throughput overwhelms database capabilities and eventual consistency/durability trade-offs are acceptable

## Sub-concepts
none

## Part of
caching-strategies

## Implementation status
clean

## Design notes
An asynchronous write caching pattern (also termed write-back) where writes acknowledge immediately upon hitting cache memory, deferring disk writes to background batches. It absorbs heavy write spikes but introduces a data loss window if the cache crashes before flushing.
