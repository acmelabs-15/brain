---
package: rjm
name: BudgetReport
slug: budgetreport
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# BudgetReport

## Definition — verbatim
(used, not defined)

> "class BudgetReport:" — scripts/skill_description_budget.py:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_description_budget.py | 109 | defined here | Dataclass aggregating corpus-wide skill metrics including total count, total chars, total tokens, and top offenders. |

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
defects: missing-path

## Design notes
`BudgetReport` is a Python dataclass identifier modeling aggregate token budget metrics rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
