---
package: rjm
name: validate_session_end
slug: validate-session-end
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_session_json.py, sha256: 180dc59dc0fd7cf7e493f5f73d77fbe557de0867b908018276bc92e4288bdf39}
  - {path: scripts/validation/checks_tooling.py, sha256: e2bb66c5604fcd44f1b055a511bef6ebd5e8992ae473bad34d466c74b96ac738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_session_end

## Definition — verbatim
(used, not defined)

> "def validate_session_end(session_end: dict[str, Any], result: ValidationResult) -> None:" — scripts/validate_session_json.py:886

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 886 | defined here | Defined as a validation function for the sessionEnd checklist section with legacy field support. |
| scripts/validation/checks_tooling.py | 106 | defined here | Defined as an external tool runner function validating changed session logs on the branch. |

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
defects: doc-drift, exit-code-mismatch, missing-path, other

## Design notes
`validate_session_end` is a Python function identifier implemented in `scripts/validate_session_json.py` and `scripts/validation/checks_tooling.py` to validate session-end checklist compliance rather than an SDLC lifecycle concept.
