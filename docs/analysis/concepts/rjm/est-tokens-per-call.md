---
package: rjm
name: EST_TOKENS_PER_CALL
slug: est-tokens-per-call
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_common.py, sha256: 68a26fff6cd877843cddfabd13608f4f1e8f30b0808e5e73888793b6dc811ad6}
  - {path: scripts/eval/_plan_runner.py, sha256: 891ac160d400379e6aba6460a303b77a7538e5d7a3915704f1f9351a6d807d1b}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EST_TOKENS_PER_CALL

## Definition — verbatim
(used, not defined)

> "EST_TOKENS_PER_CALL = 3500  # ~2000-5000 tokens per call, use midpoint" — scripts/eval/_eval_common.py:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_common.py | 18 | defined here | Constant defining estimated tokens per model call (3500) used for evaluation cost projections. |
| scripts/eval/_plan_runner.py | 14 | used here | Imported to calculate total token and dollar cost estimates for execution plans. |
| scripts/eval/eval-agents.py | 53 | used here | Imported to estimate token consumption and cost for agent evaluations. |
| scripts/eval/eval-knowledge-integration.py | 36 | used here | Imported to calculate pre-flight token spend estimates for knowledge integration evaluations. |
| scripts/eval/eval-rule-activation.py | 71 | used here | Imported for token budget estimation before running rule activation tests. |
| scripts/eval/eval-skill-overlap.py | 70 | used here | Imported to estimate token expenditure for pairwise skill overlap evaluation runs. |

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
EST_TOKENS_PER_CALL is a configuration constant in `_eval_common.py` providing a midpoint token estimate per API call rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
