---
package: rjm
name: RepoHealth
slug: repohealth
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# RepoHealth

## Definition — verbatim
(used, not defined)

> "class RepoHealth:" — scripts/validation/check_repo_health_report.py:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 58 | defined here | Dataclass definition holding repository health status and Git configuration scope metadata. |
| scripts/validation/check_repo_health.py | 86 | used here | Imported and instantiated to represent diagnosis verdicts in the health gate. |

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
`RepoHealth` is an internal Python dataclass representing repository health verification verdicts and scope inspection results, classified as `kind: name-only` per D-023.
