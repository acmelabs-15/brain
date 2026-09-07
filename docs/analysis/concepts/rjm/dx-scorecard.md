---
package: rjm
name: DX scorecard
slug: dx-scorecard
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# DX scorecard

## Definition — verbatim
> "| `DX scorecard` | Full audit, emphasis on final scorecard |" — .claude/skills/dx-review/SKILL.md:38

## Also called — verbatim
`DX AUDIT SCORECARD` — .claude/skills/dx-review/SKILL.md:180

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/dx-review/SKILL.md | 12 | defines | Trigger phrase requesting a full audit with primary emphasis on the final scorecard. |
| .claude/skills/dx-review/SKILL.md | 175 | defines | Section heading establishing the standard eight-dimension developer experience scorecard layout. |

## Consumes
Scores across the eight audit dimensions, evidence citations, method labels, and TTHW measurements.

## Produces
The final formatted scorecard table presenting dimension scores, inspection methods, and overall DX arithmetic mean.

## When applied
Compiled following completion of all eight audit steps to encapsulate audit findings before review gate submission.

## Sub-concepts
scorecard, tested, partial, inferred

## Part of
dx-review

## Implementation status
defects: orphan

## Design notes
The structured tabular report generated at the conclusion of rjm's dx-review skill. It aggregates numerical assessments across all evaluated facets of developer experience while demanding explicit evidence classification for every score.
