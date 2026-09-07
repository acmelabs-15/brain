---
package: rjm
name: CheckReport
slug: checkreport
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

# CheckReport

## Definition — verbatim
(used, not defined)

> "class CheckReport:" — scripts/validation/check_model_pins.py:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_model_pins.py | 105 | defined here | Dataclass tracking hard policy violations versus grandfathered backlog entries during model pin validation. |

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
`CheckReport` is a Python dataclass identifier in `check_model_pins.py` accumulating script execution findings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
