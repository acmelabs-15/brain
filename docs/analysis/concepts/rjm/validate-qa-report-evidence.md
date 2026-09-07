---
package: rjm
name: validate_qa_report_evidence
slug: validate-qa-report-evidence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# validate_qa_report_evidence

## Definition — verbatim
(used, not defined)

> "def validate_qa_report_evidence(" — scripts/validate_session_json.py:927

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 927 | defined here | Defined as a validation function requiring passing QA evidence bound to the session and commit. |

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
`validate_qa_report_evidence` is a Python function identifier in `scripts/validate_session_json.py` verifying QA report file existence, artifact paths, and session commit bindings rather than an independent lifecycle concept.
