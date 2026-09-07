---
package: rjm
name: Orchestrator Skills
slug: orchestrator-skills
kind: pattern
package_phase: rjm:Phase 1: Deep Analysis
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/regression-questions.md, sha256: 8b258798fe9db38d01862e82c5bfecccb5890bfac02b77679b932a176d2b7719}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Orchestrator Skills

## Definition — verbatim
> "### For Orchestrator Skills" — .claude/skills/skillforge/references/regression-questions.md:264

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 264 | defined here | Section heading specifying tailored questions for skills coordinating multi-agent or multi-skill workflows. |

## Consumes
Skill intent focused on coordinating and composing other skills.

## Produces
Tailored analysis questions focusing on skill composition, interoperable handoffs, and downstream failure handling.

## When applied
Applied when designing or analyzing an orchestrator-style skill.

## Sub-concepts
none

## Part of
question-categories

## Implementation status
clean

## Design notes
A skill archetype in SkillForge representing skills that manage multi-skill or multi-agent workflows, emphasizing composition boundaries, standard handoff schemas, and downstream failure recovery.
