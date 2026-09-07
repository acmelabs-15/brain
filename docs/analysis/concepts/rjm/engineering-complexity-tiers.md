---
package: rjm
name: Engineering Complexity Tiers
slug: engineering-complexity-tiers
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Engineering Complexity Tiers

## Definition — verbatim
> "Five tiers of engineering difficulty mapped to experience levels and focus areas." — .claude/skills/analyze/references/engineering-complexity-tiers.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 7 | defined here | Defined as a 5-tier taxonomy mapping engineering difficulty to oversight and review rigor. |
| .claude/skills/analyze/SKILL.md | 70 | used here | Referenced as guidance for classifying components and evaluating pattern appropriateness. |
| .claude/skills/planner/SKILL.md | 291 | used here | Cited in planner references as single source of truth for classifying task complexity tiers. |

## Consumes
Architectural proposals, component dependencies, feature scope definitions.

## Produces
Complexity tier ratings (Tier 1-5), review rigor requirements, quality gate criteria.

## When applied
Pre-task classification, architectural design reviews, and quality gate evaluations.

## Sub-concepts
tier-summary, tier-4, senior-to-staff, task-classification, patterns-and-oversight, the-senior-inflection-point, staff-vs-principal

## Part of
analyze

## Implementation status
defects: missing-path

## Design notes
A core taxonomic framework in rjm establishing five levels of engineering complexity (Entry, Junior, Senior, Staff, Principal). It serves as a unified reference across both `analyze` and `planner` skills to calibrate review rigor, quality gates, and pattern complexity to the problem tier.
