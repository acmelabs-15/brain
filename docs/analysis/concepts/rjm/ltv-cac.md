---
package: rjm
name: LTV/CAC
slug: ltv-cac
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

# LTV/CAC

## Definition — verbatim
(used, not defined)

> "price for perceived value; a margin or LTV/CAC framework may say the higher" — .claude/skills/business-strategy/references/100m-offers.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/100m-offers.md | 94 | used here | Cited in framework conflict resolution as a unit-economic guardrail that bounds price increases to maintain viable acquisition volume. |

## Consumes
Customer Lifetime Value (LTV) data and Customer Acquisition Cost (CAC) metrics.

## Produces
Economic feasibility threshold determining whether customer acquisition economics support business growth.

## When applied
Applied when balancing premium pricing strategies against market demand elasticity and customer acquisition sustainability.

## Sub-concepts
none

## Part of
business-strategy

## Implementation status
clean

## Design notes
A fundamental financial ratio technique within rjm's business strategy references. Comparing Lifetime Value to Customer Acquisition Cost ensures that aggressive value-based pricing does not suppress customer volume below economic viability, providing an empirical check on pure offer design enthusiasm.
