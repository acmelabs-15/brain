---
package: rjm
name: _head_of
slug: head-of
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _head_of

## Definition — verbatim
(used, not defined)

> "def _head_of(path: str, run_git: Callable[..., str]) -> str | None:" — scripts/maintenance/_gc_apply.py:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 184 | defined here | Helper querying current commit hash for a worktree path via git rev-parse HEAD. |

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
Internal helper function querying the current HEAD commit hash for a worktree, classified as name-only per D-023.
