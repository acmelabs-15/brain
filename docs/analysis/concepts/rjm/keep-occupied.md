---
package: rjm
name: KEEP_OCCUPIED
slug: keep-occupied
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KEEP_OCCUPIED

## Definition — verbatim
(used, not defined)

> "KEEP_OCCUPIED = \"in use by a running process\"" — scripts/maintenance/worktree_report.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 24 | defined here | Retention reason constant identifying worktrees currently hosting a live process. |

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
A retention reason constant identifier in `worktree_report.py` preventing deletion of active worktrees rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
