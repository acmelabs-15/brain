---
package: rjm
name: Commonality/Variability Analysis
slug: commonality-variability-analysis
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/golden-principles/references/design-solid-principles.md, sha256: 5aa244c1fbe421aafa6b7abc0e8161e548ed359cc09d88985371d294cbfb9144}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
  - {path: docs/skill-reference.md, sha256: 579cab0d62a861c65cc7599f70e4f77ae0317e59b1cbd5f021f2fd49df3618d5}
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Commonality/Variability Analysis

## Definition — verbatim
> "Systematic abstraction discovery using Commonality Variability Analysis. Build matrix of what varies vs what's constant, then let patterns emerge." — .claude/skills/cva-analysis/SKILL.md:4

## Also called — verbatim
> "CVA" — docs/workflow-commands.md:57

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 3 | used here | Core design methodology utilized by the implementer agent to discover abstractions. |
| .claude/skills/cva-analysis/SKILL.md | 4 | defined here | Skill specification outlining systematic abstraction discovery through commonality and variability matrices. |
| .claude/skills/golden-principles/references/design-code-qualities.md | 25 | used here | Design guideline recommending CVA for achieving class cohesion. |
| .claude/skills/golden-principles/references/design-solid-principles.md | 23 | used here | Single Responsibility Principle guideline recommending CVA to isolate responsibilities. |
| .claude/skills/quality-grades/references/code-qualities.md | 23 | used here | Code quality rubric citing CVA as the primary mechanism for establishing class cohesion. |
| docs/skill-reference.md | 132 | used here | Skill catalog entry describing CVA for identifying shared behavior and variation points. |
| docs/workflow-commands.md | 57 | defined here | Workflow command step executing CVA during specification analysis. |
| templates/agents/implementer.shared.md | 6 | used here | Shared agent definition citing CVA as the design method for implementing plans. |

## Consumes
Requirements, domain models, existing code implementations, variation points.

## Produces
Commonality-variability matrix mapping constants vs variables to guide natural design patterns.

## When applied
Applied when designing abstractions across multiple similar requirements to prevent premature pattern imposition.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: missing-path, doc-drift

## Design notes
Commonality/Variability Analysis (CVA, originated by James Coplien) is a foundational design technique in rjm. By systematically tabulating what remains constant across implementations (commonalities) and where behavior differs (variabilities), it derives interfaces and inheritance hierarchies grounded in empirical requirements rather than arbitrary design patterns.
