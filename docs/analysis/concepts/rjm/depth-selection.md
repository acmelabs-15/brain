---
package: rjm
name: "Depth Selection"
slug: depth-selection
kind: phase
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Depth Selection

## Definition — verbatim
> "| 0. Depth Selection | 5 min | Quick / Standard / Deep tier |" — .claude/skills/buy-vs-build-framework/SKILL.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 48 | defined here | Phase 0 specification element defining inputs (budget, impact, reversibility) to select analysis depth. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 51 | defined here | Initial 5-minute phase in the buy-vs-build lifecycle process mapping proposals to an execution tier. |

## Consumes
Decision budget estimate ($), strategic impact level (low/medium/high), and reversibility classification.

## Produces
Depth tier selection (Quick, Standard, or Deep) establishing subsequent time-boxes and artifact deliverables.

## When applied
Executed as the immediate first step upon invoking the buy-vs-build framework.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-doc, missing-path

## Design notes
Phase 0 of rjm's buy-vs-build framework, designed to prevent over-engineering. In 5 minutes, it evaluates budget, strategic impact, and reversibility to assign a decision to the Quick, Standard, or Deep tier, setting explicit boundaries on how much time and effort the remaining evaluation phases may consume.
