---
package: rjm
name: _clamped_budget
slug: clamped-budget
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _clamped_budget

## Definition — verbatim
(used, not defined)

> "def _clamped_budget(now: float) -> float:" — scripts/validation/check_generated_staleness.py:277

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_generated_staleness.py | 277 | defined here | Helper function calculating effective timeout budget clamped against outer environment caps. |

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
_clamped_budget is an internal Python helper function identifier clamping execution budgets rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
