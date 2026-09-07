---
package: rjm
name: GitBudget
slug: gitbudget
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# GitBudget

## Definition — verbatim
(used, not defined)

> "class GitBudget:" — scripts/validation/check_repo_health.py:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_repo_health.py | 136 | defined here | Dataclass tracking elapsed time and enforcing shared timeout budget across Git operations. |

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
`GitBudget` is a Python dataclass maintaining deadline state across multiple Git subprocess invocations, classified as `kind: name-only` per D-023.
