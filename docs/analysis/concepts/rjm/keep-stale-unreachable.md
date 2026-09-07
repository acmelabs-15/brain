---
package: rjm
name: KEEP_STALE_UNREACHABLE
slug: keep-stale-unreachable
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# KEEP_STALE_UNREACHABLE

## Definition — verbatim
(used, not defined)

> "working tree gone and no ref contains its HEAD" — scripts/maintenance/worktree_report.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 42 | used here | Imported from worktree_report and formatted into a warning when a stale worktree's HEAD is unreachable from any ref. |
| scripts/maintenance/worktree_report.py | 25 | defined here | Constant string defining retention reason when a working tree is gone and no ref contains its HEAD. |

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
`KEEP_STALE_UNREACHABLE` is a Python constant identifier in `worktree_report.py` describing unreferenced HEAD state rather than a lifecycle concept, classified as `kind: name-only` per D-023.
