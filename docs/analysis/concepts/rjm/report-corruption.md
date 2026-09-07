---
package: rjm
name: report_corruption
slug: report-corruption
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# report_corruption

## Definition — verbatim
(used, not defined)

> "def report_corruption(health: RepoHealth) -> None:" — scripts/validation/check_repo_health_report.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health_report.py | 84 | defined here | Function printing detailed corruption diagnosis and remediation instructions to stderr. |

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
`report_corruption` is a Python function in `check_repo_health_report.py` that formats corruption diagnoses and scope-specific repair instructions to stderr, classified as `kind: name-only` per D-023.
