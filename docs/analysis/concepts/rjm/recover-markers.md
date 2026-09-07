---
package: rjm
name: recover_markers
slug: recover-markers
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
---

# recover_markers

## Definition — verbatim
(used, not defined)

> "def recover_markers(repo_root: Path, stream: TextIO | None = None) -> int:" — scripts/testing/mutation_workspace.py:470

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_workspace.py | 470 | defined here | Function discovering all stale mutation markers and cleaning up their associated scratch worktrees. |

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
recover_markers is a Python function identifier for batch cleanup of stale mutation worktrees rather than a lifecycle concept.
