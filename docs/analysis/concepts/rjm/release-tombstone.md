---
package: rjm
name: release tombstone
slug: release-tombstone
kind: pattern
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# release tombstone

## Definition — verbatim
> "treating `owner: none` as a release tombstone." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 128 | defined here | Defined as the `owner: none` marker used to signal that a v1 lease has been explicitly released. |

## Consumes
Lease release action from legacy v1 clients or v2 compatibility shims.

## Produces
A tombstone comment record freeing branch reservation.

## When applied
During backward-compatibility scanning when evaluating legacy ADR-076 lease markers.

## Sub-concepts
none

## Part of
holder-lease, pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
A marker pattern (`owner: none`) written to indicate that a previously held lease has been released. It allows new clients to distinguish between an active lease and one that was deliberately surrendered before expiry, supporting safe coexistence between v1 and v2 lease protocols.
