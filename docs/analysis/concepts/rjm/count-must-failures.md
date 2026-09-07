---
package: rjm
name: count_must_failures
slug: count-must-failures
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# count_must_failures

## Definition — verbatim
(used, not defined)

> "def count_must_failures(result: ValidationResult) -> int:" — scripts/validate_session_json.py:324

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 324 | defined here | Defined as a function counting MUST and MUST NOT violation errors in a validation result. |

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
`count_must_failures` is a Python helper function identifier in `scripts/validate_session_json.py` counting MUST-level violations in validation results rather than an independent lifecycle concept.
