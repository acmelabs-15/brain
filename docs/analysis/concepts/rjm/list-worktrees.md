---
package: rjm
name: list_worktrees
slug: list-worktrees
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# list_worktrees

## Definition — verbatim
(used, not defined)

> "def list_worktrees(run_git: Callable[..., str]) -> list[Worktree]:" — scripts/maintenance/_gc_parse.py:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_parse.py | 56 | defined here | Parsing function reading git worktree list --porcelain into a list of Worktree dataclass instances. |

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
`list_worktrees` is a Python utility function identifier in `_gc_parse.py` converting git porcelain output into structured records rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
