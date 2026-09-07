---
package: rjm
name: _print_violations
slug: print-violations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _print_violations

## Definition — verbatim
(used, not defined)

> "def _print_violations(violations: list[Violation], checks: set[str], limit: int) -> None:" — scripts/validation/check_adr_lifecycle.py:990

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 990 | defined here | Helper function formatting and printing violation reports up to a specified limit. |

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
`_print_violations` is a Python helper function formatting CLI violation output rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
