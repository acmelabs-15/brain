---
package: addy
name: Write-through
slug: write-through
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

# Write-through

## Definition — verbatim
> "| **Write-through** | Write goes to cache and origin together, synchronously | Reads must never see a stale value after a write | Adds cache latency to every write |" — references/performance-checklist.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 143 | defines | Cataloged in caching patterns table as a synchronous dual-write pattern guaranteeing read consistency |

## Consumes
Incoming mutation/write requests

## Produces
Synchronously updated cache and primary storage records

## When applied
When read paths require strict consistency immediately following a write mutation

## Sub-concepts
none

## Part of
caching-strategies

## Implementation status
clean

## Design notes
A caching pattern that synchronously updates both the cache and underlying datastore simultaneously on write. It ensures immediate read consistency at the expense of adding cache latency to write operations.
