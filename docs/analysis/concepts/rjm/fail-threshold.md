---
package: rjm
name: FAIL_THRESHOLD
slug: fail-threshold
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

# FAIL_THRESHOLD

## Definition — verbatim
> "return \"FAIL_THRESHOLD\"" — scripts/eval/eval-rule-activation.py:1711

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-rule-activation.py | 1711 | defined here | Returns failure verdict when the evaluated description mechanism fails to reach the minimum activation score threshold (3.5). |
| scripts/eval/README.md | 306 | defined here | Documents FAIL_THRESHOLD as a qualifying activation failure verdict that increments the rollback streak in persistent state. |
| scripts/eval/software_engineering_library_activation_gate.py | 34 | used here | Included in ROLLBACK_VERDICTS set to trigger consecutive activation failure tracking for moved references. |

## Consumes
Evaluation scenario outputs, LLM judge rubric scores, and computed mechanism average scores (`desc_avg`).

## Produces
Blocking evaluation verdict (exit code 1) signalling that a rule or skill failed to meet the minimum activation score threshold.

## When applied
Applied when the description mechanism average score across non-negative scenarios falls below `MIN_ACTIVATION_SCORE` (3.5).

## Sub-concepts
none

## Part of
software_engineering_library_activation_gate, eval-rule-activation

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
An empirical activation gate verdict in rjm's rule evaluation harness indicating that a rule or skill reference failed to achieve the absolute score floor (3.5) required to prove effective behavioral steering, contributing to automatic CI rollback tracking.
