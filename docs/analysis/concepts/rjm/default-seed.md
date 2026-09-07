---
package: rjm
name: DEFAULT_SEED
slug: default-seed
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_model_sweep_core.py, sha256: 5c8b7f4c62170505506a771f8b6fd8b750d7d70c2209a9574174528fb0a68735}
  - {path: scripts/eval/eval-model-sweep.py, sha256: e5df6204ae1635ec5785ca4305a65009179b831c45c0f97440fd2ca3ed731506}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFAULT_SEED

## Definition — verbatim
(used, not defined)

> "DEFAULT_SEED = 42" — scripts/eval/_model_sweep_core.py:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_sweep_core.py | 63 | defined here | Constant defining the default pseudorandom number generator seed (42) for deterministic bootstrap resampling. |
| scripts/eval/eval-model-sweep.py | 49 | used here | Imported from _model_sweep_core and bound to the --seed CLI argument for model sweeps. |
| scripts/eval/eval-rule-activation.py | 102 | defined here | Constant defining the default random seed (0) for rule activation evaluation sampling. |

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
DEFAULT_SEED is a configuration constant identifier used across evaluation scripts to set default deterministic random seeds rather than an SDLC lifecycle concept, classified as name-only per D-023.
