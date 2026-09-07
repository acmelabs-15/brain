---
package: rjm
name: _validate_metadata_field
slug: validate-metadata-field
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _validate_metadata_field

## Definition — verbatim
(used, not defined)

> "def _validate_metadata_field(data: dict) -> list[str]:" — scripts/validate_skill_output.py:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_output.py | 144 | defined here | Validates that Metadata is present, an object, and validates Script, Timestamp, and Version subfields. |

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
`_validate_metadata_field` is an internal Python validator function identifier validating top-level Metadata dictionary structure rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
