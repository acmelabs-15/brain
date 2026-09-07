---
package: rjm
name: SUCCESs framework
slug: success-framework
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/made-to-stick.md, sha256: 5de46c0e87278655616732e8a810a2cbbc642565c3fcd3a9a3c7a43e89177cdd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SUCCESs framework

## Definition — verbatim
> "The SUCCESs framework. Six attributes of a sticky idea." — .claude/skills/business-strategy/references/made-to-stick.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/made-to-stick.md | 33 | defines | Core framework establishing six traits of sticky communication (Simple, Unexpected, Concrete, Credible, Emotional, Stories). |

## Consumes
Core message, target audience profile, identified audience understanding gap.

## Produces
Sticky messaging formulation, prioritized communication attributes (2-3 selected traits), scored idea assessment.

## When applied
When user onboarding, strategic pitches, or design documentation are clear but fail to be remembered, retold, or acted upon.

## Sub-concepts
simple, unexpected, concrete, credible, emotional, story, curse-of-knowledge, challenge-plot, connection-plot, creativity-plot

## Part of
business-strategy

## Implementation status
clean

## Design notes
The SUCCESs framework provides an engineering checklist for communication stickiness derived from Chip and Dan Heath's Made to Stick. Within rjm's business strategy skill, it treats idea memorability as an engineering problem rather than innate talent, preventing message evaporation during user onboarding, sales pitches, and strategic documentation.
