---
package: rjm
name: KEEP_ADMIN_ONLY
slug: keep-admin-only
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KEEP_ADMIN_ONLY

## Definition — verbatim
(used, not defined)

> "would have been removed, but its admin directory is the only anchor for work" — scripts/maintenance/worktree_report.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 38 | defined here | Constant defining the reason string for retaining a worktree whose admin directory is the sole anchor for work. |

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
`KEEP_ADMIN_ONLY` is a Python string constant identifier defining a worktree retention reason in `worktree_report.py` rather than an autonomous SDLC lifecycle concept, classified as `kind: name-only` per D-023.
