---
package: rjm
name: run
slug: run
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/artifact_write_summary.py, sha256: 4782b55fb2b1693c5333d67458add91c9e635e05334eb17e88f2fcae05b7bd62}
  - {path: scripts/ci/commit_and_push.py, sha256: 8a5521fc19a8b4d0e1e8bc522053eb632b16a30d35176a096464c4f1076cb8be}
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
  - {path: scripts/ci/drift_collect_details.py, sha256: 417fbff30ed3205ffd3118787599df92da6d149f4f69f525ea042ee7bba377b9}
  - {path: scripts/ci/drift_create_alert_issue.py, sha256: 4a414caa6386fc870e6bc12e94ea62524e78df5e314c62d9b4a8439183b84f1e}
  - {path: scripts/ci/drift_run_detection.py, sha256: a8ff6e4e1b35f8e278ca8d09a96e6ef4f7f561741cb99c9257eaca6e77d57b58}
  - {path: scripts/ci/drift_write_summary.py, sha256: 2f1c81b0c3802b7e47ef4e4aa76a1664ec5d97998c4382e31001515c9703317c}
  - {path: scripts/ci/install_locked_deps.py, sha256: 8fbaf932b42e746f6d6ce2a3b41c8ae0ae36f0144c988bad8f0a4aea54f97e69}
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
  - {path: scripts/ci/main_pytest_failure_alert.py, sha256: bb367255b46c592ece4b2e1018fb1ad9befd29cad8627942838779241c92984a}
  - {path: scripts/ci/spec_extract_refs.py, sha256: ee5f450d4f7327425acc46af0d61a1ce52e158cd728603bcec04b00cdd796222}
  - {path: scripts/ci/spec_load_content.py, sha256: 6dafe22d03081ee7038326083af675e4e75eb8f3d8db3165a2cc6b466442665c}
  - {path: scripts/ci/spec_prepare_context.py, sha256: 6f1d8dd7c64d6ef089d7e00f067f880addbeeaee5a2e4d99a60ff76c42202a9b}
  - {path: scripts/maintenance/_gc_stale.py, sha256: e719dbce6d933f8fcaffbc203d3383e6d4d9c43021c26e056b09070e2052ffc5}
  - {path: scripts/maintenance/detect_orphan_commits.py, sha256: a126d8109929ca58f674167780622ca7184a8866649cb345e7878426dfb54c58}
  - {path: scripts/quality_gate/resolve_pytest_signal.py, sha256: e4152823bcb9632e32537455c786e7c5fcd242267ac13eee834ee65d19f96811}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_rule_activation_coverage.py, sha256: c96ae7b997afbdf46f31e2f2a2eff29415af0f5694b3719d32d6afe0a576dab2}
  - {path: scripts/validation/ci_runner_base.py, sha256: b08a21f5a34af4f316b6c8aec454b9296876534c887abb8897a6a5a474559659}
  - {path: scripts/validation/push_ref_staleness.py, sha256: 3fcaf0d51323fffbfb8addbad5c47d5bd9a6532d453c13f4bb289e2ef82987d5}
  - {path: scripts/validation/run_install_parity_ci.py, sha256: c443c2ac28685dde69d91e626464de2bf4ad209c94b4dc3bcc7c31ceee9a23f5}
  - {path: scripts/validation/run_plugin_version_bump_ci.py, sha256: e74906d05e144bafa606c9eb48c902c83845d90507d444ef74f58d3321c92d4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# run

## Definition — verbatim
(used, not defined)

> "def run(_argv: list[str] | None = None) -> int:" — scripts/ci/artifact_write_summary.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/artifact_write_summary.py | 50 | defined here | CLI entry point function executing artifact summary generation. |
| scripts/ci/commit_and_push.py | 46 | defined here | Subprocess execution helper running git commit and push operations. |
| scripts/ci/count_ratchet.py | 947 | defined here | Main execution entry point running ratchet metrics verification. |
| scripts/ci/drift_collect_details.py | 44 | defined here | CLI entry point function collecting drift details into outputs. |
| scripts/ci/drift_create_alert_issue.py | 38 | defined here | CLI entry point function creating GitHub alert issues for detected drift. |
| scripts/ci/drift_run_detection.py | 39 | defined here | CLI entry point function executing drift detection checks. |
| scripts/ci/drift_write_summary.py | 50 | defined here | CLI entry point function generating drift summary output. |
| scripts/ci/install_locked_deps.py | 47 | defined here | Helper function executing subprocess commands for locked dependency installation. |
| scripts/ci/invoke_copilot_cli.py | 430 | defined here | Main function orchestrating Copilot CLI invocation workflow. |
| scripts/ci/main_pytest_failure_alert.py | 117 | defined here | Main function creating alert issues for main pytest run failures. |
| scripts/ci/spec_extract_refs.py | 135 | defined here | CLI entry point function extracting references from specification files. |
| scripts/ci/spec_load_content.py | 138 | defined here | CLI entry point function loading specification file contents. |
| scripts/ci/spec_prepare_context.py | 39 | defined here | CLI entry point function preparing context inputs for spec validation. |
| scripts/maintenance/_gc_stale.py | 192 | defined here | Subprocess helper running git garbage collection commands with timeouts. |
| scripts/maintenance/detect_orphan_commits.py | 92 | defined here | Subprocess helper running git commands to identify orphan commits. |
| scripts/quality_gate/resolve_pytest_signal.py | 154 | defined here | Dataclass representing individual pytest execution run attributes. |
| scripts/validation/check_adr_lifecycle.py | 1036 | defined here | Main function validating architectural decision record lifecycle transitions. |
| scripts/validation/check_rule_activation_coverage.py | 403 | defined here | Main function calculating rule activation coverage against baseline metrics. |
| scripts/validation/ci_runner_base.py | 47 | defined here | Runner method defining common execution logic across CI validation scripts. |
| scripts/validation/push_ref_staleness.py | 103 | defined here | Subprocess helper running git commands to evaluate push ref staleness. |
| scripts/validation/run_install_parity_ci.py | 35 | used here | Imported runner entry point executed to verify installation parity. |
| scripts/validation/run_plugin_version_bump_ci.py | 36 | used here | Imported runner entry point executed to verify plugin version bumps. |

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
`run` is a standard Python function and class identifier implemented across CI and validation scripts as an entry point rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
