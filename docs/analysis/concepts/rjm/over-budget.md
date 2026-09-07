---
package: rjm
name: _over_budget
slug: over-budget
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/skill_description_budget.py, sha256: ff108f0301535684ddc0d27b6a5d51544a846b7332cdfe4bb8201eced72ee13a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
