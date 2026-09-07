---
package: rjm
name: Influence
slug: influence
kind: reference
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/business-strategy/references/influence.md, sha256: 75ebcd66c931d69ac38ca458339fe8e57d34e2e63c17ea18459698a8fe648c41}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Influence

## Definition — verbatim
> "# Influence" — .claude/skills/business-strategy/references/influence.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/influence.md | 1 | defined here | Reference guide codifying Robert Cialdini's seven persuasion principles into ethical decision trees for business asks. |
| .claude/skills/business-strategy/SKILL.md | 127 | used here | Listed in the business-strategy framework catalog for persuasion principles. |

## Consumes
A specific business ask, designated recipient, relationship context, and verifiable proof assets.

## Produces
Strategically structured communication leveraging an honest persuasion trigger aligned with the relationship state.

## When applied
"Reach for this when you have a specific ask (a yes, a signature, a referral, a hire, a purchase) and the other side is undecided or leaning away." — .claude/skills/business-strategy/references/influence.md:5

## Sub-concepts
reciprocity, commitment, social-proof, liking, authority, scarcity, unity, seven-principles, define-the-ask, leave-the-exit-open

## Part of
business-strategy

## Implementation status
defects: missing-path

## Design notes
Influence operationalizes Robert Cialdini's seminal persuasion research into an ethical, structured protocol for business communication. Within rjm, it provides decision trees that match relationship context to appropriate psychological principles, preventing agents and founders from deploying counter-productive manipulative stacking.
