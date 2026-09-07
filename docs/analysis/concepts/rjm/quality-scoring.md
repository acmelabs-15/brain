---
package: rjm
name: "Quality Scoring"
slug: quality-scoring
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Quality Scoring

## Definition — verbatim
> "2. **Quality Scoring**" — .claude/skills/code-qualities-assessment/SKILL.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/SKILL.md | 87 | defined here | Second step of assessment workflow executing 5 quality assessments and aggregating scores. |

## Consumes
Extracted symbols, source lines of code, and context classification (production, test, generated).

## Produces
Numerical scores (1.0–10.0) with confidence ratings and diagnostic reasons across the five core qualities.

## When applied
Executed as step 2 of the assessment process following symbol extraction.

## Sub-concepts
qualityscore, fileassessment

## Part of
code-qualities-assessment

## Implementation status
defects: doc-drift, missing-path

## Design notes
`Quality Scoring` is the evaluation engine within the code-qualities-assessment skill that computes quantitative scores across the five foundational maintainability qualities: cohesion, coupling, encapsulation, testability, and non-redundancy. By standardizing scores on a 1–10 scale with explicit confidence weighting and rule-based thresholds, it provides an objective benchmark for code health across multi-agent workflows.
