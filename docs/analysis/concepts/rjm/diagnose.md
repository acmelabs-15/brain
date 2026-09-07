---
package: rjm
name: diagnose
slug: diagnose
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# diagnose

## Definition — verbatim
(used, not defined)

> "def diagnose(repo_root: Path) -> str | None:" — scripts/validation/check_git_hook_health.py:213

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 213 | defined here | Public diagnostic function returning the failed git hook condition string or None when healthy. |
| scripts/validation/check_repo_health.py | 438 | defined here | Public diagnostic function classifying repository health and bare git configuration against a budget. |

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
`diagnose` is a Python function identifier implemented in validation utility scripts (`check_git_hook_health.py` and `check_repo_health.py`) rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
