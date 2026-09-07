---
package: rjm
name: _is_directory
slug: is-directory
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_directory

## Definition — verbatim
(used, not defined)

> "def _is_directory(path: Path) -> bool:" — scripts/validation/check_shipped_skill_routes.py:376

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 376 | defined here | Returns whether path is a directory without asserting contract requirement. |
| scripts/validation/check_tmp_worktrees.py | 164 | defined here | Checks whether path is a directory, returning None when the filesystem could not answer. |

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
A private directory check helper function in validation scripts, classified as `name-only` per D-023.
