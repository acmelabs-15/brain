---
package: rjm
name: Blast Radius Containment
slug: blast-radius-containment
kind: technique
package_phase: rjm:chaos-experiment
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
  - {path: .claude/skills/chaos-experiment/references/chaos-engineering-principles.md, sha256: 349f7d0a141a8b6b34a2318666baf0e1f662f08d57d3f139ed50ceba80ecd581}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Blast Radius Containment

## Definition — verbatim
> "5. **Blast Radius Containment**: Minimize customer impact through careful scoping" — .claude/skills/chaos-experiment/SKILL.md:260

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/chaos-engineering-principles.md | 47 | defined here | Section heading outlining principles and practices for constraining experiment impact scope. |
| .claude/skills/chaos-experiment/SKILL.md | 260 | defined here | Principle 5 of chaos engineering specifying minimization of customer impact through scoping. |

## Consumes
Experiment parameters, target infrastructure segmentation, rollback runbooks, and abort thresholds.

## Produces
Strictly bounded blast radius containing failure injection to minimal instances or canary cohorts.

## When applied
Enforced continuously during the design, review, and execution of all chaos engineering experiments.

## Sub-concepts
canary-deployment, automatic-abort-criteria

## Part of
chaos-engineering

## Implementation status
defects: doc-drift, missing-path

## Design notes
Blast radius containment is the governing safety principle that makes running chaos experiments in production acceptable. Without stringent scoping, canary routing, and immediate automated rollbacks, chaos testing risks converting controlled experiments into unintended customer-impacting incidents.
