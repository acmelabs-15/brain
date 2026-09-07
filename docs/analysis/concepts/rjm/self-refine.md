---
package: rjm
name: Self-Refine
slug: self-refine
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

# Self-Refine

## Definition — verbatim
> "Per Madaan et al. (2023), SELF-REFINE is "an iterative self-refinement algorithm that alternates between two generative steps", named FEEDBACK and REFINE." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:50

## Also called — verbatim
`SELF-REFINE` — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:50

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 15 | defined here | Summarized in the technique selection guide as an iterative refinement framework yielding 5-40% improvement. |
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 50 | defined here | Detailed as an iterative framework alternating between feedback and refinement generative steps to improve outputs. |

## Consumes
Initial generated output, task definition, and feedback prompts with concrete quality evaluation criteria.

## Produces
Iteratively refined output addressing specific actionable critique, alongside accumulated iteration history.

## When applied
Applied when output quality can be improved through iteration across tasks such as code optimization, readability, mathematical reasoning, or constrained generation.

## Sub-concepts
none

## Part of
prompt-engineer, multi-turn-prompts

## Implementation status
clean

## Design notes
Self-Refine is a multi-turn iterative refinement technique where a model critiques and improves its own outputs over successive turns. By separating critique (FEEDBACK) from revision (REFINE) and accumulating iteration history, it achieves significant performance gains across complex code, math, and text generation tasks.
