---
package: rjm
name: occupied_paths
slug: occupied-paths
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# occupied_paths

## Definition — verbatim
(used, not defined)

> "def occupied_paths() -> Occupancy:" — scripts/maintenance/worktree_occupancy.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 86 | used here | Imported and called to collect live process directories prior to pruning. |
| scripts/maintenance/worktree_occupancy.py | 43 | defined here | Function scanning /proc to discover working directories of active processes. |

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
occupied_paths is a Python system function scanning /proc for active processes rather than an SDLC lifecycle concept, classified as name-only per D-023.
