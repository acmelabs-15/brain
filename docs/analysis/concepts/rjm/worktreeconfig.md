---
package: rjm
name: worktreeConfig
slug: worktreeconfig
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# worktreeConfig

## Definition — verbatim
(used, not defined)

> "extensions.worktreeConfig" — scripts/validation/check_repo_health_report.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 26 | used here | Referenced as the Git configuration extension required to support worktree-scoped configuration without errors. |

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
`worktreeConfig` is a Git configuration extension name (`extensions.worktreeConfig`) enabling worktree-specific configuration files, classified as `kind: name-only` per D-023.
