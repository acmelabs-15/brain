---
package: rjm
name: non-customers
slug: non-customers
kind: role
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/blue-ocean-strategy.md, sha256: 9f5a1527f097649ba4c0e23d32a8df724e8df7a4e5acc0cc7d406de94a1d3740}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# non-customers

## Definition — verbatim
> "Find the non-customers: people who use a substitute, refuse the category, or were never targeted." — .claude/skills/business-strategy/references/blue-ocean-strategy.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/blue-ocean-strategy.md | 24 | defined here | Directs discovery toward three tiers of non-buyers whose objections and workarounds reveal overlooked value. |

## Consumes
Market boundaries, substitute products, and refusal reasons from non-buyers.

## Produces
Discovery insights into category blind spots and unserved needs that form the basis of a new value proposition.

## When applied
Step 2 of the Blue Ocean framework when investigating why buyers avoid, substitute, or ignore the current market category.

## Sub-concepts
none

## Part of
blue-ocean-strategy

## Implementation status
clean

## Design notes
A stakeholder discovery role in rjm's business strategy library. Instead of focusing narrowly on existing customers who reinforce standard industry assumptions, studying non-customers unlocks latent demand by revealing why buyers reject or substitute away from the current offering.
