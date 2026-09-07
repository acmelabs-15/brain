---
package: rjm
name: Degrees of Freedom
slug: degrees-of-freedom
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/degrees-of-freedom.md, sha256: 3d5311e2c2241676e4ae91d497de9e930061f02a45127c14560cb12cb2f9b99c}
  - {path: .claude/skills/skillforge/references/iteration-guide.md, sha256: 5118f4210e260b60388478c9f4035a565622871dcda0747f0765dc510aac2d2e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Degrees of Freedom

## Definition — verbatim
> "# Degrees of Freedom in Skill Design" — .claude/skills/skillforge/references/degrees-of-freedom.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/degrees-of-freedom.md | 1 | defined here | Defines the three levels of freedom (high, medium, low) for calibrating instruction specificity in skill design. |
| .claude/skills/skillforge/references/iteration-guide.md | 83 | used here | Referenced as guidance for choosing the right level of specificity when tightening instructions during skill iteration. |

## Consumes
Skill requirements and analysis of operation fragility and execution variation.

## Produces
Calibrated prompt specificity across skill sections (high, medium, or low freedom).

## When applied
When authoring SKILL.md instructions, templates, or scripts to balance model flexibility against deterministic guardrails.

## Sub-concepts
high-freedom, medium-freedom, low-freedom

## Part of
skillforge

## Implementation status
clean · defects: orphan

## Design notes
A design taxonomy that categorizes agent instructions into high, medium, and low degrees of freedom based on task fragility and context dependency. It prevents common prompt anti-patterns like overfitting through over-specification or generating brittle outputs through insufficient constraints.
