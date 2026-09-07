---
package: rjm
name: PR Branch Holder Lease
slug: pr-branch-holder-lease
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

# PR Branch Holder Lease

## Definition — verbatim
> "Adopt a fail-closed, PR-comment-backed holder lease for PR branch mutation." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 12 | defined here | Defined in title and decision statement as a concurrency control mechanism for PR branch mutations. |

## Consumes
Repository name, PR number, target branch, holder id, verified GitHub actor, and base SHA.

## Produces
A PR comment marker (`<!-- PR-BRANCH-HOLDER-LEASE -->`) establishing exclusive mutation ownership.

## When applied
Before acquiring, renewing, or executing pushes to open PR branches when multiple agents or workflows operate concurrently.

## Sub-concepts
holder-lease, holder-id, verified-github-actor, lease-timeout, lease-schema

## Part of
none

## Implementation status
not-implemented (Status proposed in ADR-090; citing inventory card records defects: none)

## Design notes
An architectural concurrency control mechanism establishing exclusive branch mutation ownership across multiple agents pushing under a shared GitHub account. By decoupling ownership into a `(verified_actor, holder_id)` tuple stored in PR issue comments, it prevents simultaneous agents from interleaving conflicting commits onto the same PR branch.
