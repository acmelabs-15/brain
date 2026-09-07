---
package: rjm
name: _validate_error_field
slug: validate-error-field
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _validate_error_field

## Definition — verbatim
(used, not defined)

> "def _validate_error_field(data: dict) -> list[str]:" — scripts/validate_skill_output.py:226

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_output.py | 226 | defined here | Validates that Error key exists, satisfies oneOf(null, object), and is non-null when Success is false. |

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
`_validate_error_field` is an internal Python validator function identifier validating the top-level Error object structure in skill envelopes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
