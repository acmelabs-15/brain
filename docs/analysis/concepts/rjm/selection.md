---
package: rjm
name: Selection
slug: selection
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# Selection

## Definition — verbatim
(used, not defined)

> "class Selection:" — scripts/test_selection/select_tests.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/test_selection/select_tests.py | 35 | defined here | Dataclass representing the outcome of test selection containing full boolean flag, reason string, and tests tuple. |

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
`Selection` is a Python dataclass identifier in `scripts/test_selection/select_tests.py` structuring test selection output rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
