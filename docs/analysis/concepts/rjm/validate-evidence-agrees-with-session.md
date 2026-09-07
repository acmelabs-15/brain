---
package: rjm
name: validate_evidence_agrees_with_session
slug: validate-evidence-agrees-with-session
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_evidence_agrees_with_session

## Definition — verbatim
(used, not defined)

> "def validate_evidence_agrees_with_session(data: dict[str, Any], result: ValidationResult) -> None:" — scripts/validate_session_json.py:621

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 621 | defined here | Defined as a validation function ensuring checklist evidence strings agree with session metadata. |

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
`validate_evidence_agrees_with_session` is a Python function identifier in `scripts/validate_session_json.py` detecting copy-paste contradictions between checklist evidence and session metadata rather than an independent lifecycle concept.
