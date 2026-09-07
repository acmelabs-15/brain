---
package: rjm
name: validate_qa_skip_scope
slug: validate-qa-skip-scope
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_qa_skip_scope

## Definition — verbatim
(used, not defined)

> "def validate_qa_skip_scope(" — scripts/validate_session_json.py:1269

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 1269 | defined here | Defined as a validation function verifying docs-only and investigation-only QA skip claims via eligibility scripts. |

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
`validate_qa_skip_scope` is a Python function identifier in `scripts/validate_session_json.py` that invokes external scope checkers to verify eligibility for QA validation exemption claims rather than an independent lifecycle concept.
