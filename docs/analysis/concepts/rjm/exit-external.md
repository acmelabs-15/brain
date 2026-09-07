---
package: rjm
name: EXIT_EXTERNAL
slug: exit-external
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/pr_snapshot.py, sha256: 141fa122f7859d1b75fe2018204506cc0adb32a4b94573d8f767b871a894cfec}
  - {path: .claude/skills/security-scan/scripts/scan_constants.py, sha256: 4dec891d77fd21fe9f3fb63ee816f6e06dbb56287faa6db33af7dcc7e518c249}
  - {path: scripts/bulk_cancel_guard.py, sha256: ab3973edd5a813192e5cb59c448bfaaf557c121f33667246bf911e7da8dbcc9b}
  - {path: scripts/ci/artifact_create_issues.py, sha256: fb16852af5a0a38c29c2fbd7d3d1ef2dcd5632c410819b730a2d2ea903c0255f}
  - {path: scripts/ci/check_bot_identity.py, sha256: 562f63926cad000cc717a27a4697e34a7a516d869efce24a70feed52abcd2be7}
  - {path: scripts/ci/check_pr_merge_state.py, sha256: 0c52b022af263573b6c0c82e21d401ea3c70f91707de248ca4997bec6a5f8e26}
  - {path: scripts/ci/cli_exit_contract_ratchet.py, sha256: 70922e7da82e56e1d9e67083a1a4aed6ed4a29d53e56346cfad7214a517c78f7}
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
  - {path: scripts/ci/drift_create_alert_issue.py, sha256: 4a414caa6386fc870e6bc12e94ea62524e78df5e314c62d9b4a8439183b84f1e}
  - {path: scripts/ci/ruff_count_ratchet.py, sha256: e8ec4aae7eeeb3ebec27b426f609c8a04849394340012720a17c92248ac33fd6}
  - {path: scripts/ci/ruff_ratchet.py, sha256: 4d1e47b5ae78226bf73fb3d992c619a1884527480dd1fe9d141583a3b92e5bda}
  - {path: scripts/ci/ruleset_context_drift.py, sha256: 56755ce625991eaa7f74bbf22bcef3c07df5e6257092da96e537c4cb4875062d}
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
  - {path: scripts/ci/subprocess_encoding_count_ratchet.py, sha256: f7908eed342041ee0688b4a809507595c39326ac8b2cea3c46a67166e1aca99e}
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
  - {path: scripts/ci/verify_github_auth.py, sha256: 4002c1260eee8c6c96768c5e14ff4ab9d9153b9664cac90a20003fcbd1fa5f87}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
  - {path: scripts/validation/check_dual_priority_labels.py, sha256: 0a9a6320c38db8908cb300092f87e7e96b51b3672aa115743e270266c54d4504}
  - {path: scripts/validation/check_ruleset_params_drift.py, sha256: f0bfa925f0d2aa397f3f5aefe435c5b1fecdb0fcce928444332a4fbcb8b93c56}
  - {path: scripts/validation/check_zero_collection_tests.py, sha256: 5df67f7bfb0dd67ebf29fe1d0e8ea7f1206a2df57f88249889350eb7231b46cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# EXIT_EXTERNAL

## Definition — verbatim
(used, not defined)

> "EXIT_EXTERNAL = 3" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/pr_snapshot.py | 47 | defined here | Defines external dependency failure exit code 3 constant for PR snapshot verification. |
| .claude/skills/security-scan/scripts/scan_constants.py | 17 | defined here | Defines external dependency failure exit code 3 constant for security scanning scripts. |
| scripts/bulk_cancel_guard.py | 81 | defined here | Defines external dependency failure exit code 3 constant for bulk workflow cancellation. |
| scripts/ci/artifact_create_issues.py | 29 | defined here | Defines external dependency failure exit code 3 constant for automated issue creation. |
| scripts/ci/check_bot_identity.py | 47 | defined here | Defines external dependency failure exit code 3 constant for bot identity checking. |
| scripts/ci/check_pr_merge_state.py | 17 | defined here | Defines external dependency failure exit code 3 constant for PR merge state checking. |
| scripts/ci/cli_exit_contract_ratchet.py | 55 | used here | Evaluates CLI tool exit code behavior against the standard EXIT_EXTERNAL contract. |
| scripts/ci/count_ratchet.py | 77 | defined here | Defines external dependency failure exit code 3 constant for quantitative ratchet checks. |
| scripts/ci/drift_create_alert_issue.py | 33 | defined here | Defines external dependency failure exit code 3 constant for drift alert issue creation. |
| scripts/ci/ruff_count_ratchet.py | 40 | defined here | Defines external dependency failure exit code 3 constant for Ruff count ratchet verification. |
| scripts/ci/ruff_ratchet.py | 48 | defined here | Defines external dependency failure exit code 3 constant for Ruff linter ratchet verification. |
| scripts/ci/ruleset_context_drift.py | 39 | defined here | Defines external dependency failure exit code 3 constant for ruleset context drift detection. |
| scripts/ci/spec_extract_refs.py | 35 | defined here | Defines external dependency failure exit code 3 constant for specification reference extraction. |
| scripts/ci/spec_load_content.py | 32 | defined here | Defines external dependency failure exit code 3 constant for specification content loading. |
| scripts/ci/subprocess_encoding_count_ratchet.py | 30 | defined here | Defines external dependency failure exit code 3 constant for subprocess encoding ratchet checks. |
| scripts/ci/taste_count_ratchet.py | 50 | defined here | Defines external dependency failure exit code 3 constant for taste count ratchet verification. |
| scripts/ci/verify_github_auth.py | 29 | defined here | Defines external dependency failure exit code 3 constant for GitHub authentication validation. |
| scripts/eval/eval-agent-vs-baseline.py | 71 | defined here | Defines external dependency failure exit code 3 constant for model evaluation harness. |
| scripts/eval/eval-model-panel.py | 50 | defined here | Defines external dependency failure exit code 3 constant for model panel evaluation harness. |
| scripts/eval/eval-model-sweep.py | 59 | defined here | Defines external dependency failure exit code 3 constant for model sweep evaluation harness. |
| scripts/eval/eval-oneshot-vs-shipped.py | 66 | defined here | Defines external dependency failure exit code 3 constant for one-shot vs shipped evaluation harness. |
| scripts/eval/eval-skill-overlap.py | 83 | defined here | Defines external dependency failure exit code 3 constant for skill overlap evaluation harness. |
| scripts/validation/check_dual_priority_labels.py | 53 | defined here | Defines external dependency failure exit code 3 constant for dual priority label validation. |
| scripts/validation/check_ruleset_params_drift.py | 31 | defined here | Defines external dependency failure exit code 3 constant for ruleset parameter drift validation. |
| scripts/validation/check_zero_collection_tests.py | 66 | defined here | Defines external dependency failure exit code 3 constant for zero collection test validation. |

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
defects: orphan, missing-path, exit-code-mismatch, script-bug, doc-drift, other

## Design notes
`EXIT_EXTERNAL` is a standard exit code constant (value 3) standardized across Python CLI scripts per ADR-035 to represent network, remote API, or external command execution failures rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
