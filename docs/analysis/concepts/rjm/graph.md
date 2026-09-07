---
package: rjm
name: _Graph
slug: graph
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _Graph

## Definition — verbatim
(used, not defined)

> "class _Graph:" — scripts/validation/check_adr_lifecycle.py:710

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 710 | defined here | Dataclass representing resolved supersession edges across the corpus and findings produced during resolution. |

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
`_Graph` is a Python dataclass in check_adr_lifecycle.py holding supersession graph structure rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
