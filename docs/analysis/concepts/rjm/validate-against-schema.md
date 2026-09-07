---
package: rjm
name: validate_against_schema
slug: validate-against-schema
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_session_json.py, sha256: 180dc59dc0fd7cf7e493f5f73d77fbe557de0867b908018276bc92e4288bdf39}
  - {path: scripts/validation/validate_skillbook.py, sha256: b414daf9f7283aa07ac84ac29d87b726bca25f0845a465a3df01d28667f22607}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_against_schema

## Definition — verbatim
(used, not defined)

> "def validate_against_schema(" — scripts/validate_session_json.py:1044

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 1044 | defined here | Defined as a validation function verifying session logs against JSON Schema with draft-07 metaschema checks. |
| scripts/validation/validate_skillbook.py | 214 | defined here | Defined as a validation function verifying JSON instances against schema files using SchemaChecker. |

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
defects: doc-drift, missing-path, orphan

## Design notes
`validate_against_schema` is a Python function identifier implemented in `scripts/validate_session_json.py` and `scripts/validation/validate_skillbook.py` that validates JSON data against JSON Schema files rather than an SDLC lifecycle concept.
