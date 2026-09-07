---
package: rjm
name: _validate_metadata_string_field
slug: validate-metadata-string-field
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _validate_metadata_string_field

## Definition — verbatim
(used, not defined)

> "def _validate_metadata_string_field(metadata: dict, field: str) -> list[str]:" — scripts/validate_skill_output.py:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_output.py | 96 | defined here | Validates that required metadata sub-fields (Script, Timestamp) are present non-empty strings. |

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
`_validate_metadata_string_field` is an internal Python validator function identifier checking required string properties inside metadata objects rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
