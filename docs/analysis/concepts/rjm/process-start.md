---
package: rjm
name: _PROCESS_START
slug: process-start
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _PROCESS_START

## Definition — verbatim
(used, not defined)

> "_PROCESS_START = time.monotonic()" — scripts/validation/check_generated_staleness.py:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_generated_staleness.py | 184 | defined here | Constant recording the process start timestamp via time.monotonic() to calculate elapsed time against outer caps. |

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
_PROCESS_START is a Python runtime timestamp variable identifier rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
