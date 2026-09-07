---
package: rjm
name: Occupancy
slug: occupancy
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# Occupancy

## Definition — verbatim
(used, not defined)

> "class Occupancy(NamedTuple):" — scripts/maintenance/worktree_occupancy.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 84 | used here | Imported to receive process occupancy scan data for worktree pruning decisions. |
| scripts/maintenance/worktree_occupancy.py | 17 | defined here | NamedTuple holding live-process working directories and unreadable process count. |

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
Occupancy is a Python NamedTuple representing live process working directory scan results rather than an SDLC lifecycle concept, classified as name-only per D-023.
