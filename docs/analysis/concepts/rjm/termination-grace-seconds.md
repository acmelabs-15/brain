---
package: rjm
name: _TERMINATION_GRACE_SECONDS
slug: termination-grace-seconds
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _TERMINATION_GRACE_SECONDS

## Definition — verbatim
(used, not defined)

> "_TERMINATION_GRACE_SECONDS = 30.0" — scripts/validation/check_generated_staleness.py:173

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_generated_staleness.py | 173 | defined here | Constant defining the grace period in seconds allowed for a child process to clean up on SIGINT before escalation to SIGKILL. |

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
_TERMINATION_GRACE_SECONDS is a Python constant identifier specifying grace period seconds for child process termination rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
