---
package: rjm
name: _GIT_TIMEOUT_SECONDS
slug: git-timeout-seconds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
