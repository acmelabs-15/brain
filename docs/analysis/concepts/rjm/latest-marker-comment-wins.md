---
package: rjm
name: latest marker comment wins
slug: latest-marker-comment-wins
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# latest marker comment wins

## Definition — verbatim
> "The **latest marker comment wins**: acquire scans the PR timeline for `<!-- PR-AUTOFIX-LEASE -->` comments and treats the most-recent one as authoritative." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 72 | defined here | Rule dictating that the most recent lease marker comment on the PR timeline is authoritative. |

## Consumes
Bounded chronological list of PR timeline issue comments matching the lease marker schema.

## Produces
Authoritative determination of whether the lease is live, expired, tombstoned, or free.

## When applied
Evaluated during every lease acquisition and renewal scan across the pull request timeline.

## Sub-concepts
tombstone

## Part of
pr-autofix-branch-ownership-lease

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The resolution rule governing branch lease discovery on non-transactional comment stores. By treating the chronologically latest marker comment as authoritative, it enables straightforward state transitions (claims, renewals, and tombstones) without requiring edits to prior comments or complex multi-document coordination.
