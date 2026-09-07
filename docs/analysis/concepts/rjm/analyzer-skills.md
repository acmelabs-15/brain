---
package: rjm
name: Analyzer Skills
slug: analyzer-skills
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

# Analyzer Skills

## Definition — verbatim
> "### For Analyzer Skills" — .claude/skills/skillforge/references/regression-questions.md:252

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 252 | defined here | Section heading specifying tailored questions for skills that inspect, audit, or analyze code and data. |

## Consumes
Skill intent focused on investigation and diagnostics.

## Produces
Tailored analysis questions focusing on misleading results, essential context, and confidence level indicators.

## When applied
Applied when designing or analyzing an analyzer-style skill.

## Sub-concepts
none

## Part of
question-categories

## Implementation status
clean

## Design notes
A skill archetype in SkillForge representing skills that inspect, audit, or diagnose systems, requiring specialized inquiry to prevent misleading conclusions and ensure proper context acquisition.
