---
package: rjm
name: _EXIT_LOGIC
slug: exit-logic
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/run_with_retry.py, sha256: ee8221f3d767bbe3936d275d141cc0dea77c267cd2b8d95accb99a35333b10dc}
  - {path: scripts/ci/execute_ai_review_post_script.py, sha256: b054d9d879990f9f217d6c35988afeffc153a412a657601f420cafb9a8d2102f}
  - {path: scripts/ci/install_copilot_cli.py, sha256: 43ad4fb2f64407170551ebf0a912601b74ab3574b2bcd44f81e0dd5cfc1260ae}
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
  - {path: scripts/ci/verify_github_auth.py, sha256: 4002c1260eee8c6c96768c5e14ff4ab9d9153b9664cac90a20003fcbd1fa5f87}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
  - {path: scripts/eval/optimize-artifact.py, sha256: 0df36122ac74e0681e0caeb878ed07ab01ce7dea50d1881e6bd1f7c4e998b765}
  - {path: scripts/validation/check_ci_dependency_pins.py, sha256: 177f5e747f3b253a60b46edbf76d82947d9b04a1df1b56b674530e78d6a07f0d}
  - {path: scripts/validation/check_copilot_version_pin.py, sha256: 1821fcb43cb7cb32c9d7740b80e25620a2efe62e3688b6f8a94d8f3b2c812350}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _EXIT_LOGIC

## Definition — verbatim
(used, not defined)

> "_EXIT_LOGIC = 1" — .github/scripts/run_with_retry.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/run_with_retry.py | 33 | defined here | Constant defining exit code 1 for deterministic logic and validation errors. |
| scripts/ci/execute_ai_review_post_script.py | 13 | defined here | Constant defining exit code 1 for review post-script execution failures. |
| scripts/ci/install_copilot_cli.py | 14 | defined here | Constant defining exit code 1 for CLI installation validation failures. |
| scripts/ci/invoke_copilot_cli.py | 21 | defined here | Constant defining exit code 1 for Copilot CLI invocation failures. |
| scripts/ci/verify_github_auth.py | 27 | defined here | Constant defining exit code 1 for GitHub auth verification failures. |
| scripts/eval/eval-agent-vs-baseline.py | 69 | defined here | Constant defining exit code 1 for evaluation script logic failures. |
| scripts/eval/eval-model-sweep.py | 57 | defined here | Constant defining exit code 1 for model sweep evaluation logic errors. |
| scripts/eval/eval-skill-overlap.py | 81 | defined here | Constant defining exit code 1 for skill overlap evaluation logic errors. |
| scripts/eval/optimize-artifact.py | 113 | defined here | Constant defining exit code 1 for artifact optimization logic errors. |
| scripts/validation/check_ci_dependency_pins.py | 67 | defined here | Constant defining exit code 1 for dependency pin check logic failures. |
| scripts/validation/check_copilot_version_pin.py | 41 | defined here | Constant defining exit code 1 for Copilot version pin check logic failures. |

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
A Python constant identifier (`_EXIT_LOGIC` or `EXIT_LOGIC`) defining exit code 1 for deterministic logic or validation errors, classified as `kind: name-only` per D-023.
