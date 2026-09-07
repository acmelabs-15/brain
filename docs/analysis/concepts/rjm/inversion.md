---
package: rjm
name: Inversion
slug: inversion
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/mental-models-fat-tails.md, sha256: f4af14542219adb7a4adc77a2aa8dc73cd33cffd6526a255d2384da7772a27f3}
  - {path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml, sha256: 58a4c3f18d2b7e35138bf1058d787f594d46638756ba61e344553b7ee476e3cc}
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Inversion

## Definition — verbatim
> "What would guarantee this skill fails?" — .claude/skills/skillforge/references/multi-lens-framework.md:44

## Also called — verbatim
"Lens 2: Inversion" — .claude/skills/skillforge/references/multi-lens-framework.md:42

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 76 | defined here | Assigned as a Tier 4 decision-making mental model alongside OODA Loop and Pre-Mortems. |
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 59 | defined here | Used to identify red lines by asking when the organization should NEVER build or NEVER buy. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 18 | used here | Specified as a mandatory analytical lens element in the CVA skill specification schema. |
| .claude/skills/decision-critic/references/mental-models-fat-tails.md | 21 | used here | Applied during Inversion and Challenge steps when evaluating fat-tailed risk claims. |
| .claude/skills/decision-critic/SKILL.md | 83 | used here | Warning against skipping inversion, noting that forward reasoning overlooks critical failure modes. |
| .claude/skills/skillforge/assets/templates/skill-spec-template.xml | 27 | used here | Template tag declaring inversion as a required design lens in skill specification XML. |
| .claude/skills/skillforge/references/multi-lens-framework.md | 42 | defined here | Defined as Lens 2 asking what would guarantee failure to derive explicit anti-patterns. |
| .claude/skills/skillforge/references/specification-template.md | 36 | used here | Declared as an analytical lens tag in the reference skill specification template. |

## Consumes
Proposals, designs, or decisions undergoing critical evaluation.

## Produces
Failure modes, anti-patterns, non-negotiable rejection criteria ("red lines").

## When applied
Step 5 of decision critique, skill specification review, and buy-vs-build analysis.

## Sub-concepts
none

## Part of
multi-lens-framework

## Implementation status
defects: doc-drift, missing-path

## Design notes
A foundational mental model across rjm's critique and specification frameworks. Rather than reasoning forward about how to succeed, Inversion asks what would guarantee failure, deriving explicit anti-patterns and guardrails to prevent catastrophic flaws.
