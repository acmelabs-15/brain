---
package: rjm
name: _is_reference_scenario
slug: is-reference-scenario
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

# _is_reference_scenario

## Definition — verbatim
(used, not defined)

> "def _is_reference_scenario(repo_root: Path, data: Mapping[str, Any], path: Path) -> bool:" — scripts/validation/check_rule_activation_coverage.py:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_rule_activation_coverage.py | 202 | defined here | Private helper function checking whether a scenario targets a skill reference under ADR-088. |

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
A private helper function identifier checking whether a scenario targets a skill reference under ADR-088 rather than an agent lifecycle concept.
