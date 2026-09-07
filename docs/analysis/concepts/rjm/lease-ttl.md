---
package: rjm
name: Lease TTL
slug: lease-ttl
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Lease TTL

## Definition — verbatim
> "The lease TTL is 15 minutes. A lease whose `expires_at` is in the past is dead, regardless of any release step." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:78

## Also called — verbatim
`lease timeout` — .agents/architecture/ADR-090-pr-branch-holder-lease.md:40

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 76 | defined here | Defined in section heading and text as a 15-minute self-expiring liveness period. |
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 69 | defined here | Extended to 30 minutes with mandatory 5-minute renewal during long test operations. |

## Consumes
Acquisition timestamp (`acquired_at`) and reader-clock reference time.

## Produces
Calculated expiration timestamp (`expires_at`) embedded in lease markers.

## When applied
Governs the validity window for branch ownership across all lease acquisition and renewal checks.

## Sub-concepts
max-ttl, self-renewal

## Part of
pr-autofix-branch-ownership-lease

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The time-to-live parameter governing branch-ownership lease validity. Serving as the primary liveness mechanism, it guarantees that crashed or wedged automation processes cannot indefinitely lock a branch, allowing ownership to evaporate naturally without requiring active heartbeats or external janitor processes.
