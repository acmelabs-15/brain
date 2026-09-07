---
package: rjm
name: lead-to-sale rate
slug: lead-to-sale-rate
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

# lead-to-sale rate

## Definition — verbatim
> "- [ ] You know your cost per lead and lead-to-sale rate per channel (2 pts)" — .claude/skills/business-strategy/references/100m-leads.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/100m-leads.md | 41 | defined here | Scored checklist criterion evaluating conversion tracking from initial lead capture through closed commercial transaction. |

## Consumes
Captured lead counts and finalized customer sales figures categorized by acquisition channel.

## Produces
Funnel conversion percentage identifying the downstream closing efficiency of each lead source.

## When applied
Applied when analyzing conversion funnels to isolate whether growth bottlenecks lie in lead qualification or sales closing.

## Sub-concepts
none

## Part of
100m-leads

## Implementation status
clean

## Design notes
A conversion metric and diagnostic technique in rjm's business strategy library. Tracking the lead-to-sale rate allows operators to distinguish high-volume low-quality traffic from lower-volume high-converting channels, pinpointing whether offer revisions or sales training are required.
