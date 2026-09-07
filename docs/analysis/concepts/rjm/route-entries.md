---
package: rjm
name: _route_entries
slug: route-entries
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _route_entries

## Definition — verbatim
(used, not defined)

> "def _route_entries(entries: list[os.DirEntry[str]], pending: list[Path], found: list[Path]) -> bool:" — scripts/maintenance/_gc_anchors.py:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_anchors.py | 138 | defined here | Helper routing scanned filesystem directory entries to pending search or found file lists. |

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
Internal helper function routing directory entries during directory traversal, classified as name-only per D-023.
