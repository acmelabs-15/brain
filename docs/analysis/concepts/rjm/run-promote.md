---
package: rjm
name: run_promote
slug: run-promote
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# run_promote

## Definition — verbatim
(used, not defined)

> "def run_promote(data: dict[str, Any], now: int) -> list[str]:" — scripts/skillbook.py:281

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 281 | defined here | Iterates through all policies in the registry, triggering promotion evaluations and tracking changed policy IDs. |

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
defects: doc-drift

## Design notes
run_promote is a Python function identifier running batch promotion over registry policies rather than an SDLC lifecycle concept, classified as name-only per D-023.
