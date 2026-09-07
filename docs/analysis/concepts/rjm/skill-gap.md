---
package: rjm
name: Skill Gap
slug: skill-gap
kind: pattern
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Gap

## Definition — verbatim
> "Missing capability" — .claude/skills/retrospective/references/diagnosis-and-actions.md:260

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 260 | defined here | Root cause failure mode category indicating absence of an existing capability or pattern for a scenario. |

## Consumes
Five Whys analysis results indicating unhandled or novel problem scenarios.

## Produces
Proposed new skill or capability addition to the skill catalog.

## When applied
Applied during retrospective root cause categorization when an agent encounters a problem with no existing pattern or procedure.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Skill Gap classifies failure modes stemming from a complete lack of existing capability or procedural knowledge rather than execution error. In rjm's retrospective methodology, identifying a Skill Gap directly triggers the creation of new skills or tool definitions to expand the agent's problem-solving surface area.
