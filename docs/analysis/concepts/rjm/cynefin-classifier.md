---
package: rjm
name: cynefin-classifier
slug: cynefin-classifier
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# cynefin-classifier

## Definition — verbatim
> "name: cynefin-classifier" — .claude/skills/cynefin-classifier/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 16 | used here | Listed as an integrated upstream skill for classifying problem uncertainty. |
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 41 | used here | Alternative skill specification citing cynefin-classifier when problem predictability is unknown. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 35 | used here | Integration reference directing users to run cynefin-classifier when unsure if a problem requires analysis or experimentation. |
| .claude/skills/cynefin-classifier/SKILL.md | 2 | defined here | Skill frontmatter name establishing the Cynefin Framework problem classifier. |

## Consumes
Problem statement, degree of uncertainty, cause-and-effect predictability, and stakeholder alignment.

## Produces
Cynefin domain classification (Clear, Complicated, Complex, Chaotic, Confusion) and recommended response strategy.

## When applied
Invoked prior to architectural planning or sourcing when it is unclear whether a problem is analyzable through expertise or requires experimentation.

## Sub-concepts
clear, complicated, complex, chaotic, confusion

## Part of
problem-classification

## Implementation status
defects: doc-drift

## Design notes
A decision-support skill in rjm that categorizes problems using Dave Snowden's Cynefin framework. In the lifecycle, it prevents inappropriate analytical methods by identifying whether a problem is Complicated (suitable for expert analysis like buy-vs-build) or Complex (requiring iterative probe-sense-respond experimentation).
