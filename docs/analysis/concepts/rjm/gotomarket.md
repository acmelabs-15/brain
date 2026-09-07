---
package: rjm
name: GoToMarket
slug: gotomarket
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# GoToMarket

## Definition — verbatim
> "jtbd_stages: [Discovery, Validation, Positioning, GoToMarket, Persuasion]" — .claude/skills/business-strategy/SKILL.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 9 | used here | Metadata taxonomy category representing customer acquisition, distribution, and sales operations. |

## Consumes
A validated product offer, differentiated positioning, and established pricing model.

## Produces
Executable customer acquisition funnels, distribution channels, and sales pipeline mechanics.

## When applied
Applied when foundational product-market fit is established and the business requires scalable distribution.

## Sub-concepts
bullseye-channel-selection, spin-selling

## Part of
business-strategy

## Implementation status
defects: missing-path

## Design notes
GoToMarket organizes the operational distribution and revenue-generation frameworks within rjm's business strategy library. It groups methodologies like Traction and SPIN Selling to ensure that commercial distribution is approached with the same engineering rigor and testing discipline as software development.
