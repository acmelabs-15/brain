---
package: rjm
name: Atomicity Scoring
slug: atomicity-scoring
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
  - {path: .claude/skills/retrospective/scripts/score_atomicity.py, sha256: 57eca0bd3d23fbb59f688775840896cb580895c1db94cb591259860d7fbbb43d}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Atomicity Scoring

## Definition — verbatim
> "## Atomicity Scoring" — .claude/skills/retrospective/references/diagnosis-and-actions.md:199

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 99 | defined here | Phase 4 activity scoring extracted learnings from 0 to 100%. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 199 | defined here | Reference section establishing the atomicity deduction table and score thresholds. |
| .claude/skills/retrospective/scripts/score_atomicity.py | 9 | used here | Script header documenting derivation of scoring rules from diagnosis-and-actions.md. |
| .claude/skills/retrospective/SKILL.md | 139 | used here | Skill instruction directing use of the atomicity scoring rubric. |
| templates/agents/retrospective.shared.md | 3 | used here | Agent description highlighting atomicity scoring capability. |
| templates/agents/retrospective.shared.md | 671 | defined here | Shared template specifying atomicity scoring rules and factor adjustments. |

## Consumes
Extracted learning statements.

## Produces
Deductions and calibrated atomicity scores with quality thresholds (Gold 90-100%, Silver 80-89%, Bronze 70-79%, Rejected <70%).

## When applied
Evaluated during Phase 4 (Learning Extraction) prior to skillbook integration.

## Sub-concepts
atomicity-scores

## Part of
learning-extraction, retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Atomicity Scoring is a quantitative grading methodology implemented both as an analytical guideline and as an automated script (score_atomicity.py). It applies point deductions for compound learnings, vague language, missing context, and lack of actionable guidance, ensuring only high-quality, focused memories persist.
