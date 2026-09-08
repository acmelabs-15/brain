---
package: rjm
name: uncovered_skills
slug: uncovered-skills
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/rule_activation_coverage_baseline.json, sha256: e22e8410c9691d388ec6b977c3e4670fac9662a56149a43849834d3e6b4cba3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# uncovered_skills

## Definition — verbatim
(used, not defined)

> "uncovered_skills" — scripts/validation/rule_activation_coverage_baseline.json:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/rule_activation_coverage_baseline.json | 24 | defined here | Configuration array key listing grandfathered skill identifiers that lack test activation scenarios. |

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
A JSON configuration key in `rule_activation_coverage_baseline.json`, classified as name-only per D-023.
