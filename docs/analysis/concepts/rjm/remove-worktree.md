---
package: rjm
name: remove_worktree
slug: remove-worktree
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# remove_worktree

## Definition — verbatim
(used, not defined)

> "def remove_worktree(path: str, run_git: Callable[..., str]) -> None:" — scripts/maintenance/_gc_apply.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 29 | defined here | Function executing git worktree remove via runner callable with failure raising. |
| scripts/testing/mutation_workspace_git.py | 311 | defined here | Function removing mutation test scratch worktree safely within designated scratch directory. |

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
Function identifier implementing worktree deletion operations in maintenance and test modules, classified as name-only per D-023.
