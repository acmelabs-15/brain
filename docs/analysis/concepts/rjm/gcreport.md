---
package: rjm
name: GcReport
slug: gcreport
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# GcReport

## Definition — verbatim
(used, not defined)

> "class GcReport:" — scripts/maintenance/worktree_report.py:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 26 | used here | Imported as type annotation for plan report inputs in apply_removals and _refuses_to_mutate. |
| scripts/maintenance/gc_worktrees.py | 100 | used here | Imported to instantiate and format worktree garbage collection report results. |
| scripts/maintenance/worktree_report.py | 80 | defined here | Dataclass representing a complete garbage collection plan across all repository worktrees. |

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
Dataclass identifier representing the collected garbage-collection plan across all worktrees, classified as name-only per D-023.
