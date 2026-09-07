---
package: rjm
name: MutationWorkspace
slug: mutationworkspace
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# MutationWorkspace

## Definition — verbatim
(used, not defined)

> "class MutationWorkspace:" — scripts/testing/mutation_workspace.py:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace.py | 63 | defined here | Dataclass encapsulating the scratch worktree directory, marker file path, and target snapshots. |

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
defects: orphan

## Design notes
MutationWorkspace is a Python dataclass identifier representing an active isolated worktree context rather than a lifecycle concept.
