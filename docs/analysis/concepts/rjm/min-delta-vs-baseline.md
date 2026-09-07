---
package: rjm
name: MIN_DELTA_VS_BASELINE
slug: min-delta-vs-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MIN_DELTA_VS_BASELINE

## Definition — verbatim
(used, not defined)

> "MIN_DELTA_VS_BASELINE = 0.5" — scripts/eval/eval-rule-activation.py:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-rule-activation.py | 89 | defined here | Constant defining the minimum required score improvement (0.5) over baseline for a rule to pass activation evaluation. |

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
defects: doc-drift

## Design notes
Numerical threshold constant requiring an active prompt mechanism to demonstrate a measurable performance advantage over the unassisted baseline; classified as `name-only` per D-023.
