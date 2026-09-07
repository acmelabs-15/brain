---
package: rjm
name: next_free_number
slug: next-free-number
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# next_free_number

## Definition — verbatim
(used, not defined)

> "def next_free_number(by_number: dict[int, list[Path]]) -> int:" — scripts/validation/check_adr_uniqueness.py:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_uniqueness.py | 70 | defined here | Computes the next available sequential integer for new architecture decision records. |

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
A Python function identifier in check_adr_uniqueness.py that calculates the next sequential ADR identifier, classified as name-only per D-023.
