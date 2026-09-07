---
package: rjm
name: leaders
slug: leaders
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

# leaders

## Definition — verbatim
> "Sort features into leaders (drive the purchase, worth a premium), fillers (nice to have, low pull), and killers (erode WTP when bundled in)." — .claude/skills/business-strategy/references/monetizing-innovation.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/monetizing-innovation.md | 23 | defines | Classification category for features that fundamentally drive the purchase decision and command a pricing premium. |

## Consumes
Feature inventory and customer willingness-to-pay interview findings.

## Produces
Identification of high-value anchor capabilities to headline product tiers or premium packaging.

## When applied
Applied when configuring product bundles, tiering structures, or packaging roadmaps based on customer WTP data.

## Sub-concepts
none

## Part of
willingness-to-pay

## Implementation status
clean

## Design notes
Leaders are features that compel customers to purchase and justify a premium price point in the Monetizing Innovation taxonomy. In rjm's strategy framework, isolating leaders ensures marketing and packaging highlight the primary value drivers rather than diluting focus with ancillary capabilities.
