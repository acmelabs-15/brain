---
package: rjm
name: find_new_duplicates
slug: find-new-duplicates
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# find_new_duplicates

## Definition — verbatim
(used, not defined)

> "def find_new_duplicates(" — scripts/validation/check_adr_uniqueness.py:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_uniqueness.py | 58 | defined here | Function detecting duplicate ADR numbers not covered by the historical allowlist. |

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
`find_new_duplicates` is a Python helper function identifier in `check_adr_uniqueness.py` filtering duplicate ADR file occurrences rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
