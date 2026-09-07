---
package: rjm
name: FORM_FACTOR_EQUIVALENCE_CI_HALF_WIDTH_LIMIT
slug: form-factor-equivalence-ci-half-width-limit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_report_aggregator.py, sha256: e97ac098816d2320597647fd82035eb4a9f561dfee3e0140fe7e761a6fa5c2d4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FORM_FACTOR_EQUIVALENCE_CI_HALF_WIDTH_LIMIT

## Definition — verbatim
(used, not defined)

> "FORM_FACTOR_EQUIVALENCE_CI_HALF_WIDTH_LIMIT = 0.10" — scripts/eval/_report_aggregator.py:500

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_report_aggregator.py | 500 | defined here | Constant defining the maximum allowable bootstrap confidence interval half-width (0.10) to declare statistical equivalence between prompt forms. |

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
FORM_FACTOR_EQUIVALENCE_CI_HALF_WIDTH_LIMIT is a module constant bounding the confidence interval width for equivalence testing rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
