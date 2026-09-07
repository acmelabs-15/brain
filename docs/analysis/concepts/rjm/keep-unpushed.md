---
package: rjm
name: KEEP_UNPUSHED
slug: keep-unpushed
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KEEP_UNPUSHED

## Definition — verbatim
(used, not defined)

> "KEEP_UNPUSHED = \"unpushed commits and not merged to base\"" — scripts/maintenance/worktree_report.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 21 | defined here | Retention reason constant identifying worktrees with unpushed and unmerged commits. |

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
A retention reason constant identifier in `worktree_report.py` preventing loss of unpushed commits rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
