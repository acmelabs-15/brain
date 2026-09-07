---
package: rjm
name: Validator/Checker Skills
slug: validator-checker-skills
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

# Validator/Checker Skills

## Definition — verbatim
> "### For Validator/Checker Skills" — .claude/skills/skillforge/references/regression-questions.md:270

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 270 | defined here | Section heading specifying tailored questions for skills verifying standards, linting, and quality gates. |

## Consumes
Skill intent focused on verification, linting, and compliance gating.

## Produces
Tailored analysis questions focusing on false positive likelihoods, dangerous false negatives, and severity calibrations.

## When applied
Applied when designing or analyzing a validator/checker skill.

## Sub-concepts
none

## Part of
question-categories

## Implementation status
clean

## Design notes
A skill archetype in SkillForge representing quality gates, linters, and verification checkers, focusing inquiry on minimizing false alarms while preventing hazardous false negatives.
