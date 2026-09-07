---
package: rjm
name: KEEP_STALE_OCCUPIED
slug: keep-stale-occupied
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# KEEP_STALE_OCCUPIED

## Definition — verbatim
(used, not defined)

> "KEEP_STALE_OCCUPIED = (" — scripts/maintenance/worktree_report.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 41 | used here | Imported from worktree_report and selected as retention advice when a registered stale path still exists on disk. |
| scripts/maintenance/worktree_report.py | 34 | defined here | Constant string defining retention advice when a stale admin entry's path is occupied by another checkout or data. |

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
`KEEP_STALE_OCCUPIED` is a Python string constant identifier in `worktree_report.py` cautioning against removing admin entries whose paths are occupied, classified as `kind: name-only` per D-023.
