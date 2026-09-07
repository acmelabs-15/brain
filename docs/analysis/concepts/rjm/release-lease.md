---
package: rjm
name: release_lease
slug: release-lease
kind: name-only
package_phase: none
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

# release_lease

## Definition — verbatim
(used, not defined)

> "Release (`release_lease`): edit the lease comment to a tombstone. Release is best-effort; a missed release is covered by TTL expiry." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 100 | defined here | Defined as the helper function editing a PR lease marker comment to a tombstone upon completion. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Function identifier in ADR-076 for the branch lease release procedure rather than an operational lifecycle concept.
