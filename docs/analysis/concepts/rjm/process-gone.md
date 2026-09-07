---
package: rjm
name: _PROCESS_GONE
slug: process-gone
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _PROCESS_GONE

## Definition — verbatim
(used, not defined)

> "_PROCESS_GONE = frozenset({errno.ENOENT, errno.ESRCH})" — scripts/maintenance/worktree_occupancy.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_occupancy.py | 40 | defined here | Set of OS errno values indicating a process terminated during inspection. |

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
An internal errno constant set identifier in `worktree_occupancy.py` used to filter vanished processes rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
