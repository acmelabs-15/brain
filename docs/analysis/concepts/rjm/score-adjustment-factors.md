---
package: rjm
name: Score Adjustment Factors
slug: score-adjustment-factors
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/evolution-scoring.md, sha256: 7e5b7f9e76ce28a7545f65dc038b5e24a9820dd515183e5dbef0a06e8045c4cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Score Adjustment Factors

## Definition — verbatim
> "## Score Adjustment Factors" — .claude/skills/skillforge/references/evolution-scoring.md:301

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-scoring.md | 301 | defined here | Defines positive and negative scoring increments based on design qualities or anti-patterns. |

## Consumes
Base criteria scores and identified architectural qualities or violations.

## Produces
Numerical score modifiers (+1.0 to -2.0) applied to calculate the final timelessness score.

## When applied
Applied after baseline scoring to adjust scores for exemplary practices or penalize anti-patterns.

## Sub-concepts
none

## Part of
evolution-scoring-framework

## Implementation status
defects: doc-drift

## Design notes
A set of defined positive (+0.5 to +1) and negative (-0.5 to -2) modifiers that adjust a skill's baseline score according to structural merits like exemplary extension points or flaws like hardcoded versions.
