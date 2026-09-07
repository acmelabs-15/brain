---
package: rjm
name: DEFAULT_MIN_EFFECT
slug: default-min-effect
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_model_sweep_core.py, sha256: 5c8b7f4c62170505506a771f8b6fd8b750d7d70c2209a9574174528fb0a68735}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFAULT_MIN_EFFECT

## Definition — verbatim
(used, not defined)

> "DEFAULT_MIN_EFFECT = 0.05" — scripts/eval/_model_sweep_core.py:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_sweep_core.py | 62 | defined here | Constant defining the default minimum recall delta threshold (0.05) required to consider keeping a model pin. |
| scripts/eval/eval-model-sweep.py | 48 | used here | Imported from _model_sweep_core as the default CLI argument value for --min-effect. |

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
defects: missing-path, doc-drift

## Design notes
DEFAULT_MIN_EFFECT is a configuration constant identifier specifying the default effect size threshold for model sweep decisions rather than an SDLC lifecycle concept, classified as name-only per D-023.
