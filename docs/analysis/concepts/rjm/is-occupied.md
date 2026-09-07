---
package: rjm
name: is_occupied
slug: is-occupied
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# is_occupied

## Definition — verbatim
(used, not defined)

> "def is_occupied(path: str, cwds: frozenset[str]) -> bool:" — scripts/maintenance/worktree_occupancy.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 85 | used here | Imported and invoked to protect active worktree paths from removal. |
| scripts/maintenance/worktree_occupancy.py | 96 | defined here | Predicate checking if a live process current working directory sits in path. |

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
is_occupied is a Python predicate testing filesystem path containment against live process directories rather than an SDLC lifecycle concept, classified as name-only per D-023.
