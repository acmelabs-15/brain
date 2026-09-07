---
package: rjm
name: tombstone
slug: tombstone
kind: artifact
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

# tombstone

## Definition — verbatim
> "Release writes a tombstone (`owner: none`, `expires_at` in the past) by editing the actor's own comment or by posting a new tombstone comment when the actor cannot edit the existing marker (different token owner)." — .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 72 | defined here | Defined as an explicit release record setting owner to none and expires_at to the past. |

## Consumes
Existing lease comment ID or permission to post a new timeline comment upon task release.

## Produces
A tombstoned comment marker indicating that the branch lease is immediately free.

## When applied
Written during `release_lease` when an automation loop finishes fix work or exits early.

## Sub-concepts
none

## Part of
pr-autofix-branch-ownership-lease, release-lease

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An explicit lease release record posted or edited onto the PR timeline that sets `owner: none` and `expires_at` in the past. It immediately frees the branch for subsequent automation loops without forcing them to wait for the TTL to expire naturally.
