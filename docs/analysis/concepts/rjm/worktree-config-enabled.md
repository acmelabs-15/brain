---
package: rjm
name: _worktree_config_enabled
slug: worktree-config-enabled
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _worktree_config_enabled

## Definition — verbatim
(used, not defined)

> "def _worktree_config_enabled(repo_root: Path, budget: GitBudget) -> bool:" — scripts/validation/check_repo_health.py:377

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 377 | defined here | Helper function checking git config --type=bool --get extensions.worktreeConfig. |

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
`_worktree_config_enabled` is a Python helper function inspecting Git configuration to verify whether `extensions.worktreeConfig` is enabled, classified as `kind: name-only` per D-023.
