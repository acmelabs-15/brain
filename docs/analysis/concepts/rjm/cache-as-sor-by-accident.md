---
package: rjm
name: Cache as SoR by accident
slug: cache-as-sor-by-accident
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cache as SoR by accident

## Definition — verbatim
> "- **Cache as SoR by accident**: a cache that grows divergence from its source over months because the rebuild path was never written. Build the rebuild before you ship the cache." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 158 | defined here | Defined as an anti-pattern where a cache drifts from authoritative sources because automated rebuild mechanisms were omitted. |

## Consumes
Secondary caching stores, derived data projections lacking rebuild paths.

## Produces
Permanent data drift and corruption between cache and authoritative underlying stores.

## When applied
Flagged during design review when caching layers are introduced without automated invalidation or deterministic rebuild pipelines.

## Sub-concepts
none

## Part of
anti-patterns

## Implementation status
defects: doc-drift

## Design notes
Cache as SoR by accident describes a cache mutating into an unintended de facto source of truth because rebuild and invalidation mechanisms were omitted, mandating that rebuild paths be implemented prior to deploying caches.
