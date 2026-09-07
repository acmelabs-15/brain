---
package: rjm
name: _reported_main_worktree
slug: reported-main-worktree
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _reported_main_worktree

## Definition — verbatim
(used, not defined)

> "def _reported_main_worktree(repo_root: Path, budget: GitBudget) -> Path | None:" — scripts/validation/check_repo_health.py:295

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 295 | defined here | Helper function parsing the first worktree line of git worktree list --porcelain. |

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
`_reported_main_worktree` is an internal Python helper function parsing `git worktree list --porcelain` to extract the primary worktree path, classified as `kind: name-only` per D-023.
