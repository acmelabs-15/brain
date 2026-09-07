---
package: rjm
name: validate_session_end
slug: validate-session-end
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
