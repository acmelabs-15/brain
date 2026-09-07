---
package: rjm
name: reset_worktree_identity
slug: reset-worktree-identity
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/worktree_identity.py, sha256: 36700625c87e8d563611dada7ed338508e8cb01b6b192a04506887501a31b8f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reset_worktree_identity

## Definition — verbatim
(used, not defined)

> "def reset_worktree_identity(" — scripts/github_core/worktree_identity.py:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/worktree_identity.py | 59 | defined here | Unsets local user.name and user.email and sets bot credentials if running in bot mode to prevent leaked placeholder identities. |

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
clean

## Design notes
A Python utility function that configures git author identity in git worktrees, classified as name-only per D-023.
