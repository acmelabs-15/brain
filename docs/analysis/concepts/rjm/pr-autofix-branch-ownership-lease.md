---
package: rjm
name: PR-Autofix Branch-Ownership Lease
slug: pr-autofix-branch-ownership-lease
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

# PR-Autofix Branch-Ownership Lease

## Definition — verbatim
> "# ADR-076: PR-Autofix Branch-Ownership Lease" — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 12 | defined here | Architectural decision title and protocol definition for branch-ownership coordination. |

## Consumes
GitHub pull request timeline, commit HEAD SHA, and caller session identity.

## Produces
Hidden marker comments on the pull request (`<!-- PR-AUTOFIX-LEASE -->`) and structured `lease_collision_blocked` telemetry events.

## When applied
Acquired prior to beginning local or remote automated fix work on shared PR branches.

## Sub-concepts
lease, pr-comment-backed-advisory-fail-open-branch-ownership-lease, lease-storage, pr-autofix-lease, latest-marker-comment-wins, tombstone, lease-ttl, concurrency-semantics, acquire-lease, max-ttl, self-renewal, release-lease

## Part of
pr-autofix

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A lightweight, advisory coordination protocol designed in ADR-076 to prevent concurrent autofix loops from colliding on shared pull request branches. By using PR issue comments as an ephemeral lease store, it enables loops to detect active holders and skip duplicate work before committing resources, while preserving the Force-Push Safety SHA gate as the authoritative repository protection.
