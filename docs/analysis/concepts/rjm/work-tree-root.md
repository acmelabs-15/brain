---
package: rjm
name: _work_tree_root
slug: work-tree-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _work_tree_root

## Definition — verbatim
(used, not defined)

> "def _work_tree_root(start: Path, common_dir: Path) -> Path | None:" — scripts/validation/check_repo_health.py:259

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 259 | defined here | Helper function walking parent directories to find the checkout matching the common git directory. |

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
`_work_tree_root` is an internal Python helper function locating the enclosing working tree whose `.git` marker links to the common Git directory, classified as `kind: name-only` per D-023.
