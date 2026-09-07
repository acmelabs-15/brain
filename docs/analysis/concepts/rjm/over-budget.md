---
package: rjm
name: _over_budget
slug: over-budget
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _over_budget

## Definition — verbatim
(used, not defined)

> "def _over_budget(report: BudgetReport, args: argparse.Namespace) -> str | None:" — scripts/skill_description_budget.py:213

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_description_budget.py | 213 | defined here | Evaluates whether corpus character or token counts exceed configured budget caps and returns a formatted reason. |

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
`_over_budget` is an internal Python helper function identifier evaluating budget threshold caps in skill_description_budget.py rather than an SDLC lifecycle concept, classified as name-only per D-023.
