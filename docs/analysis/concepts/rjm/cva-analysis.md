---
package: rjm
name: cva-analysis
slug: cva-analysis
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/software-engineering-library/SKILL.md, sha256: 8d26b0bd36626f9e4058c618f8a4aab1f30f7d8d2ee0eb0185da5559a6fd8115}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# cva-analysis

## Definition — verbatim
> "<name>cva-analysis</name>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 9 | defined here | Defines the identity and metadata of the Commonality Variability Analysis skill specification. |
| .claude/skills/software-engineering-library/SKILL.md | 66 | used here | Outlines when to use the software engineering library versus delegating to the cva-analysis skill. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 193 | used here | Prescribes conditional execution of cva-analysis during Step 5 of the spec generation pipeline for Tier 3-5 complexity. |
| README.md | 316 | defined here / used here | Summarizes the /spec command workflow incorporating CVA analysis, acceptance criteria, and critic review. |
| scripts/eval/eval-knowledge-integration.py | 90 | used here | Configures knowledge integration evaluation test prompts targeting the cva-analysis skill. |

## Consumes
Requirements, user stories, use case descriptions, PRD artifacts.

## Produces
CVA matrix, pattern selection rationale, architecture decision records (ADRs).

## When applied
During the /spec phase when complexity tier is 3-5, or Tier 1-2 with multiple use cases.

## Sub-concepts
identify-commonalities, identify-variabilities, build-cva-matrix, map-to-patterns, validation-and-handoff

## Part of
spec

## Implementation status
defects: doc-drift, missing-path

## Design notes
cva-analysis (Commonality Variability Analysis) is rjm's primary systematic technique for discovering abstractions from requirements before choosing software patterns. Rooted in Coplien's multi-paradigm design, it prevents wrong or premature abstractions by constructing a matrix of invariant commonalities and varying features across use cases, mapping rows to Strategy and columns to Abstract Factory. Without it, developers would intuitively impose patterns prematurely, leading to architectural misalignments and costly refactoring.
