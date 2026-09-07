---
package: rjm
name: _DECIDE_WORKERS
slug: decide-workers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _DECIDE_WORKERS

## Definition — verbatim
(used, not defined)

> "_DECIDE_WORKERS = 8" — scripts/maintenance/gc_worktrees.py:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 107 | defined here | Constant specifying the worker thread count for parallel worktree status checks. |

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
_DECIDE_WORKERS is a concurrency configuration constant setting worker thread pool size rather than an SDLC lifecycle concept, classified as name-only per D-023.
