---
package: rjm
name: PR-comment-backed, advisory, fail-open branch-ownership lease
slug: pr-comment-backed-advisory-fail-open-branch-ownership-lease
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

# PR-comment-backed, advisory, fail-open branch-ownership lease

## Definition — verbatim
> "Adopt a **PR-comment-backed, advisory, fail-open branch-ownership lease** that `pr-autofix` (local) and remote review/autofix routines acquire before committing fix work to a shared PR branch, and release when done." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 55 | defined here | Architectural decision adopting comment-backed fail-open leases for branch ownership. |

## Consumes
GitHub pull request timeline, commit HEAD SHA, and caller session identity.

## Produces
Machine-readable marker comments (`<!-- PR-AUTOFIX-LEASE -->`) posted to the pull request timeline.

## When applied
Acquired by automated loops before committing fix work to shared PR branches and released upon completion.

## Sub-concepts
lease-storage, lease-ttl, latest-marker-comment-wins, tombstone

## Part of
pr-autofix-branch-ownership-lease

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The canonical specification of ADR-076's coordination mechanism: an advisory branch lease stored in PR comments that coordinates concurrent automation loops without introducing external lock infrastructure. By deliberately failing open on store unavailability or parse failure, it prevents coordination outages from becoming workflow blockers.
