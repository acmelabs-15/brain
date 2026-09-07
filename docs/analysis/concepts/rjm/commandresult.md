---
package: rjm
name: CommandResult
slug: commandresult
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_ai_review_context.py, sha256: 3f101a283c7e8f7336c1eddd274f513c9294353c5e57e7840de491adfb25bddb}
  - {path: scripts/ci/diagnose_copilot_cli.py, sha256: d05040c1d6bdaab669157a383c9f470e3cbc1261e0cb4974c89666ee59ec0b39}
  - {path: scripts/ci/execute_ai_review_post_script.py, sha256: b054d9d879990f9f217d6c35988afeffc153a412a657601f420cafb9a8d2102f}
  - {path: scripts/ci/install_copilot_cli.py, sha256: 43ad4fb2f64407170551ebf0a912601b74ab3574b2bcd44f81e0dd5cfc1260ae}
  - {path: scripts/ci/invoke_copilot_cli.py, sha256: 279e376171031fb1d2eb9d4ccbe0178dc93aa91c7c81e25e98cb5c78bb32e84a}
  - {path: scripts/ci/verify_github_auth.py, sha256: 4002c1260eee8c6c96768c5e14ff4ab9d9153b9664cac90a20003fcbd1fa5f87}
  - {path: scripts/gh_retry_helpers.py, sha256: c89bd3c3d70fed06aa06c88d1d2d6cadbaca7930afc4ebab86ca53f2a1013051}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CommandResult

## Definition — verbatim
(used, not defined)

> "class CommandResult:" — scripts/gh_retry_helpers.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_ai_review_context.py | 30 | used here | Imported dataclass representing external command execution results. |
| scripts/ci/diagnose_copilot_cli.py | 19 | defined here | Dataclass encapsulating exit code and output streams from CLI diagnosis commands. |
| scripts/ci/execute_ai_review_post_script.py | 18 | defined here | Dataclass encapsulating returncode and output for post-script executions. |
| scripts/ci/install_copilot_cli.py | 20 | defined here | Dataclass encapsulating returncode and output for installation commands. |
| scripts/ci/invoke_copilot_cli.py | 57 | defined here | Dataclass encapsulating returncode and output for Copilot CLI invocations. |
| scripts/ci/verify_github_auth.py | 33 | defined here | Dataclass encapsulating returncode and output for auth verification commands. |
| scripts/gh_retry_helpers.py | 71 | defined here | Dataclass encapsulating subprocess returncode, stdout, and stderr. |

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
`CommandResult` is a Python dataclass identifier used across multiple scripts to encapsulate command execution outputs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
