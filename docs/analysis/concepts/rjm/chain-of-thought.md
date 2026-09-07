---
package: rjm
name: Chain-of-Thought
slug: chain-of-thought
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

# Chain-of-Thought

## Definition — verbatim
(used, not defined)

> "CoT benefits are task-type dependent. The determining factor: whether correctness requires grounding in external context." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:433

## Also called — verbatim
`CoT` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:433

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 431 | used here | Analyzed comprehensively to define boundaries where intermediate reasoning steps improve vs. degrade accuracy. |

## Consumes
Task inputs, reasoning instructions, and query statements.

## Produces
Articulated intermediate reasoning steps preceding the final output.

## When applied
> "When CoT helps, self-contained reasoning:" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:435

## Sub-concepts
zero-shot-cot, tab-cot

## Part of
none

## Implementation status
clean

## Design notes
Chain-of-Thought (CoT) is the core reasoning technique where an LLM is prompted to articulate step-by-step reasoning before producing an answer. In rjm, it is analyzed through an empirical lens: CoT strongly benefits self-contained computational and arithmetic tasks, but degrades performance on context-grounded tasks (QA over documents, NLI, pattern matching) where verbalization introduces hallucinated rationalizations.
