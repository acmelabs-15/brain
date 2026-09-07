---
package: rjm
name: _echo_tail
slug: echo-tail
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _echo_tail

## Definition — verbatim
(used, not defined)

> "def _echo_tail(output: str) -> None:" — scripts/validation/check_generated_staleness.py:205

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_generated_staleness.py | 205 | defined here | Helper function printing the trailing lines of failed child process output to display diagnosis blocks. |

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
_echo_tail is an internal Python helper function identifier formatting output tails rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
