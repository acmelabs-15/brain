---
package: rjm
name: GITHUB_STEP_SUMMARY
slug: github-step-summary
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
  - {path: scripts/ai_review_common/issue_triage.py, sha256: 4ef473208dfacba52a514c4bc06155c9e877faf01bbb48bfdfb1795487e38061}
  - {path: scripts/ci/artifact_write_summary.py, sha256: 4782b55fb2b1693c5333d67458add91c9e635e05334eb17e88f2fcae05b7bd62}
  - {path: scripts/ci/check_codeql_sarif.py, sha256: e20a24e447806fac29fce1245d20683d67b25fda571e06fd6ee6c5d1ac359c13}
  - {path: scripts/ci/codeql_integration_summary.py, sha256: 8d51bec76ad7dc49f84bf6e81441e25192bd22ddd08eb9cea54f29f69bc6c20b}
  - {path: scripts/ci/collect_metrics_and_report.py, sha256: 24e4bd5101b9da2fb4917182f43920a76ea124230507ff0b82db8551faccf5bf}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GITHUB_STEP_SUMMARY

## Definition — verbatim
(used, not defined)

> "summary_path = os.environ.get(\"GITHUB_STEP_SUMMARY\")" — .github/scripts/invoke_pr_maintenance.py:457

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_maintenance.py | 457 | used here | Reads environment variable to locate step summary file for maintenance reporting. |
| scripts/ai_review_common/issue_triage.py | 173 | used here | Retrieves step summary path to output issue triage review tables. |
| scripts/ci/artifact_write_summary.py | 2 | used here | Docstring notes module writes artifact insight scanner results to GITHUB_STEP_SUMMARY. |
| scripts/ci/check_codeql_sarif.py | 175 | used here | Appends rendered CodeQL SARIF summary table to the step summary path when set. |
| scripts/ci/codeql_integration_summary.py | 2 | used here | Docstring describes writing CodeQL integration test summary table to GITHUB_STEP_SUMMARY. |
| scripts/ci/collect_metrics_and_report.py | 5 | used here | Docstring references appending metrics report output to GITHUB_STEP_SUMMARY. |
| scripts/validation/pr_description.py | 1187 | used here | Comment explains bypass audit marker is emitted to GITHUB_STEP_SUMMARY when set. |

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
defects: orphan, internal-contradiction, script-bug, doc-drift

## Design notes
An environment variable identifier defined by GitHub Actions for job step summaries rather than an independent lifecycle concept.
