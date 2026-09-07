---
package: rjm
name: KEEP_TIME_BUDGET
slug: keep-time-budget
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KEEP_TIME_BUDGET

## Definition — verbatim
(used, not defined)

> "KEEP_TIME_BUDGET = \"not inspected (time budget exhausted)\"" — scripts/maintenance/worktree_report.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 23 | defined here | Retention reason constant applied when worktree evaluation exhausts its execution time budget. |

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
A retention reason constant identifier in `worktree_report.py` preserving worktrees when evaluation times out rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
