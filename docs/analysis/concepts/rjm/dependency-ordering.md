---
package: rjm
name: Dependency Ordering
slug: dependency-ordering
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Dependency Ordering

## Definition — verbatim
> "## Dependency Ordering" — .claude/skills/retrospective/references/diagnosis-and-actions.md:181

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 96 | defined here | Phase 3 activity sequencing action items by technical prerequisites. |
| .claude/commands/plan.md | 30 | defined here | Plan verification step validating that tasks execute in valid sequential dependency order. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 181 | defined here | Reference section defining dependency ordering principles. |
| .claude/skills/retrospective/SKILL.md | 131 | used here | Skill instruction directing dependency ordering of resulting actions. |
| templates/agents/retrospective.shared.md | 649 | defined here | Shared template specifying dependency ordering execution steps. |

## Consumes
Validated action items and prerequisites.

## Produces
Topological sequencing or phased waves of actions where prerequisites strictly precede dependent tasks.

## When applied
Applied during plan validation and retrospective Phase 3 before creating work orders or issues.

## Sub-concepts
none

## Part of
decide-what-to-do, planning

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Dependency Ordering arranges action items and plan tasks into an executable sequence where prerequisite foundations are completed prior to dependent modifications. It prevents circular dependencies, race conditions, and blocking failures during autonomous execution.
