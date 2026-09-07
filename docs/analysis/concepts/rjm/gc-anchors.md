---
package: rjm
name: _gc_anchors
slug: gc-anchors
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _gc_anchors

## Definition — verbatim
(used, not defined)

> "from scripts.maintenance import _gc_anchors" — scripts/maintenance/_gc_stale.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 17 | used here | Internal module imported for worktree garbage collection anchor analysis. |

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
_gc_anchors is an internal Python maintenance module identifier imported in _gc_stale.py rather than a lifecycle concept, classified as name-only per D-023.
