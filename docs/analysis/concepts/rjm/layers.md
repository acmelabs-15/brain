---
package: rjm
name: LAYERS
slug: layers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/scripts/grade_domains.py, sha256: 14cd79a354e088527cb5cf77f2389be5577ed87949ba910b715ef69b7af91b5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# LAYERS

## Definition — verbatim
(used, not defined)

> "LAYERS = [\"agents\", \"skills\", \"scripts\", \"tests\", \"docs\", \"workflows\"]" — .claude/skills/quality-grades/scripts/grade_domains.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/scripts/grade_domains.py | 29 | defined here | Constant list defining the six architectural layers evaluated by the domain grading tool. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
grade-domains-py

## Implementation status
defects: exit-code-mismatch, doc-drift

## Design notes
An uppercase Python constant identifier in grade_domains.py enumerating evaluated architectural layers rather than an autonomous lifecycle concept.
