---
package: rjm
name: validate_qa_report_evidence
slug: validate-qa-report-evidence
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
