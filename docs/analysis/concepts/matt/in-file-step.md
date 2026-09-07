---
package: matt
name: In-file step
slug: in-file-step
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

# In-file step

## Definition — verbatim
> "1. **In-file step** is the primary tier: what the agent does, in order." — skills/productivity/writing-for-agents/SKILL.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/productivity/writing-for-agents/SKILL.md | 33 | defined here | Top rung of the information hierarchy containing primary sequential agent actions directly within the main document. |

## Consumes
Primary procedural workflow of a skill, command, or process.

## Produces
Clear sequential actions kept in the main file body receiving immediate model attention.

## When applied
When authoring the core sequence of actions an agent must execute during every run.

## Sub-concepts
none

## Part of
information-hierarchy

## Implementation status
clean

## Design notes
Represents the top tier of the information hierarchy ladder. In-file steps receive immediate, unbroken model attention and must remain unburied by auxiliary reference material to ensure process predictability across runs.
