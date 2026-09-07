---
package: rjm
name: NO_POSITIVE_CASES
slug: no-positive-cases
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

# NO_POSITIVE_CASES

## Definition — verbatim
> "return \"NO_POSITIVE_CASES\"" — scripts/eval/eval-rule-activation.py:1752

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-rule-activation.py | 1752 | defined here | Returns configuration failure verdict when a scenario suite contains no positive test cases to measure activation. |
| scripts/eval/README.md | 219 | defined here | Explains that a scenario file with only negative cases yields NO_POSITIVE_CASES because activation cannot be validated without positive cases. |
| scripts/eval/software_engineering_library_activation_gate.py | 34 | used here | Included in ROLLBACK_VERDICTS set to increment the consecutive activation failure streak. |

## Consumes
Scenario definition files and scenario pool validation flags (`has_positive_cases`).

## Produces
Configuration error verdict (exit code 2) refusing an evaluation run lacking positive test cases.

## When applied
Applied during scenario pool evaluation when a test suite contains only negative restraint cases or no test scenarios targeting positive rule activation.

## Sub-concepts
none

## Part of
software_engineering_library_activation_gate, eval-rule-activation

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
An evaluation preflight and aggregation gate verdict that prevents false positive certifications by refusing scenario suites that contain only negative cases, ensuring activation is affirmatively measured before certifying a rule.
