---
package: rjm
name: "Skin in the Game"
slug: skin-in-the-game
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

# Skin in the Game

## Definition — verbatim
> "### 9. Skin in the Game" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 105 | defined here | Governance model requiring that decision-makers bear consequences and be explicitly recorded in ADRs. |

## Consumes
Decision owner identity, stakeholder commitments, and post-implementation success criteria.

## Produces
Identified accountability mapping in architectural decision records and verifiable outcome review metrics.

## When applied
Applied during architectural decision drafting and ADR finalization to ensure personal accountability for outcomes.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift

## Design notes
A governance heuristic ensuring that those who recommend or decide architectural directions bear long-term operational consequences. In rjm's buy-vs-build workflow, tracking decision-maker identity and measuring subsequent system performance ensures proposals are grounded in realistic operational commitments rather than detached theorizing.
