---
package: matt
name: steps
slug: steps
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# steps

## Definition — verbatim
> "A document is built from two content types: **steps** (the ordered actions the agent performs) and **reference** (definitions, rules, facts consulted on demand)." — skills/productivity/writing-for-agents/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL.md | 31 | defined here | Foundational agent content type representing ordered sequential actions performed during execution. |

## Consumes
Procedural requirements, operational protocols, and ordered action sequences.

## Produces
Ordered execution sequences in agent skills, commands, or documentation.

## When applied
Whenever structuring procedural instructions requiring ordered execution by an agent.

## Sub-concepts
in-file-step, completion-criterion

## Part of
information-hierarchy

## Implementation status
clean

## Design notes
One of two primary content primitives in agent document design (alongside reference). Steps prescribe sequential agent behavior and must be protected from premature completion through clear bounds and progressive disclosure of non-immediate material.
