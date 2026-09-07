---
package: rjm
name: validate_against_schema
slug: validate-against-schema
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
