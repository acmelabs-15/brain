---
package: rjm
name: Overall Maintainability Score
slug: overall-maintainability-score
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Overall Maintainability Score

## Definition — verbatim
> "**Overall Maintainability Score**: X/5" — .claude/skills/review/references/code-quality.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/code-quality.md | 105 | defined here | Output field presenting the composite 1-5 maintainability score. |

## Consumes
Individual ratings from the Maintainability Assessment table.

## Produces
A composite numeric score out of 5 representing overall code maintainability.

## When applied
At the conclusion of the Maintainability Assessment section in code quality review.

## Sub-concepts
none

## Part of
maintainability-assessment

## Implementation status
defects: doc-drift, other

## Design notes
A composite score field in rjm's code quality review that condenses multi-dimensional maintainability evaluations into a single rating out of 5 for quick assessment by reviewers.
