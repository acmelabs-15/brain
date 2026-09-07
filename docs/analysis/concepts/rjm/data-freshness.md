---
package: rjm
name: Data Freshness
slug: data-freshness
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-018-cache-invalidation-strategy.md, sha256: 22609083ce567ec0d1ec08676d19df35943dc5d29c8a7e86e959436b5954719b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Data Freshness

## Definition — verbatim
> "2. **Data Freshness**: Stale cache data leads to incorrect agent decisions" — .agents/architecture/ADR-018-cache-invalidation-strategy.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-018-cache-invalidation-strategy.md | 37 | defined here | Defined as a critical decision driver requiring cache invalidation on write operations. |

## Consumes
Up-to-date repository and PR data from GitHub APIs.

## Produces
Correct agent decision-making based on current repository state rather than stale caches.

## When applied
Evaluated when implementing cache retention rules, TTLs, and invalidate-on-write patterns.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Data freshness is an operational requirement balancing API call reduction with data timeliness. Stale caches risk incorrect automated triage or merge decisions, necessitating invalidate-on-write mechanisms.
