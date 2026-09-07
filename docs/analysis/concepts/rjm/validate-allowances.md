---
package: rjm
name: _validate_allowances
slug: validate-allowances
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _validate_allowances

## Definition — verbatim
(used, not defined)

> "def _validate_allowances(allowed: set[str], base_allowances: set[str] | None) -> None:" — scripts/validation/check_adr_links.py:794

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 794 | defined here | Function validating baseline entry format and ensuring branches do not widen baseline allowances. |

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
`_validate_allowances` is a Python validation function identifier in `check_adr_links.py` enforcing baseline format and ratchet rules rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
