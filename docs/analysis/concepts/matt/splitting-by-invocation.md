---
package: matt
name: Splitting by invocation
slug: splitting-by-invocation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Splitting by invocation

## Definition — verbatim
> "split off a model-invoked skill when you have a distinct leading word that should trigger it on its own (a trigger word you actually use in your prompts), or another skill must reach it. You pay context load for the new always-loaded description, so that independent reach has to be worth it." — skills/productivity/writing-for-agents/SKILL-MECHANICS.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 16 | defined here | Architectural rule governing when to separate a model-invoked skill based on independent trigger words or external reach. |

## Consumes
A candidate skill with distinct operational triggers or multi-skill dependencies.

## Produces
Decision to partition instructions into a separate model-invoked skill file with its own always-loaded description.

## When applied
When deciding whether to split an agent document based on independent prompt trigger words or autonomous inter-skill reach.

## Sub-concepts
none

## Part of
skill-mechanics

## Implementation status
clean

## Design notes
Balances autonomous agent reach against permanent context window overhead. Because each model-invoked skill demands always-loaded description tokens, splitting by invocation requires justifying that token cost through a distinct prompt trigger word or cross-skill invocation need.
