---
package: rjm
name: marker_directory
slug: marker-directory
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# marker_directory

## Definition — verbatim
(used, not defined)

> "def marker_directory(repo_root: Path) -> Path:" — scripts/testing/mutation_workspace_git.py:152

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 152 | defined here | Function returning the absolute path to the active mutation marker directory within the git directory. |

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
marker_directory is a Python function identifier returning the worktree-specific marker directory path rather than a lifecycle concept.
