---
package: rjm
name: SCRATCH_DIRECTORY
slug: scratch-directory
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# SCRATCH_DIRECTORY

## Definition — verbatim
(used, not defined)

> "SCRATCH_DIRECTORY = Path(\".pytest_cache\") / \"mutation-worktrees\"" — scripts/testing/mutation_workspace_git.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 16 | defined here | Constant defining the default scratch directory path under pytest cache for temporary mutation worktrees. |

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
SCRATCH_DIRECTORY is a Python constant identifier defining the scratch directory path for disposable worktrees rather than a lifecycle concept.
