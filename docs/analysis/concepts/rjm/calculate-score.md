---
package: rjm
name: calculate_score
slug: calculate-score
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/validate_experiment.py, sha256: 1826ee03d52a3393c8c669330d46dd9e26ab6585330991d1da261645a145de53}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# calculate_score

## Definition — verbatim
(used, not defined)

> "def calculate_score(" — .claude/skills/chaos-experiment/scripts/validate_experiment.py:215

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/scripts/validate_experiment.py | 215 | defined here | Computes aggregate 0-100 completeness score based on section presence, marker absence, and quality checks. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
`calculate_score` is a scoring algorithm function identifier that computes a 0-100 completeness metric across document sections and quality gates, classified as `name-only` per D-023.
