---
package: rjm
name: GIT_BUDGET_SECONDS
slug: git-budget-seconds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# GIT_BUDGET_SECONDS

## Definition — verbatim
(used, not defined)

> "GIT_BUDGET_SECONDS" — scripts/validation/check_repo_health.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 50 | defined here | Referenced in module docstring as the execution budget limit ensuring diagnosis completes before hook timeouts. |

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
`GIT_BUDGET_SECONDS` is a Python timing constant defining the total execution budget allocated to Git subprocess calls within the repository health gate, classified as `kind: name-only` per D-023.
