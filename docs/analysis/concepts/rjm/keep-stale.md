---
package: rjm
name: KEEP_STALE
slug: keep-stale
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# KEEP_STALE

## Definition — verbatim
(used, not defined)

> "KEEP_STALE = (" — scripts/maintenance/worktree_report.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 39 | used here | Imported from worktree_report and formatted into retention advice when a stale worktree path is confirmed absent. |
| scripts/maintenance/worktree_report.py | 29 | defined here | Constant string defining the retention reason and recovery guidance for a stale admin entry whose working tree is gone. |

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
`KEEP_STALE` is a Python string constant identifier in `worktree_report.py` providing retention advice for missing worktree paths rather than a lifecycle concept, classified as `kind: name-only` per D-023.
