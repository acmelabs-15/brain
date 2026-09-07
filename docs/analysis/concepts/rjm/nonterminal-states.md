---
package: rjm
name: NONTERMINAL_STATES
slug: nonterminal-states
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# NONTERMINAL_STATES

## Definition — verbatim
(used, not defined)

> "NONTERMINAL_STATES = frozenset({\"OPEN\", \"DRAFT\", \"LOCKED\"})" — scripts/validation/active_plan_closeout.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 19 | defined here | Frozenset constant specifying active or draft GitHub issue states that prevent plan closeout warnings. |

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
`NONTERMINAL_STATES` is a Python module constant in `active_plan_closeout.py` defining nonterminal GitHub issue states rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
