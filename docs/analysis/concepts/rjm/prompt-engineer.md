---
package: rjm
name: prompt-engineer
slug: prompt-engineer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# prompt-engineer

## Definition — verbatim
(used, not defined)

> "| [prompt-engineer](../prompt-engineer/SKILL.md) | Authors prompts; does not audit emitted prose |" — .claude/skills/prose-self-check/SKILL.md:269

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 269 | used here | Listed in the related skills table as authoring prompts rather than auditing emitted prose. |

## Consumes
Agent specifications, prompt design guidelines, task requirements.

## Produces
Optimized system prompts, agent persona definitions, and skill prompt templates.

## When applied
When designing or revising agent system prompts, skill instructions, or persona behaviors.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A specialized development role in rjm tasked with authoring and refining prompt instructions and agent behaviors, distinguished from runtime prose quality auditing tools.
