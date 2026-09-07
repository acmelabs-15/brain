---
package: rjm
name: git_root
slug: git-root
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# git_root

## Definition — verbatim
(used, not defined)

> "def git_root(path: Path) -> Path:" — scripts/testing/mutation_workspace_git.py:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 125 | defined here | Function discovering and validating the top-level repository worktree root containing a given path. |

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
git_root is a Python function identifier for resolving the root directory of a git repository worktree rather than a lifecycle concept.
