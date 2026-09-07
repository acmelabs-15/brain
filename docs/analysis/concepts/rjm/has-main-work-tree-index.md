---
package: rjm
name: _has_main_work_tree_index
slug: has-main-work-tree-index
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _has_main_work_tree_index

## Definition — verbatim
(used, not defined)

> "def _has_main_work_tree_index(common_dir: Path) -> bool:" — scripts/validation/check_repo_health.py:323

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 323 | defined here | Helper function verifying non-empty index file (> 32 bytes) exists in common git directory. |

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
`_has_main_work_tree_index` is a Python helper function checking whether the common Git directory contains a populated staged index file, classified as `kind: name-only` per D-023.
