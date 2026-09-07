---
package: rjm
name: External Cache
slug: external-cache
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

# External Cache

## Definition — verbatim
> "### Option 3: External Cache (cloudmcp)" — .agents/architecture/ADR-018-cache-invalidation-strategy.md:72

> "**Store cache in cloudmcp memory graph**" — .agents/architecture/ADR-018-cache-invalidation-strategy.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-018-cache-invalidation-strategy.md | 72 | used here | Architectural caching option evaluated and selected as secondary strategy for infrequently changing metadata. |

## Consumes
External storage service or memory graph infrastructure (such as cloudmcp).

## Produces
Persistent cache entries that survive individual agent sessions without modifying repository files.

## When applied
Adopted for slowly changing repository metadata (such as labels and milestones) where cross-session caching benefit outweighs external service complexity.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Architectural pattern of delegating agent cache persistence to an external graph or storage service rather than storing cache files in git, preventing repository merge conflicts while preserving cached data across agent sessions.
