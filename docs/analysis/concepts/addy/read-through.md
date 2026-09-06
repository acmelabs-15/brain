---
package: addy
name: Read-through
slug: read-through
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

# Read-through

## Definition — verbatim
> "| **Read-through** | Cache layer itself loads on miss | You want the load path in one place, not at every call site | Hides origin latency; a slow origin looks like a slow cache |" — references/performance-checklist.md:142

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 142 | defines | Cataloged in caching patterns table as an abstraction where the caching subsystem handles origin fetches directly |

## Consumes
Centralized cache client or proxy connected directly to datastore

## Produces
Transparent data retrieval hiding origin data fetching from calling code

## When applied
When consolidating loading logic in a single data access layer rather than dispersing it across call sites

## Sub-concepts
none

## Part of
caching-strategies

## Implementation status
clean

## Design notes
A caching pattern where the cache layer itself acts as the data provider, automatically querying the datastore on cache miss. This centralizes data fetching logic but can obscure backend latency spikes behind cache operations.
