---
package: rjm
name: _IMMUNIZATION
slug: immunization
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _IMMUNIZATION

## Definition — verbatim
(used, not defined)

> "_IMMUNIZATION = " — scripts/validation/check_repo_health_report.py:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 52 | defined here | Command string specifying worktree-scoped immunization against core.bare corruption. |

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
`_IMMUNIZATION` is a Python string constant holding the Git command used to immunize worktrees against `core.bare` corruption, classified as `kind: name-only` per D-023.
