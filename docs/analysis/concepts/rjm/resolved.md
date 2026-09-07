---
package: rjm
name: _resolved
slug: resolved
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _resolved

## Definition — verbatim
(used, not defined)

> "def _resolved(path: Path) -> Path:" — scripts/maintenance/_gc_stale.py:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 69 | defined here | Private helper function normalizing filesystem paths for comparison. |

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
_resolved is a Python helper function in _gc_stale.py normalizing filesystem paths rather than an SDLC lifecycle concept, classified as name-only per D-023.
