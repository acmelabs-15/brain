---
package: rjm
name: _SCOPE_REPAIRS
slug: scope-repairs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _SCOPE_REPAIRS

## Definition — verbatim
(used, not defined)

> "_SCOPE_REPAIRS = {" — scripts/validation/check_repo_health_report.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 40 | defined here | Dictionary mapping Git configuration scopes to corresponding repair commands. |

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
`_SCOPE_REPAIRS` is a Python dictionary constant mapping Git configuration scopes to tailored remediation commands in `check_repo_health_report.py`, classified as `kind: name-only` per D-023.
