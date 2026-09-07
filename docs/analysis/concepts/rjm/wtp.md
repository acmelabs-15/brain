---
package: rjm
name: WTP
slug: wtp
kind: technique
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

# WTP

## Definition — verbatim
> "If you have not asked customers about willingness-to-pay (WTP) yet, then stop feature work and run WTP interviews first." — .claude/skills/business-strategy/references/monetizing-innovation.md:11

## Also called — verbatim
`willingness-to-pay` — .claude/skills/business-strategy/references/monetizing-innovation.md:11

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/monetizing-innovation.md | 11 | defines | Common abbreviation for willingness-to-pay used across pricing rules, feature sorting, and interview guidelines. |

## Consumes
Customer discovery discussions and problem valuation queries.

## Produces
Quantitative price ceilings, value thresholds, and packaging boundaries.

## When applied
Applied when assessing customer price elasticity and determining pricing thresholds across product tiers.

## Sub-concepts
none

## Part of
willingness-to-pay

## Implementation status
clean

## Design notes
WTP is the standard abbreviation for willingness-to-pay in rjm's strategy documentation. It is used throughout feature bundling, segmentation, and decision trees to emphasize that commercial viability must be proven before committing engineering resources to build.
