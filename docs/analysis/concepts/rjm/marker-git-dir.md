---
package: rjm
name: _marker_git_dir
slug: marker-git-dir
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _marker_git_dir

## Definition — verbatim
(used, not defined)

> "def _marker_git_dir(marker: Path) -> Path | None:" — scripts/validation/check_repo_health.py:234

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 234 | defined here | Helper function resolving target git directory from a .git marker file. |

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
`_marker_git_dir` is a Python helper function that safely resolves the target directory referenced by a worktree's `.git` pointer file, classified as `kind: name-only` per D-023.
