---
package: rjm
name: YAGNI
slug: yagni
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/commands/spec.md, sha256: f7da01531eeb6c779e39894ebbf99c076b122fed686f185c99b0306abf65f350}
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/cva-analysis/scripts/validate-cva-matrix.py, sha256: 023cdf1b41f86382b2dc144e531ab2b509ac05c8d795cc25dfcc95e6753588dc}
  - {path: .claude/skills/decision-critic/references/mental-models-galls-law.md, sha256: 02e959738698d10d405c028c1a165cd63f81e23e53535bbbe2a8323f8204cf6a}
  - {path: .claude/skills/planner/references/mental-models-galls-law.md, sha256: c92dfa5f41a98019df5632823621ccab6fac26ad154ddb59fcda98de50b8f04b}
  - {path: .claude/skills/pre-mortem/references/mental-models-galls-law.md, sha256: a20568aa9cb7817e9a00f0c05fdf506c4791643251a61c282174cde8463bb74d}
  - {path: .claude/skills/quality-grades/references/kiss-principle.md, sha256: 2d5d660a123359f0ec19b8715124fd6df9e1fc7bdfcfffba5c61f35c92d3a9d5}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# YAGNI

## Definition — verbatim
> "- **YAGNI**: Only specify what is needed now. Speculative requirements create waste." — .claude/commands/spec.md:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 145 | used here | Cited under implementation code quality standards alongside SOLID and DRY. |
| .claude/commands/spec.md | 151 | used here | Core requirement guiding specification generation: only specify what is needed now. |
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 122 | used here | Applied to context minimization to omit speculative information. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 64 | used here | CVA requirement to guard against premature abstraction and unused variability. |
| .claude/skills/cva-analysis/scripts/validate-cva-matrix.py | 177 | used here | Script check ensuring matrix variations represent actual current requirements. |
| .claude/skills/cva-analysis/SKILL.md | 59 | used here | Instruction to avoid introducing design patterns without current variation. |
| .claude/skills/decision-critic/references/mental-models-galls-law.md | 69 | used here | Gall's law guideline emphasizing evolutionary construction over speculative design. |
| .claude/skills/planner/references/mental-models-galls-law.md | 61 | used here | Planning guideline advising against over-engineering initial phases. |
| .claude/skills/pre-mortem/references/mental-models-galls-law.md | 53 | used here | Pre-mortem check identifying speculative features as high risk failure points. |
| .claude/skills/quality-grades/references/kiss-principle.md | 46 | used here | Contrasted with KISS as governing what features get built rather than how. |
| .claude/skills/review/references/decision-rigor.md | 91 | used here | Decision rigor checklist item scrutinizing unrequested architectural complexity. |
| templates/agents/implementer.shared.md | 153 | used here | Shared implementer template citing YAGNI in quality standards. |

## Consumes
Specifications, feature backlogs, architectural abstractions, and planned implementations.

## Produces
Scoped, minimal implementations stripped of speculative hooks, unused configuration, and premature abstractions.

## When applied
Applied during planning, specification writing, and coding to prevent over-engineering and gold-plating.

## Sub-concepts
none

## Part of
software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
You Aren't Gonna Need It (YAGNI) serves as a primary scoping constraint in rjm. By prohibiting speculative requirements and unneeded extension points, YAGNI keeps codebases lean, reducing maintenance overhead and preventing bugs in unused code paths.
