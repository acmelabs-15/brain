---
package: rjm
name: pricing model
slug: pricing-model
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/monetizing-innovation.md, sha256: 79ad63f1ddd7e541184342dffb6214a1e38eab6391234a384bb43b710602b269}
  - {path: .claude/skills/buy-vs-build-framework/scripts/score_vendor.py, sha256: 061027f393d2466c4024469e1804be4c726a1aa7e66475037f83ae4fd8eee157}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# pricing model

## Definition — verbatim
> "Choose the pricing model and price metric. Decide how you charge (per seat, per usage, flat subscription, freemium, outcome-based)" — .claude/skills/business-strategy/references/monetizing-innovation.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/monetizing-innovation.md | 24 | defines | Framework step defining how an organization charges (subscription, usage, tiered, freemium, or outcome-based). |
| .claude/skills/buy-vs-build-framework/scripts/score_vendor.py | 108 | defines | Vendor evaluation scoring routine evaluating pricing transparency, predictability, and model alignment. |

## Consumes
Customer willingness-to-pay research, cost-of-goods-sold analysis, and vendor pricing data.

## Produces
Selected commercial charging architecture (e.g., seat subscription, consumption, tiered flat-rate) or vendor pricing score.

## When applied
Applied when establishing commercial strategy before product launch or evaluating third-party vendor commercial terms.

## Sub-concepts
price-metric

## Part of
business-strategy

## Implementation status
clean in .claude/skills/business-strategy/references/monetizing-innovation.md; defects: doc-drift in .claude/skills/buy-vs-build-framework/scripts/score_vendor.py

## Design notes
Pricing model governs the commercial structure through which value is monetized in rjm. It establishes how charging occurs (per seat, per usage, flat subscription, freemium, or outcome-based) to ensure pricing scales naturally with the value delivered to the buyer, and serves as an evaluation axis when assessing commercial software vendors.
