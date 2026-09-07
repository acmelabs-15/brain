---
package: rjm
name: load_or_build
slug: load-or-build
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# load_or_build

## Definition — verbatim
(used, not defined)

> "def load_or_build(" — scripts/test_selection/import_graph.py:317

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/import_graph.py | 317 | defined here | Compatibility wrapper returning only the forward import graph dictionary via load_or_build_data. |

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
`load_or_build` is a Python compatibility function identifier in `scripts/test_selection/import_graph.py` providing cached access to the forward import graph dictionary rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
