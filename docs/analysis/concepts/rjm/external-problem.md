---
package: rjm
name: external problem
slug: external-problem
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/storybrand.md, sha256: 77d4aad5404196cbf960a0fbf9858eaba544794ebd675fc4130afe2a77f2e038}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# external problem

## Definition — verbatim
> "the external problem (the tangible obstacle)" — .claude/skills/business-strategy/references/storybrand.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/storybrand.md | 22 | defined here | First problem layer in StoryBrand capturing the physical, tangible impediment faced by the user. |

## Consumes
Observation of user workflow bottlenecks and operational failure modes.

## Produces
Concrete definition of the tangible impediment blocking the customer from achieving their goal.

## When applied
Defined in Step 2 (Has a problem) of narrative structure creation.

## Sub-concepts
none

## Part of
storybrand-messaging

## Implementation status
clean

## Design notes
The external problem identifies the visible, operational hurdle that the customer is trying to overcome. In rjm's narrative structure, articulating the external problem grounds the message in practical reality, providing the essential vehicle through which internal emotional frustration is unlocked.
