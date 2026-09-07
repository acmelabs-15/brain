---
package: rjm
name: FAIL_NO_DELTA
slug: fail-no-delta
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FAIL_NO_DELTA

## Definition — verbatim
> "return \"FAIL_NO_DELTA\"" — scripts/eval/eval-rule-activation.py:1717

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-rule-activation.py | 1717 | defined here | Returns failure verdict when the evaluated mechanism meets absolute threshold but fails to beat baseline by at least 0.5 points. |
| scripts/eval/README.md | 307 | defined here | Documents FAIL_NO_DELTA as a qualifying activation failure verdict that increments the consecutive rollback streak. |
| scripts/eval/software_engineering_library_activation_gate.py | 34 | used here | Included in ROLLBACK_VERDICTS set to increment consecutive failure counts toward rollback threshold. |

## Consumes
Mechanism average scores and baseline unassisted model average scores.

## Produces
Blocking evaluation verdict (exit code 1) indicating insufficient behavioral divergence from the baseline LLM.

## When applied
Applied when a rule mechanism achieves `MIN_ACTIVATION_SCORE` (3.5) but fails to exceed baseline performance by `MIN_DELTA_VS_BASELINE` (0.5).

## Sub-concepts
none

## Part of
software_engineering_library_activation_gate, eval-rule-activation

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
An empirical evaluation gate verdict ensuring that a rule or skill actually alters model behavior beyond what base model capabilities already provide, preventing the deployment of redundant prompt context that fails to deliver measurable delta.
