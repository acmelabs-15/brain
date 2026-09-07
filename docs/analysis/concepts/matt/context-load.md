---
package: matt
name: Context load
slug: context-load
kind: pattern
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context load

## Definition — verbatim
> "**Context load** is the cost of always-loaded material on the agent's window: an `AGENTS.md` line, a skill description, anything sitting in context every turn, spending tokens and attention whether or not it fires." — skills/productivity/writing-for-agents/SKILL.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 19 | defined here | Defines context load as the cost of always-loaded material occupying the agent's context window each turn. |
| external/writing-for-agents.md | 34 | defined here | Explains the resource cost imposed on the context window by persistent instructions. |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 9 | used here | Analyzes permanent context load tradeoffs when configuring model-invoked skill descriptions. |
| skills/productivity/writing-for-agents/SKILL.md | 24 | defined here | Defines context load as the attention and token cost incurred every turn by persistent material. |

## Consumes
Instructions, skill descriptions, or configurations placed into persistent context.

## Produces
Consumption of context window tokens and model attention.

## When applied
Evaluated when deciding whether to place material in persistent context or behind progressive disclosure pointers.

## Sub-concepts
none

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
One of two core budgeting constraints in Matt's prompt design framework (paired with cognitive load). Because every token in persistent context depletes attention capacity on every single turn, authoring decisions must rigorously justify always-loaded text against progressive disclosure alternatives.
