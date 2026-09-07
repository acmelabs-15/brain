---
package: rjm
name: TCO Calculator
slug: tco-calculator
kind: artifact
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

# TCO Calculator

## Definition — verbatim
> "**TCO Calculator**" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 131 | defined here | Automation script concept calculating Net Present Value, Internal Rate of Return, and break-even timelines. |

## Consumes
Cost assumptions, development estimates, licensing fees, maintenance rates, and discount rates.

## Produces
Quantitative financial comparisons (NPV, IRR, break-even years) across build, buy, and partner options.

## When applied
Executed during Phase 2 (Analyze) of buy-vs-build evaluation to ground sourcing decisions in rigorous economics.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift

## Design notes
The conceptual automation component in rjm responsible for multi-year total cost of ownership modeling. Implemented via calculate_tco.py, it transforms subjective cost debates into quantitative net present value and break-even analyses across build, buy, and partnership paths.
