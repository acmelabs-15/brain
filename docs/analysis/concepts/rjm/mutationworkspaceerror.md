---
package: rjm
name: MutationWorkspaceError
slug: mutationworkspaceerror
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# MutationWorkspaceError

## Definition — verbatim
(used, not defined)

> "class MutationWorkspaceError(RuntimeError):" — scripts/testing/mutation_workspace_git.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace_git.py | 39 | defined here | Exception class raised when git operations, workspace isolation, or cleanup cannot be verified. |

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
MutationWorkspaceError is a Python exception class identifier for workspace isolation and cleanup errors rather than a lifecycle concept.
