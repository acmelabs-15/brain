---
package: rjm
name: PRICING_RATE_AS_OF
slug: pricing-rate-as-of
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_common.py, sha256: 68a26fff6cd877843cddfabd13608f4f1e8f30b0808e5e73888793b6dc811ad6}
  - {path: scripts/eval/_plan_runner.py, sha256: 891ac160d400379e6aba6460a303b77a7538e5d7a3915704f1f9351a6d807d1b}
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PRICING_RATE_AS_OF

## Definition — verbatim
(used, not defined)

> "PRICING_RATE_AS_OF = \"2026-08-01\"" — scripts/eval/_eval_common.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_common.py | 47 | defined here | Constant recording the effective retrieval date ("2026-08-01") for model pricing rates. |
| scripts/eval/_plan_runner.py | 3 | used here | Imported to accompany pricing rates for cost estimation provenance. |
| scripts/eval/_run_rollup_core.py | 35 | used here | Imported to attach pricing timestamp metadata to rollup cost reports. |
| scripts/eval/eval-skill-overlap.py | 72 | used here | Imported to record the pricing date alongside evaluation run cost estimates. |

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
defects: doc-drift, other

## Design notes
PRICING_RATE_AS_OF is a metadata date string constant in `_eval_common.py` documenting rate verification timestamps rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
