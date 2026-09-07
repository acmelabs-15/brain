---
package: rjm
name: _GIT_TIMEOUT_SECONDS
slug: git-timeout-seconds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/gc_worktrees.py, sha256: ddb43c967e699097aeafca6faa44390346c97a72d42a8fff4fe1beaa4f6203d9}
  - {path: scripts/validation/check_git_hook_health.py, sha256: 994cbeca1efab1c3e1fa9fac5a2e1f7bf19447ebc27da86cf4925a6ef85ffee2}
  - {path: scripts/validation/check_repo_health.py, sha256: f7f2150b68774a2af74e27eb6a7ee68c4aa28d0e3fef28e6a0a60e59cebf6854}
  - {path: scripts/validation/check_tmp_worktrees.py, sha256: 5c02ec68da197cf638f52de26a2f088604475285cceff8c3c6adb1029a58078a}
  - {path: scripts/validation/portability_git.py, sha256: 514b5c5a3541e4888e0b15440c04ec529e190db1a04714049ece5887b20c92b7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _GIT_TIMEOUT_SECONDS

## Definition — verbatim
(used, not defined)

> "_GIT_TIMEOUT_SECONDS = 10" — scripts/maintenance/gc_worktrees.py:106

## Also called — verbatim
`GIT_TIMEOUT_SECONDS` — scripts/validation/check_git_hook_health.py:82

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/gc_worktrees.py | 106 | defined here | Constant defining subprocess timeout in seconds for worktree inspection Git calls. |
| scripts/validation/check_git_hook_health.py | 82 | defined here | Constant defining subprocess timeout in seconds for Git hook validation. |
| scripts/validation/check_repo_health.py | 99 | defined here | Constant defining subprocess timeout in seconds for repository health checks. |
| scripts/validation/check_tmp_worktrees.py | 59 | defined here | Constant defining subprocess timeout in seconds for temporary worktree checks. |
| scripts/validation/portability_git.py | 34 | defined here | Constant defining subprocess timeout in seconds for Git portability validation. |

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
_GIT_TIMEOUT_SECONDS is a configuration constant setting execution timeouts for Git subprocess commands rather than an SDLC lifecycle concept, classified as name-only per D-023.
