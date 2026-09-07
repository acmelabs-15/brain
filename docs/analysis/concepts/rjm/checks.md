---
package: rjm
name: CHECKS
slug: checks
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# CHECKS

## Definition — verbatim
(used, not defined)

> "CHECKS: tuple[str, ...] = (" — scripts/validation/check_adr_lifecycle.py:141

## Also called — verbatim
`_CHECKS` — scripts/validation/check_generated_staleness.py:150

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 141 | defined here | Constant tuple enumerating the active check identifiers for ADR lifecycle validation. |
| scripts/validation/check_generated_staleness.py | 150 | defined here | Constant tuple enumerating ordered generator validation checks for checking generated staleness. |

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
A Python constant tuple identifier defining the registered list of validation checks, classified as `name-only` per D-023 because it is a code constant rather than a development lifecycle concept.
