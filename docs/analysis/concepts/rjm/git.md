---
package: rjm
name: _git
slug: git
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/commit_and_push.py, sha256: 8a5521fc19a8b4d0e1e8bc522053eb632b16a30d35176a096464c4f1076cb8be}
  - {path: scripts/maintenance/detect_unlanded_commits.py, sha256: 15fdb7d7a4802f2ef25f9db95d4751ef67ffee7a4738f3305770117ab0398371}
  - {path: scripts/validation/check_git_hook_health.py, sha256: 994cbeca1efab1c3e1fa9fac5a2e1f7bf19447ebc27da86cf4925a6ef85ffee2}
  - {path: scripts/validation/citation_head_state.py, sha256: 5fef428b3fc73e7fe6182283c6724ec4ada2cb6ca53e25a72fc05f480b005cf7}
  - {path: scripts/validation/session_scope.py, sha256: 4681b6ffbc1a872813cfe4b75e2a2382b925a6dbe1313ac9555ad3ea478fb830}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _git

## Definition — verbatim
(used, not defined)

> "def _git(args: list[str]) -> subprocess.CompletedProcess[str]:" — scripts/ci/commit_and_push.py:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/commit_and_push.py | 33 | defined here | Subprocess wrapper executing git commands and capturing combined stdout and stderr. |
| scripts/maintenance/detect_unlanded_commits.py | 25 | defined here | Subprocess wrapper executing git commands with timeout handling. |
| scripts/validation/check_git_hook_health.py | 93 | defined here | Subprocess wrapper executing git commands with LC_ALL=C and custom error handling. |
| scripts/validation/citation_head_state.py | 36 | defined here | Wrapper executing git subprocess commands in repo_root with returncode and output capture. |
| scripts/validation/session_scope.py | 52 | defined here | Subprocess wrapper executing git commands under an isolated environment. |

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
defects: doc-drift, orphan

## Design notes
A private helper function name implemented across multiple validation and CI maintenance scripts to execute Git subprocess commands rather than a lifecycle concept.
