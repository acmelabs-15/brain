---
package: rjm
name: _OUTER_CAP_ENV
slug: outer-cap-env
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _OUTER_CAP_ENV

## Definition — verbatim
(used, not defined)

> "_OUTER_CAP_ENV = \"PRE_PR_OUTER_CAP_SECONDS\"" — scripts/validation/check_generated_staleness.py:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_generated_staleness.py | 180 | defined here | Constant specifying the environment variable name carrying the outer runner timeout cap. |

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
_OUTER_CAP_ENV is a Python constant identifier for an environment variable name rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
