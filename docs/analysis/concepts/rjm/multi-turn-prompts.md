---
package: rjm
name: multi-turn prompts
slug: multi-turn-prompts
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# multi-turn prompts

## Definition — verbatim
> "All techniques target **multi-turn prompts**, structured sequences of messages where output from one turn becomes input to subsequent turns." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 3 | defined here | Defines multi-turn prompts as structured message sequences where output from one turn becomes input to subsequent turns for iterative self-examination. |

## Consumes
Multi-step task requirements requiring deliberate self-examination, critique, verification, or multi-candidate synthesis.

## Produces
Sequenced conversational turns with isolated cognitive objectives and accumulated conversational context.

## When applied
Applied when complex generation, refinement, verification, or aggregation tasks benefit from breaking reasoning across message boundaries.

## Sub-concepts
self-refine, cove, universal-self-consistency, multi-chain-reasoning

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
Multi-turn prompts represent an architectural pattern in prompt engineering that structures model interaction across discrete conversational turns. By feeding the output of one turn into subsequent turns, it enables deliberate self-examination, critiques, and verification, exploiting the separation of cognitive concerns to achieve higher quality than single-turn prompts.
