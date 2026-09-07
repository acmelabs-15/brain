---
package: rjm
name: Merge Velocity
slug: merge-velocity
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

# Merge Velocity

## Definition — verbatim
> "1. **Merge Velocity**: Cache files in git would cause merge conflicts on every PR" — .agents/architecture/ADR-018-cache-invalidation-strategy.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-018-cache-invalidation-strategy.md | 36 | defined here | Defined as the primary decision driver against tracking cache files in git. |

## Consumes
Pull request workflows, branch merges, and repository conflict surface.

## Produces
Rapid, unblocked branch merges free from synthetic merge conflicts.

## When applied
Applied when deciding where agent state and cache data are stored.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Merge velocity represents the speed and frictionlessness with which autonomous agent PRs can be merged. Avoiding git-tracked cache or temporary files is essential to preserving high merge velocity.
