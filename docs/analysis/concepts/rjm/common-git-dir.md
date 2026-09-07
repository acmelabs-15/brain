---
package: rjm
name: _common_git_dir
slug: common-git-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _common_git_dir

## Definition — verbatim
(used, not defined)

> "def _common_git_dir(repo_root: Path, budget: GitBudget) -> Path:" — scripts/validation/check_repo_health.py:282

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 282 | defined here | Helper function running rev-parse --path-format=absolute --git-common-dir. |

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
`_common_git_dir` is an internal Python helper function querying `rev-parse --git-common-dir` to determine the shared Git repository root, classified as `kind: name-only` per D-023.
