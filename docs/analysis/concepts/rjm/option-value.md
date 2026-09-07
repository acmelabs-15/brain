---
package: rjm
name: _option_value
slug: option-value
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _option_value

## Definition — verbatim
(used, not defined)

> "def _option_value(arguments: list[str], option: str) -> str | None:" — scripts/validation/check_build_gates.py:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 73 | defined here | Helper function extracting the argument value for a CLI option from a command token list. |

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
defects: missing-path

## Design notes
`_option_value` is an internal Python helper function identifier in `check_build_gates.py` for parsing CLI argument values rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
