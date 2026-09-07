---
package: rjm
name: EXIT_OK
slug: exit-ok
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/pr_snapshot.py, sha256: 141fa122f7859d1b75fe2018204506cc0adb32a4b94573d8f767b871a894cfec}
  - {path: .github/scripts/safe_push_pr_branch.py, sha256: dda091d2fa928563a909463214253faad5af59d645c579fbfd63ed13509aff71}
  - {path: scripts/bulk_cancel_guard.py, sha256: ab3973edd5a813192e5cb59c448bfaaf557c121f33667246bf911e7da8dbcc9b}
  - {path: scripts/ci/artifact_create_issues.py, sha256: fb16852af5a0a38c29c2fbd7d3d1ef2dcd5632c410819b730a2d2ea903c0255f}
  - {path: scripts/ci/build_retrospective_prompt.py, sha256: 5fd8c35a806317288379ba87cb12a2e2e18e4bdc0ed1d6c07a3d9daba80170ef}
  - {path: scripts/ci/check_bot_identity.py, sha256: 562f63926cad000cc717a27a4697e34a7a516d869efce24a70feed52abcd2be7}
  - {path: scripts/ci/check_metrics_thresholds.py, sha256: ef380a59e6b9a2283cc043c6ffff4d8589e2a34b09b14780b2f4009d767e08ae}
  - {path: scripts/ci/check_pr_merge_state.py, sha256: 0c52b022af263573b6c0c82e21d401ea3c70f91707de248ca4997bec6a5f8e26}
  - {path: scripts/ci/cli_exit_contract_ratchet.py, sha256: 70922e7da82e56e1d9e67083a1a4aed6ed4a29d53e56346cfad7214a517c78f7}
  - {path: scripts/ci/codeql_integration_summary.py, sha256: 8d51bec76ad7dc49f84bf6e81441e25192bd22ddd08eb9cea54f29f69bc6c20b}
  - {path: scripts/ci/collect_metrics_and_report.py, sha256: 24e4bd5101b9da2fb4917182f43920a76ea124230507ff0b82db8551faccf5bf}
  - {path: scripts/ci/combine_pin_coverage.py, sha256: 35db4166b2f3bf4fc44975bb286165e1157e42b43a6986bcf7456b166328a5ad}
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
  - {path: scripts/ci/diagnose_copilot_cli.py, sha256: d05040c1d6bdaab669157a383c9f470e3cbc1261e0cb4974c89666ee59ec0b39}
  - {path: scripts/ci/drift_collect_details.py, sha256: 417fbff30ed3205ffd3118787599df92da6d149f4f69f525ea042ee7bba377b9}
  - {path: scripts/ci/drift_create_alert_issue.py, sha256: 4a414caa6386fc870e6bc12e94ea62524e78df5e314c62d9b4a8439183b84f1e}
  - {path: scripts/ci/drift_run_detection.py, sha256: a8ff6e4e1b35f8e278ca8d09a96e6ef4f7f561741cb99c9257eaca6e77d57b58}
  - {path: scripts/ci/drift_write_summary.py, sha256: 2f1c81b0c3802b7e47ef4e4aa76a1664ec5d97998c4382e31001515c9703317c}
  - {path: scripts/ci/establish_ai_review_deadline.py, sha256: 54901cf4d6d02196ebc876a3be82c92f9e8bb550d804f5e1027d13daa35a2a0a}
  - {path: scripts/ci/execute_ai_review_post_script.py, sha256: b054d9d879990f9f217d6c35988afeffc153a412a657601f420cafb9a8d2102f}
  - {path: scripts/ci/install_copilot_cli.py, sha256: 43ad4fb2f64407170551ebf0a912601b74ab3574b2bcd44f81e0dd5cfc1260ae}
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
  - {path: scripts/ci/load_ai_review_prompt.py, sha256: 5b7992a516e98e447bf020615ea72faa136a9dcaf75d08b425074c7fd937445f}
  - {path: scripts/ci/measure_npm_pack_size.py, sha256: 552893e4598f8c097aa7fefa2f26e604bdbdf2a1aa099a1f3035793a35835fc8}
  - {path: scripts/ci/retrospective_gate.py, sha256: 81a59bf6bd1a29a33873685f2678ff5147cf806feea4bfbbe919a68cb6e4ccc5}
  - {path: scripts/ci/ruff_count_ratchet.py, sha256: e8ec4aae7eeeb3ebec27b426f609c8a04849394340012720a17c92248ac33fd6}
  - {path: scripts/ci/ruff_ratchet.py, sha256: 4d1e47b5ae78226bf73fb3d992c619a1884527480dd1fe9d141583a3b92e5bda}
  - {path: scripts/ci/ruleset_context_drift.py, sha256: 56755ce625991eaa7f74bbf22bcef3c07df5e6257092da96e537c4cb4875062d}
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
  - {path: scripts/ci/subprocess_encoding_count_ratchet.py, sha256: f7908eed342041ee0688b4a809507595c39326ac8b2cea3c46a67166e1aca99e}
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
  - {path: scripts/ci/validate_ai_review_budgets.py, sha256: de7d1421fc018fd012bdff9445d2e318792c6afdad487f8e8bbffd6ee087266a}
  - {path: scripts/ci/verify_codeql_sarif_structure.py, sha256: bb1ab0941302ba0f029311f469b82725674072a7b4276dfc30a8be4f0c0e61e5}
  - {path: scripts/ci/verify_github_auth.py, sha256: 4002c1260eee8c6c96768c5e14ff4ab9d9153b9664cac90a20003fcbd1fa5f87}
  - {path: scripts/ci/verify_npm_package_metadata.py, sha256: a512033119983342b4e302a36cee1ec3ca2678492662c59de71861aac4bbd256}
  - {path: scripts/ci/verify_npm_published.py, sha256: fa15b877b242e367ca2210d209b6fb26ecb341e79078d4e7c4cbd9dae457e916}
  - {path: scripts/ci/write_copilot_synthesis_summary.py, sha256: 66e561aabde64519c36ba45cf72ea182d9ddaa490d07dbed619e75d1cae541f0}
  - {path: scripts/ci/write_drift_job_summary.py, sha256: c3af8c3ae1447f5a6b6078b1a9a9cb4777f4aba378507fc35ac1f6614b9839fe}
  - {path: scripts/ci/write_metrics_threshold_summary.py, sha256: a8e2cef20436ca451575a9caa02a73a96952d257117003b3d234439646f1ca46}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
  - {path: scripts/eval/optimize-artifact.py, sha256: 0df36122ac74e0681e0caeb878ed07ab01ce7dea50d1881e6bd1f7c4e998b765}
  - {path: scripts/validation/active_plan_closeout.py, sha256: ff907bbadd21f365e739dbb46fb15c8a6d851a03644bb202e283ce2c1510d602}
  - {path: scripts/validation/assert_smoke_ran.py, sha256: 55d08814bfbf5f490cd6ea9a8d5641962d449b25b6f619c700b7ff8fbac6e2af}
  - {path: scripts/validation/assert_trusted_smoke_context.py, sha256: 0a355565c4c6ba7affa91fe058e64a1dec6c1053f3744814c618994a3bd0796a}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_ci_dependency_pins.py, sha256: 177f5e747f3b253a60b46edbf76d82947d9b04a1df1b56b674530e78d6a07f0d}
  - {path: scripts/validation/check_copilot_version_pin.py, sha256: 1821fcb43cb7cb32c9d7740b80e25620a2efe62e3688b6f8a94d8f3b2c812350}
  - {path: scripts/validation/check_dual_priority_labels.py, sha256: 0a9a6320c38db8908cb300092f87e7e96b51b3672aa115743e270266c54d4504}
  - {path: scripts/validation/check_plugin_frontmatter_self_containment.py, sha256: 80c17e1875128b3805186d2139dc90218d179594a7098af3a1823e8027d8004c}
  - {path: scripts/validation/check_rule_activation_coverage.py, sha256: c96ae7b997afbdf46f31e2f2a2eff29415af0f5694b3719d32d6afe0a576dab2}
  - {path: scripts/validation/check_ruleset_params_drift.py, sha256: f0bfa925f0d2aa397f3f5aefe435c5b1fecdb0fcce928444332a4fbcb8b93c56}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
  - {path: scripts/validation/check_zero_collection_tests.py, sha256: 5df67f7bfb0dd67ebf29fe1d0e8ea7f1206a2df57f88249889350eb7231b46cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# EXIT_OK

## Definition — verbatim
(used, not defined)

> "EXIT_OK = 0" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/pr_snapshot.py | 44 | defined here | Defines success exit code 0 constant for PR snapshot verification. |
| .github/scripts/safe_push_pr_branch.py | 24 | defined here | Defines success exit code 0 constant for atomic PR branch pushing. |
| scripts/bulk_cancel_guard.py | 78 | defined here | Defines exit code 0 constant for safe bulk workflow cancellation. |
| scripts/ci/artifact_create_issues.py | 27 | defined here | Defines success exit code 0 constant for automated issue creation. |
| scripts/ci/build_retrospective_prompt.py | 19 | defined here | Defines success exit code 0 constant for retrospective prompt building. |
| scripts/ci/check_bot_identity.py | 45 | defined here | Defines exit code 0 constant for GitHub Actions bot identity verification. |
| scripts/ci/check_metrics_thresholds.py | 23 | defined here | Defines exit code 0 constant for metrics threshold validation. |
| scripts/ci/check_pr_merge_state.py | 14 | defined here | Defines success exit code 0 constant for PR merge state checking. |
| scripts/ci/cli_exit_contract_ratchet.py | 56 | used here | Evaluates CLI tool exit code behavior against the standard EXIT_OK contract. |
| scripts/ci/codeql_integration_summary.py | 20 | defined here | Defines success exit code 0 constant for CodeQL summary processing. |
| scripts/ci/collect_metrics_and_report.py | 22 | defined here | Defines exit code 0 constant for metrics collection and reporting. |
| scripts/ci/combine_pin_coverage.py | 69 | defined here | Defines exit code 0 constant for dependency pin coverage combination. |
| scripts/ci/count_ratchet.py | 74 | defined here | Defines success exit code 0 constant for quantitative ratchet checks. |
| scripts/ci/diagnose_copilot_cli.py | 14 | defined here | Defines exit code 0 constant for Copilot CLI diagnosis execution. |
| scripts/ci/drift_collect_details.py | 30 | defined here | Defines success exit code 0 constant for drift detection and alert reporting. |
| scripts/ci/drift_create_alert_issue.py | 31 | defined here | Defines success exit code 0 constant for drift detection and alert reporting. |
| scripts/ci/drift_run_detection.py | 26 | defined here | Defines success exit code 0 constant for drift detection and alert reporting. |
| scripts/ci/drift_write_summary.py | 21 | defined here | Defines success exit code 0 constant for drift detection and alert reporting. |
| scripts/ci/establish_ai_review_deadline.py | 13 | defined here | Defines exit code 0 constant for AI review deadline computation. |
| scripts/ci/execute_ai_review_post_script.py | 12 | defined here | Defines exit code 0 constant for AI review post-script execution. |
| scripts/ci/install_copilot_cli.py | 13 | defined here | Defines exit code 0 constant for Copilot CLI installation. |
| scripts/ci/invoke_copilot_cli.py | 20 | defined here | Defines exit code 0 constant for Copilot CLI invocation. |
| scripts/ci/load_ai_review_prompt.py | 10 | defined here | Defines exit code 0 constant for AI review prompt loading. |
| scripts/ci/measure_npm_pack_size.py | 22 | defined here | Defines exit code 0 constant for npm package size measurement. |
| scripts/ci/retrospective_gate.py | 19 | defined here | Defines exit code 0 constant for retrospective gating evaluation. |
| scripts/ci/ruff_count_ratchet.py | 41 | defined here | Defines success exit code 0 constant for quantitative ratchet checks. |
| scripts/ci/ruff_ratchet.py | 45 | defined here | Defines exit code 0 constant for Ruff linter ratchet verification. |
| scripts/ci/ruleset_context_drift.py | 36 | defined here | Defines success exit code 0 constant for drift detection and alert reporting. |
| scripts/ci/spec_extract_refs.py | 34 | defined here | Defines exit code 0 constant for specification content and reference loading. |
| scripts/ci/spec_load_content.py | 30 | defined here | Defines exit code 0 constant for specification content and reference loading. |
| scripts/ci/subprocess_encoding_count_ratchet.py | 31 | defined here | Defines success exit code 0 constant for quantitative ratchet checks. |
| scripts/ci/taste_count_ratchet.py | 51 | defined here | Defines success exit code 0 constant for quantitative ratchet checks. |
| scripts/ci/validate_ai_review_budgets.py | 15 | defined here | Defines exit code 0 constant for AI review budget validation. |
| scripts/ci/verify_codeql_sarif_structure.py | 22 | defined here | Defines success exit code 0 constant for CodeQL summary processing. |
| scripts/ci/verify_github_auth.py | 26 | defined here | Defines exit code 0 constant for GitHub authentication validation. |
| scripts/ci/verify_npm_package_metadata.py | 22 | defined here | Defines exit code 0 constant for npm package metadata and publish verification. |
| scripts/ci/verify_npm_published.py | 23 | defined here | Defines exit code 0 constant for npm package metadata and publish verification. |
| scripts/ci/write_copilot_synthesis_summary.py | 19 | defined here | Defines or references success exit code 0 constant per ADR-035 exit code contract. |
| scripts/ci/write_drift_job_summary.py | 19 | defined here | Defines success exit code 0 constant for drift detection and alert reporting. |
| scripts/ci/write_metrics_threshold_summary.py | 19 | defined here | Defines or references success exit code 0 constant per ADR-035 exit code contract. |
| scripts/eval/eval-agent-vs-baseline.py | 68 | defined here | Defines success exit code 0 constant for model evaluation and optimization harness. |
| scripts/eval/eval-model-panel.py | 48 | defined here | Defines success exit code 0 constant for model evaluation and optimization harness. |
| scripts/eval/eval-model-sweep.py | 56 | defined here | Defines success exit code 0 constant for model evaluation and optimization harness. |
| scripts/eval/eval-oneshot-vs-shipped.py | 64 | defined here | Defines success exit code 0 constant for model evaluation and optimization harness. |
| scripts/eval/eval-skill-overlap.py | 80 | defined here | Defines success exit code 0 constant for model evaluation and optimization harness. |
| scripts/eval/optimize-artifact.py | 112 | defined here | Defines success exit code 0 constant for model evaluation and optimization harness. |
| scripts/validation/active_plan_closeout.py | 14 | defined here | Defines exit code 0 constant for active plan closeout validation. |
| scripts/validation/assert_smoke_ran.py | 41 | defined here | Defines exit code 0 constant for smoke test execution assertion. |
| scripts/validation/assert_trusted_smoke_context.py | 38 | defined here | Defines or references success exit code 0 constant per ADR-035 exit code contract. |
| scripts/validation/check_adr_lifecycle.py | 137 | defined here | Defines exit code 0 constant for ADR lifecycle and link validation. |
| scripts/validation/check_ci_dependency_pins.py | 66 | defined here | Defines exit code 0 constant for dependency version pin validation. |
| scripts/validation/check_copilot_version_pin.py | 40 | defined here | Defines exit code 0 constant for dependency version pin validation. |
| scripts/validation/check_dual_priority_labels.py | 50 | defined here | Defines exit code 0 constant for dual priority label validation. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 350 | defined here | Defines exit code 0 constant for plugin frontmatter self-containment check. |
| scripts/validation/check_rule_activation_coverage.py | 89 | defined here | Defines exit code 0 constant for rule activation coverage verification. |
| scripts/validation/check_ruleset_params_drift.py | 28 | defined here | Defines success exit code 0 constant for drift detection and alert reporting. |
| scripts/validation/check_shipped_skill_routes.py | 282 | defined here | Defines exit code 0 constant for shipped skill route verification. |
| scripts/validation/check_skill_memory_references.py | 92 | defined here | Defines exit code 0 constant for skill memory reference validation. |
| scripts/validation/check_zero_collection_tests.py | 63 | defined here | Defines exit code 0 constant for zero collection test validation. |

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
defects: doc-drift, script-bug, orphan, missing-path, always-failing-gate, exit-code-mismatch, other

## Design notes
`EXIT_OK` is a standard exit code constant (value 0) standardized across Python CLI scripts per ADR-035 to represent successful execution rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
