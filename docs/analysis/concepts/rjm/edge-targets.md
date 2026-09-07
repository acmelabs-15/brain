---
package: rjm
name: _edge_targets
slug: edge-targets
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _edge_targets

## Definition — verbatim
(used, not defined)

> "def _edge_targets(" — scripts/validation/check_adr_lifecycle.py:686

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 686 | defined here | Function resolving ID references into usable integer targets and collecting target-exists findings. |

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
`_edge_targets` is a Python helper function in check_adr_lifecycle.py resolving supersession targets rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
