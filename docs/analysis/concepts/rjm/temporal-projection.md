---
package: rjm
name: temporal_projection
slug: temporal-projection
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml, sha256: 58a4c3f18d2b7e35138bf1058d787f594d46638756ba61e344553b7ee476e3cc}
  - {path: .claude/skills/skillforge/references/evolution-timelessness.md, sha256: 8df03e8ec69ae99547b2b687ecbc9bd7e8618f1a74e84f3300b4001da7819da8}
  - {path: .claude/skills/skillforge/references/regression-questions.md, sha256: 8b258798fe9db38d01862e82c5bfecccb5890bfac02b77679b932a176d2b7719}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# temporal_projection

## Definition — verbatim
> "## Temporal Projection" — .claude/skills/skillforge/references/evolution-timelessness.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/assets/templates/skill-spec-template.xml | 249 | defined here | XML specification element structuring 6-month, 1-year, and 2-year risk and mitigation projections. |
| .claude/skills/skillforge/references/evolution-timelessness.md | 5 | defined here | Section heading defining the temporal projection evaluation timeframe across 6 months, 1 year, 2 years, and 5 years. |
| .claude/skills/skillforge/references/regression-questions.md | 77 | defined here | Category 4 regression questioning section assessing skill design across time horizons. |
| .claude/skills/skillforge/references/specification-template.md | 175 | defined here | XML specification template block illustrating expected states, risks, and mitigations across horizons. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 42 | used here | Summary table listing Temporal Projection among sections extracted from monolithic SKILL.md into references. |

## Consumes
Proposed skill architecture, problem scope, and current ecosystem assumptions.

## Produces
Multi-horizon risk matrix, obsolescence triggers, and proactive architectural mitigations.

## When applied
Applied during Phase 1 (Regression Questioning) and Phase 2 (Evolution Analysis).

## Sub-concepts
none

## Part of
evolution-timelessness

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
Temporal projection is a forward-looking analysis technique in SkillForge that maps a skill's assumptions across distinct time horizons (now, 1 month, 6 months, 1 year, 2 years, 5 years) to identify future failure points, ecosystem shifts, and architectural extension points before implementation.
