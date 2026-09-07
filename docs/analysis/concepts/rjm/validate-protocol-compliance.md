---
package: rjm
name: validate_protocol_compliance
slug: validate-protocol-compliance
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_protocol_compliance

## Definition — verbatim
(used, not defined)

> "def validate_protocol_compliance(" — scripts/validate_session_json.py:999

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 999 | defined here | Defined as a validation function verifying protocol compliance sections in session logs. |

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
defects: doc-drift, missing-path

## Design notes
`validate_protocol_compliance` is a Python function identifier in `scripts/validate_session_json.py` orchestrating validation across sessionStart and sessionEnd checklists rather than an independent lifecycle concept.
