---
package: rjm
name: Social Proof
slug: social-proof
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/influence.md, sha256: 75ebcd66c931d69ac38ca458339fe8e57d34e2e63c17ea18459698a8fe648c41}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Social Proof

## Definition — verbatim
> "lead with Social Proof: show peers like them who said yes." — .claude/skills/business-strategy/references/influence.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/influence.md | 11 | defined here | Persuasion trigger recommended when counterparty uncertainty is high, resolving doubt through peer adoption. |

## Consumes
Verifiable case studies, client testimonials, or adoption statistics from relevant peers.

## Produces
Reduction of perceived decision risk by showing comparable actors who have achieved positive outcomes.

## When applied
"If they are uncertain and similar people have already chosen, then lead with Social Proof: show peers like them who said yes." — .claude/skills/business-strategy/references/influence.md:11

## Sub-concepts
none

## Part of
influence, seven-principles

## Implementation status
clean

## Design notes
Social Proof resolves uncertainty in ambiguous decision contexts by highlighting that respected peers have already validated and adopted the proposed path. In rjm, it explicitly cautions that social proof is easily detected when fabricated and mandates using genuine peer evidence only.
