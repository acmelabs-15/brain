---
package: rjm
name: _DEFAULT_REPAIR
slug: default-repair
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _DEFAULT_REPAIR

## Definition — verbatim
(used, not defined)

> "_DEFAULT_REPAIR = _SCOPE_REPAIRS" — scripts/validation/check_repo_health_report.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 50 | defined here | Fallback repair command specifying local Git configuration fix. |

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
`_DEFAULT_REPAIR` is an internal Python string constant defining the fallback local-scope Git repair command, classified as `kind: name-only` per D-023.
