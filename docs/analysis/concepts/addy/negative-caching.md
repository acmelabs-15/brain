---
package: addy
name: Negative caching
slug: negative-caching
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

# Negative caching

## Definition — verbatim
> "Cache the *absence* of a result too. A key that misses on every lookup (a nonexistent user ID probed in a loop, a 404 asset) sends every request to the origin, which is a cache that only protects the happy path." — references/performance-checklist.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/performance-checklist.md | 146 | defines | Defined as a caching strategy to cache the absence of results with a shorter TTL to protect origin servers. |

## Consumes
A caching store supporting configurable TTLs and negative sentinel values.

## Produces
Negative cache entries for nonexistent records or missing resources preventing repeated origin requests.

## When applied
When handling queries that miss on lookup, such as probes for nonexistent entities or 404 assets.

## Sub-concepts
none

## Part of
caching-strategies

## Implementation status
clean

## Design notes
Negative caching extends caching protection to queries for nonexistent records, such as invalid user IDs probed in loops or 404 assets. By recording an explicit "not found" sentinel with a shorter time-to-live than positive entries, the system shields origin databases from repeated lookups on misses while ensuring that newly created records become visible promptly.
