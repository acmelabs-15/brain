---
package: rjm
name: timelessness_score
slug: timelessness-score
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml, sha256: 58a4c3f18d2b7e35138bf1058d787f594d46638756ba61e344553b7ee476e3cc}
  - {path: .claude/skills/skillforge/references/phase2-specification-deep-dive.md, sha256: c290149e8372d86a6cdc5ec7c1b56975781fb6a1b175ce635f6e82282209a307}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# timelessness_score

## Definition — verbatim
> "    <timelessness_score><!-- 1-10, must be ≥7 --></timelessness_score>" — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/assets/templates/skill-spec-template.xml | 21 | defined here | Specification XML metadata element defining the 1-10 durability score, requiring a score of at least 7 for approval. |
| .claude/skills/skillforge/references/phase2-specification-deep-dive.md | 12 | used here | Example metadata tag in Phase 2 specification structure documenting timelessness evaluation. |
| .claude/skills/skillforge/references/specification-template.md | 31 | used here | Example XML metadata entry in specification template setting an approved timelessness score of 8. |

## Consumes
Temporal projections across multiple time horizons, dependency stability assessments, and anti-obsolescence mitigations.

## Produces
Numeric rating (1-10) and approval gating verdict (score ≥7 approved; <7 requires revision or rejection).

## When applied
Evaluated during Phase 2 (Specification) and verified by the Evolution Agent in Phase 4 (Synthesis).

## Sub-concepts
none

## Part of
evolution-timelessness

## Implementation status
clean

## Design notes
The timelessness score is a quantitative quality gate in SkillForge measuring how well a skill's design withstands underlying model shifts, tooling churn, and ecosystem evolutions over 6-month to 5-year horizons, preventing the creation of fragile, short-lived skills.
