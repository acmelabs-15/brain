---
package: rjm
name: _validate_metadata_version_field
slug: validate-metadata-version-field
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _validate_metadata_version_field

## Definition — verbatim
(used, not defined)

> "def _validate_metadata_version_field(metadata: dict) -> list[str]:" — scripts/validate_skill_output.py:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_output.py | 125 | defined here | Validates that Metadata.Version is a string when present in the metadata mapping. |

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
`_validate_metadata_version_field` is an internal Python validator function identifier verifying the optional Version field in metadata rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
