---
package: rjm
name: _holds_checked_out_content
slug: holds-checked-out-content
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _holds_checked_out_content

## Definition — verbatim
(used, not defined)

> "def _holds_checked_out_content(work_tree: Path) -> bool:" — scripts/validation/check_repo_health.py:309

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 309 | defined here | Helper function verifying directory holds entries besides .git. |

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
`_holds_checked_out_content` is a Python helper function verifying that a candidate worktree directory contains files other than `.git`, classified as `kind: name-only` per D-023.
