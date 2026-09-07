---
package: rjm
name: REFINE
slug: refine
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

# REFINE

## Definition — verbatim
> "named FEEDBACK and REFINE" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 50 | defined here | Defined as the second generative step in the Self-Refine loop, applying critique to generate improved outputs. |

## Consumes
Task description, draft output (y₀), and generated critique feedback (fb₀).

## Produces
An improved output (y₁) that addresses each point raised in the feedback.

## When applied
Executed in Turn 3 of the Self-Refine loop following the generation of actionable feedback.

## Sub-concepts
refinement-prompt-design

## Part of
iterative-refinement

## Implementation status
clean

## Design notes
The generative revision step in the Self-Refine framework. In rjm, REFINE takes the previous candidate output and the actionable feedback generated in the prior turn to produce an improved response, retaining iteration history to prevent repeating past mistakes.
