---
package: rjm
name: Requirements Traceability
slug: requirements-traceability
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Requirements Traceability

## Definition — verbatim
> "Verifies PR changes map to spec requirements" — .github/scripts/generate_spec_report.py:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 184 | used here | Validation check description verifying PR code changes map to formal specification requirements. |

## Consumes
Pull request code changes, diffs, and referenced specification documents.

## Produces
Traceability check verdict (`trace_verdict`: PASS, WARN, or FAIL) evaluating whether changed code maps to specification requirements.

## When applied
Executed during CI pull request validation when a pull request introduces changes referencing specification documents.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, missing-path

## Design notes
Requirements Traceability is an automated validation check in rjm's specification-validation pipeline verifying that source code changes submitted in a pull request correspond to explicit requirements in linked specification documents.
