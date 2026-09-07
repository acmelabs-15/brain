---
package: rjm
name: _validate_scenarios_measure
slug: validate-scenarios-measure
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

# _validate_scenarios_measure

## Definition — verbatim
(used, not defined)

> "def _validate_scenarios_measure(data: Mapping[str, Any], path: Path) -> None:" — scripts/validation/check_rule_activation_coverage.py:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 140 | defined here | Private helper function verifying that a scenario file contains at least one positive measurement case. |

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
A private validation function identifier ensuring scenario files define positive measurement cases rather than an agent lifecycle concept.
