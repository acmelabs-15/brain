---
package: rjm
name: Iterative Refinement
slug: iterative-refinement
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

# Iterative Refinement

## Definition — verbatim
> "Techniques where the model critiques and improves its own output across multiple turns." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 44 | defined here | Section heading introducing the taxonomy and principles of iterative self-critique and refinement. |

## Consumes
Initial draft response, task description, and evaluation criteria.

## Produces
Progressively refined and improved responses incorporating feedback across multi-turn passes.

## When applied
When output quality is improvable through multi-turn self-examination and critique rather than single-pass generation.

## Sub-concepts
feedback-prompt-design, refinement-prompt-design, stopping-conditions

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
A core multi-turn prompt engineering pattern in rjm where models critique and improve their own output across multiple turns. By separating critique from revision into distinct conversational steps, the model focuses on diagnosis before modification, preventing the performance degradation typical of single-pass generation.
