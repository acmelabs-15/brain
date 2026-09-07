---
package: rjm
name: _append_apply_result
slug: append-apply-result
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _append_apply_result

## Definition — verbatim
(used, not defined)

> "def _append_apply_result(lines: list[str], report: GcReport) -> None:" — scripts/maintenance/worktree_report.py:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 141 | defined here | Helper function appending worktree removal counts and error details in apply mode. |

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
`_append_apply_result` is an internal helper function identifier in `worktree_report.py` for formatting worktree deletion outcomes in apply mode rather than a lifecycle concept, classified as `name-only` per D-023.
