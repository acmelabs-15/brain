---
package: rjm
name: First Principles
slug: first-principles
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml, sha256: 58a4c3f18d2b7e35138bf1058d787f594d46638756ba61e344553b7ee476e3cc}
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# First Principles

## Definition — verbatim
> "- **First Principles**: Question the requirement, try to delete the step, then optimize, then speed up, then automate. Never automate something that should not exist." — .claude/commands/plan.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 26 | uses | Foundation principle for Step 0 gate blocking work on unvalidated demand. |
| .claude/commands/plan.md | 39 | defines | Principle guiding work planning: question requirements and delete unnecessary steps before optimizing. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 52 | defines | Thinking model decoupling fundamental capabilities from solution implementation modes. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 17 | uses | Applied as a design analysis lens for skill capability specifications. |
| .claude/skills/skillforge/assets/templates/skill-spec-template.xml | 26 | uses | Listed as required analytical thinking lens in skill specification XML templates. |
| .claude/skills/skillforge/references/multi-lens-framework.md | 19 | defines | Defined as Lens 1 in the multi-lens framework for stripping conventional assumptions. |
| .claude/skills/skillforge/references/specification-template.md | 35 | uses | Included in markdown specification template as a core analysis lens. |

## Consumes
Requirements, existing system assumptions, problems to be solved.

## Produces
Deconstructed fundamental capabilities, simplified workflow steps, elimination of unnecessary steps.

## When applied
In planning, specification front-gates, buy-vs-build analysis, and skill design.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A foundational thinking technique and design principle across planning, specification, and skill design that strips away inherited conventions to question underlying requirements and solve problems from fundamental truths.
