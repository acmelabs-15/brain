---
package: rjm
name: EXIT_USAGE
slug: exit-usage
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/safe_push_pr_branch.py, sha256: dda091d2fa928563a909463214253faad5af59d645c579fbfd63ed13509aff71}
  - {path: scripts/ci/check_metrics_thresholds.py, sha256: ef380a59e6b9a2283cc043c6ffff4d8589e2a34b09b14780b2f4009d767e08ae}
  - {path: scripts/ci/codeql_integration_summary.py, sha256: 8d51bec76ad7dc49f84bf6e81441e25192bd22ddd08eb9cea54f29f69bc6c20b}
  - {path: scripts/ci/collect_metrics_and_report.py, sha256: 24e4bd5101b9da2fb4917182f43920a76ea124230507ff0b82db8551faccf5bf}
  - {path: scripts/ci/combine_pin_coverage.py, sha256: 35db4166b2f3bf4fc44975bb286165e1157e42b43a6986bcf7456b166328a5ad}
  - {path: scripts/ci/commit_and_push.py, sha256: 8a5521fc19a8b4d0e1e8bc522053eb632b16a30d35176a096464c4f1076cb8be}
  - {path: scripts/ci/measure_npm_pack_size.py, sha256: 552893e4598f8c097aa7fefa2f26e604bdbdf2a1aa099a1f3035793a35835fc8}
  - {path: scripts/ci/parse_hook_bypass_results.py, sha256: f64f6a9f0d591c6c512810bf6cd12f4510cbd9a98000767141afee1346bc3019}
  - {path: scripts/ci/parse_memory_validation_results.py, sha256: 42dad8f4e730c3e95c757972e4a7879303e41a5f4c944e1f1d1304199bf417b5}
  - {path: scripts/ci/require_job_results.py, sha256: 0a1300b1f9f30c1536e51325107d4d6deb5db72183cfebbdf364afdbeaff61d6}
  - {path: scripts/ci/verify_codeql_sarif_structure.py, sha256: bb1ab0941302ba0f029311f469b82725674072a7b4276dfc30a8be4f0c0e61e5}
  - {path: scripts/ci/verify_npm_package_metadata.py, sha256: a512033119983342b4e302a36cee1ec3ca2678492662c59de71861aac4bbd256}
  - {path: scripts/ci/verify_npm_published.py, sha256: fa15b877b242e367ca2210d209b6fb26ecb341e79078d4e7c4cbd9dae457e916}
  - {path: scripts/ci/write_copilot_synthesis_summary.py, sha256: 66e561aabde64519c36ba45cf72ea182d9ddaa490d07dbed619e75d1cae541f0}
  - {path: scripts/ci/write_drift_job_summary.py, sha256: c3af8c3ae1447f5a6b6078b1a9a9cb4777f4aba378507fc35ac1f6614b9839fe}
  - {path: scripts/ci/write_metrics_threshold_summary.py, sha256: a8e2cef20436ca451575a9caa02a73a96952d257117003b3d234439646f1ca46}
  - {path: scripts/validation/assert_trusted_smoke_context.py, sha256: 0a355565c4c6ba7affa91fe058e64a1dec6c1053f3744814c618994a3bd0796a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_USAGE

## Definition — verbatim
(used, not defined)

> "EXIT_USAGE = 2" — .github/scripts/safe_push_pr_branch.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/safe_push_pr_branch.py | 26 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/check_metrics_thresholds.py | 25 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/codeql_integration_summary.py | 22 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/collect_metrics_and_report.py | 24 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/combine_pin_coverage.py | 71 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/commit_and_push.py | 30 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/measure_npm_pack_size.py | 24 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/parse_hook_bypass_results.py | 37 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/parse_memory_validation_results.py | 34 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/require_job_results.py | 36 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/verify_codeql_sarif_structure.py | 24 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/verify_npm_package_metadata.py | 24 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/verify_npm_published.py | 25 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/write_copilot_synthesis_summary.py | 20 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/write_drift_job_summary.py | 21 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/ci/write_metrics_threshold_summary.py | 21 | defined here | Constant defining exit code 2 for CLI usage errors. |
| scripts/validation/assert_trusted_smoke_context.py | 39 | defined here | Constant defining exit code 2 for CLI usage errors. |

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
A Python constant identifier (`EXIT_USAGE`) defining exit code 2 for command-line syntax or invocation errors, classified as `kind: name-only` per D-023.
