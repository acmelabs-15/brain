---
package: rjm
name: write_github_output
slug: write-github-output
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/post_issue_comment.py, sha256: aae934e1fb47c83546919c96dcdd73f8f2df80ef74b007833b159174312d35d4}
  - {path: scripts/ai_review_common/issue_triage.py, sha256: 4ef473208dfacba52a514c4bc06155c9e877faf01bbb48bfdfb1795487e38061}
  - {path: scripts/ci/artifact_build_context.py, sha256: f339c103901b07ad898ad3e37e6863f3a961ef0bea50d2188095074e6b05c3f7}
  - {path: scripts/ci/artifact_collect.py, sha256: 910064a4608b09ccb0a153a4362a2c48fda3e52051bc40af061d2d6201289f15}
  - {path: scripts/ci/artifact_create_issues.py, sha256: fb16852af5a0a38c29c2fbd7d3d1ef2dcd5632c410819b730a2d2ea903c0255f}
  - {path: scripts/ci/check_metrics_thresholds.py, sha256: ef380a59e6b9a2283cc043c6ffff4d8589e2a34b09b14780b2f4009d767e08ae}
  - {path: scripts/ci/drift_collect_details.py, sha256: 417fbff30ed3205ffd3118787599df92da6d149f4f69f525ea042ee7bba377b9}
  - {path: scripts/ci/drift_run_detection.py, sha256: a8ff6e4e1b35f8e278ca8d09a96e6ef4f7f561741cb99c9257eaca6e77d57b58}
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# write_github_output

## Definition — verbatim
(used, not defined)

> "def write_github_output(pairs: dict[str, str]) -> None:" — scripts/ai_review_common/issue_triage.py:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/post_issue_comment.py | 31 | used here | Imported from `scripts.ai_review_common` to emit workflow step outputs. |
| scripts/ai_review_common/issue_triage.py | 145 | defined here | Utility function appending multiple key-value pairs to the GitHub Actions output file. |
| scripts/ci/artifact_build_context.py | 51 | defined here | Helper function writing a single key-value pair to `GITHUB_OUTPUT` or stdout. |
| scripts/ci/artifact_collect.py | 27 | defined here | Helper function writing a single key-value pair to `GITHUB_OUTPUT` or stdout. |
| scripts/ci/artifact_create_issues.py | 32 | defined here | Helper function writing a single key-value pair to `GITHUB_OUTPUT` or stdout. |
| scripts/ci/check_metrics_thresholds.py | 72 | defined here | Helper function writing coverage and threshold metrics to `GITHUB_OUTPUT`. |
| scripts/ci/drift_collect_details.py | 34 | defined here | Helper function writing drift collection outputs to `GITHUB_OUTPUT` or stdout. |
| scripts/ci/drift_run_detection.py | 29 | defined here | Helper function writing drift detection outputs to `GITHUB_OUTPUT` or stdout. |
| scripts/ci/spec_extract_refs.py | 38 | defined here | Helper function writing extracted spec reference outputs to `GITHUB_OUTPUT` or stdout. |
| scripts/ci/spec_load_content.py | 35 | defined here | Helper function writing loaded spec content outputs to `GITHUB_OUTPUT` or stdout. |

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
A Python helper function identifier (`write_github_output`) duplicated across CI scripts for writing step outputs to `$GITHUB_OUTPUT` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
