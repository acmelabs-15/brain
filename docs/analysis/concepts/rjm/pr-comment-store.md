---
package: rjm
name: PR comment store
slug: pr-comment-store
kind: artifact
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

# PR comment store

## Definition — verbatim
> "The PR comment store is the source of record." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 121 | defined here | Defined as the authoritative source of record for PR branch holder leases. |

## Consumes
GitHub issue comments posted via API on pull requests.

## Produces
Ordered timeline of lease claim, renewal, release, and override markers.

## When applied
Scanned by enforcement tooling to determine current branch ownership.

## Sub-concepts
none

## Part of
pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
The GitHub pull request issue comment thread utilized as a decentralized, auditable distributed state store. Because agents share GitHub access and lack a centralized database, issue comments provide an inspectable and persistent medium for lease markers, with ordering determined by monotonically increasing comment IDs.
