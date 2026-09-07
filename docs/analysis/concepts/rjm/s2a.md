---
package: rjm
name: S2A
slug: s2a
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

# S2A

## Definition — verbatim
> "S2A regenerates the input context to only include the relevant portions, before attending to the regenerated context to elicit the final response." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:182

## Also called — verbatim
> "#### System 2 Attention (S2A): Preprocessing Filter" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:180

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 180 | defined here | Defined as a preprocessing filter technique regenerating context to remove irrelevant or opinionated text. |

## Consumes
Raw context contaminated with subjective opinions, distractors, or misleading framing.

## Produces
Regenerated, unbiased context text and subsequent clean answer generated exclusively from that context.

## When applied
When input context contains heavy opinion contamination or irrelevant bias that degrades response objectivity.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
S2A (System 2 Attention) executes hard attention filtering via a separate preprocessing pass. By regenerating input context to purge biased or irrelevant text prior to answering, it eliminates soft-attention leakage and significantly improves factual accuracy.
