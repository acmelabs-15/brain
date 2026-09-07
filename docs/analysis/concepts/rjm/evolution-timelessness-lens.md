---
package: rjm
name: Evolution/Timelessness lens
slug: evolution-timelessness-lens
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/evolution-scoring.md, sha256: 7e5b7f9e76ce28a7545f65dc038b5e24a9820dd515183e5dbef0a06e8045c4cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evolution/Timelessness lens

## Definition — verbatim
> "The Evolution/Timelessness lens is the core evaluative perspective for SkillForge v4.0. Every skill must score ≥7 on timelessness to be approved." — .claude/skills/skillforge/references/evolution-scoring.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-scoring.md | 3 | defined here | Defined as the core evaluative perspective requiring skills to achieve a timelessness score of at least 7. |

## Consumes
Skill design artifacts and operational assumptions.

## Produces
Evaluative critique and longevity assessment of candidate skills.

## When applied
Applied during skill analysis and synthesis evaluation to inspect future-proofing and temporal resilience.

## Sub-concepts
none

## Part of
evolution-scoring-framework

## Implementation status
defects: doc-drift

## Design notes
An evaluative perspective that interrogates how candidate skills will age over multiple time horizons. It forces designers to abstract volatile tooling dependencies and plan for ecosystem evolution.
