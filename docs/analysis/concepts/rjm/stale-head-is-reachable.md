---
package: rjm
name: stale_head_is_reachable
slug: stale-head-is-reachable
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# stale_head_is_reachable

## Definition — verbatim
(used, not defined)

> "def stale_head_is_reachable(head: str | None, run_git: Callable[..., str]) -> bool | None:" — scripts/maintenance/_gc_reasons.py:217

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_reasons.py | 217 | defined here | Tri-state predicate checking via git for-each-ref --contains whether any ref contains a stale worktree's HEAD commit. |

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
`stale_head_is_reachable` is a Python function identifier evaluating ref containment for detached HEAD commits rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
