---
package: matt
name: operative
slug: operative
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/invocation.md, sha256: 41f2f02a15d9c93818c209c4320184ceab75aa45bce6c93a8df7f27935ec3cbb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# operative

## Definition — verbatim
> "This is about **operative** instructions: a skill's own steps telling the agent to go run another skill right now." — .agents/invocation.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/invocation.md | 18 | defined here | Defines operative instructions as actionable steps telling the agent to run another skill immediately. |

## Consumes
Actionable execution steps within an executing skill.

## Produces
Direct, programmatic invocation of sub-skills via explicit Skill tool calls.

## When applied
When an executing skill requires another skill to be loaded and run immediately.

## Sub-concepts
none

## Part of
invocation

## Implementation status
clean

## Design notes
Distinguishes direct runtime instructions that immediately invoke an auxiliary skill from descriptive router prose that merely lists skills as options for a human user. Operative instructions require explicit Skill tool calls.
