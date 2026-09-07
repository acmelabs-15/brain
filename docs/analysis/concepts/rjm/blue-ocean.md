---
package: rjm
name: blue ocean
slug: blue-ocean
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/blue-ocean-strategy.md, sha256: 9f5a1527f097649ba4c0e23d32a8df724e8df7a4e5acc0cc7d406de94a1d3740}
  - {path: .claude/skills/business-strategy/references/lean-startup.md, sha256: 2dced9a8a71a571271b621d0be2e74299d328252264c6f3cd9f9f81ffa7c91bd}
  - {path: .claude/skills/business-strategy/references/obviously-awesome.md, sha256: 815282fc06999fe8b3fde92377581c77e9a167bc4e3476ea6bd50f5e7c997656}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# blue ocean

## Definition — verbatim
> "create a new market with little competition (a blue ocean), and how to design the move so the new space is hard to copy." — .claude/skills/business-strategy/references/blue-ocean-strategy.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/blue-ocean-strategy.md | 3 | defined here | Core definition contrasting creating uncontested market space against fighting for share in known red oceans. |
| .claude/skills/business-strategy/references/lean-startup.md | 96 | used here | Contrasts category-creation discovery against fast iterative MVP validation when early customer signals are weak. |
| .claude/skills/business-strategy/references/obviously-awesome.md | 98 | used here | Contrasts inventing an uncontested market space against positioning within an existing, understood market category. |

## Consumes
Industry competitive criteria, non-customer insights, and alternative industry trade-offs.

## Produces
Strategy canvas, four actions matrix, divergent value curve, and uncontested market space.

## When applied
Applied when deciding whether to fight for share in a known market or establish a new market space with little competition.

## Sub-concepts
strategy-canvas, four-actions, value-curve, value-innovation, non-customers

## Part of
blue-ocean-strategy

## Implementation status
clean

## Design notes
A market space pattern in rjm derived from Kim and Mauborgne's strategy framework. It represents an uncontested arena where competition is rendered irrelevant through value innovation—simultaneously lowering costs and increasing buyer value. In rjm, it guides founders away from crowded red ocean rivalry toward fundamentally redefined market boundaries.
