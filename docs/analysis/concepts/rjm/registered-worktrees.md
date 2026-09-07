---
package: rjm
name: registered_worktrees
slug: registered-worktrees
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# registered_worktrees

## Definition — verbatim
(used, not defined)

> "def registered_worktrees(repo_root: Path) -> set[Path]:" — scripts/testing/mutation_workspace_git.py:336

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 336 | defined here | Function querying git to retrieve the set of all registered worktree paths under file lock. |

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
registered_worktrees is a Python function identifier retrieving active worktree paths from git rather than a lifecycle concept.
