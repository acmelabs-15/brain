---
package: rjm
name: lease
slug: lease
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

# lease

## Definition — verbatim
> "The coordination primitive here is a *lease*: a short-lived, advisory claim that one automation loop is actively working a fix on a specific PR branch." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 47 | defined here | Defined in section heading as a short-lived, advisory claim for branch coordination. |

## Consumes
Holder identity, PR branch ref, target repository, and short expiration duration (TTL).

## Produces
Advisory branch claim metadata recorded on pull request comments.

## When applied
Acquired prior to mutating shared pull request branches to signal active automation ownership.

## Sub-concepts
pr-autofix-branch-ownership-lease, lease-ttl, acquire-lease, release-lease

## Part of
pr-autofix-branch-ownership-lease

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A coordination primitive providing short-lived, advisory ownership of pull request branches across autonomous agent routines. Unlike heavyweight distributed locks requiring consensus backends, it fails open to prevent store outages from blocking development workflows, relying on push-time SHA gates as the ultimate safety backstop.
