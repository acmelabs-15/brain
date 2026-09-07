---
package: rjm
name: Scoring Anchors
slug: scoring-anchors
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/type-design-analyzer.md, sha256: c7df006d7ae08ed703b47924db90819e8eb288d7bef81c9f6386781f8f43b4b3}
  - {path: templates/agents/type-design-analyzer.shared.md, sha256: 45e5c07a21cf4d2d42f18452b07878272598bcc2a5ade37c490d32d85b325074}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Scoring Anchors

## Definition — verbatim
> "**Scoring Anchors (apply to all four dimensions):**" — .claude/agents/type-design-analyzer.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/type-design-analyzer.md | 52 | defined here | Defined as an objective rubric mapping counts of satisfied sub-criteria across four dimensions to standardized 1-10 scores. |
| templates/agents/type-design-analyzer.shared.md | 62 | defined here | Defined in shared template as the standard scoring anchor table mapping satisfied sub-criteria to scores 1, 3, 5, 7, and 10. |

## Consumes
Type definitions and evaluated sub-criteria counts (0-4) across the four review dimensions.

## Produces
Normalized 1-10 numerical ratings and auditable score justifications.

## When applied
When performing type design evaluations in code review.

## Sub-concepts
none

## Part of
type-design-analyzer

## Implementation status
defects: other

## Design notes
Scoring Anchors establishes an objective, discrete calibration mechanism that converts subjective qualitative assessments of type invariants into reproducible 1-10 metrics based on strict sub-criteria counts. In rjm's type review workflow, this prevents score drift between reviewers and forces explicit justification for missing criteria.
