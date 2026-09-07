---
package: rjm
name: _main_work_tree
slug: main-work-tree
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _main_work_tree

## Definition — verbatim
(used, not defined)

> "staged index. :func:`_main_work_tree` carries the measurements." — scripts/validation/check_repo_health.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 42 | defined here | Referenced in module docstring explaining discovery of primary worktree via index and common directory. |

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
`_main_work_tree` is an internal Python helper function that resolves the repository's intended primary worktree path from metadata and index state, classified as `kind: name-only` per D-023.
