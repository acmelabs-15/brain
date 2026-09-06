---
package: matt
name: invocation
slug: invocation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# invocation

## Definition — verbatim
> "The one axis that splits them is **invocation**, who can reach it:" — .agents/invocation.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 3 | defined here | Defines invocation as the primary axis splitting skills into user-invoked and model-invoked categories. |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 5 | defined here | Section heading analyzing the architectural tradeoffs of invocation choice between context load and cognitive load. |

## Consumes
A skill or tool definition across agent harnesses.

## Produces
Classification into model-reachable autonomous tools or user-reachable slash-commands.

## When applied
When designing or packaging a new skill to establish who has triggering authority.

## Sub-concepts
model-invoked, user-invoked

## Part of
none

## Implementation status
clean

## Design notes
Invocation is the core governance axis in matt's architecture defining accessibility and triggering authority for agent skills. By controlling who can reach a skill—autonomous model discovery versus explicit human typing—the system balances agent autonomy against runaway context cost and unexpected side effects.
