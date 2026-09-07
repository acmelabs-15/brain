---
package: rjm
name: EXIT_AUTH
slug: exit-auth
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/pr_snapshot.py, sha256: 141fa122f7859d1b75fe2018204506cc0adb32a4b94573d8f767b871a894cfec}
  - {path: .github/scripts/run_with_retry.py, sha256: ee8221f3d767bbe3936d275d141cc0dea77c267cd2b8d95accb99a35333b10dc}
  - {path: scripts/bulk_cancel_guard.py, sha256: ab3973edd5a813192e5cb59c448bfaaf557c121f33667246bf911e7da8dbcc9b}
  - {path: scripts/ci/check_bot_identity.py, sha256: 562f63926cad000cc717a27a4697e34a7a516d869efce24a70feed52abcd2be7}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
  - {path: scripts/validation/check_ruleset_params_drift.py, sha256: f0bfa925f0d2aa397f3f5aefe435c5b1fecdb0fcce928444332a4fbcb8b93c56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# EXIT_AUTH

## Definition — verbatim
(used, not defined)

> "EXIT_AUTH = 4" — .claude/skills/doc-accuracy/scripts/pr_snapshot.py:48

## Also called — verbatim
`_EXIT_AUTH` — .github/scripts/run_with_retry.py:36

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/pr_snapshot.py | 48 | defined here | Defines authentication or permission error exit code 4 constant for PR snapshot verification. |
| .github/scripts/run_with_retry.py | 36 | defined here | Defines authentication failure exit code 4 constant for workflow command execution with retry. |
| scripts/bulk_cancel_guard.py | 82 | defined here | Defines authentication error exit code 4 constant for bulk workflow cancellation protection. |
| scripts/ci/check_bot_identity.py | 48 | defined here | Defines authentication error exit code 4 constant for bot identity verification. |
| scripts/eval/eval-agent-vs-baseline.py | 72 | defined here | Defines authentication error exit code 4 constant for model evaluation harness. |
| scripts/eval/eval-model-sweep.py | 60 | defined here | Defines authentication error exit code 4 constant for model sweep evaluation harness. |
| scripts/validation/check_ruleset_params_drift.py | 32 | defined here | Defines authentication error exit code 4 constant for ruleset parameter drift validation. |

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
defects: orphan, exit-code-mismatch, script-bug

## Design notes
`EXIT_AUTH` is a standard exit code constant (value 4) standardized across Python CLI scripts per ADR-035 to represent authentication or authorization errors rather than an independent SDLC lifecycle concept, classified as `kind: name-only` per D-023.
