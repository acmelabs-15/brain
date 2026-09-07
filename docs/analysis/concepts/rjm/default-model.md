---
package: rjm
name: DEFAULT_MODEL
slug: default-model
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_anthropic_api.py, sha256: 574e0b74df4e4a048641130705579a08ddd84d48c0a4e79655dae3040888e1e8}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/eval/eval-e2e-delivery.py, sha256: def5027d65244270d65f2bd9e0329765678c2808d15206622d8ee4c791c3b064}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
  - {path: scripts/eval/variance-control.py, sha256: 1d714bacc4692f831c8bc76888ce6339cc62588a7b6fe7b76649725096c6d369}
  - {path: scripts/validation/check_model_pins.py, sha256: 861aacfef7183396e0c27f4042806260e586b61afd2bb7c93f1b010ad68b94fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFAULT_MODEL

## Definition — verbatim
(used, not defined)

> "DEFAULT_MODEL = \"claude-sonnet-4-6\"" — scripts/eval/_anthropic_api.py:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_anthropic_api.py | 28 | defined here | Constant specifying default Anthropic model string for eval suites. |
| scripts/eval/eval-agents.py | 49 | used here | Imported default model identifier used for agent quality evaluation. |
| scripts/eval/eval-e2e-delivery.py | 45 | used here | Imported default model identifier used in delivery benchmark trials. |
| scripts/eval/eval-knowledge-integration.py | 32 | used here | Imported default model identifier used for skill context value evaluations. |
| scripts/eval/eval-model-sweep.py | 69 | defined here | Fallback model constant used when sweeping models across eval scenarios. |
| scripts/eval/eval-oneshot-vs-shipped.py | 68 | defined here | Default model constant for comparing one-shot outputs against shipped baselines. |
| scripts/eval/eval-reviewer-asymmetry.py | 50 | defined here | Default model constant for reviewer asymmetry evaluation trials. |
| scripts/eval/eval-rule-activation.py | 65 | used here | Imported default model identifier for prompt rule activation trials. |
| scripts/eval/eval-skill-overlap.py | 96 | defined here | Default model constant used for skill overlap evaluation trials. |
| scripts/eval/variance-control.py | 42 | defined here | Default model constant used in variance measurement and control experiments. |
| scripts/validation/check_model_pins.py | 62 | defined here | Expected default model constant used to validate model pin consistency across configs. |

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
DEFAULT_MODEL is a configuration constant identifier across evaluation and validation scripts specifying the default LLM model identifier rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
