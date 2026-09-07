---
package: rjm
name: MANIFEST_MAX_AGE_DAYS
slug: manifest-max-age-days
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# MANIFEST_MAX_AGE_DAYS

## Definition — verbatim
(used, not defined)

> "MANIFEST_MAX_AGE_DAYS = 180" — scripts/validation/check_model_pins.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_model_pins.py | 71 | defined here | Module constant setting maximum allowable age in days (180) for model pin manifest evidence before expiration. |

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
`MANIFEST_MAX_AGE_DAYS` is a Python module constant integer in `check_model_pins.py` defining an evidence validity threshold rather than an independent lifecycle concept, classified as `kind: name-only` per D-023.
