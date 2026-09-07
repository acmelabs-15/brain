---
package: rjm
name: MANIFEST_MAX_AGE_DAYS
slug: manifest-max-age-days
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_model_pins.py, sha256: 861aacfef7183396e0c27f4042806260e586b61afd2bb7c93f1b010ad68b94fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
