---
package: rjm
name: _normalize_state
slug: normalize-state
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _normalize_state

## Definition — verbatim
(used, not defined)

> "def _normalize_state(state: str | None) -> str | None:" — scripts/validation/active_plan_closeout.py:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/active_plan_closeout.py | 86 | defined here | Helper function normalizing GitHub issue state strings to uppercase. |

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
`_normalize_state` is a private Python helper function that normalizes issue state strings in active plan validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
