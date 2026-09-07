---
package: rjm
name: Invalidate-on-Write Pattern
slug: invalidate-on-write-pattern
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

# Invalidate-on-Write Pattern

## Definition — verbatim
> "### Option 4: Invalidate-on-Write Pattern" — .agents/architecture/ADR-018-cache-invalidation-strategy.md:85

> "**No persistent cache; invalidate on state-changing operations**" — .agents/architecture/ADR-018-cache-invalidation-strategy.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-018-cache-invalidation-strategy.md | 85 | defined here | Caching pattern selected to ensure fresh API queries following state-changing operations like closing PRs or issues. |

## Consumes
State-changing API operations (such as opening, closing, or merging a pull request or issue).

## Produces
Immediate invalidation or clearing of cached read data, ensuring subsequent reads fetch fresh state.

## When applied
Triggered whenever an agent performs an action that mutates underlying remote state.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Cache invalidation pattern ensuring data consistency by evicting cached state immediately upon any write or mutation, preventing agents from acting on stale data within the same execution session.
