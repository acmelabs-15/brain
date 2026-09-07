---
package: rjm
name: _WORK_TREE_FATAL
slug: work-tree-fatal
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _WORK_TREE_FATAL

## Definition — verbatim
(used, not defined)

> "_WORK_TREE_FATAL = " — scripts/validation/check_repo_health_report.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 54 | defined here | Constant string representing Git's fatal error message when a worktree operation fails on a bare repository. |

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
`_WORK_TREE_FATAL` is a Python string constant representing Git's fatal error message emitted when worktree operations fail on bare repositories, classified as `kind: name-only` per D-023.
