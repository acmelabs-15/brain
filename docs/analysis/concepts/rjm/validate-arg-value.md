---
package: rjm
name: _validate_arg_value
slug: validate-arg-value
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _validate_arg_value

## Definition — verbatim
> "def _validate_arg_value(key: str, value: str) -> None:" — scripts/mcp_cli/wrapper.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mcp_cli/wrapper.py | 47 | defined here | Helper function validating CLI argument values against injection attacks by rejecting dash prefixes and NUL bytes. |

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
`_validate_arg_value` is an internal security validation function in `scripts/mcp_cli/wrapper.py` preventing CLI argument injection attacks rather than a lifecycle concept, classified as `name-only` per D-023.
