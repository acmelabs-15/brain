---
package: rjm
name: Distractor-Robust Prompting
slug: distractor-robust-prompting
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

# Distractor-Robust Prompting

## Definition — verbatim
> "make the model robust to distractors through example design and explicit instruction." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:207

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 205 | defined here | Defined as a single-turn alternative to S2A using exemplars with distractors and explicit ignore instructions. |

## Consumes
Input prompts subject to occasional noise or distractor statements.

## Produces
Noise-resilient answers within a single turn without preprocessing token overhead.

## When applied
When input context contains distracting or irrelevant data and token budget constraints prevent multi-call preprocessing filters.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Distractor-Robust Prompting achieves robustness against irrelevant input details within a single prompt turn. By combining few-shot exemplars that demonstrate ignoring irrelevant sentences with an explicit directive ("Feel free to ignore irrelevant information"), it approaches the performance of System 2 Attention without the cost of a preprocessing call.
