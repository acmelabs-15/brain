---
package: rjm
name: Timelessness
slug: timelessness
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/code-qualities-assessment/README.md, sha256: 7986954754bee5447b0a744ceccd2c0272ecf1966dd9dd85bc8df21031887d5e}
  - {path: .claude/skills/skillforge/references/evolution-scoring.md, sha256: 7e5b7f9e76ce28a7545f65dc038b5e24a9820dd515183e5dbef0a06e8045c4cb}
  - {path: .claude/skills/validation-authority/SKILL.md, sha256: 0b8799627fe980eeb0ca75f7e04440cdadc66e19a715e92c10cc31598282ae9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Timelessness

## Definition — verbatim
> "The Evolution/Timelessness lens is the core evaluative perspective for SkillForge v4.0. Every skill must score ≥7 on timelessness to be approved." — .claude/skills/skillforge/references/evolution-scoring.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/SKILL.md | 403 | defined here | Deep dive section scoring the buy-vs-build framework 9/10 based on enduring economic and organizational principles. |
| .claude/skills/code-qualities-assessment/README.md | 87 | used here | Scored 9/10 citing adherence to computer science fundamentals established from the 1960s to 1990s. |
| .claude/skills/skillforge/references/evolution-scoring.md | 3 | defined here | Core evaluative perspective in SkillForge requiring all approved skills to achieve a score >= 7. |
| .claude/skills/validation-authority/SKILL.md | 141 | defined here | Section scoring validation authority principles 9/10 based on universal tool integration concerns. |

## Consumes
Software design principles, architectural patterns, and skill specification documents.

## Produces
Evaluation score (1-10 scale) measuring longevity and resistance to transient technology churn.

## When applied
Applied during skill evaluation, architectural reviews, and framework quality assessments.

## Sub-concepts
none

## Part of
evolution-scoring

## Implementation status
defects: doc-drift, missing-path, other, orphan

## Design notes
Timelessness is an overarching evaluative lens throughout rjm that gauges whether an engineering practice, skill, or architectural decision is grounded in enduring principles rather than ephemeral trends. By favoring patterns with multi-decade relevance, it insulates the system from premature obsolescence.
