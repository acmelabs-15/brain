---
package: rjm
name: _validate_metadata_field
slug: validate-metadata-field
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
