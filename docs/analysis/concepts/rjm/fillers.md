---
package: rjm
name: fillers
slug: fillers
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

# fillers

## Definition — verbatim
> "Sort features into leaders (drive the purchase, worth a premium), fillers (nice to have, low pull), and killers (erode WTP when bundled in)." — .claude/skills/business-strategy/references/monetizing-innovation.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/monetizing-innovation.md | 23 | defines | Classification category for features that provide modest supplemental utility but do not trigger purchase on their own. |

## Consumes
Candidate feature list and customer evaluation data.

## Produces
Secondary feature placement across tiers to balance packages without driving up base pricing.

## When applied
Applied during packaging and bundle design when deciding where non-essential capabilities should reside.

## Sub-concepts
none

## Part of
willingness-to-pay

## Implementation status
clean

## Design notes
Fillers represent secondary features that enhance a product bundle but do not independently motivate a customer to buy. In rjm, classifying features as fillers prevents engineering from over-indexing on low-pull improvements and ensures packaging places them where they add perceived completeness.
