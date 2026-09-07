---
package: rjm
name: Generator Skills
slug: generator-skills
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

# Generator Skills

## Definition — verbatim
> "### For Generator Skills" — .claude/skills/skillforge/references/regression-questions.md:258

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 258 | defined here | Section heading specifying tailored questions for skills creating code, documentation, or configuration artifacts. |

## Consumes
Skill intent focused on scaffolding and artifact creation.

## Produces
Tailored analysis questions focusing on templates, customization points, and quality validation.

## When applied
Applied when designing or analyzing a generator-style skill.

## Sub-concepts
none

## Part of
question-categories

## Implementation status
clean

## Design notes
A skill archetype in SkillForge representing skills that produce code, documentation, or configuration artifacts, emphasizing template consistency, customization parameters, and output validation.
