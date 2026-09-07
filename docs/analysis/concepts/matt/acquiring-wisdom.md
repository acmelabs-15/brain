---
package: matt
name: Acquiring Wisdom
slug: acquiring-wisdom
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/teach/SKILL.md, sha256: a32df9dcdfc0c4fdc1c98e1ed3940c5f56b84c1aa90ff60346f32b8b53915b43}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Acquiring Wisdom

## Definition — verbatim
> "Wisdom comes from true real-world interaction - testing your skills outside the learning environment." — skills/productivity/teach/SKILL.md:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/teach/SKILL.md | 112 | defined here | Section heading outlining the practice of developing real-world wisdom by delegating to external communities. |

## Consumes
Foundational knowledge and skills acquired through previous lessons.

## Produces
Community recommendations and real-world application opportunities.

## When applied
When a user asks questions requiring contextual nuance, practical tradeoffs, or judgment beyond what workspace lessons can provide.

## Sub-concepts
community

## Part of
teach

## Implementation status
defects: doc-drift, other

## Design notes
Acquiring Wisdom represents the boundary where simulated in-workspace instruction yields to external reality. Recognising that models cannot synthesize authentic social or professional feedback, the technique bounds agent teaching by routing questions that demand seasoned judgment to external practitioner communities.
