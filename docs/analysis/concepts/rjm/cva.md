---
package: rjm
name: CVA
slug: cva
kind: technique
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
  - {path: .claude/skills/analyze/references/engineering-complexity-tiers.md, sha256: 05278447141bdd73073aeed6363d837300adc6fe9dd1c8c1f85c011de321f243}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CVA

## Definition — verbatim
> "Commonality Variability Analysis (CVA) is a systematic technique for discovering abstractions from requirements." — .claude/skills/cva-analysis/SKILL.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 78 | used here | Cited in architectural decisions as the methodology used to analyze provider variation axes. |
| .claude/agents/implementer.md | 3 | used here | Listed in Level 3 (Practices) of the implementer agent's design knowledge hierarchy. |
| .claude/commands/spec.md | 150 | used here | Mandated as a core principle during requirement specification to identify natural abstractions. |
| .claude/skills/analyze/references/engineering-complexity-tiers.md | 79 | defined here | Prescribed for Tier 2 and Tier 3 complex architectures to guide pattern selection. |
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 9 | used here | Referenced as the operational discipline realizing Coplien's multi-paradigm software design. |
| .claude/skills/cva-analysis/SKILL.md | 19 | defined here | Defined as the systematic matrix method for discovering abstractions from requirements. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 158 | used here | Required in specification schemas to define commonalities and variabilities. |
| docs/workflow-commands.md | 57 | defined here | Documented under `/spec` workflow as Step 3 identifying shared behaviors and variation points. |
| templates/agents/implementer.shared.md | 6 | used here | Embedded in the shared implementer agent template under core design practices. |

## Consumes
Problem statements, user requirements, domain use cases, and prior art code implementations.

## Produces
A 2D CVA matrix (commonalities across rows, variabilities across columns) and mapping to Gang-of-Four design patterns.

## When applied
Applied during specification, analysis, and architecture phases (especially for Tier 2/3 engineering complexity) before implementing software.

## Sub-concepts
strategy

## Part of
spec

## Implementation status
clean

## Design notes
Commonality Variability Analysis (CVA) is rjm's cornerstone architectural design methodology. By systematically tabulating what is invariant across use cases (commonalities) against what changes across contexts (variabilities), engineers avoid premature or incorrect abstractions. Rows naturally dictate Strategy patterns, columns dictate Abstract Factory patterns, and independent axes dictate Bridge patterns, making pattern selection rigorous and evidence-based.
