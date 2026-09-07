---
package: rjm
name: FEEDBACK
slug: feedback
kind: technique
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

# FEEDBACK

## Definition — verbatim
> "named FEEDBACK and REFINE" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 50 | defined here | Defined as the first generative step in the Self-Refine loop, isolating critique from rewriting. |

## Consumes
Task description, user prompt, and initial candidate output (y₀).

## Produces
Actionable and specific feedback (fb₀) identifying concrete phrases to alter and explaining why.

## When applied
Executed in Turn 2 of the Self-Refine loop immediately following initial generation.

## Sub-concepts
feedback-prompt-design

## Part of
iterative-refinement

## Implementation status
clean

## Design notes
The diagnostic critique step of the Self-Refine framework in rjm prompt engineering. It requires the model to identify specific phrases and formulate concrete actions for improvement without attempting to rewrite the output in the same turn, ensuring focused and actionable evaluation.
