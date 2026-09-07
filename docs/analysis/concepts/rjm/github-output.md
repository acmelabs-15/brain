---
package: rjm
name: GITHUB_OUTPUT
slug: github-output
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: scripts/ai_review_common/issue_triage.py, sha256: 4ef473208dfacba52a514c4bc06155c9e877faf01bbb48bfdfb1795487e38061}
  - {path: scripts/ai_review_outputs.py, sha256: 6d483eb4ec8210bf6680223566ea291dacb103d838f8bc60a0a673b58b14f09f}
  - {path: scripts/ci/build_pr_validation_report.py, sha256: 548b0479645ff5afd5c14e9f9d09ae4511eb0f86dfd1e12fff41dad4c6ffb901}
  - {path: scripts/ci/check_claude_authorization.py, sha256: 02d1029955d370a06572aac4b1f500a8043a0f588edfd0aca83258ccf33b7297}
  - {path: scripts/ci/check_metrics_thresholds.py, sha256: ef380a59e6b9a2283cc043c6ffff4d8589e2a34b09b14780b2f4009d767e08ae}
  - {path: scripts/ci/collect_ai_metrics.py, sha256: 58812012ab261d1a99d10734c90fd507b727a64e4c1f1d14c5ddddfa7cefce0f}
  - {path: scripts/ci/detect_human_changes_requested.py, sha256: 54c20c8899411a5c94c089ced5574b0ca47d2597c231025d1edcc08f894bdab1}
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
  - {path: scripts/ci/spec_prepare_context.py, sha256: 6f1d8dd7c64d6ef089d7e00f067f880addbeeaee5a2e4d99a60ff76c42202a9b}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GITHUB_OUTPUT

## Definition — verbatim
(used, not defined)

> "GITHUB_OUTPUT          - Path to GitHub Actions output file" — .github/scripts/generate_spec_report.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 17 | used here | Documented as environment variable path to GitHub Actions output file. |
| scripts/ai_review_common/issue_triage.py | 128 | used here | Read from environment to write multiline output parameters in CI. |
| scripts/ai_review_outputs.py | 63 | used here | Read from environment to output action parameters in GitHub Actions workflows. |
| scripts/ci/build_pr_validation_report.py | 15 | used here | Read from environment to export validation report markdown paths. |
| scripts/ci/check_claude_authorization.py | 102 | used here | Read from environment to export authorization boolean status. |
| scripts/ci/check_metrics_thresholds.py | 94 | used here | Read from environment to export metrics evaluation verdicts. |
| scripts/ci/collect_ai_metrics.py | 25 | used here | Comment documenting delimiter hygiene for safe GITHUB_OUTPUT heredoc writing. |
| scripts/ci/detect_human_changes_requested.py | 5 | used here | Docstring documenting human_changes_requested output parameter destination. |
| scripts/ci/spec_extract_refs.py | 13 | used here | Documented as an input environment variable for step output persistence. |
| scripts/ci/spec_load_content.py | 12 | used here | Documented as an input environment variable for step output persistence. |
| scripts/ci/spec_prepare_context.py | 14 | used here | Documented as an input environment variable for step output persistence. |
| scripts/validation/pr_description.py | 1196 | used here | Comment explaining character replacement defenses for GITHUB_OUTPUT key-value lines. |

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
defects: orphan, missing-path, script-bug, exit-code-mismatch, doc-drift, other

## Design notes
`GITHUB_OUTPUT` is a GitHub Actions runner environment variable identifier specifying the file path for step output key-value persistence rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
