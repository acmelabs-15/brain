---
package: rjm
name: KNOWN_STATES
slug: known-states
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# KNOWN_STATES

## Definition — verbatim
(used, not defined)

> "KNOWN_STATES = TERMINAL_STATES | NONTERMINAL_STATES" — scripts/validation/active_plan_closeout.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 20 | defined here | Frozenset constant combining terminal and nonterminal states to detect unrecognized GitHub issue states. |

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
`KNOWN_STATES` is a Python module constant in `active_plan_closeout.py` enumerating valid GitHub issue states for normalization rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
