---
package: rjm
name: NEGATIVE_GATE
slug: negative-gate
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/validation/check_rule_activation_coverage.py, sha256: c96ae7b997afbdf46f31e2f2a2eff29415af0f5694b3719d32d6afe0a576dab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# NEGATIVE_GATE

## Definition — verbatim
(used, not defined)

> "NEGATIVE_GATE = \"skip-rule-not-applicable\"" — scripts/eval/eval-rule-activation.py:203

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-rule-activation.py | 203 | defined here | Constant defining the canonical negative gate string value ("skip-rule-not-applicable") for restraint evaluation. |
| scripts/validation/check_rule_activation_coverage.py | 87 | defined here | Constant defining the negative gate label used to identify restraint test scenarios during coverage checks. |

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
Constant identifier storing the canonical negative gate label string ("skip-rule-not-applicable") across rule activation evaluation and coverage scripts; classified as `name-only` per D-023.
