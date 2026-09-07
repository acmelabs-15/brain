---
package: rjm
name: "Tiered Depth Analysis"
slug: tiered-depth-analysis
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

# Tiered Depth Analysis

## Definition — verbatim
> "## Tiered Depth Analysis" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:157

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 157 | defined here | Architectural rubric dividing analysis effort into Quick, Standard, and Deep tiers based on cost and impact. |

## Consumes
Estimated project financial budget, strategic criticality, and technical reversibility.

## Produces
Assignment of an evaluation depth tier (Tier 1 Quick, Tier 2 Standard, or Tier 3 Deep) bounding analysis duration.

## When applied
Invoked in Phase 0 of the buy-vs-build workflow before initiating detailed technical or financial analysis.

## Sub-concepts
tier-1-quick, tier-2-standard, tier-3-deep

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift

## Design notes
A governance sizing technique in rjm that prevents analysis paralysis on low-stakes decisions while ensuring rigorous vetting for major commitments. By sizing analytical overhead directly to decision budget, strategic importance, and reversibility, it balances engineering velocity against governance rigor.
