---
package: rjm
name: _write_step_summary
slug: write-step-summary
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/invoke_pr_maintenance.py, sha256: 8dd50236d9f75e15ad2d420781c4ac4c220c25edfbbe428b53a2d8044ad449b3}
  - {path: scripts/ai_review_common/issue_triage.py, sha256: 4ef473208dfacba52a514c4bc06155c9e877faf01bbb48bfdfb1795487e38061}
  - {path: scripts/ci/collect_metrics_and_report.py, sha256: 24e4bd5101b9da2fb4917182f43920a76ea124230507ff0b82db8551faccf5bf}
  - {path: scripts/maintenance/detect_orphan_commits.py, sha256: a126d8109929ca58f674167780622ca7184a8866649cb345e7878426dfb54c58}
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _write_step_summary

## Definition — verbatim
(used, not defined)

> "def _write_step_summary(results: dict[str, Any]) -> None:" — .github/scripts/invoke_pr_maintenance.py:455

## Also called — verbatim
`write_step_summary` — scripts/ai_review_common/issue_triage.py:168

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/invoke_pr_maintenance.py | 455 | defined here | Formats and appends PR discovery and maintenance summary table to GITHUB_STEP_SUMMARY. |
| scripts/ai_review_common/issue_triage.py | 168 | defined here | Appends markdown review summary content to GITHUB_STEP_SUMMARY with error handling. |
| scripts/ci/collect_metrics_and_report.py | 44 | defined here | Appends collected agent metrics report blocks to GITHUB_STEP_SUMMARY. |
| scripts/maintenance/detect_orphan_commits.py | 197 | defined here | Appends orphan commit post-merge detection findings to GITHUB_STEP_SUMMARY. |
| scripts/update_reviewer_signal_stats.py | 591 | defined here | Formats and appends cumulative reviewer signal performance tables to GITHUB_STEP_SUMMARY. |
| scripts/validation/pr_description.py | 1240 | defined here | Appends description validation bypass audit records to GITHUB_STEP_SUMMARY. |

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
defects: doc-drift, internal-contradiction, orphan, other, script-bug

## Design notes
_write_step_summary is a Python helper function identifier implemented across multiple maintenance scripts to append markdown reports to GITHUB_STEP_SUMMARY rather than an SDLC lifecycle concept, classified as name-only per D-023.
