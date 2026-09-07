---
package: rjm
name: _OPERATION_MARKERS
slug: operation-markers
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
---

# _OPERATION_MARKERS

## Definition — verbatim
(used, not defined)

> "_OPERATION_MARKERS: tuple[tuple[str, str], ...] = (" — scripts/maintenance/_gc_stale.py:287

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/_gc_stale.py | 287 | defined here | Constant table mapping git lock and state marker file names to human-readable explanations of active operations. |

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
`_OPERATION_MARKERS` is a Python constant tuple mapping git operation markers to warning descriptions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
