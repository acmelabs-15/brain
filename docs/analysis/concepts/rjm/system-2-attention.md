---
package: rjm
name: System 2 Attention
slug: system-2-attention
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

# System 2 Attention

## Definition — verbatim
> "S2A leverages the ability of LLMs to reason in natural language and follow instructions in order to decide what to attend to." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:182

## Also called — verbatim
> "#### System 2 Attention (S2A): Preprocessing Filter" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:180

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 180 | defined here | Defined as an attention control mechanism utilizing a preprocessing filtering call to isolate objective context. |

## Consumes
Input prompts and context passages containing irrelevant opinions or distractors.

## Produces
Filtered unbiased context and grounded question query.

## When applied
When attending to raw input risks absorbing subjective opinions, spurious correlations, or contextual distractors.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
System 2 Attention replaces standard soft attention with an explicit filtering step that regenerates context to contain only relevant, unbiased facts. Forcing the model to reason solely over this purged context prevents user biases from swaying answers on factual tasks.
