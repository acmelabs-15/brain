---
package: rjm
name: _append_disposition_group
slug: append-disposition-group
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _append_disposition_group

## Definition — verbatim
(used, not defined)

> "def _append_disposition_group(lines: list[str], decisions: list[Decision]) -> None:" — scripts/maintenance/worktree_report.py:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/worktree_report.py | 131 | defined here | Helper function appending kept branches requiring manual disposition to GC report lines. |

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
`_append_disposition_group` is an internal helper function identifier in `worktree_report.py` for formatting branch cleanup notices in worktree garbage collection reports rather than a lifecycle concept, classified as `name-only` per D-023.
