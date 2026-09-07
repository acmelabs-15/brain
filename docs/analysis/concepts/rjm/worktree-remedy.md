---
package: rjm
name: WORKTREE_REMEDY
slug: worktree-remedy
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# WORKTREE_REMEDY

## Definition — verbatim
(used, not defined)

> "WORKTREE_REMEDY = f\"git config --worktree --unset-all core.hooksPath && {REMEDY}\"" — scripts/validation/check_git_hook_health.py:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 75 | defined here | Constant command string to unset worktree-scoped core.hooksPath and reinstall lefthook. |

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
WORKTREE_REMEDY is a Python constant identifier for unsetting worktree-scoped git configuration rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
