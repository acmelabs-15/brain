---
package: rjm
name: reset_worktree_identity
slug: reset-worktree-identity
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
