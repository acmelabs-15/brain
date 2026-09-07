---
package: rjm
name: _find_cycles
slug: find-cycles
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _find_cycles

## Definition — verbatim
(used, not defined)

> "def _find_cycles(successor: dict[int, int]) -> list[list[int]]:" — scripts/validation/check_adr_lifecycle.py:745

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 745 | defined here | Function identifying every cycle in the superseded-by directed graph using path-indexed traversal. |

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
`_find_cycles` is a Python helper function detecting cycles in supersession graphs rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
