---
package: rjm
name: Issue #3170
slug: issue-3170
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# Issue #3170

## Definition — verbatim
(used, not defined)

> "Related: Issue #3170 (moving a worktree leaves the uv shebangs stale), #3097" — scripts/maintenance/repair_worktree_venv.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_worktree_venv.py | 38 | used here | Issue tracker reference documenting the defect where moving a worktree leaves stale shebangs in `.venv` launchers. |

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
A GitHub issue identifier documenting stale virtual environment shebangs after worktree moves rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
