---
package: rjm
name: _validate_metadata_string_field
slug: validate-metadata-string-field
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_skill_output.py, sha256: b92bfbfc72a709b2762ae3121e5bbe8d7c78374cf6562003156836754af3ca2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
