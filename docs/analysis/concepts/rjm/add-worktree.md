---
package: rjm
name: add_worktree
slug: add-worktree
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# add_worktree

## Definition — verbatim
(used, not defined)

> "def add_worktree(repo_root: Path, scratch_root: Path) -> None:" — scripts/testing/mutation_workspace_git.py:294

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 294 | defined here | Function creating a detached git worktree at a designated scratch path while holding a state lock. |

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
add_worktree is a Python function identifier managing locked git worktree creation rather than a lifecycle concept.
