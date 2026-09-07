---
package: matt
name: The two loads
slug: the-two-loads
kind: pattern
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The two loads

## Definition — verbatim
> "The two loads" — skills/productivity/writing-for-agents/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/writing-for-agents.md | 31 | defined here | Section heading introducing context load and cognitive load as dual budgets |
| skills/productivity/writing-for-agents/SKILL.md | 20 | defined here | Section heading defining the fundamental trade-off between context load and cognitive load |

## Consumes
Agent context window capacity and human memory / attention.

## Produces
Architectural decisions on skill description verbosity, progressive disclosure, and user vs. model invocation.

## When applied
Whenever deciding whether to inline documentation, disclose via pointer, or require user invocation.

## Sub-concepts
context-load, cognitive-load

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
The core governing trade-off in matt's prompt architecture balancing context load (tokens and attention consumed in the agent's window every turn) against cognitive load (human effort to remember which skills and docs exist). Document authoring trades one budget against the other depending on task frequency and automation requirements.
