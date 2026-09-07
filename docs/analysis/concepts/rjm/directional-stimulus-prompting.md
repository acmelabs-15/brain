---
package: rjm
name: Directional Stimulus Prompting
slug: directional-stimulus-prompting
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Directional Stimulus Prompting

## Definition — verbatim
> "We introduce Directional Stimulus Prompting, a new framework for guiding black-box frozen large language models (LLMs) toward desired outputs." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:983

## Also called — verbatim
`Hint-Based Guidance` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:977

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 977 | defined here | Defined as a prompting technique providing explicit keywords or hints to steer model output toward desired aspects. |

## Consumes
Task instruction and directional keywords or stimulus hints.

## Produces
Guided LLM generations aligned with specified target concepts.

## When applied
> "When you know what aspects the output should emphasize, provide explicit hints rather than relying on the model to infer importance." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:979

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Directional Stimulus Prompting injects specific hints, focus points, or keywords directly into the prompt to guide output generation without fine-tuning model weights. Grounded in research by Li et al. (2023), it improves alignment and quality on open-ended generation and summarization tasks.
