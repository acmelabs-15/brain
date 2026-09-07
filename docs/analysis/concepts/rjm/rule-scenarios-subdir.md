---
package: rjm
name: RULE_SCENARIOS_SUBDIR
slug: rule-scenarios-subdir
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

# RULE_SCENARIOS_SUBDIR

## Definition — verbatim
(used, not defined)

> "RULE_SCENARIOS_SUBDIR = Path(\"tests\") / \"evals\" / \"rule-scenarios\"" — scripts/validation/check_rule_activation_coverage.py:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 80 | defined here | Constant defining the subdirectory path for rule evaluation scenarios. |

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
A constant identifier defining the filesystem subdirectory for rule evaluation scenarios rather than an agent lifecycle concept.
