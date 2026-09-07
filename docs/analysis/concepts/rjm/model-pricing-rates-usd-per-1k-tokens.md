---
package: rjm
name: MODEL_PRICING_RATES_USD_PER_1K_TOKENS
slug: model-pricing-rates-usd-per-1k-tokens
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_common.py, sha256: 68a26fff6cd877843cddfabd13608f4f1e8f30b0808e5e73888793b6dc811ad6}
  - {path: scripts/eval/_plan_runner.py, sha256: 891ac160d400379e6aba6460a303b77a7538e5d7a3915704f1f9351a6d807d1b}
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MODEL_PRICING_RATES_USD_PER_1K_TOKENS

## Definition — verbatim
(used, not defined)

> "MODEL_PRICING_RATES_USD_PER_1K_TOKENS: dict[str, dict[str, float]] = {" — scripts/eval/_eval_common.py:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_common.py | 24 | defined here | Dictionary mapping model identifiers to input/output USD pricing rates per 1K tokens. |
| scripts/eval/_plan_runner.py | 3 | used here | Imported to calculate projected USD costs for model execution plans. |
| scripts/eval/_run_rollup_core.py | 34 | used here | Imported to compute aggregate USD costs from token counts in evaluation runs. |
| scripts/eval/eval-model-sweep.py | 18 | used here | Referenced in module docstring and pre-flight validation to ensure candidate models have known pricing rates. |
| scripts/eval/eval-skill-overlap.py | 71 | used here | Imported to compute monetary cost estimates for pairwise skill overlap evaluation runs. |

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
defects: missing-path, doc-drift, other

## Design notes
MODEL_PRICING_RATES_USD_PER_1K_TOKENS is a pricing configuration dictionary in `_eval_common.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
