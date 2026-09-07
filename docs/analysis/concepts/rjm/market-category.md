---
package: rjm
name: market category
slug: market-category
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/obviously-awesome.md, sha256: 815282fc06999fe8b3fde92377581c77e9a167bc4e3476ea6bd50f5e7c997656}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# market category

## Definition — verbatim
> "Choose the market category that frames the value. Pick the context that makes your" — .claude/skills/business-strategy/references/obviously-awesome.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/obviously-awesome.md | 47 | defines | Step 5 of Dunford's positioning process picking the strategic market frame that makes product value obvious. |

## Consumes
Unique attributes, delivered customer value, and target buyer segment definitions.

## Produces
Declared market category context establishing buyer price expectations and competitive peer comparisons.

## When applied
Applied after mapping unique attributes to customer value and identifying the target buyer segment.

## Sub-concepts
none

## Part of
positioning

## Implementation status
clean

## Design notes
Market category is the conceptual container that sets customer expectations regarding pricing, features, and direct rivals. In rjm, intentionally declaring a market category allows a company to trigger favorable mental shortcuts in buyers, avoiding categories where their strengths would be discounted or irrelevant.
