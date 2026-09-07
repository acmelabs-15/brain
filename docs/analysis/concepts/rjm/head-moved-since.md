---
package: rjm
name: _head_moved_since
slug: head-moved-since
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _head_moved_since

## Definition — verbatim
(used, not defined)

> "def _head_moved_since(path: str, expected: str | None, run_git: Callable[..., str]) -> str:" — scripts/maintenance/_gc_apply.py:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_apply.py | 192 | defined here | Helper comparing current worktree HEAD commit against expected commit recorded during recheck. |

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
Internal helper function detecting HEAD commit movement since previous recheck, classified as name-only per D-023.
