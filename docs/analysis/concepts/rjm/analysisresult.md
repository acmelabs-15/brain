---
package: rjm
name: AnalysisResult
slug: analysisresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py, sha256: 7073083f4b28fca148890b3a7149ef41098af111ded727c1350dac89b3857383}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# AnalysisResult

## Definition — verbatim
(used, not defined)

> "class AnalysisResult(TypedDict):" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/analyze_skill_placement.py | 58 | defined here | TypedDict defining the dictionary structure returned by skill placement analysis. |

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
AnalysisResult is a Python TypedDict data structure in analyze_skill_placement.py modeling the dictionary output of skill placement analysis rather than an operational lifecycle concept, classified as name-only per D-023.
