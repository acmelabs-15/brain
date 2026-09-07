---
package: rjm
name: BASELINE_RULE_KEY
slug: baseline-rule-key
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_rule_activation_coverage.py, sha256: c96ae7b997afbdf46f31e2f2a2eff29415af0f5694b3719d32d6afe0a576dab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BASELINE_RULE_KEY

## Definition — verbatim
(used, not defined)

> "BASELINE_RULE_KEY = \"uncovered_rules\"" — scripts/validation/check_rule_activation_coverage.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 84 | defined here | Constant specifying the JSON key for uncovered rules in the coverage baseline. |

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
clean

## Design notes
A constant identifier specifying the baseline JSON key for uncovered rules rather than an agent lifecycle concept.
