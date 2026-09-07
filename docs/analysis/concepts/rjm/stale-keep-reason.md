---
package: rjm
name: stale_keep_reason
slug: stale-keep-reason
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# stale_keep_reason

## Definition — verbatim
(used, not defined)

> "def stale_keep_reason(worktree: Worktree, main_path: str, run_git: Callable[..., str]) -> str:" — scripts/maintenance/_gc_reasons.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 71 | defined here | Function generating aggregate retention advice and rescue commands across HEAD, staged content, and admin reflog loss channels. |

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
`stale_keep_reason` is a Python function identifier aggregating loss warnings and retention commands for stale worktrees rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
