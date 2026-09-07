---
package: rjm
name: Write-Output
slug: write-output
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-056-skill-output-format-standardization.md, sha256: a71c3a7799d1aa2952609e6dea6236962c0902ec6d5a6b452d303cef3e209c9d}
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: .github/scripts/measure_workflow_coalescing.py, sha256: a2f08fac0cf0c442ccaecf9ff40c68082a3a635c9cd5051bd01849bf43b53d49}
  - {path: .github/scripts/parse_artifact_insights.py, sha256: ef6e822a93974a31b85cd71aed0138681eb9fa80ceadbbb26162054aa0208fb5}
  - {path: .github/scripts/parse_feature_review.py, sha256: a2dc22ac513a841bb2088d12659ef8126e08cc1bf396f3a5c04b3e72f7938951}
  - {path: scripts/ai_review_common/issue_triage.py, sha256: 4ef473208dfacba52a514c4bc06155c9e877faf01bbb48bfdfb1795487e38061}
  - {path: scripts/workflows/determine_should_run_from_filters.py, sha256: a6f201bd6a65cb7033d31e82c0e14b5cb9a30fafdd98006a42e15754c40bdb26}
  - {path: scripts/workflows/resolve_dispatch_input.py, sha256: 35d272602e2bc342d438f73d230f9bfc7c092cdd82e0623fbbfa5915113e7612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Write-Output

## Definition — verbatim
(used, not defined)

> "- Scripts use `Write-Output` for JSON and `Write-Host` for human messages on the same invocation, breaking `ConvertFrom-Json` parsing when captured" — .agents/architecture/ADR-056-skill-output-format-standardization.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 42 | used here | Cited PowerShell cmdlet for stdout emission, contrasted with Write-Host. |
| .github/scripts/generate_spec_report.py | 38 | used here | Python output function import for writing workflow outputs. |
| .github/scripts/measure_workflow_coalescing.py | 741 | defined here | Internal Python helper function writing coalescing summary content to file. |
| .github/scripts/parse_artifact_insights.py | 33 | used here | Python output function import for writing GitHub Actions outputs. |
| .github/scripts/parse_feature_review.py | 26 | used here | Python output function import for writing parsed review outputs. |
| scripts/ai_review_common/issue_triage.py | 121 | defined here | Python function writing key-value pairs to GitHub Actions output environment file. |
| scripts/workflows/determine_should_run_from_filters.py | 76 | defined here | Python function emitting boolean decision outputs for GitHub Actions workflows. |
| scripts/workflows/resolve_dispatch_input.py | 59 | defined here | Python function writing resolved dispatch input values to GitHub Actions output. |

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
clean

## Design notes
A PowerShell cmdlet and Python helper function identifier used across scripts to emit data to stdout or workflow output files per D-023.
