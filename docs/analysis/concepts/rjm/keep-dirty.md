---
package: rjm
name: KEEP_DIRTY
slug: keep-dirty
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KEEP_DIRTY

## Definition — verbatim
(used, not defined)

> "KEEP_DIRTY = \"uncommitted changes\"" — scripts/maintenance/worktree_report.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 19 | defined here | Retention reason constant identifying worktrees containing uncommitted modifications. |

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
A retention reason constant identifier in `worktree_report.py` preventing deletion of dirty worktrees rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
