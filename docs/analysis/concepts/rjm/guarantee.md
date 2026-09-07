---
package: rjm
name: guarantee
slug: guarantee
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/100m-offers.md, sha256: fde6a6a0e100b4c276fa3e6fc64fee0911f7e1c4c6eab33e7a7e1c0705ad9052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# guarantee

## Definition — verbatim
> "guarantee that removes the risk of saying yes." — .claude/skills/business-strategy/references/100m-offers.md:24

## Also called — verbatim
`risk-reversal guarantee` — .claude/skills/business-strategy/references/100m-offers.md:68

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/100m-offers.md | 24 | defined here | Decision tree mechanism prescribed to eliminate buyer hesitation by shifting performance risk from customer to seller. |

## Consumes
High confidence in operational delivery capabilities, clear customer qualification standards, and defined terms of redress.

## Produces
Risk reversal for the buyer, removal of friction on purchase decisions, and improved sales closing rates.

## When applied
Applied when prospective customers acknowledge product value but hesitate due to perceived financial or outcome risk.

## Sub-concepts
risk-reversal-guarantee

## Part of
four-amplifiers

## Implementation status
clean

## Design notes
A risk-transfer technique in rjm's offer framework that removes the downside of purchasing for prospective buyers. By guaranteeing specific outcomes or satisfaction, the vendor demonstrates accountability and removes friction, provided strong customer qualification is enforced to prevent abuse.
