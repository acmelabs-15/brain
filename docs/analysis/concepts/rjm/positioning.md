---
package: rjm
name: Positioning
slug: positioning
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/business-strategy/references/obviously-awesome.md, sha256: 815282fc06999fe8b3fde92377581c77e9a167bc4e3476ea6bd50f5e7c997656}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Positioning

## Definition — verbatim
> "Positioning is the context you set so a buyer understands what your product is, who" — .claude/skills/business-strategy/references/obviously-awesome.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/obviously-awesome.md | 3 | defines | Foundational definition establishing positioning as the context framing product purpose, target buyer, and competitive advantage. |
| .claude/skills/business-strategy/SKILL.md | 9 | used here | Explicitly designated as one of five core JTBD lifecycle stages in the business-strategy skill metadata. |

## Consumes
Competitive alternatives, unique product attributes, and target buyer segment definition.

## Produces
Positioning statement, category selection, and differentiated value proposition framing.

## When applied
Applied when the team cannot describe who the product is for, or when prospects say 'interesting' but fail to convert.

## Sub-concepts
competitive-alternatives, unique-attributes, market-category

## Part of
business-strategy

## Implementation status
clean in .claude/skills/business-strategy/references/obviously-awesome.md; defects: missing-path in .claude/skills/business-strategy/SKILL.md

## Design notes
Positioning is both a formal lifecycle stage in rjm's business strategy framework and a core discipline derived from April Dunford's Obviously Awesome. It establishes the reference context that allows prospective buyers to immediately comprehend what a product is, who it is for, and why it beats prevailing alternatives, preventing good engineering from being perceived as confusing or overpriced.
