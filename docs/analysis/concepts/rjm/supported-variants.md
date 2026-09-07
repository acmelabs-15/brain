---
package: rjm
name: SUPPORTED_VARIANTS
slug: supported-variants
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_plan_runner.py, sha256: 891ac160d400379e6aba6460a303b77a7538e5d7a3915704f1f9351a6d807d1b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SUPPORTED_VARIANTS

## Definition — verbatim
(used, not defined)

> "SUPPORTED_VARIANTS = frozenset(FORM_FACTOR_VARIANTS)" — scripts/eval/_plan_runner.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_plan_runner.py | 30 | defined here | Frozenset constant specifying the valid set of evaluation variant literals for validation. |

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
`SUPPORTED_VARIANTS` is a Python frozenset constant in `_plan_runner.py` defining valid variant identifiers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
