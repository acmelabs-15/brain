---
package: rjm
name: _MAX_OUTPUT_LINES
slug: max-output-lines
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _MAX_OUTPUT_LINES

## Definition — verbatim
(used, not defined)

> "_MAX_OUTPUT_LINES = 40" — scripts/validation/check_generated_staleness.py:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_generated_staleness.py | 186 | defined here | Constant capping the number of output lines echoed when reporting check failures. |

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
_MAX_OUTPUT_LINES is a Python constant identifier limiting diagnostic output lines rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
