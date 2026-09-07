---
package: rjm
name: The Soft Attention Trap
slug: the-soft-attention-trap
kind: pattern
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

# The Soft Attention Trap

## Definition — verbatim
> "Including both filtered and original context when using S2A-style filtering." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1616

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1614 | defined here | Defined as an anti-pattern in context filtering where providing both filtered and unfiltered context allows attention leakage. |

## Consumes
Filtered context presented alongside raw, distracting, or biased source context.

## Produces
Attention leakage and bias incorporation despite explicit filtering instructions.

## When applied
> "The filtering must be _exclusive_: remove the original entirely." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1625

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The Soft Attention Trap occurs when an agent attempts to implement System 2 Attention (S2A) or context sanitation by including both the original and filtered context in the prompt and asking the model to look only at the filtered text. As proven by Weston & Sukhbaatar (2023), soft attention mechanisms still incorporate the biased or irrelevant original tokens; filtering must completely remove the contaminated context.
