---
package: rjm
name: _GATE_BUDGET_SECONDS
slug: gate-budget-seconds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _GATE_BUDGET_SECONDS

## Definition — verbatim
(used, not defined)

> "_GATE_BUDGET_SECONDS = 60.0" — scripts/validation/check_generated_staleness.py:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_generated_staleness.py | 168 | defined here | Constant defining the default aggregate execution budget in seconds for generator staleness checks. |

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
_GATE_BUDGET_SECONDS is a Python constant identifier specifying gate execution timeout seconds rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
