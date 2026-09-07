---
package: rjm
name: worktree_root
slug: worktree-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# worktree_root

## Definition — verbatim
(used, not defined)

> "def worktree_root() -> Path:" — scripts/maintenance/repair_worktree_venv.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_worktree_venv.py | 78 | defined here | Function resolving the current worktree's top-level directory via git `rev-parse`. |

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
A helper function identifier in `repair_worktree_venv.py` resolving top-level git worktree roots rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
