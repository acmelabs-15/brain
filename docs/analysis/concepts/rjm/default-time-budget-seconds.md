---
package: rjm
name: _DEFAULT_TIME_BUDGET_SECONDS
slug: default-time-budget-seconds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _DEFAULT_TIME_BUDGET_SECONDS

## Definition — verbatim
(used, not defined)

> "_DEFAULT_TIME_BUDGET_SECONDS = 60.0" — scripts/maintenance/gc_worktrees.py:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 121 | defined here | Constant bounding the maximum wall clock seconds allowed for worktree evaluation. |

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
_DEFAULT_TIME_BUDGET_SECONDS is a wall-clock execution time limit constant for worktree reporting rather than an SDLC lifecycle concept, classified as name-only per D-023.
