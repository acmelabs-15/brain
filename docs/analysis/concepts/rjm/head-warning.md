---
package: rjm
name: _head_warning
slug: head-warning
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _head_warning

## Definition — verbatim
(used, not defined)

> "def _head_warning(head: str | None, main_path: str, run_git: Callable[..., str]) -> str:" — scripts/maintenance/_gc_reasons.py:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 134 | defined here | Private helper generating a warning and rescue command when clearing a worktree entry would abandon a detached HEAD commit. |

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
`_head_warning` is an internal Python function identifier formatting detached HEAD rescue advice rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
