---
package: rjm
name: "Regret Minimization"
slug: regret-minimization
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Regret Minimization

## Definition — verbatim
> "### 6. Regret Minimization" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 86 | defined here | Thinking model evaluating strategic choices by projecting which decision causes the least regret over a 3-year horizon. |

## Consumes
Strategic options, opportunity costs, and multi-year organizational priorities.

## Produces
Opportunity cost evaluations and long-term strategic optionality rankings in decision matrices.

## When applied
Applied during Phase 1 analysis and decision matrix scoring for major technical and sourcing decisions.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift

## Design notes
A strategic decision heuristic in rjm's buy-vs-build framework that frames choices around long-term opportunity cost. By asking which path the organization will regret least in three years, it counteracts short-term tactical optimization, recognizing that profound regret usually stems from missed strategic opportunities rather than manageable project execution stumbles.
