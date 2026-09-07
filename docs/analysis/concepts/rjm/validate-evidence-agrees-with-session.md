---
package: rjm
name: validate_evidence_agrees_with_session
slug: validate-evidence-agrees-with-session
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_session_json.py, sha256: 180dc59dc0fd7cf7e493f5f73d77fbe557de0867b908018276bc92e4288bdf39}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
