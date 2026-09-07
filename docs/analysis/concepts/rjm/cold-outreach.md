---
package: rjm
name: cold outreach
slug: cold-outreach
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/100m-leads.md, sha256: 6aa8d4a0fca004120b400df8d0dd485b2f7690526e5de73e18f88309521d4fcf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# cold outreach

## Definition — verbatim
> "If you have time but no money and no audience, then run cold outreach (DMs, email, calls). Slow per lead, scales with effort, builds skill." — .claude/skills/business-strategy/references/100m-leads.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/100m-leads.md | 17 | defined here | Decision tree routing action trading founder time and manual effort for direct prospect contact and market feedback. |

## Consumes
Targeted prospect contact lists, direct messaging channels (email, DMs, phone), personalized messaging copy, and founder labor.

## Produces
Direct qualitative market feedback, objection discovery, offer validation, and initial sales pipeline.

## When applied
Applied when a business has neither financial capital nor an existing audience, requiring direct 1-to-1 engagement with strangers.

## Sub-concepts
none

## Part of
core-four

## Implementation status
clean

## Design notes
The 1-to-1 stranger outreach channel within rjm's Core Four lead generation model. While slow per lead and ill-suited for enterprise procurement cycles, cold outreach enables capital-constrained founders to test hooks and offers directly against strangers while developing core sales skills.
