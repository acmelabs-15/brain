---
package: rjm
name: spec_validation_failed
slug: spec-validation-failed
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/check_spec_failures.py, sha256: 424864cf5d928f58a94a5cc24eee49781ce48be65e9ad81d88ae6a30175c8a9b}
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: scripts/ai_review_common/quality_gate.py, sha256: 4b256216d3a93ee6f649647aa42dde223b52202cbd69d3fa1077d3e3854d8adb}
  - {path: scripts/ai_review_common/verdict.py, sha256: 6b3475739059a19aef3022a05e7b77ff7f5add074b06310fbdb5d48fa61d60e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# spec_validation_failed

## Definition — verbatim
(used, not defined)

> "def spec_validation_failed(" — scripts/ai_review_common/verdict.py:219

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/check_spec_failures.py | 26 | used here | Imported to determine if spec validation verdicts warrant failing the workflow. |
| .github/scripts/generate_spec_report.py | 37 | used here | Imported to compute the overall status of specification validation in generated reports. |
| scripts/ai_review_common/quality_gate.py | 17 | used here | Re-exported from verdict submodule for quality gate evaluation. |
| scripts/ai_review_common/verdict.py | 219 | defined here | Helper function returning True if traceability or completeness verdicts block merge. |

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
defects: script-bug, internal-contradiction, orphan, missing-path

## Design notes
spec_validation_failed is a Python helper function determining if spec verdicts block PR merges rather than a lifecycle concept.
