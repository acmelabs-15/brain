---
package: rjm
name: SMART Validation
slug: smart-validation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SMART Validation

## Definition — verbatim
> "## Activity: SMART Validation" — .claude/skills/retrospective/references/diagnosis-and-actions.md:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 95 | used here | Phase 3 activity validating action items against SMART criteria. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 146 | defined here | Reference section defining SMART validation criteria for proposed actions. |
| .claude/skills/retrospective/SKILL.md | 129 | used here | Skill instruction mandating SMART validation before storing action items. |
| templates/agents/retrospective.shared.md | 614 | defined here | Shared template specifying SMART validation requirements. |

## Consumes
Candidate action items.

## Produces
Validation verdicts verifying Specific, Measurable, Actionable/Achievable, Relevant, and Time-bound/Traceable criteria.

## When applied
Quality gate applied in Phase 3 (Decide What to Do) before any action item is accepted.

## Sub-concepts
none

## Part of
decide-what-to-do, retrospective

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
SMART Validation acts as a quality gate ensuring that retrospective action items are not aspirational vagaries. By rejecting action proposals that lack clear ownership, verifiable completion metrics, and traceable implementation boundaries, it prevents backlog stagnation.
