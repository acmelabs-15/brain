---
package: rjm
name: cost_basis
slug: cost-basis
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_common.py, sha256: 68a26fff6cd877843cddfabd13608f4f1e8f30b0808e5e73888793b6dc811ad6}
  - {path: scripts/eval/_plan_runner.py, sha256: 891ac160d400379e6aba6460a303b77a7538e5d7a3915704f1f9351a6d807d1b}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# cost_basis

## Definition — verbatim
(used, not defined)

> "def cost_basis(provider: str | None) -> str:" — scripts/eval/_eval_common.py:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_common.py | 88 | defined here | Utility function returning the billing basis ("usd" or "requests") for a given provider. |
| scripts/eval/_plan_runner.py | 17 | used here | Imported to determine whether execution plans display token dollar cost or request counts. |
| scripts/eval/eval-rule-activation.py | 73 | used here | Imported to determine the appropriate billing basis for rule activation runs. |

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
cost_basis is a Python helper function in `_eval_common.py` determining provider billing units rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
