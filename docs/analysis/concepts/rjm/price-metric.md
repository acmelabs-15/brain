---
package: rjm
name: price metric
slug: price-metric
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/monetizing-innovation.md, sha256: 79ad63f1ddd7e541184342dffb6214a1e38eab6391234a384bb43b710602b269}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# price metric

## Definition — verbatim
> "Choose the pricing model and price metric. Decide how you charge (per seat, per usage, flat subscription, freemium, outcome-based)" — .claude/skills/business-strategy/references/monetizing-innovation.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/monetizing-innovation.md | 24 | defines | The specific quantitative unit or consumption gauge across which product charges scale. |

## Consumes
Value delivery analysis, usage patterns, and customer accounting preferences.

## Produces
Selected unit of billing (e.g., active user, gigabyte processed, transaction completed, API call).

## When applied
Applied when configuring monetization architecture to ensure the billing unit grows in tandem with customer perceived value.

## Sub-concepts
none

## Part of
pricing-model

## Implementation status
clean

## Design notes
Price metric is the operational unit of charging in Monetizing Innovation. Choosing the correct price metric ensures that fees track directly with the customer's realized business value, preventing misalignments where customers feel penalized for expanding their product adoption.
