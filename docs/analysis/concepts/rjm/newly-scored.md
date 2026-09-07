---
package: rjm
name: "newly_scored"
slug: newly-scored
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# newly_scored

## Definition — verbatim
(used, not defined)

> "newly_scored" — .claude/skills/code-qualities-assessment/scripts/assess.py:834

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/scripts/assess.py | 834 | defined here | Status value string in QualityDelta docstring indicating a quality was measurable only at head revision. |

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
defects: doc-drift, missing-path, always-failing-gate

## Design notes
A status string literal in `assess.py` indicating that a quality metric was newly measurable at head revision without a base baseline rather than an agent lifecycle concept, authored with kind name-only per D-023.
