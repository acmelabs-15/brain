---
package: rjm
name: _requirement_strings
slug: requirement-strings
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _requirement_strings

## Definition — verbatim
(used, not defined)

> "def _requirement_strings(value: object) -> list[str]:" — scripts/validation/check_ci_dependency_pins.py:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_ci_dependency_pins.py | 122 | defined here | Helper function filtering requirement strings from TOML lists while ignoring table includes. |

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
`_requirement_strings` is an internal Python helper function identifier in `check_ci_dependency_pins.py` filtering dependency strings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
